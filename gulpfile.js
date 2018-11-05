var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');

function clean() {
  return del(['build/*']);
}

function concatenation() {
  return gulp.src(['alasql/dist/alasql.js', 'src/load.gs'], { allowEmpty: true })
    .pipe(concat('alasqlgs.js'))
    .pipe(gulp.dest('build'));
}

gulp.task("clean", clean);

gulp.task('build', gulp.series(clean, gulp.parallel(concatenation)));
