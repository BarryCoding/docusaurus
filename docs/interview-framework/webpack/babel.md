---
sidebar_position: 4
---

# babel
> 使用新js语法 解析为es5语法 兼容不同浏览器
## 1 环境搭建 基础配置
- 是webpack 配合 babel-loader 处理 新JS语法 和 模块化
- 非webpack 纯babel 安装依赖 
```json title='package.json'
{
  "devDependencies": {
    "@babel/cli": "^7.7.5",
    "@babel/core": "^7.7.5",
    "@babel/preset-env": "^7.7.5"
  },
}
```

:::danger 
- 配置文件 .babelrc
  - 预设配置 presets 是 已预先配置好的plugins集合
  - 扩展插件 plugins 继续 扩展自己需要的特点插件
```json title='.babelrc'
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
:::

## 2 babel-polyfill
:::info
- polyfill 处理 不兼容 JS新语法问题 如 新api Promise Array.includes(ele)
- core-js库 处理 JS新语法兼容性 核心库
- regenerator库 `function* fn` 处理异步 
  - 被 async/await 取代了
- babel-ployfill 是 core-js regenerator 2者库集合
- babel 7.4 开始弃用 babel-ployfill
  - 推荐 直接使用 最新 core-js 与 regenerator
:::

:::tip 
- 安装 相关依赖 
```diff title='package.json'
{
  "dependencies": {
+   "@babel/polyfill": "^7.7.0",
  }
}
```
- 按需兼容代码
  - babel-polyfill 文件大
  - 只需要部分功能 无序全部引入
  - 按需引入 兼容代码
```diff title='.babelrc'
{
    "presets": [
        [
            "@babel/preset-env",
+           {
+               "useBuiltIns": "usage",
+               "corejs": 3
+           }
        ]
    ],
}
```
:::
:::danger
- 污染全局环境
  - window.Promise
  - Array.prototype.includes
  - 不适合 发布自己的3方库
  - 只适合 开发自己的项目
:::

## 3 babel-runtime
- 解决 babel-polyfill 污染全局环境 问题
:::danger 
- 安装 相关依赖
```diff title='package.json'
{
  "devDependencies": {
+   "@babel/plugin-transform-runtime": "^7.7.5"
  },
  "dependencies": {
+   "@babel/runtime": "^7.7.5"
  }
}
```
- 配置文件
```json title='.babelrc'
{
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": 3,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
            }
        ]
    ]
}
```
:::