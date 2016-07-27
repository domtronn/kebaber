var _ = require('lodash')

var Path = require('path')

module.exports = _.curry(function (styleFunc, root, file) {

  var path = Path.parse(file)
  var dirs = path.dir
      .replace(new RegExp('^' + root), '')
      .split('/')
      .map(styleFunc)

  return [
    file,
    root + dirs.join('/') + '/' + styleFunc(path.name) + path.ext
  ]

})
