const path = require('path');

module.exports = {
  entry: './src/',
  output: {
    path: path.join(__dirname, '/public/lib'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}