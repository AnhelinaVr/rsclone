const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlPluginRemove = require("html-webpack-plugin-remove");
const isProduction = process.env.NODE_ENV !== "production";

const PATHS = {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../dist"),
    assets: "assets"
};

// Base Webpack config
module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app: PATHS.src,
    },
    output: {
        filename: `./js/[name].[hash].js`,
        path: PATHS.dist
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: isProduction ? [/node_modules/, /\.smart-gread-layer$/] : /node_modules/,
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'assets/fonts',
                    name: "[name].[ext]",
                    publicPath: '../assets/fonts',
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'assets/images',
                    name: "[name].[ext]",
                    publicPath: '../assets/images',
                }
            }, {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    }, {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: { path: "./postcss.config.js" } }
                    }, {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    }, {
                        loader: "postcss-loader",
                        options: { sourceMap: true, config: { path: "./postcss.config.js" } }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "~": PATHS.src,
            vue$: "vue/dist/vue.js"
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}/[name].[hash].css`,
        }),
        new HtmlWebpackPlugin({
            // hash: false,
            inject: true,
            template: `${PATHS.src}/index.html`,
            filename: "./index.html"
        }),
        new HtmlPluginRemove(/<!--deletestart-->[\s\S]*<!--deleteend-->/gi),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/${PATHS.assets}/fonts`, to: `${PATHS.assets}/fonts` },
            { from: `${PATHS.src}/${PATHS.assets}/images`, to: `${PATHS.assets}/images` },
            { from: `${PATHS.src}/${PATHS.assets}/icons`, to: `${PATHS.assets}/icons` },
            { from: `${PATHS.src}/${PATHS.assets}/sounds`, to: `${PATHS.assets}/sounds` }
        ])
    ],
};