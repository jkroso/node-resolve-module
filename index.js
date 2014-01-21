
var Module = require('module')

module.exports = resolve

/**
 * a more useful require.resolve()
 *
 * @param {String} base
 * @param {String} name
 * @return {String}
 */

function resolve(base, name){
  return Module._resolveFilename(name, {
    paths: Module._nodeModulePaths(base)
  })
}
