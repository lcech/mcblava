const fs = require('fs');
const { src, dest } = require('gulp');
const GulpSSH = require('gulp-ssh');
const config = require('../config');

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
});

function deploy(cb) {
  return src('build/**/*.*')
    .pipe(gulpSSH.dest('/home/mcblava/public_html/js/'));
}

module.exports = deploy;