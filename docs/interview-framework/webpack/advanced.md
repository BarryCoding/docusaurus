---
sidebar_position: 2
---

# 高级配置
## 1 多入口
1. 补充入口js文件
2. 补充模板html文件
3. 产出文件与入口文件关联

:::note 
```diff title='项目结构'
    ├── src
    │   ├── index.js
    │   ├── index.html
+   │   ├── other.js
+   │   └── other.html
```
:::
:::tip 公共环境配置

```js title='webpack.common.js'
module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')  // 1 添加新入口文件
    },
    plugins: [
        // 2.1 入口1 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            chunks: ['index']  // 只引用 index.js
        }),
        // 2.2 入口2 - 生成 other.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other']  // 只引用 other.js
        })
    ]
}
```
:::
:::danger 生产环境配置
```diff title='webpack.prod.js'
module.exports = {
    output: {
-       filename: 'bundle.[contentHash:8].js',  
+       filename: '[name].[contentHash:8].js', // 3 产出文件 补充name 即 entry.key
    },
}
```
:::

## 2 抽离和压缩 css
:::caution 生产环境不合理
之前的配置是把css 插入到html head style标签中
:::
:::info 开发环境配置
- CSS loader最后一步是 style-loader
```js title='webpack.dev.js'
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    },
}
```
:::
:::danger 生产环境配置
- 关联 依赖
  - 抽离css mini-css-extract-plugin
  - 优化css optimize-css-assets-webpack-plugin
  - 压缩css terser-webpack-plugin
```json title='package.json'
{
  "devDependencies": {
    "mini-css-extract-plugin": "^0.8.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "terser-webpack-plugin": "^2.2.2",
  }
}
```
1. CSS loader 最后一步是 抽离
2. 处理抽离的css文件和路径 并hash缓存处理
3. optimization 优化压缩文件
```js title='webpack.prod.js'
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // css抽离
const TerserJSPlugin = require('terser-webpack-plugin') // 压缩 css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // css 压缩
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    MiniCssExtractPlugin.loader,  // 抽离 css 取代 style-loader
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    MiniCssExtractPlugin.loader,  // 抽离 css 取代 style-loader
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        // 构建后 抽离的css名称和路径
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash:8].css'
        })
    ],
    optimization: {
        // 压缩 css
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
}
```
:::

## 3 抽离公共代码 {#splitChunks}
:::caution 生产环境不合理
公共代码 被多次引用 并不断被打包 效率低下 如 loadash
:::
:::danger 生产环境配置
- 分割代码spitChanks 缓存分组
```js title='webpack.prod.js'
module.exports = {
    optimization: {
        // 分割代码块
        splitChunks: {
            // initial 入口 chunk，对于异步导入的文件不处理
            // async 异步 chunk，只对异步导入的文件处理
            // all 全部 chunk
            chunks: 'all',

            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk 名称
                    priority: 1, // 权限更高，优先抽离，重要！！！
                    test: /node_modules/, // 如 loadash
                    minSize: 0,  // 抽离文件大小限制 
                    minChunks: 1  // 最少复用过几次 3方一般都单独抽离出来
                },
                // 公共的模块
                common: {
                    name: 'common', // chunk 名称
                    priority: 0, // 优先级
                    minSize: 0,  // 过小文件无需抽离 对文件体积影响不大
                    minChunks: 2  // 公共模块最少复用过几次 只用一次是没抽离意义的
                }
            }
        }
    }
}
```
:::
:::tip 公共环境配置
```js title='webpack.common.js'
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            chunks: ['index', 'vendor', 'common']  // 要考虑代码分割
        }),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'other.html'),
            filename: 'other.html',
            chunks: ['other', 'common']  // 考虑代码分割 用不到vendor
        })
    ]
}
```
:::


## 4 懒加载 {#lazy}
- `import('资源路径')`函数 返回Promise 常应用在 Vue React 异步组件
```js
// 引入动态数据 
setTimeout(()=>{
    // 懒加载文件 
    import('./xxx.js').then(res=>{
        console.log(res)
    })
}, 2000)
```

## 5 解析 React / Vue
:::info jsx文件解析
- `npm install --save-dev @babel/preset-react`
- babel 解析
```json title='.babelrc'
{
    "presets": ["@babel/preset-react"],
    "plugins": []
}
```
:::

:::tip vue文件解析
- `npm install --save-dev vue-loader`
- webpack loader
```js title='webpack.common.js'
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: ['vue-loader'],
                include: srcPath
            },
        ]
    },
}
```
:::
