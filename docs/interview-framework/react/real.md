---
sidebar_position: 9
---

# 真题-20

## 1 React组件如何通讯
- [父子组件](./app/basic.md#props) 
  - props 传递状态和函数
- [context](./app/advanced.md#context)
- [redux](./2_more.md#redux)

## 2 JSX本质
- [JSX本质章节](./3_principle.md#jsx)
- React.createElement() 返回 vnode

## 3 context是什么 有何用途
- [context](./app/advanced.md#context)
- 父组件 向所有 子孙组件传递简单的公共信息 如 国际化语言 主题色
- 复杂的公共信息 还是用 redux 管理

## 4 shouldComponetUpdate 用途
- [性能优化](./app/advanced2.md#scu)
- 必须配合 不可变值 

## 5 常见 描述 redux 单向数据流
[redux](./2_more.md#redux)

## 6 重点 setState是同步还是异步
[跳转](./app/basic.md#setState) 

## 7 什么是 纯函数
- [纯函数](./3_principle.md#fn)
- 返回一个新值 且没有副作用-修改其他值(全局属性或方法)
- 重点 不可变值

## 8 React 组件的生命周期
- [生命周期](./app/basic.md#lifecycle)
- 注意componentShouldUpdate
- [Vue回顾](../vue/app/components.md/#lifecycle)

## 9 React发起ajax 应在哪个生命周期
- componentDidMount
- [同Vue](../vue/real.md#ajax)

## 10 渲染列表为何使用 key
- [同Vue](../vue/real.md#key)
- 必须使用key
- diff算法通过 tag key 来判断是否为 同一节点
- 减少渲染次数 提升性能

## 11 函数组件 类组件 区别
- 函数组件
  - 纯函数 输入props 返回jsx
  - 没实例 没生命(lifecycle) 没状态(state)
- 类组件
  - 有实例 有生命 有状态

## 12 什么是受控组件
- 表单值 受 组件state直接控制
- 需要监听 onChange事件 `setState` 更新状态
- [非受控组件](./app/advanced.md#ref)

## 13 何时使用异步组件
- [回顾懒加载](./app/advanced.md#lazy)
- `import()` 语法
- 加载大组件
- 路由懒加载

## 14 多组件公共逻辑 如何抽离
- [回顾](./app/advanced2.md#common)
- HOC
- Render Props

## 15 redux 如何进行异步请求
- 使用异步action
  - 在action中 可继续 dispatch(action) 
- redux-thunk / redux-saga 中间件

## 16 react-router 配置懒加载
- [回顾路由懒加载](./2_more.md#router)
```js
const About = lazy(()=>import(./About))
<Suspense fallback={LoadingComponent}>
</Suspense>
```

## 17 PureComponent 理解
- 自动实现 SCU 状态变更的浅比较
- [回顾SCU性能优化](./app/advanced2.md#pure)

## 18 React事件 DOM事件 区别
- event 是 SyntheticEvent React处理后的合成事件
- 事件挂载在 document 或 root 上 对事件进行代理
- dispatchEvent 对不同事件进行分发
- [回顾SyntheticEvent](./3_principle.md#event)

## 19 React 性能优化
1. 渲染列表 key值唯一 业务id
2. 自定义事件 DOM事件 定时器 及时销毁 避免内存泄露
3. 合理使用异步组件 处理路由和过大组件
4. 减少函数 bind.this 次数 调用时重复bind导致创建多余重复的函数
5. 合理使用SCU深比较 推荐使用PureComponent / memo 扁平设计数据
6. 合理使用Immutable.js 
7. [前端通用优化](../../interview-basic/env-prod.md#performance)
8. [webpack优化](../webpack/performance.md)
9. SSR 服务端渲染 页面渲染快 接口数据一次性加装到页面 

## 20 React 与 Vue 区别
:::info 相同/类似
- 组件化 思想
- 数据驱动视图
- vdom 操作 DOM 提升性能
:::

:::tip 区别
| 区别     |               React               |                      Vue                      |
| :------- | :-------------------------------: | :-------------------------------------------: |
| 使用感受 | jsx 就是js的语法糖 写逻辑代码 | vue文件 一次性处理 html js css |
| 编程形式 | 函数式  state不可变 用`setState`  |          声明式 直接读取/修改`data`           |
| 难度深度 |     有难度但潜力大的 修炼内力     |            简上手成效快的 修炼外功            |
:::