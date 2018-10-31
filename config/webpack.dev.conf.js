const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode:"development",
  entry: {
    tests: 'mocha-loader!./test/unit/index.js',
    demo: './src/demo.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': resolve('src')
    }
  },
  output: {
    path: path.resolve(__dirname, '/test/unit'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|vue\/dist/,
      loader: 'babel-loader'
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          js: 'babel-loader!eslint-loader'
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'vue-style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: false
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    // new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ])
    new VueLoaderPlugin()
  ],
  devtool: '#eval-source-map'
}
