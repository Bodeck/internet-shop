const path = require('path');

module.exports = env => {
  console.log(env);
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
          use: ['babel-loader']
        }
      ]
    }
  }
};