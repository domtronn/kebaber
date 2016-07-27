var _ = require('lodash')

module.exports = _.curry(function (styleFunc, root, extension, file) {

  return file
    .replace(new RegExp(extension + '$'), '')
    .replace(new RegExp('^' + root), '')
    .split('/')
    .map((el) => [el, styleFunc(el)])
    .filter((el) => el[0] !== el[1])

})
