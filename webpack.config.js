const path = require('path');

module.exports = env => {
  console.log(env);
  console.log(path.resolve(__dirname, 'dist'));
  return {
    mode: env,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './dist'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    }
  }
};