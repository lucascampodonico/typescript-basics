const path = require('path');
     
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
}