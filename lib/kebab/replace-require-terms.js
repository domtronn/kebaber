var _ = require('lodash')
var replace = require('replace')

module.exports = _.curry(function (dirs, replacement) {

  var from = replacement[0]
  var to = replacement[1]

  replace({
    regex: `(re[qw]u?ire\\('.*\\/)${from}([\.'/])`,
    replacement: `$1${to}$2`,
    paths: dirs,
    recursive: true
  })

})
