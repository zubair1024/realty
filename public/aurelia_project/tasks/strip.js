import gulp from 'gulp';
import stripDebug from 'gulp-strip-debug';
import stripComments from 'gulp-strip-comments';

export default function Strip() {
  gulp
    .src('./scripts/*.js')
    .pipe(stripDebug())
    .pipe(stripComments())
    .pipe(gulp.dest('./scripts/'));
}
