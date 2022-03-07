---
sidebar_position: 9
---

# 真题

## React组件如何通讯
- [父子组件](./app/basic.md#props) 
- [context](./app/advanced.md#context)
- [redux](./more.md#redux)

## JSX本质
- [JSX本质章节](./principle.md#jsx)

## context是什么 有何用途
- [context](./app/advanced.md#context)
- 复杂公共数据 用redux管理

## shouldComponetUpdate 用途
[性能优化](./app/advanced2.md#scu)

## 描述 redux 单向数据流
[redux](./more.md#redux)

## setState是同步还是异步
[跳转](./app/basic.md#setState) 

## 什么是 纯函数
- [纯函数](./principle.md#fn)

## React 组件的生命周期
- todo 找图
- [生命周期](./app/basic.md#lifecycle)
- 注意componentShouldUpdate
- [Vue回顾](../vue/app/components.md/#lifecycle)

## React发起ajax 应在哪个生命周期
- componentDidUpdate
- [同Vue](../vue/real.md#ajax)

## 渲染列表为何使用 key
- [同Vue](../vue/real.md#key)

## 函数组件 类组件 区别
- 函数组件
  - 纯函数 输入props 返回jsx
  - 没实例 没生命(lifecycle) 没状态(state)
  - 不能扩展 没灵魂 只实现简单功能的工具人
- 类组件
  - 有实力 有生命 有状态
  - 可扩展 有灵魂 能封装继承多态的大佬

## 什么是受控组件
- 表单值 受state直接控制
- 需要监听 onChange事件 `setState` 更新状态
- [非受控组件](./app/advanced.md#ref)

## 何时使用异步组件
- [回顾懒加载](./app/advanced.md#lazy)
- `import()` 语法
- 加载大组件
- 路由懒加载

## 多组件公共逻辑 如何抽离
- [回顾](./app/advanced2.md#common)

## redux 如何进行异步请求
- 使用异步action
- redux-thunk / redux-saga 中间件

## react-router 配置懒加载
- [回顾路由懒加载](./more.md#router)

## PureComponent 理解
- 无需手写 SCU 自动性能优化
- [回顾SCU性能优化](./app/advanced2.md#pure)

## React事件 DOM事件 区别
- [回顾SyntheticEvent](./principle.md#event)

## React 性能优化
1. 渲染列表 key值唯一 业务id
2. 自定义事件 DOM事件 定时器 及时销毁 避免内存泄露
3. 合理使用异步组件
4. 减少函数 bind.this 次数
5. 合理使用SCU深比较 推荐使用PureComponent / memo 扁平设计数据
6. 合理使用Immutable.js
7. SSR
8. [前端通用优化](../../interview-basic/env-prod.md#performance)
9. [webpack优化](../webpack/performance.md)

## React 与 Vue 区别
:::info 相同/类似
- 组件化
- 数据驱动视图
- vdom 操作 DOM 提升性能
- 结合之前的知识点共性 expands
:::

:::tip 区别
| 区别      | React | Vue     |
| :---        |    :----:   |         :---: |
| 使用感受     | 使用jsx 就是js的语法糖 写逻辑代码 | 使用模版template 更像 html文件 含结构样式行为  |
| 编程形式   | 函数式  state不可变 用`setState`  | 声明式 直接读取/修改`data`   |
| 难度深度      | 有难度但潜力大的 内力       | 简上手成效快的 外功  |
- 结合之前的知识点区别 expands
:::