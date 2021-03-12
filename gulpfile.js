// Based on https://github.com/SFDigitalServices/sfgov-pattern-lab/blob/master/gulpfile.babel.js

const devBuild = process.title == "gulp";
const gulp = require("gulp");
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

const pkg = require("./node_modules/uswds/package.json");
const uswds = require("./node_modules/uswds-gulp/config/uswds");
const jsSrc = config.js.src;
jsSrc.unshift(`${uswds}/js/uswds.js`);

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

// Use the Pattern Lab PHP command to generate the pattern library
const plPhp = () => {
  return exec("php core/console --generate");
};

const copyUswdsFonts = () => {
  return gulp.src(`${uswds}/fonts/**/*`).pipe(gulp.dest(config.fonts.public_fonts));
};

const copyUswdsImages = () => {
  return gulp.src(`${uswds}/img/**/*`).pipe(gulp.dest(config.images.public_images));
};

// const copyPlStyles = () => {
//   return gulp.src(config.css.styleguide_src).pipe(gulp.dest(config.css.styleguide_public_folder));
// };

const copyIconSprite = () => {
  return gulp.src(config.icons.sprite_src).pipe(gulp.dest(config.icons.sprite_dest));
};

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

  return css
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(destination))
    .pipe(browserSync.reload({ stream: true, match: "**/*.css" }));
};

const plCss = () => {
  return buildCss(config.css.src, config.css.project_scss, config.css.public_folder);
};

const styleguideCss = () => {
  return buildCss(config.css.styleguide_src, [], config.css.styleguide_public_folder);
};

// Component JS.
// -------------------------------------------------------------------- //
// the following task concatenates all the javascript files inside the
// _patterns folder, if new patterns need to be added the config.json array
// needs to be edited to watch for more folders.

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
  return buildJs(jsSrc, config.js.dest, "scripts");
};

const styleguideJs = () => {
  return buildJs(config.js.styleguide_src, config.js.styleguide_dest, "styleguide");
};

// -------------------------------------------------------------------- //

const watch = (cb) => {
  gulp.watch(config.css.src, plCss);
  gulp.watch(config.js.src, plJs);
  gulp.watch(config.pattern_lab.src, build);
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

const build = gulp.series(
  plPhp,
  copyUswdsFonts,
  copyUswdsImages,
  copyIconSprite,
  plCss,
  plJs,
  styleguideCss,
  styleguideJs
);

exports.build = build;
exports.default = gulp.series(build, serve, watch);
