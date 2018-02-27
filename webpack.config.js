var webpack = require('webpack')
var Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  // devtool: 'eval-source-map',
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    //publicPath: '',
    path: 'public',
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new Visualizer(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
        {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy'],
        }
      },

      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ]
  }
}
