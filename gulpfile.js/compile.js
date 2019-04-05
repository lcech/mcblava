const { src, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function compile(cb) {
  return src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('all.js', {newLine: '\r\n\r\n'}))
    .pipe(dest('build'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('.', { sourceRoot: '/' }))
    .pipe(dest('build'));
}

module.exports = compile;