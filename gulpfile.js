const { src, dest, watch, parallel } = require('gulp');
const scss = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    },
    notify: false
  })
}

function styles() {
  return src(
      'app/scss/style.scss'
    )
    .pipe(scss({outputStyle: 'expand'}))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src(
    'app/js/*.js'
  )
  .pipe(babel({
    presets: ["@babel/preset-env"]
  }))
  .pipe(dest('dist/js'));
};

function images() {
  return src(
      'app/images/**/*'
      )
    .pipe(dest('dist/images'));
}

function html() {
  return src(
    'app/**/*.html',
  )
  .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.html - html;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;

exports.default = parallel(styles, scripts, html, browsersync, watching, images);