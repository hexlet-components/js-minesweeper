import config from './webpack.base.babel';

export default {
  ...config,
  output: {
    filename: 'dist/hexlet-minesweeper.min.js',
  },
};
