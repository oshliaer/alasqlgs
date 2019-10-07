const gulp = require('gulp');
const del = require('del');
const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');

/**
 * Cleaner the build's folder
 */
function clean() {
  return del(['build/*']);
}

/**
 * Template engine. Converts and delivers to build
 */
function substitution() {
  return gulp
    .src(['src/loader'], { allowEmpty: true })
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(rename({ suffix: '.js' }))
    .pipe(gulp.dest('build'));
}

/**
 * Copy pure assets to build
 */
function assets() {
  return gulp.src(['src/*.{json,js}']).pipe(gulp.dest('build'));
}

/**
 * Gulp's task asserts
 */
gulp.task('asserts', assets);

/**
 * Gulp's task clean
 */
gulp.task('clean', clean);

/**
 * Gulp's task build
 */
gulp.task('build', gulp.series(clean, gulp.parallel(substitution, assets)));
