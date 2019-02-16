const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './components/Recommends.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    // path: __dirname + '/public',
    path: path.resolve(__dirname, 'public'),
    chunkFilename: '[name].recommends.js',
    filename: '[name].recommends.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  }
};
