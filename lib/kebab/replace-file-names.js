var fs = require('fs')
var path = require('path')

module.exports = function (replacement) {

  var from = replacement[0]
  var to = replacement[1]

  var dir = path.dirname(to)

  fs.mkdir(dir, () => {

    fs.rename(from, to, (err) => {

      if (err) return console.log(`[rename] ERROR: Could not rename '${from}' to '${to}'`)
      console.log(`[rename] Renaming '${from}' to '${to}'`)

    })

  })

}
