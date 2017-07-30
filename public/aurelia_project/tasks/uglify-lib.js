import gulp from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

export default function processUglifyLib() {
  return gulp
    .src([
      'js/page-loader.js',
      'js/parallax/parallax.min.js',
      'vendors/jquery/dist/jquery.min.js',
      'vendors/bootstrap/dist/js/bootstrap.min.js',
      'js/app.min.js'
    ])
    .pipe(concat('lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./scripts/'));
}
