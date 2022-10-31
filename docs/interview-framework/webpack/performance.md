---
sidebar_position: 3
---

# 性能优化
## 1 构建速度

### 1.1 babel-loader 仅开发
> 开启 缓存功能 重复编译未修改的 es6 文件

:::tip 优化 babel-loader
```js title='webpack.dev.js' {7-8,10-12}
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,

                // 开启缓存 无需重复编译未修改的 es6 文件
                loader: ['babel-loader?cacheDirectory'], 

                // 包含/排除 2选1即可
                include: srcPath, // 包含范围 
                // exclude: /node_modules/ // 排除范围
            },
        ]
    },
}
```
:::

### 1.2.1 IgnorePlugin 生产
> 忽略 过大体积的3方库 未使用代码； 按需手动引入代码
:::caution 引入多余未使用代码
- import moment from 'moment'
- moment 支撑多语言 默认引入所有语言 代码多余
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

1. 忽略多余代码目录 webpack插件配置（自带插件）
2. 按需手动引入代码 源码按需补充
```js title='webpack.prod.js'
module.exports = {
    plugins: [
        // 1 忽略 moment 下的 /locale 目录
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    ]
}
```
```js title='xxx.js'
import moment from 'moment' // 整体 200多kb 体积过大
// 2 手动引入 /locale 目录 中文语言包
import 'moment/locale/zh-cn' 
moment.locale('zh-cn')
```
:::

### 1.2.2 noParse 公共
> 不打包 已经打包过的库

:::tip 公共环境配置
- 忽略单个文件库 如xx.min.js库文件已经打包压缩好了
```js title='webpack.common.js'
module.exports = {
  module: {
    // 忽略整个 min.js 文件库 
    noParse: [/react\.min\.js$/], 
  },
};
```
- 对比 IgnorePlugin 与 noParse
  - IgnorePlugin 只处理部分打包
    - 不打包所有内容
    - 手动按需引入
  - noParse 处理不打包
    - 引入已打包压缩好的文件
    - 无需再打包压缩了 
:::

### 1.3.1 happyPack 开启多进程 生产
:::info 针对多核cpu
- JS 单线程 开启**多进程打包**
- 提高构建速度 **多核cpu**才有意义
:::
:::caution 按需开启
- **项目较大** 初始打包慢 开启多进程能提升速度 有意义
- 项目较小 初始打包快 开启多进程会降低速度 **无意义**
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

- 同步改变 babel 配置 针对js文件进行优化
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
            // 如何处理 .js 文件，用法和 之前 babel-loader 配置一样
            loaders: ['babel-loader?cacheDirectory']
        }),
    ],
}
```
:::

### 1.3.2 parallelUglifyPlugin 多进程压缩JS 生产
:::caution 按需开启
- **项目较大** 初始打包慢 开启多进程能提升速度 有意义
- 项目较小 初始打包快 开启多进程会降低速度 **无意义**
:::

:::danger 多进程 压缩js
- 安装 依赖
```json title='package.json'
{
  "devDependencies": {
    "webpack-parallel-uglify-plugin": "^1.1.2"
  }
}
```
- 开启 并行 压缩代码
- 配置 输出代码效果 和 开启的压缩功能
```js title='webpack.prod.js'
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin') // 引入
module.exports = {
    plugins: [
        // 使用 ParallelUglifyPlugin "并行" 压缩
        new ParallelUglifyPlugin({
            // 传递给 UglifyJS 的参数
            uglifyJS: {
                output: { // 输出代码效果
                    beautify: false, // 1 最紧凑的输出
                    comments: false, // 2 删除所有的注释
                },
                compress: { // 代码压缩 开启功能
                    // 删除所有的 `console` 语句
                    drop_console: true,
                    // 内嵌定义了但是只用到一次的变量
                    collapse_vars: true,
                    // 提取 出现多次但是没有定义成变量去引用的静态值
                    reduce_vars: true,
                }
            }
        })
    ],
}
```
:::

### 1.4.1 自动刷新 仅开发
>开发环境配置的 webpack-dev-server自带 没必要补充

### 1.4.2 热更新 仅开发
:::caution 自动刷新 对比 热更新
- 自动刷新
  - 网页全部刷新 速度较慢
  - 状态丢失
- 热更新
  - 网页不刷新 
  - 状态不丢失 按需更新代码 
    - css代码改变 不影响状态
    - js代码改变 需要手动补充 开启热更新的js
- webpack4 默认开启
:::
:::tip 开发配置
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
        new HotModuleReplacementPlugin(), // 补充插件 热更新
    ],
    devServer: {
        hot: true, // 开启 热更新
    },
}
```
- JS文件的热更新 需手动配置
```js
if(module.hot) {
    // 哪些js模块 开启热更新 不影响状态
    module.hot.accept(['./xxx'], ()=>{
        console.log('xxx module is hot by manual control')
    })
}
```
:::

### 1.5 dllPlugin 仅开发
- 了解一下 就行吧

:::caution
- 核心框架 Vue React 体积大 构建慢
- 但框架版本稳定 不常升级
- 同一个版本构建一次就行了 无需重复构建
:::
:::info
- webpack 内置 DllPlugin
  - DllPlugin 产出 dll文件
  - DllReferencePlugin 使用 dll文件
:::
- webpack.dll.js 新配置文件

## 2 产出代码 重要
:::danger 线上产品性能
- 代码体积更小 
- 合理分包 不重复加装 
- 速度更快 使用更少内存
:::

### 2.1 小图片 base64编码 
- [跳转](./basic.md#base64)
- 减少网络请求
### 2.2 bundle + hash
- 开启缓存功能 只更新修改的js代码
```js title='webpack.prod.js' {3,4}
module.exports = smart(webpackCommonConf, {
    output: {
        // 打包代码时，加上 hash 戳 用于协商缓存
        filename: 'bundle.[contentHash:8].js',  
    },
})
```

### 2.3 懒加载 
- [跳转](./advanced.md#lazy)
- 首页加载速度提升
- 路由页懒加载

### 2.4 提取公共代码 
- [跳转](./advanced.md#splitChunks)
- 减少代码体积

### 2.5 IgnorePlugin
- [跳转](#12-ignoreplugin-生产)
### 2.6 CDN
- 将所有的静态文件上传到cdn
- 修改 publicPath 公共路径
```js title='webpack.prod.js' {3,14-16}
module.exports = smart(webpackCommonConf, {
    output: {
        publicPath: 'http://cdn.abc.com'  // + 修改所有静态文件 url 的前缀（如 cdn 域名）
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,
                        outputPath: '/img1/',
                        // 设置图片的 cdn 地址
                        // 也可以统一在外面的 output 中设置，那将作用于所有静态资源
                        publicPath: 'http://cdn.abc.com'
                    }
                }
            },
        ]
    },
})
```

### 2.7 mode:production  

:::tip webpack4生产模式自动配置
- `mode:'production'` 
- 自动启动 代码压缩
- Vue React 会自动删除调试代码 如 warning提示
- 自动启动 **Tree-Shaking **
  - 代码体积更小 **自动忽略未使用** 代码
  - 需静态引入代码 才能触发
  - **必须使用ES6** 模块化语法 Tree-Shaking才有效
:::

:::caution ES6 Module / Commonjs 区别
- ES6 Module 是**静态引入** 编译时引入
  - `import x from 'path'` 必须放在代码最上方
- Commonjs 是**动态引入** 执行时引入
  - `require(path)` 可在逻辑代码中动态使用
- 只有 ES6 Module 才能静态分析 实现 Tree-Shaking
:::

### 2.8 scope hosting
:::tip 原理 作用域托管
- 代码体积更小
- 函数作用域合并 减少函数数量
- 代码可读性更高
:::

:::danger
- 修改 生产配置
```js title='webpack.prod.js'
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin') // 引入
module.exports = {
    resolve: {
        // 三方模块 优先采用'jsnext:main'中指向的 ES6模块化语法文件
        mainFields: ['jsnext:main', 'browser', 'main']
    }
    plugins: [
        // 开启 Scope Hosting
        new ModuleConcatenationPlugin(),
    ],
}
```
:::

