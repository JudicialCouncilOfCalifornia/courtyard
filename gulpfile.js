// Based on https://github.com/SFDigitalServices/sfgov-pattern-lab/blob/master/gulpfile.babel.js

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const config = require("./config.json");

// Include plugins.
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefix = require("gulp-autoprefixer");
const glob = require("gulp-sass-glob");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const mqpacker = require("css-mqpacker");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const { exec } = require("child_process");

const pkg = require("./node_modules/uswds/package.json");
const uswds = require("./node_modules/uswds-gulp/config/uswds");

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

const copyUswdsJs = () => {
  return gulp.src(`${uswds}/js/**/**`).pipe(gulp.dest(config.js.public_js));
};

const copyPlStyles = () => {
  return gulp.src(config.css.styleguide_src).pipe(gulp.dest(config.css.styleguide_public_folder));
};

const plCss = () => {
  const plugins = [
    // Pack media queries
    mqpacker({ sort: true })
  ];
  return gulp
    .src(config.css.src)
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
          config.css.project_scss
          // "${uswds}/scss",
          // "${uswds}/scss/packages",
        ]
        // importer: importOnce
      })
    )
    .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
    .pipe(autoprefix("last 2 versions", "> 1%", "ie 9", "ie 10"))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(config.css.public_folder))
    .pipe(browserSync.reload({ stream: true, match: "**/*.css" }));
};

// Component JS.
// -------------------------------------------------------------------- //
// the following task concatenates all the javascript files inside the
// _patterns folder, if new patterns need to be added the config.json array
// needs to be edited to watch for more folders.

const plJs = () => {
  return gulp
    .src(config.js.src)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"]
      })
    )
    .pipe(concat("components.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./public/js"))
    .pipe(browserSync.reload({ stream: true, match: "**/*.js" }));
};

const watch = cb => {
  gulp.watch(config.css.src, plCss);
  gulp.watch(config.js.src, plJs);
  gulp.watch(config.pattern_lab.src, build);
  gulp.watch(config.css.styleguide_src, copyPlStyles);
};

const serve = cb => {
  browserSync.init({
    server: "public",
    callbacks: {
      ready: (err, bs) => {
        cb();
      }
    }
  });
};

const build = gulp.series(plPhp, copyUswdsFonts, copyUswdsJs, plCss, plJs);

exports.build = build;
exports.default = gulp.series(build, serve, watch);
