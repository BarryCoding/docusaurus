---
sidebar_position: 5
---

# 开发环境

## git代码管理
:::tip 常用命令
- git checkout xxx
- git pull origin master
- git status
- git diff
- git add .
- git commit -m "xxx"
- git push origin master
- git branch xxx
- git checkout -b feature-b 
- git merge feature-b 将xxx分支代码 合并到当前分支
- git log
- git show xxxxxxxx
- git stash
- git stash pop
:::

- ssh公钥 多公钥配置？

## chrome调试
:::info 调试功能
- elements
  - html结构 和 css样式
- console
  - 打印和调试
- sources
  - js文件 debugger
- network
  - 接口调试
- applicaion
  - 存储数据
:::


## h5抓包 冷门
- windows fiddler
- mac charles
- 手机与电脑用同一个局域网
- 手机代理到电脑
- 手机浏览网页 即可抓包
- 查看网络请求
- 网址代理
- https

## webpack 与 babel
:::caution 解决
- ES6 语法 模块化
- 压缩代码 整合代码 网页加载更快
:::
### webpack配置
```json title='package.json'
{
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server"
  },
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.1"
  }
}
```
```js title='webpack.config.js'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode 可选 development 或 production ，默认为后者
    // production 会默认压缩代码并进行其他优化（如 tree shaking）
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index'), // 入口 文件
    output: { // 出口
        filename: 'bundle.js', // 文件名
        path: path.join(__dirname, 'dist') // 出口路径
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'), // 入口模版
            filename: 'index.html' // 出口文件
        })
    ],
    devServer: { // 开发环境服务 并在script中配置运行
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),  // 根目录
        open: true,  // 自动打开浏览器
    }
}
```

### babel 配置
```json title='package.json'
{
  "devDependencies": {
    "@babel/core": "^7.6.2",
    "@babel/preset-env": "^7.6.2",
    "babel-loader": "^8.0.6",
  }
}
```
```json title='.babelrc'
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
```js title='webpack.config.js'
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/, // 文件需满足 正则规则
                loader: ['babel-loader'], // 加载处理
                include:  path.join(__dirname, 'src'), // 包含的文件路径
                exclude: /node_modules/ // 排除的文件路径
            },
        ]
    },
}
```

### 生产环境配置
```json title='package.json' {3}
{
  "scripts": {
    "build": "webpack --config webpack.prod.js"
  },
}
```
```js title='webpack.prod.js' {2,4}
module.exports = {
    mode: 'production', // 生产环境
    output: {
        filename: 'bundle.[contenthash].js', // 文件名hash处理 文件改变则hash改变
    },
}

```

## ES6模块化
- export xxx
- export default xxx

## linux 常用 command
:::caution linux
- 公司的线上机系统 linux
- 测试机与线上一致 linux
:::

:::tip command
- ssh work@192.168.10.10 连接线上机
- ls 查看文件
- ls -a 查看所有文件
- ll 查看文件 列表形式
- mkdir dir1 创建目录
- rm -rf dir1 输出目录和内部文件
- cd dist 进入dist目录
- mv index.html index1.html 修改文件名
- mv index1.html ../index1.html 修改文件路径
- cp a.js b.js 拷贝文件
- touch x.js
- vi x.js 创建文件并进入编辑模式
  - i 进入修改模式 insert
  - esc 退出修改模式 escape
  - :w 保存 write 
  - :q 退出文件 quit
  - :q! 强制退出 不保存
  - vimtutor 学习 装逼
- cat x.js
- head x.js
- tail x.js
- grep "babel" package.json 查询
:::