---
sidebar_position: 4
---

# babel
## 环境搭建 基础配置
:::danger 
- 安装依赖 非webpack
```json title='package.json'
{
  "devDependencies": {
    "@babel/cli": "^7.7.5",
    "@babel/core": "^7.7.5",
    // "@babel/plugin-transform-runtime": "^7.7.5",
    "@babel/preset-env": "^7.7.5"
  },
//   "dependencies": {
//     "@babel/runtime": "^7.7.5"
//   }
}
```
- 配置文件
  - 预设配置 presets
  - 扩展插件 plugins
```json title='.babelrc'
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
:::

## babel-polyfill
:::caution
- polyfill 处理代码兼容问题
- core-js 兼容新版本js新语法 / regenerator
- babel-ployfill 是 core-js regenerator 2者集合
- babel 7.4 开始弃用 babel-ployfill
:::

:::danger 
- 安装 相关依赖 
```diff title='package.json'
{
  "dependencies": {
+   "@babel/polyfill": "^7.7.0",
  }
}
```
- 按需加载 兼容代码
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
- 污染全局环境
:::

## babel-runtime
解决 babel-polyfill 污染全局环境 问题
:::danger 
- 安装 相关依赖
```json title='package.json'
{
  "devDependencies": {
    "@babel/plugin-transform-runtime": "^7.7.5"
  },
  "dependencies": {
    "@babel/runtime": "^7.7.5"
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