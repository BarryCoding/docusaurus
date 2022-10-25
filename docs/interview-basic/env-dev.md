---
sidebar_position: 5
---

# 开发环境
- 实际工作
  - git
  - 抓包
- 工作效率
  - chrome 调试
  - **难点** webpack babel
  - linux command
## git 代码管理
:::tip 常用命令
- git checkout xxx 切换分支
  - git switch branch-name
- git pull origin master 先拉取最新代码
- git status 当前git文件管理状态
- git diff 修改的内容
- git add . 提交所有文件
- git commit -m "xxx" 提交与注释
- git push origin master
- git branch xxx
- git checkout -b feature-b 创建并切换分支
- git merge feature-b 将feature-b分支代码 合并到当前分支
- git log 提交记录
- git show xxxxxxxx
- git stash
- git stash pop
:::
- .gitignore
- 出现冲突 先沟通 后修改与提交

- ssh key 公钥 多公钥配置？
  - todo 文档补充

## chrome调试
:::info 调试功能
- elements
  - html结构 和 css样式
- console
  - 打印和调试
- sources
  - js文件 断点 debugger
- network
  - 接口调试 与 网络资源
- applicaion
  - 存储数据 cookie storage
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

## 难点 webpack 与 babel
:::caution 解决
- 浏览器不完全支撑 ES6 语法 模块化 
- 网页加载更快 压缩代码 整合代码 
:::
### webpack配置
- `npm init` 包管理
- `npm install xxx`
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
- 默认配置文件 webpack.config.js
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
- 补充安装 babel
```json title='package.json'
{
  "devDependencies": {
    "@babel/core": "^7.6.2",
    "@babel/preset-env": "^7.6.2",
    "babel-loader": "^8.0.6",
  }
}
```
- babel 配置文件
```json title='.babelrc'
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
- webpack 配置 babel模块 用于校验js文件
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

### ES6模块化
- export xxx
  - import {xxx} from 
- export default xxx
  - import xxx from

### 生产环境配置
- 补充 生产环境脚本
```json title='package.json' {3}
{
  "scripts": {
    "build": "webpack --config webpack.prod.js"
  },
}
```
- 新增 生产环境配置文件
```js title='webpack.prod.js' {2,4}
module.exports = {
    mode: 'production', // 生产环境
    output: {
        filename: 'bundle.[contenthash].js', // 文件名hash处理 文件改变则hash改变 配合缓存提升性能
    },
}
```

## linux 常用 command
:::caution linux
- 公司的线上机系统 linux
- 测试机与线上一致 linux
:::

:::tip command
- ssh work@192.168.10.10 连接线上机

- ls 查看文件 平铺
- ls -a 查看所有文件 包括隐藏文件
- ll 查看文件 列表形式

- cd dist 进入dist目录
- mkdir dir1 创建目录
- rm -rf dir1 删除目录和内部文件
- touch x.js 创建文件
- cp a.js b.js 拷贝文件
- mv index.html index1.html 修改文件名
- mv index1.html ../index1.html 修改文件路径
- vi x.js 创建文件并进入编辑模式
  - i 进入修改模式 insert
  - esc 退出修改模式
  - :w 保存 write 
  - :q 退出文件 quit 
  - :q! 强制退出 不保存
- vimtutor vim的教程 学习成本高

- cat x.js 看所有内容
- head x.js 看头部内容
- tail x.js 看尾巴内容
- grep "babel" package.json 查询关键字
:::