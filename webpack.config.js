var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/vue-carousel.vue",
    output: {
        path: "./bulid",
        publicPath: "/static/",
        filename: "vue-carousel.js",
        library: ["vueCarousel"],
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            { test: /\.(png|jpe?g|gif|svg|swf|eot|ttf|woff)(\?.*)?$/, loader: 'url?limit=50000' },
            { test: /\.vue$/, loader: 'vue'},
            { test: /\.js$/, loader: "babel", exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: 'style!css!sass'},
        ]
    },
    vue: {
        loaders: {
            scss: 'style!css!sass',
            postcss: [ autoprefixer({ browsers: [
                'ie >= 8',
                'ie_mob >= 10',
                'ff >= 26',
                'chrome >= 30',
                'safari >= 6',
                'opera >= 23',
                'ios >= 5',
                'android >= 2.3',
                'bb >= 10'
            ] }) ]
        }
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.output.path = "./dist";
    module.exports.output.filename = "vue-carousel.min.js";
        module.exports.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                compress: {
                    warnings: false
                }
            })
        ];
} else {
    module.exports.devtool = '#source-map'
}