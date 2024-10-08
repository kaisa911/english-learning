const path = require('path');

module.exports = {
  entry: './data/vocab.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vocab.[contenthash].js',
    library: {
      name: 'vocab',
      type: 'umd',
    },
  },
  mode: 'production',
  optimization: {
    minimize: true, // 启用压缩
  },
};
