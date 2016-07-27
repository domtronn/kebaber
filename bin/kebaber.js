#!/usr/bin/env node

var _ = require('lodash')
var path = require('path')
var program = require('commander')

var styleFuncMap = {
  kebab: _.kebabCase,
  camel: _.camelCase,
  snake: _.snakeCase,
  lower: _.lowerCase,
  upper: _.upperCase
}

program
  .version('1.0.0')
  .usage('[options] <paths ...>')
  .option('-s, --style <style>', 'Case styling, i.e., kebab, camel')
  .parse(process.argv)

var style = program.style || 'kebab'
var styles = _.keys(styleFuncMap)
var styleFunc = styleFuncMap[style]

if (!styleFunc) {

  console.error(
    '[error] Style \'' + program.style + '\' does not match any of [' + styles + ']'
  )

}

var dirs = program.args.map((dir) => path.resolve(process.cwd(), dir))

require('../lib/kebab').call({}, { dirs, style: styleFunc })
