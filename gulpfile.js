// Based on https://github.com/SFDigitalServices/sfgov-pattern-lab/blob/master/gulpfile.babel.js

const devBuild = process.title == "gulp";
const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const config = require("./config.json");

// Include plugins.
const autoprefix = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const glob = require("gulp-sass-glob");
const mqpacker = require("css-mqpacker");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const through = require("through2");
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
const errorHandler = error => {
  notify.onError({
    title: "Task Failed [" + error.plugin + "]",
    message: "Error: <%= error.message %>",
    sound: "Beep"
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

const copyPlStyles = () => {
  return gulp.src(config.css.styleguide_src).pipe(gulp.dest(config.css.styleguide_public_folder));
};

const copyIconSprite = () => {
  return gulp.src(config.icons.sprite_src).pipe(gulp.dest(config.icons.sprite_dest));
};

const buildCss = (paths, minFileName) => {
  const plugins = [
    // Pack media queries
    mqpacker({ sort: true })
  ];

  let css = gulp
    .src(paths)
    .pipe(glob())
    .pipe(
      plumber({
        errorHandler: function(error) {
          notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%= error.message %>",
            sound: "Beep"
          })(error);
          this.emit("end");
        }
      })
    )
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        outputStyle: "expanded",
        errLogToConsole: true,
        includePaths: [
          config.css.project_scss // pulling all the sass and converts to css
          // "${uswds}/scss",
          // "${uswds}/scss/packages",
        ]
        // importer: importOnce
      })
    )
    .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
    .pipe(autoprefix("last 2 versions", "> 1%", "ie 9", "ie 10"))
    .pipe(postcss(plugins))
    .pipe(strip.text())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.css.public_folder)) //writing source map
    .pipe(rename(`${minFileName}.min.css`));

  if (!devBuild) {
    css.pipe(csso());
  }

  return css
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.css.public_folder)) //
    .pipe(browserSync.reload({ stream: true, match: "**/*.css" }));
};

const srlCss = () => {
  return buildCss(config.css.srl, "styles-srl");
};

const trialCss = () => {
  return buildCss(config.css.trial, "styles-trial");
};

const allCss = () => {
  return buildCss(config.css.srlTrial, "styles-all");
};

// Component JS.
// -------------------------------------------------------------------- //
// the following task concatenates all the javascript files inside the
// _patterns folder, if new patterns need to be added the config.json array
// needs to be edited to watch for more folders.

const plJs = () => {
  return gulp
    .src(jsSrc)
    .pipe(
      webpack(
        {
          devtool: "eval-source-map",
          mode: "development",
          plugins: [
            new compiler.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery",
              "window.jQuery": "jquery"
            })
          ],
          output: {
            filename: "scripts.js"
          }
        },
        compiler
      )
    )
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulp.dest(config.js.dest))
    .pipe(strip())
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(rename("scripts.min.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({ stream: true, match: "**/*.js" }));
};

const watch = cb => {
  gulp.watch(config.css.srlTrial, allCss);
  gulp.watch(config.js.src, plJs);
  gulp.watch(config.pattern_lab.src, dev);
  gulp.watch(config.css.styleguide_src, copyPlStyles);
};

const trialwatch = cb => {
  gulp.watch(config.css.trial, trialCss);
  gulp.watch(config.js.src, plJs);
  gulp.watch(config.pattern_lab.src, trialbuild);
  gulp.watch(config.css.styleguide_src, copyPlStyles);
};

const srlwatch = cb => {
  gulp.watch(config.css.srl, srlCss);
  gulp.watch(config.js.src, plJs);
  gulp.watch(config.pattern_lab.src, srlbuild);
  gulp.watch(config.css.styleguide_src, copyPlStyles);
};

const serve = cb => {
  browserSync.init({
    server: "public",
    callbacks: {
      ready: (err, bs) => {
        cb();
      }
    },
    reloadDebounce: 200
  });
};

const build = gulp.series(
  plPhp,
  copyUswdsFonts,
  copyUswdsImages,
  copyIconSprite,
  srlCss,
  trialCss,
  plJs
);
const srlbuild = gulp.series(plPhp, copyUswdsFonts, copyUswdsImages, copyIconSprite, srlCss, plJs);
const trialbuild = gulp.series(
  plPhp,
  copyUswdsFonts,
  copyUswdsImages,
  copyIconSprite,
  trialCss,
  plJs
);

const dev = gulp.series(plPhp, copyUswdsFonts, copyUswdsImages, copyIconSprite, allCss, plJs);
exports.build = build;
exports.trial = gulp.series(trialbuild, serve, trialwatch);
exports.srl = gulp.series(srlbuild, serve, srlwatch);
exports.default = gulp.series(dev, serve, watch);
