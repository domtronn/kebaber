module.exports = function (options) {

  var formatFiles = require('./format-file-names').call({}, options.style)
  var formatTerms = require('./format-require-terms').call({}, options.style)

  return function (dir, files) {

    var scripts = files.filter((file) => file.endsWith('.js'))
    var configs = files.filter((file) => file.endsWith('.json'))

    var renamedScripts = scripts.map(formatTerms(dir, '.js'))
    var renamedConfigs = configs.map(formatTerms(dir, '.json'))

    var renamedFiles = files.map(formatFiles(dir))
    var terms = renamedScripts
        .concat(renamedConfigs)
        .reduce((acc, el) => acc.concat(el), [])

    return {terms, files: renamedFiles}

  }

}
