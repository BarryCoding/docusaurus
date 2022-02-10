---
sidebar_position: 1
---

# 基本配置
## 拆分配置 merge
```js title='项目结构'
├── build-base-config
│   ├── paths.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── src
│   ├── index.js
│   └── index.html
├── .babelrc
├── package.json
└── postcss.config.js
```
:::tip webpack4 配置文件夹
- 路径工具
```js title='paths.js'
const path = require('path')
const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')
module.exports = { srcPath, distPath }
```
- webpack 环境公共配置 骨架
```js title='webpack.common.js'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    // 入口 js文件
    entry: path.join(srcPath, 'index'),
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     // loader 的执行顺序是：从后往前（知识点）
            //     loader: ['style-loader', 'css-loader']
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}
```
- webpack 开发环境配置 骨架
  - webpack-merge 工具
```js title='webpack.dev.js'
const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = smart(webpackCommonConf, {
    // 开发 模式
    mode: 'development',
    module: {
        rules: []
    },
    plugins: [
        new webpack.DefinePlugin({
            // window.ENV = 'development'
            ENV: JSON.stringify('development')
        })
    ],
})
```
- webpakc 生产环境配置
```js title='webpack.prod.js'
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = smart(webpackCommonConf, {
    // 生产 模式
    mode: 'production',
    output: {
        filename: 'bundle.[contentHash:8].js',  // 打包代码时，加上 hash 戳 用于协商缓存
        path: distPath,
        // publicPath: 'http://cdn.abc.com'  // 修改所有静态文件 url 的前缀（如 cdn 域名），这里暂时用不到
    },
    module: {
        rules: [
            // 图片优化
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然延用 file-loader 的形式，产出 url 格式
                        limit: 5 * 1024,

                        // 打包到 img 目录下
                        outputPath: '/img1/',

                        // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        })
    ]
})
```
- 项目脚本与依赖
```json title='package.json'
{
  "scripts": {
    "devBuild": "webpack --config build-base-config/webpack.dev.js",
    "dev": "webpack-dev-server --config build-base-config/webpack.dev.js",
    "build": "webpack --config build-base-config/webpack.prod.js"
  },
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0",
    "webpack-merge": "^4.2.2"
  }
}
```
:::
## 启动本地服务
:::info 开发环境配置
- 修改 开发配置
```js title='webpack.dev.js'
module.exports = smart(webpackCommonConf, {
    // 配置 webpack-dev-server
    devServer: {
        port: 8080,
        progress: true,  // 显示打包的进度条
        contentBase: distPath,  // 根目录
        open: true,  // 自动打开浏览器
        compress: true,  // 启动 gzip 压缩

        // 设置代理
        proxy: {
            // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
            '/api': 'http://localhost:3000',

            // 将本地 /api2/xxx 代理到 localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
})
```
- 关联 脚本和依赖
```json title='package.json'
{
  "scripts": {
    "dev": "webpack-dev-server --config build-base-config/webpack.dev.js"
  },
  "devDependencies": {
    "webpack-dev-server": "^3.9.0"
  }
}
```
:::

## 解析ES6
:::info 公共环境配置
- 修改 公共配置
```js title='webpack.common.js'
module.exports = {
    module: {
        rules: [
            // 解析es6语法
            {
                test: /\.js$/, // 匹配js文件
                loader: ['babel-loader'], // 加载项
                include: srcPath, // 包含路径
                exclude: /node_modules/ // 排除路径
            },
        ]
    },
}
```
- 关联 依赖
```json title='package.json'
{
  "devDependencies": {
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "babel-loader": "^8.0.6"
  }
}
```
- 新增 babel 配置文件
```json title='.babelrc'
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
:::

## 解析样式
:::info 公共环境配置
- 修改 公共配置
```js title='webpack.common.js'
module.exports = {
    module: {
        rules: [
            // 解析css文件 且处理浏览器样式兼容性
            {
                test: /\.css$/,
                // loader 的执行顺序是：从后往前
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            // 解析less文件
            {
                test: /\.less$/,
                // 增加 'less-loader' ，注意顺序
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
}
```
- 关联 依赖
```json title='package.json'
{
  "devDependencies": {
    "style-loader": "^1.0.1",
    "css-loader": "^3.2.1",
    "autoprefixer": "^9.7.3",
    "postcss-loader": "^3.0.0",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
  }
}
```
- 新增 postcss.config.js 配置文件
```js title='postcss.config.js'
module.exports = {
    plugins: [require('autoprefixer')]
}
```
:::

## 解析图片
:::info 开发环境配置
- 修改 开发配置
```js title='webpack.dev.js'
module.exports = {
    module: {
        rules: [
            // 图片不做任何处理 直接引入 url 
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
}
```
- 关联 依赖
```json title='package.json'
{
  "devDependencies": {
    "file-loader": "^5.0.2"
  }
}
```
:::
:::danger 生产环境配置
- 修改 生产配置
```js title='webpack.prod.js'
module.exports = {
    module: {
        rules: [
            // 优化 图片资源
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 小于 5kb 的图片用 base64 格式产出
                        // 否则，依然延用 file-loader 的形式，产出 url 格式
                        limit: 5 * 1024,

                        // 打包到 img 目录下
                        outputPath: '/img1/',

                        // 设置图片的 cdn 地址（也可以统一在外面的 output 中设置，那将作用于所有静态资源）
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
        ]
    },
}
```
- 关联 依赖
```json title='package.json'
{
  "devDependencies": {
    "url-loader": "^3.0.0",
    "file-loader": "^5.0.2"
  }
}
```
:::

## webpack5
:::caution 升级 webpack5
- package.json dev-server 命令改了 `"dev": "webpack serve",`
- 插件调整 `const { merge } = require('webpack-merge')`
- 插件调整 `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`
- `module.rules` 中 `loader: ['xxx-loader']` 换成 `use: ['xxx-loader']`
- `filename: 'bundle.[contenthash:8].js'` 其中 `h` 小写，不能大写
:::