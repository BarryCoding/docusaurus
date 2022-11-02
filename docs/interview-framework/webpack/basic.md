---
sidebar_position: 1
---

# 基本配置
:::tip 文件结构
```js
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
:::
## 1 拆分配置 merge

:::info 包管理与工具
```json title='package.json 脚本与依赖'
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

```js title='paths.js 辅助工具 处理路径'
const path = require('path')
const srcPath = path.join(__dirname, '..', 'src')
const distPath = path.join(__dirname, '..', 'dist')
module.exports = { srcPath, distPath }
```
:::

:::tip webpack4 配置
```js title='webpack.common.js 公共环境配置'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = {
    // 入口 js文件
    entry: path.join(srcPath, 'index'),
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html'
        })
    ]
}
```

```js title='webpack.dev.js 开发环境配置'
const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
// 用于合并 公共配置
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: 'development', // 开发 模式
    module: {
        rules: []
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development') // EVN 全局环境变量
        })
    ],
})
```

```js title='webpack.prod.js 生产环境配置'
const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { smart } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = smart(webpackCommonConf, {
    mode: 'production', // 生产 模式
    output: {
        // 输出文件时，加上 hash戳 用于协商缓存
        filename: 'bundle.[contentHash:8].js',  
        path: distPath,
    },
    module: {
        rules: []
    },
    plugins: [
        // 默认清空 output.path 即配置的打包文件夹
        new CleanWebpackPlugin(), 
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production') // EVN 全局环境变量
        })
    ]
})
```
:::

## 2 启动本地服务
:::info 开发环境配置
-  运行 `npm run dev`
```json title='package.json 脚本和依赖'
{
  "scripts": {
    "dev": "webpack-dev-server --config build-base-config/webpack.dev.js"
  },
  "devDependencies": {
    "webpack-dev-server": "^3.9.0"
  }
}
```
- 
```js title='webpack.dev.js 本地服务配置'
module.exports = smart(webpackCommonConf, {
    devServer: {
        port: 8080,
        progress: true,  // 显示进度条
        contentBase: distPath,  // 根目录
        open: true,  // 自动打开浏览器
        compress: true,  // 启动 gzip 压缩

        // 设置代理 便于前后端联调 连开发 测试 uat 环境
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
:::

## 3 解析ES6 JS
:::tip 公共环境配置
```json title='package.json babel 开发依赖'
{
  "devDependencies": {
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "babel-loader": "^8.0.6"
  }
}
```
```js title='webpack.common.js 公共配置'
module.exports = {
    module: {
        rules: [
            // 
            {
                test: /\.js$/, // 匹配 js文件
                loader: ['babel-loader'], // 加载 处理es6解析
                include: srcPath, // 处理文件 所在路径
                exclude: /node_modules/ // 排除路径
            },
        ]
    },
}
```
```json title='.babelrc 配置文件'
{
    // presets 已包含 所需plugins集合
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
:::

## 4 解析样式 CSS
:::tip 公共环境配置
```json title='package.json 开发依赖'
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
```js title='webpack.common.js 公共配置'
module.exports = {
    module: {
        rules: [
            
            {
                test: /\.css$/, // 解析css文件
                // loader 的执行顺序是：从后往前
                // postcss 处理浏览器兼容性 自动补充前缀 最后一项
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/, // 解析less文件
                // less-loader 放在 loader 最后一项
                loader: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
}
```
```js title='postcss.config.js 新增postcss配置文件'
module.exports = {
    plugins: [require('autoprefixer')]
}
```
:::

## 5 解析图片 {#base64}
:::info 开发环境配置
```json title='package.json 开发依赖'
{
  "devDependencies": {
    "file-loader": "^5.0.2"
  }
}
```

```js title='webpack.dev.js 开发配置'
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/, // 图片文件 格式
                use: 'file-loader' // 图片无特别处理 直接使用
            }
        ]
    },
}
```
:::
:::danger 生产环境配置
```diff title='package.json 开发依赖'
{
  "devDependencies": {
+   "url-loader": "^3.0.0",
  }
}
```

```js title='webpack.prod.js 生产配置'
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // 限制小于 5kb 图片用 base64 格式产出 减少小图片请求
                        limit: 5 * 1024,

                        // 输出路径 到 img1 目录下
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
:::

## 升级为 webpack5 配置
:::caution 升级 webpack5
- package.json dev-server 脚本改了 `"dev": "webpack serve",`
- 插件调整 `const { merge } = require('webpack-merge')`
- 插件调整 `const { CleanWebpackPlugin } = require('clean-webpack-plugin')`
- `module.rules` 中 `loader: ['xxx-loader']` 换成 `use: ['xxx-loader']`
- `filename: 'bundle.[contenthash:8].js'` 其中 `h` 小写，不能大写
:::