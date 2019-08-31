var path =  require("path");
var webpack = require('webpack');
module.exports = {
    entry: [
        '/app.js',
        // '/webpack/src/js/jquery-3.2.1.min.js',
        // '/webpack/src/js/bootstrap-4.1/popper.min.js',
        // '/webpack/src/js/bootstrap-4.1/bootstrap.min.js',
        // '/webpack/src/js/slick/slick.min.js',
        // '/webpack/src/js/wow/wow.min.js',
        // '/webpack/src/js/animsition/animsition.min.js',
        // '/webpack/src/js/bootstrap-progressbar/bootstrap-progressbar.min.js',
        // '/webpack/src/js/jquery.waypoints.min.js',
        // '/webpack/src/js/jquery.counterup.min.js',
        // '/webpack/src/js/circle-progress/circle-progress.min.js',
        // '/webpack/src/js/perfect-scrollbar/perfect-scrollbar.js',
        // '/webpack/src/js/chartjs/Chart.bundle.min.js',
        // '/webpack/src/js/select2/select2.min.js'

    ],
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
            

        })
    ]
};