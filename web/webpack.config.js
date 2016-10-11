module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query:
        {
          presets: ['react','es2015','stage-0'],
          plugins:['transform-decorators-legacy'],
        }
      },
       {test: /\.css$/,loader: 'style-loader!css-loader'},
       {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
    ]
  }
}
