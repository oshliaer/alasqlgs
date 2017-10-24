var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var gapps = require('node-google-apps-script');

gulp.task('default', ['build'], function (cb) {
  gapps.upload();
});

//
gulp.task('clean', function () {
  del([
    'build/*'
  ]);
});

gulp.task('build', ['clean'], function () {
  return gulp.src(['alasql/dist/alasql.js', 'src/load.gs'])
    .pipe(concat('alasqlgs.gs'))
    .pipe(gulp.dest('build'));
});
