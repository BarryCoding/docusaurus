---
sidebar_position: 9
---

# 真题

## v-show / v-if 区别
[解答](./app/basic.md/#if)

## 为何 v-for 中要用key {#key}
- 必须使用key， 不推荐使用index/random
- vdom比较时 确保vdom的唯一性 使用diff算法，通过tag类型和key来进行对比
- 通过diff算法得出最少渲染内容 提升渲染性能

## 描述 Vue组件 生命周期
[图解](./app/components.md/#lifecycle)
1. 单组件生命周期
2. 父子组件生命周期关系

## Vue组件 如何通讯
1. 父子 props $emit
2. [自定义事件](./app/components.md#communication)
3. vuex 项目全局属性

## 描述组件渲染和更新过程
[图解](./principle.md#render)

## 双向数据绑定 v-model 的实现原理
:::tip 输入框
1. input元素 value=this.name
2. 自动绑定了input事件 this.name = $event.target.value
3. data 更新后触发 re-render
:::

## 对 MVVM 的理解
[图解](./principle.md#mvvm)

## computed 特点
[跳转](./app/basic.md#computed)

## 为何组件 data 必须是函数 并返回state对象
- script 中 `export default {}` 的是一个类/组件累
- 实例化后的组件彼此的data数据不会互相影响

## ajax请求应该放在哪个生命周期 {#ajax}
- mounted
- JS是单线程，ajax请求是异步的
- 放在mounted前 无卵用 且让逻辑混乱

## 如何将组件所有props传递给子组件
- 使用父组件的 $props
- 给子组件 `<User v-bind="$props">`

## 手动实现v-model
[跳转](./app/advanced.md#cus-v)

## 多个组件公共逻辑 如何抽离
- [mixin](./app/advanced.md#mixin)

## 何时使用 [异步组件](./app/advanced.md#async)
- 加载大组件
- 路由异步加载

## 何时使用 keep-alive
[跳转](./app/advanced.md#keep-alive)

## 何时使用 beforeDestroy
- 清除 定时器 setInterval setTimeout
- 解绑 自定义组件事件 event.$off
- 解绑 自定义DOM事件 scroll等

## 作用域插槽
[跳转](./app/advanced.md#slot)

## vuex 中 action 与 mutation 区别
- mutation 是原子级操作 只做一个操作 且不处理异步
- action 中处理异步 也可以合并多个mutation

## vue-router 常用的路由模式
[跳转](./principle.md#router)
### 配置 [异步加载/懒加载](./more.md#router) 

## 用 vnode 描述 DOM 结构
[JS-Mock](./principle.md#vdom)

## 监听 data 的核心 API
[responsive](./principle.md#responsive)
### 监听 [数组变化](./principle.md#watch-arr)

## diff算法的时间复杂度
[3个层级](./principle.md#diff)
### diff算法过程
[核心函数+3个层级](./principle.md#snabbdom)

## Vue为何是异步渲染 $nextTick作用
1. 异步渲染 便于将data修改合并 提高渲染性能
2. $nextTick 是在渲染完成后触发回调 能获取最新DOM节点

## Vue 常见 性能优化
1. v-show / v-if
2. computed 缓存
3. v-for 尽可能保证 key的唯一性 业务id
4. beforeDestroy 避免内存泄露
5. 异步组件
6. keep-alive
7. data层级设计 扁平化
8. 配置 vue-loader 在开发环境的模版编译（预编译）
9. [前端通用优化](../../interview-basic/env-prod.md#performance)
10. [webpack优化](../webpack/performance.md)