// webpack.config.js
// const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    /* eslint-disable quote-props, key-spacing */
    'combine':              './combine/index.js',
    'compose':              './compose/index.js',
    'compose/map':          './compose/map.js',
    'console/log':          './console/log.js',
    'either':               './either/index.js',
    'frozenArray':          './frozenArray/index.js',
    'future':               './future/index.js',
    'id':                   './id/index.js',
    'map':                  './map/index.js',
    'maybe':                './maybe/index.js',
    'number/parse':         './number/parse.js',
    'object/assign':        './object/assign/index.js',
    'safe':                 './safe/index.js',
    'string/concat':        './string/concat.js',
    'string/endsWith':      './string/endsWith.js',
    'string/includes':      './string/includes.js',
    'string/indexOf':       './string/indexOf.js',
    'string/lastIndexOf':   './string/lastIndexOf.js',
    'string/parse':         './string/parse.js',
    'string/split':         './string/split.js',
    'string/toUpperCase':   './string/toUpperCase.js',
    'string/trim':          './string/trim.js',
    /* eslint-enable quote-props, key-spacing */
  },
  output: {
    path: path.join(__dirname, '/package'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
  ],
}
