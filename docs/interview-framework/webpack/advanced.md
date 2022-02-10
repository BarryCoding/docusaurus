---
sidebar_position: 2
---

# 高级配置
## 多入口
:::note 
```diff title='项目结构'
    ├── src
    │   ├── index.js
    │   ├── index.html
+   │   ├── other.js
+   │   └── other.html
```
:::
:::info 公共环境配置
- 修改 公共开发配置
```js title='webpack.common.js'
module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        other: path.join(srcPath, 'other.js')  // 添加新入口文件
    },
    plugins: [
        // 多入口 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            chunks: ['index']  // 只引用 index.js
        }),
        // 多入口 - 生成 other.html
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
- 修改 生产配置
```diff title='webpack.prod.js'
module.exports = {
    output: {
-       filename: 'bundle.[contentHash:8].js',  // 打包代码时，加上 hash 戳
+       filename: '[name].[contentHash:8].js', // name 即多入口时 entry 的 key
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

## 抽离和压缩 css
:::caution 生产环境不合理
之前的配置是把css 放在html head style标签中
:::
:::info 开发环境配置
- 修改 将公共配置 剪切到 开发配置 
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
                // 增加 'less-loader' ，注意顺序
                loader: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
            }
        ]
    },
}
```
:::
:::danger 生产环境配置
- 修改 生产配置
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
- 关联 依赖
```json title='package.json'
{
  "devDependencies": {
    "mini-css-extract-plugin": "^0.8.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "terser-webpack-plugin": "^2.2.2",
  }
}
```
:::

## 抽离公共代码
:::caution 生产环境不合理
公共代码 被多次引用 并不断被打包 效率低下
:::
:::info 公共环境配置
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
:::danger 生产环境配置
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
                    test: /node_modules/,
                    minSize: 0,  // 抽离文件大小限制 
                    minChunks: 1  // 最少复用过几次 
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

## 懒加载
- `import('资源路径')`函数 常应用在 Vue React 异步组件
```js
// 引入动态数据 
setTimeout(()=>{
    // 懒加载文件 
    import('./xxx.js').then(res=>{
        console.log(res)
    })
}, 2000)
```

## React / Vue
:::info jsx文件解析
- `npm install --save-dev @babel/preset-react`
```json title='.babelrc'
{
    "presets": ["@babel/preset-react"],
    "plugins": []
}
```
:::

:::tip vue文件解析
- `npm install --save-dev vue-loader`
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
