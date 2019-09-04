let gulp = require('gulp');
// Initialize browser sync.
let browserSync = require('browser-sync').create();

// Read the default configuration.
let config = require('./config.json');

// Include plugins.
let sass = require('gulp-sass');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');
let autoprefix = require('gulp-autoprefixer');
let glob = require('gulp-sass-glob');
let sourcemaps = require('gulp-sourcemaps');
let concat = require('gulp-concat');
let babel = require('gulp-babel');
let shell = require('gulp-shell');

let importOnce = require('node-sass-import-once');

// Error Handler
// -------------------------------------------------------------- //
let errorHandler = (error) => {
    notify.onError({
        title: 'Task Failed [' + error.plugin + ']',
        message: 'Error: <%= error.message %>',
        sound: 'Beep'
    })(error);
    // Log error to console, unless that's already happening. Sass lint provides
    // good error handling/feedback in the terminal, so in this case we only want
    // the OS X notification w/sound.
    if (error.plugin !== 'gulp-sass') {
        console.log(error.toString());
    }
    // Prevent Gulp watch from stopping.
    this.emit('end');
};

// Pattern Lab CSS.
// -------------------------------------------------------------- //
gulp.task('pl:css', () => {
    return gulp.src(config.css.src)
        .pipe(glob())
        .pipe(plumber({
            errorHandler: function (error) {
                notify.onError({
                    title: "Gulp",
                    subtitle: "Failure!",
                    message: "Error: <%= error.message %>",
                    sound: "Beep"
                })(error);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true,
            includePaths: config.css.includePaths,
            importer: importOnce
        }))
        .pipe(autoprefix('last 2 versions', '> 1%', 'ie 9', 'ie 10'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.css.public_folder));
});

// Component JS.
// -------------------------------------------------------------------- //
// the following task concatenates all the javascript files inside the
// _patterns folder, if new patterns need to be added the config.json array
// needs to be edited to watch for more folders.

gulp.task('pl:js', () => {
    return gulp.src(config.js.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat("components.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/js'))
});

// Watch task.
// ------------------------------------------------------------------- //

gulp.task('watch', () => {
    gulp.watch(config.css.src, gulp.series('pl:css'));
    gulp.watch(config.js.src, gulp.series('pl:js'));
    gulp.watch(config.pattern_lab.src, gulp.series('generate:pl'));
});


// Generate pl with PHP.
// -------------------------------------------------------------------- //
gulp.task('pl:php', shell.task('php core/console --generate'));

// generate Pattern library.
gulp.task('generate:pl', gulp.series('pl:php', 'pl:css', 'pl:js'));

// Static Server + Watch.
// ------------------------------------------------------------------- //

gulp.task('serve', gulp.series('watch', 'generate:pl', () => {
    browserSync.init({
        serveStatic: ['./public']
    });
}));

// Default Task
// --------------------------------------------------------------------- //

gulp.task('default', gulp.series('serve'));
