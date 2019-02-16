const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './index.js',
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
    path: path.resolve(__dirname, 'public'),
    filename: 'app.js'
  }
};
