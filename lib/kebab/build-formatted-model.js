var path = require('path')

module.exports = function (options) {

  var formatFiles = require('./format-file-names').call({}, options.style)
  var formatTerms = require('./format-terms').call({}, options.style)

  return function (dir, files) {

    var scripts = files.filter((file) => /\.jsx?$/.test(file))
    var configs = files.filter((file) => file.endsWith('.json'))

    var renamedScripts = scripts.map(file => formatTerms(dir, path.extname(file), file))
    var renamedConfigs = configs.map(formatTerms(dir, '.json'))

    var renamedFiles = files.map(formatFiles(dir))
    var terms = renamedScripts
        .concat(renamedConfigs)
        .reduce((acc, el) => acc.concat(el), [])

    return {terms, files: renamedFiles}

  }

}
