var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include')

function clean() {
  return del(['build/*']);
}

function concatenation() {
  return gulp.src(['src/load.gs'], { allowEmpty: true })
    // .pipe(concat('alasqlgs.js'))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('build'));
}

function asserts() {
  return gulp.src(['src/appsscript.json']).pipe(gulp.dest('build'));
}

gulp.task("clean", clean);

gulp.task('build', gulp.series(clean, gulp.parallel(concatenation, asserts)));
