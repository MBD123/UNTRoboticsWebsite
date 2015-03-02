// include gulp
var gulp = require('gulp');
// include plugins
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src('theme/*.css')
    .pipe(concat('theme.css'))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  return gulp.src('script.js')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('**/*.css', ['css']);
  gulp.watch('**/*.js', ['js']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);