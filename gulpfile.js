// Based on https://github.com/SFDigitalServices/sfgov-pattern-lab/blob/master/gulpfile.babel.js

const devBuild = process.title == "gulp";
const gulp = require("gulp");
const path = require("path");
const browserSync = require("browser-sync").create();
const config = require("./config.json");

// Include plugins.
const autoprefix = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const glob = require("gulp-sass-glob");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack-stream");
const compiler = require("webpack");
const uglify = require("gulp-uglify");
const { exec } = require("child_process");
const csso = require("gulp-csso");
const strip = require("gulp-strip-comments");
const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const cheerio = require("gulp-cheerio");

const pkg = require("./node_modules/uswds/package.json");
const uswds = "./node_modules/uswds/dist";

// Error Handler
// -------------------------------------------------------------- //
const errorHandler = (error) => {
  notify.onError({
    title: "Task Failed [" + error.plugin + "]",
    message: "Error: <%= error.message %>",
    sound: "Beep",
  })(error);
  // Log error to console, unless that's already happening. Sass lint provides
  // good error handling/feedback in the terminal, so in this case we only want
  // the OS X notification w/sound.
  if (error.plugin !== "gulp-sass") {
    console.log(error.toString());
  }
  // Prevent Gulp watch from stopping.
  this.emit("end");
};

// -------------------------------------------------------------------- //

// Use the Pattern Lab PHP command to generate the pattern library
const plPhp = () => {
  return exec("php core/console --generate");
};

const copyUswdsJs = () => {
  return gulp.src(`${uswds}/js/**/*`).pipe(gulp.dest(config.js.dest));
};

const copyUswdsFonts = () => {
  return gulp.src(`${uswds}/fonts/**/*`).pipe(gulp.dest(config.fonts.public_fonts));
};

const copyUswdsImages = () => {
  return gulp.src(`${uswds}/img/**/*`).pipe(gulp.dest(config.images.public_images));
};

// -------------------------------------------------------------------- //

const buildIcons = () => {
  return gulp
    .src(config.icons.src)
    .pipe(plumber({ errorHandler: errorHandler }))
    .pipe(
      svgmin({
        plugins: [
          {
            removeViewBox: false,
          },
        ],
      })
    )
    .pipe(
      rename(function (file) {
        let name = ["icon"];
        name = name.concat(file.dirname.split(path.sep));
        name.push(file.basename.replace(" ", "-").toLowerCase());
        file.basename = name.join("-");
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          // Wrap inner html of each svg with a group.
          const $svg = $("svg");
          $svg.html("<g>" + $svg.html() + "</g>");
          // Transfer svg attribute to group.
          $("svg > g").attr("fill", $svg.attr("fill"));
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename(config.icons.dest_name))
    .pipe(
      rename(function (path) {
        path.dirname = "";
        return path;
      })
    )
    .pipe(gulp.dest(config.icons.dest));
};

// -------------------------------------------------------------------- //

const buildCss = (source, includes, destination) => {
  let css = gulp
    .src(source)
    .pipe(glob())
    .pipe(
      plumber({
        errorHandler: function (error) {
          notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep",
          })(error);
          this.emit("end");
        },
      })
    )
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        outputStyle: "expanded",
        errLogToConsole: true,
        includePaths: includes, // pulling all the sass and converts to css
      }).on("error", sass.logError)
    )
    .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
    .pipe(autoprefix())
    .pipe(strip.text());

  if (!devBuild) {
    css.pipe(csso());
  }

  return css.pipe(sourcemaps.write("./")).pipe(gulp.dest(destination)).pipe(browserSync.stream());
};

const plCss = () => {
  return buildCss(config.css.src, config.css.project_scss, config.css.public_folder);
};

const styleguideCss = () => {
  return buildCss(config.css.styleguide_src, [], config.css.styleguide_public_folder);
};

// -------------------------------------------------------------------- //

const buildJs = (src, destPath, destName) => {
  return gulp
    .src(src)
    .pipe(
      webpack(
        {
          devtool: "eval-source-map",
          mode: "development",
          plugins: [
            new compiler.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery",
              "window.jQuery": "jquery",
            }),
          ],
          output: {
            filename: destName + ".js",
          },
        },
        compiler
      )
    )
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulp.dest(destPath))
    .pipe(strip())
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(rename(destName + ".min.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(destPath))
    .pipe(browserSync.reload({ stream: true, match: "**/*.js" }));
};

const plJs = () => {
  return buildJs(config.js.src, config.js.dest, "scripts");
};

const styleguideJs = () => {
  return buildJs(config.js.styleguide_src, config.js.styleguide_dest, "styleguide");
};

// -------------------------------------------------------------------- //

const watch = (cb) => {
  gulp.watch(config.css.src, plCss);
  gulp.watch(config.js.src, plJs);
  gulp.watch(config.pattern_lab.src, partialBuild);
  gulp.watch(config.icons.src, buildIcons);
  gulp.watch(config.css.styleguide_src, styleguideCss);
  gulp.watch(config.js.styleguide_src, styleguideJs);
};

const serve = (cb) => {
  browserSync.init({
    server: "public",
    callbacks: {
      ready: (err, bs) => {
        cb();
      },
    },
    reloadDebounce: 200,
    ghostMode: false,
  });
};

const fullBuild = gulp.series(
  plPhp,
  copyUswdsJs,
  copyUswdsFonts,
  copyUswdsImages,
  buildIcons,
  plCss,
  plJs,
  styleguideCss,
  styleguideJs
);

const partialBuild = gulp.series(
  plPhp,
  copyUswdsJs,
  copyUswdsFonts,
  copyUswdsImages,
  buildIcons,
  plCss,
  plJs
);

exports.build = fullBuild;
exports.default = gulp.series(fullBuild, serve, watch);
