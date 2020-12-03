const path = require('path');
const { PROJECT_NAME } = require('../constant');

module.exports = {
  entry: {
    app: path.resolve(PROJECT_NAME, '../../src/index.ts'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(PROJECT_NAME, '../../dist'),
  },
};
