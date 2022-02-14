---
sidebar_position: 5
---

# 真题

## 前端代码为何需要进行构建和打包
<details>
  <summary>提示 「代码3 管理3」</summary>
  <div>

:::info 代码层面
- 生产环境 加载快 代码体积更小 如 tree-shaking 压缩 合并 
- 开发环境 使用高级语言/语法 如 TS ES6+ scss
- 兼容性 如 ployfill postcss
:::
:::danger 项目管理层面
- 统一的 高效开发环境
- 统一的 构建流程和标准
- 集成公司构建规范 test pre prod 环境
:::
  </div>
</details>

## module chunk bundle 区别
<details>
  <summary>提示 「场景」</summary>
  <div>

:::tip
- module，chunk 和 bundle 是同一份逻辑代码在不同转换场景下的叫法。
- 项目的各个源码文件 是 module
- webpack 在处理这些代码时是 chunk
- 最后输出生为浏览器可运行的 bundle
:::
  </div>
</details>

## 如何产出一个lib
- output.library

## loader plugin 区别
<details>
  <summary>提示 补充</summary>
  <div>

:::tip
- loader 预处理文件 模块转换器 sass->css 
  - [常见loader](https://webpack.js.org/loaders/)
- plugin 扩张插件 综合层面
  - [常见plugin](https://webpack.js.org/plugins/)
:::
  </div>
</details>

## webpack 如何实现懒加载
<details>
  <summary>提示 </summary>
  <div>

:::tip
- `import()`
- 结合Vue React异步组件
- 实现 异步加载路由
:::
  </div>
</details>

## babel 与 webpack 区别
<details>
  <summary>「语法 模块化」 </summary>
  <div>

:::tip
- babel Js新语法编译工具 不处理模块化
- webpack 对项目进行打包构建等各方面优化 loader plugin
  - 通过babel-loader预处理 Js文件
:::
  </div>
</details>

## babel-runtime babel-polyfill 区别
<details>
  <summary>提示 「污染」</summary>
  <div>

:::tip
- babel-loader 会污染全局
- babel-runtime 不会污染全局
- 产出3放lib 使用babel-runtime
:::
  </div>
</details>

## 为何 Proxy 不能被 Polyfill
<details>
  <summary>？ </summary>
  <div>

:::tip
- 模拟class 能用 function
- 模拟promise 能用 callback
- 但 Proxy 用 Object。defineProperty 无法模拟
:::
  </div>
</details>

## webpack 常见性能优化
- [跳转](./performance.md)