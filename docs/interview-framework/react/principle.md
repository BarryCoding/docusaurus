---
sidebar_position: 3
---

# React 原理

## 函数式编程
:::tip
- 一种编程范式
- 纯函数
  1. 若函数调用参数相同 则永远返回相同结果
  2. 该函数不会产生任何可观察的副作用
- 不可变值 
  - 一般组件 state 不修改原始state 尤其是对象和数组 
  - react-redux action 不修改原始store
:::

## vdom / diff 算法
[vue回顾 待处理](#)
:::info vdom
- h 函数
- vnode 数据结构 
```js {2,3,7}
{
  tag:'div', // 1 tag 标签
  props:{  // 2 props 标签属性
    className:'container',
    id:'div1'
  }
  childern:[ // 3 子vnode
    {
      tag:'p',
      children:'vdom'
    },
    {
      tag:'ul',
      props:{
        style: 'font-size: 10px'
      },
      childeren:[
        {
          tag:'li',
          children:'a'
        }
        //...
      ]
    }
    // ...
  ]  
}
```
- patch 函数
:::
:::tip diff 算法
- 只比较同层级 不跨级比较
- tag不同 则直接删掉重建 不继续深度比较
- tag 与 key 都相同 则为同一节点
:::

## JSX本质

## 合成事件

## setState / batchUpdate

## 组件渲染过程

