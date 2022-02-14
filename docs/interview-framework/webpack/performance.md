---
sidebar_position: 3
---

# 性能优化
## 优化 开发环境构建速度

### babel-loader
:::tip 优化 babel-loader
```js title='webpack.dev.js' {6,7}
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                // 开启缓存 无需重复编译未修改es6文件
                loader: ['babel-loader?cacheDirectory'], 
                include: srcPath, // 包含范围 包含/排除 2选1即可
                // exclude: /node_modules/ // 排除范围 包含/排除 2选1即可
            },
        ]
    },
}
```
:::

### IgnorePlugin
:::caution 引入多余模块
- import moment from 'moment'
- moment 支撑多语言 默认引入所有语言
- 如何只引入中文/英文
:::
:::danger
- 安装 依赖
```json title='package.json' {2,3}
{
  "dependencies": {
    "moment": "^2.24.0"
  }
}
```
- 生产环境 优化
```js title='webpack.prod.js'
module.exports = {
    plugins: [
        // 忽略 moment 下的 /locale 目录
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    ]
}
```
```js title='xxx.js'
import moment from 'moment'
import 'moment/locale/zh-cn' // 需手动引入中文语言包
moment.locale('zh-cn') // 设置语言
```
:::

### noParse
:::tip 公共环境配置
- 忽略单个文件库 如xx.min.js库文件已经到包好了
```js title='webpack.common.js'
module.exports = {
  module: {
    // 忽略文件库 文件库不能有 引入语法
    noParse: /jquery|lodash/, 
  },
};
```
- 对比 IgnorePlugin 与 noParse
  - IgnorePlugin 手动按需打包引入的文件内容 不打包所有内容
  - noParse 引入文件 但无需再打包 一般针对已经打包压缩好的文件
:::

### happyPack 多进程
:::note 针对多核cpu 且 大型项目
- JS 单线程 开启**多进程打包**
- 提高构建速度 **多核cpu**才有意义
- **项目较大** 初始打包慢 开启多进程能提升速度
- 项目较小 初始打包快 开启多进程反而降低速度 开销变大
:::
:::danger
- 安装 依赖
```json title='package.json'
{
  "devDependencies": {
    "happypack": "^5.0.1",
  }
}
```
- 修改 生产配置 / 公共配置也行
```js title='webpack.prod.js' {1,7,8,14-20}
const HappyPack = require('happypack') // 引入
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                // 把对 .js 文件的处理转交给 id 为 babel 的 HappyPack 实例
                use: ['happypack/loader?id=babel'],
                include: srcPath,
            },
        ]
    },
    plugins: [
        // happyPack 开启多进程打包
        new HappyPack({
            // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
            id: 'babel',
            // 如何处理 .js 文件，用法和 Loader 配置中一样
            loaders: ['babel-loader?cacheDirectory']
        }),
    ],
}
```
:::

### parallelUglifyPlugin 多进程
:::danger 多进程 压缩js
- 安装 依赖
```json title='package.json'
{
  "devDependencies": {
    "webpack-parallel-uglify-plugin": "^1.1.2"
  }
}
```
- 修改 生产配置
```js title='webpack.prod.js'
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin') // 引入
module.exports = {
    plugins: [
        // 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS 的参数
            // （还是使用 webpack UglifyJS 压缩，只不过开启了多进程）
            uglifyJS: {
                output: {
                    beautify: false, // 最紧凑的输出
                    comments: false, // 删除所有的注释
                },
                compress: {
                    // 删除所有的 `console` 语句，可以兼容ie浏览器
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取出出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
        })
    ],
}
```
:::

### 自动刷新 
>webpack-dev-server自带

### 热更新
:::caution 改完代码后
- 自动刷新： 网页全部刷新 速度慢且状态丢失
- 热更新： 网页不刷新 状态不丢失 按需更新（改样式不刷新网页）
- webpack4 默认开启
:::
:::tip 开发配置
- 修改 开发环境配置
```js title='webpack.dev.js'
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
module.exports = {
    entry: {
        // 入口配置修改
        index: [
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            path.join(srcPath, 'index.js')
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(), // +热更新插件
    ],
    devServer: {
        hot: true, // +开启热更新
    },
}
```
- 具体文件的热更新 需手动配置
:::

### dllPlugin 细节？
:::caution
- Vue React 体积大 构建慢
- 框架版本稳定 不用升级
- 同一个版本构建一次就行了 无需重复构建
- DllPlugin 打包dll文件
- DllReferencePlugin 引用dll文件
:::

## 优化 生产环境产出代码

### 生产模式

### 小图片 base64 编码

### bundle + hash

### CDN

### 提取公共代码

### 懒加载

### scope hosting

## 构建流程概述

