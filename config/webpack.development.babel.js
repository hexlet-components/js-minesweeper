import path from 'path';
import config from './webpack.base.babel';

export default {
  ...config,
  output: {
    library: 'HexletMinesweeper',
    path: path.join(__dirname, '..', 'assets'),
    filename: 'hexlet-minesweeper.js',
    // publicPath: '/assets/',
  },
  devtool: '#cheap-module-eval-source-map',
};
