import gulp from 'gulp';
// import uglify from 'gulp-uglify';
import uglifyjs from 'uglify-js-harmony';
import minifier from 'gulp-uglify/minifier';
import concat from 'gulp-concat';

export default function processUglifyUtil() {
  return gulp
    .src(['./js/config.js'])
    .pipe(concat('util.min.js'))
    .pipe(minifier({}, uglifyjs))
    .pipe(gulp.dest('./scripts/'));
}
