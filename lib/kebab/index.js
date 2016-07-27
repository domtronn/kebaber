var Q = require('q')
var _ = require('lodash')

var read = require('recursive-readdir')

module.exports = function (options) {

  var buildModel = require('./build-formatted-model').call({}, options)

  var replaceTerms = require('./replace-require-terms').call({}, options.dirs)
  var replaceFiles = require('./replace-file-names')

  var dirs = options.dirs

  Q.all(dirs.map((dir) => Q.nfcall(read, dir)))
    .then((fileArray) => {

      return fileArray
        .map((files, i) => buildModel(dirs[i], files))
        .reduce((acc, el) => ({
          terms: acc.terms.concat(el.terms),
          files: acc.files.concat(el.files)
        }), {terms: [], files: []})

    })
    .then((renamed) => ({

      terms: _.uniqWith(renamed.terms, _.isEqual),
      files: _.uniqWith(renamed.files, _.isEqual)

    }))
    .then((renamed) => {

      renamed.terms.map(replaceTerms)
      renamed.files.map(replaceFiles)

    })

}
