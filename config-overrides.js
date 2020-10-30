const path = require('path')

module.exports = function override(config, env) {
  const alias = {
    base: path.resolve(process.cwd(), 'src', 'packages', 'base'),
  }
  config.resolve.alias = alias
  return config
}
