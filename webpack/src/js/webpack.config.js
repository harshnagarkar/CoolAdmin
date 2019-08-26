var path =  require("path");

module.exports = {
    entry: '/webpack/src/jquery-3.2.1.min.js',
    output: {
        path  : path.resolve(__dirname, 'webpack/dist'),
        filename: 'bundle.js',
        publicPath: '/webpack/dist'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                user: [
                    'style-loader',
                    'css-loader'
                ]

            }
        ]
    },
    plugins: [
        new webpack.optimizer.UglifyJsPlugin({
            //..
        })
    ]
};