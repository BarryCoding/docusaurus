---
sidebar_position: 5
---

# 真题-9

## 1 前端代码为何需要进行构建和打包
:::danger 规范层面
- 统一的 高效开发环境
- 统一的 构建流程和标准
- 集成 公司构建规范 dev -> test -> pre -> prod 环境
:::
:::info 代码层面
- 生产环境 加载快 代码体积更小 如 tree-shaking 压缩 合并 
- 开发环境 使用高级语言/语法 如 TS ES6+ scss
- 兼容性 如 ployfill postcss
:::


## 2 module chunk bundle 区别

:::tip
- webpack 各个源码文件 一切皆为模块 
- chunk 一般是多个 module合并成的 
  - entry入口文件 
  - splitChunk 拆分合并的文件 
- bundle 是最终的输出文件
:::

## 3 如何产出一个lib
- webpack 配置 output.library
- ？

## 4 webpack 的 loader plugin 区别
:::tip
- loader 模块转换器
  - [常见loader](https://webpack.js.org/loaders/)
  - sass css babel url file
  - 回顾时补充
- plugin 扩张插件
  - [常见plugin](https://webpack.js.org/plugins/)
  - 回顾时补充
:::

## 5 webpack 如何实现懒加载

:::tip
- `import()`
- 结合Vue React异步组件
- 相关router实现 异步加载非首页路由 
  - 从而提升首页加装速度
:::

## 6 babel 与 webpack 区别

:::tip
- babel Js新语法**编译工具** 
  - **不处理模块化**
- webpack 对项目进行打包构建 loader plugin 集合 
  - 模块化处理
:::

## 7 babel-runtime babel-polyfill 区别
:::tip
- babel-loader 会污染全局
- babel-runtime 不会污染全局
- 产出3放lib 使用babel-runtime
:::

## 8 为何 Proxy 不能被 Polyfill
:::tip
- function 能模拟 class 
- callback 能模拟 promise  
- Proxy 用 `Object.defineProperty` 无法模拟
  - Vue3 的某个原理
:::

## 9 webpack 常见性能优化
- [跳转](./performance.md)
- todo 手打 并 分类