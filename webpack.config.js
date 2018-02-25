var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    //publicPath: '',
    path: 'public',
  },

  // plugins: process.env.NODE_ENV === 'production' ? [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin()
  // ] : [],

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
