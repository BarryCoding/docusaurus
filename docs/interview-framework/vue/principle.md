---
sidebar_position: 3
---

# Vue 原理

## 组件化 / MVVM
:::info 组件化基础
- 老组件化 依赖操作DOM
- 数据驱动视图 Vue M-V-VM

![mvvm](/img/vue/vue-mvvm.png)
:::

## 响应式原理
> 组件data改变 立即触发视图更新
:::info 核心API 监听data变化
```js title="浅监听"
const data = {}
let name = 'Springer'
// 核心API Object.defineProperty
Object.defineProperty(data, "name", {
    get: function(){
        return name
    },
    set: function(val){
        name = val
    }
})
console.log(data.name) // Springer
data.name = "Barry"
console.log(data.name) // Barry
```
:::

### 深度监听data变化

### 深度监听数组变化

## vdom / diff算法

## 模版编译

## 组件渲染过程

## 前端路由

