const del = require('del');

module.exports = (cb) => {
  (async () => {
    const deletedPaths = await del(['build/*.*']);

    console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
    cb();
  })();
};