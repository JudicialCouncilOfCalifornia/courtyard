const gulp = require("gulp");
// Initialize browser sync.
const browserSync = require("browser-sync").create();

// Read the default configuration.
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
const shell = require("gulp-shell");
const mqpacker = require("css-mqpacker");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

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

// USWDS FONTS.
// -------------------------------------------------------------- //
gulp.task("copy-uswds-fonts", () => {
  return gulp.src(`${uswds}/fonts/**/*`).pipe(gulp.dest(config.fonts.public_fonts));
});

// USWDS JS.
// -------------------------------------------------------------- //
gulp.task("copy-uswds-js", () => {
  return gulp.src(`${uswds}/js/**/**`).pipe(gulp.dest(config.js.public_js));
});

// Styleguide CSS.
// -------------------------------------------------------------- //
gulp.task("copy-pl-styles", () => {
  return gulp.src(config.css.styleguide_src).pipe(gulp.dest(config.css.styleguide_public_folder));
});

// Pattern Lab CSS.
// -------------------------------------------------------------- //
gulp.task("pl:css", () => {
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
    .pipe(gulp.dest(config.css.public_folder));
});

// Component JS.
// -------------------------------------------------------------------- //
// the following task concatenates all the javascript files inside the
// _patterns folder, if new patterns need to be added the config.json array
// needs to be edited to watch for more folders.

gulp.task("pl:js", () => {
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
    .pipe(gulp.dest("./public/js"));
});

// Watch task.
// ------------------------------------------------------------------- //
gulp.task("watch", () => {
  gulp.watch(config.css.src, gulp.series("pl:css"));
  gulp.watch(config.js.src, gulp.series("pl:js"));
  gulp.watch(config.pattern_lab.src, gulp.series("generate:pl"));
  gulp.watch(config.css.styleguide_src, gulp.series("copy-pl-styles"));
});

// Generate pl with PHP.
// -------------------------------------------------------------------- //
gulp.task("pl:php", shell.task("php core/console --generate"));

// Generate Pattern library.
gulp.task(
  "generate:pl",
  gulp.series("pl:php", "copy-uswds-fonts", "copy-uswds-js", "pl:css", "pl:js")
);

// Static Server + Watch.
// ------------------------------------------------------------------- //

gulp.task(
  "serve",
  gulp.series("watch", "generate:pl", () => {
    browserSync.init({
      serveStatic: ["./public"]
    });
  })
);

// Default Task
// --------------------------------------------------------------------- //

gulp.task("default", gulp.series("serve"));
