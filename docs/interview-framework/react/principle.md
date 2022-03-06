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
[vue回顾](../vue/principle.md#diff)
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
:::info JSX本质
- 等同与vue模版 template部分
- 不是html
- 也不是js
- `React.createElement()` 类似h函数 返回vnode
  - 第一个参数 可能是组件（组件名首字母必须大写） / html tag（原生标签名首字母小写）
  - 第二个参数 就是组件/标签 属性/方法
  - 第三个参数 就是childVnode/内容
:::

:::tip [babel在线转译](https://www.babeljs.cn/)
- 可tab化 取出在线编译的结果 todo？
```js
// JSX 基本用法
const imgElem = <div id="div1">
    <p>some text</p>
    <img src={imgUrl}/>
</div>

// JSX style
const styleData = { fontSize: '30px',  color: 'blue' }
const styleElem = <p style={styleData}>设置 style</p>

// JSX 加载组件
const app = <div>
    <Input submitTitle={onSubmitTitle}/>
    <List list={list}/>
</div>

// JSX 事件
const eventList = <p onClick={this.clickHandler}>
    some text
</p>

// JSX list
const listElem = <ul>{this.state.list.map((item, index) => {
    return <li key={item.id}>index {index}; title {item.title}</li>
})}</ul>

// 总结
React.createElement('div', null, [child1, child2, child3])
React.createElement('div', {}, child1, child2, child3)
React.createElement(List, null, child1, child2, '文本节点')
```
:::

## 合成事件

## setState / batchUpdate

## 组件渲染过程

