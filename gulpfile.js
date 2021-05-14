const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass');
const del = require('del');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function styles() {
  return src(
    'app/scss/style.scss'
  )
    .pipe(scss({ outputStyle: 'expand' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src(
    'app/js/*.js'
  )
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest('app/jses5'));
};

function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(dest('dist/images'))
}


function build() {
  return src([
    'app/*.html',
    'app/css/style.css',
    'app/js/main.js',
  ], { base: 'app' })
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
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, browsersync, watching, images);