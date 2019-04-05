const { watch, series } = require('gulp');
const clean = require('./clean');
const compile = require('./compile');
const deploy = require('./deploy');

const defaultTasks = series(clean, compile, deploy);

module.exports = {
  compile,
  deploy,
  default: defaultTasks,
  watch: watch('src/*.js', defaultTasks)
};