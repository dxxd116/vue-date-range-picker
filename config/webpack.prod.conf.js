const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const commonConfig = {
  mode: 'development',
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      vue: 'vue/dist/vue.js',
      '@': resolve('src')
    }
  },
  output: {
    path: resolve('dist/')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules|vue\/dist/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
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
  externals: {
    vue: 'vue'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new VueLoaderPlugin()
  ],
  optimization:{
    minimize: true
  }
}
module.exports = [
  merge(commonConfig, {
    entry: resolve('src/index.js'),
    output: {
      filename: 'vue-rangedate-picker.min.js',
      libraryTarget: 'window',
      library: 'VueRangedatePicker'
    }
  }),
  merge(commonConfig, {
    entry: resolve('src/RangedatePicker.vue'),
    output: {
      filename: 'vue-rangedate-picker.js',
      libraryTarget: 'umd',
      library: 'vue-rangedate-picker',
      umdNamedDefine: true
    }
  })
]
