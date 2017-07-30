import gulp from 'gulp';
import cssmin from 'gulp-cssmin';
import concat from 'gulp-concat';

export default function minifyCSS() {
  gulp
    .src([
      'vendors/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
      'vendors/animate.css/animate.min.css',
      'vendors/select2/dist/css/select2.min.css',
      'vendors/nouislider/distribute/nouislider.min.css',
      'css/app_1.css',
      'css/app_2.css'
    ])
    .pipe(concat('main.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./css/'));
}
