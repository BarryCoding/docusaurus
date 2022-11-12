---
sidebar_position: 3
---

# React 原理

## 1 函数式编程 {#fn}
:::tip
- 一种编程范式
- 纯函数
  1. 若函数调用参数相同 则永远返回相同结果
  2. 该函数不会产生任何可观察的副作用
- **不可变值** 
  - 一般组件 state 不修改原始state 
    - 尤其是对象和数组 
  - react-redux  reducer 中不改原始store 返回新store
:::

## 2 vdom / diff 算法
[vue回顾](../vue/principle.md#diff)
:::info vdom
1. React.createElement()
2. vnode 数据结构 
```js {2,3,7}
{
  tag:'div', // 1 tag 标签 或 自定义组件
  props:{  // 2 props 标签 或 组件属性
    className:'container',
    id:'div1'
  }
  childern:[ // 3 子vnode 或 内容
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
3. patch 函数
:::
:::tip diff 算法
- 只 **同层级比较** 不跨级比较
  - tag 组件名 比较
    - 不同 则直接删掉重建 不继续比较
    - 相同 继续比较 key
:::

## 3 重点 JSX本质 {#jsx}
:::tip JSX本质
- 等同与vue模版 template部分
- 不是纯粹的html 也不是纯粹的js
- 核心 `React.createElement()` 类似h函数 返回 虚拟dom
  - 第一个参数 
    - 可能是 自定义组件 组件名首字母大写 
    - 可能是 html 原生标签 首字母小写
  - 第二个参数 vnode 属性/方法
  - 第三个参数 childVnodes/内容
:::

:::info examples
```js
React.createElement('div', null, [child1, child2, child3])
React.createElement('div', {...}, child1, child2, child3)
React.createElement(List, null, child1, child2, '文本节点')
```
:::

## 4 SyntheticEvent {#event}
- [回顾React事件](./app/basic.md#event)

:::info 合成事件介绍
1. event 是 SyntheticEvent ，模拟出来 DOM 事件所有能力
   - event 不是原生事件
   - event.nativeEvent 才是 原生事件对象
3. 所有的事件，都被挂载到 document/root 上 进行事件代理
   - event.nativeEvent.currentTarget
4. ~~和 DOM 事件不一样，和 Vue 事件也不一样~~
:::

:::tip 优点
- 更好的兼容和跨平台 如移动端
- 事件挂载到document/root上 减少内存消耗 避免频繁解绑
- 方便事件的统一管理  **事务机制**
:::

:::danger React17更新
- React 16 事件绑定到 document
- React 17 事件绑定到 root节点 App组件
  - 便于多个React版本并存 如微前段

![difference](/img/react/react_17_event_delegation.png)
:::

## 5 重点 setState / batchUpdate
- [回顾setState](./app/basic.md#setState)
:::info setState
- setState 是否异步
  - 可能异步（普通使用）
  - 可能同步（setTimeout DOM事件）
- setState 是否合并
  - 有时合并（对象形式） 合并相当于属性值的压盖 
  - 有时不合（函数形式）
:::

### setState 主流程
:::info 主流程
1. this.setState(newState)
2. newState 存入 pending 队列
3. batch update 机制是否触发
   - 是 保存组件到 dirtyComponents 
     - 异步的setState
   - 否 遍历所有的 dirtyComponents 
     - 同步的setState
     - 调用 updateComponent
     - 更新 pending state 与 props
:::

### batchUpdate / dirtyComponents {#dirty}
:::info 图解 与 分析
- batchUpdate 触发机制
  - 能够命中
    - 生命周期函数
    - React中注册的事件
  - 不能命中 
    - setTimeout / setInterval
    - 自定义DOM事件 addEventListener
- transaction 事务机制
  - isbatchingUpdate 
:::

### 事务机制
:::info 图解 与 分析
1. 在头部插入 initialize 比如 isbatchingUpdate = true 
2. 正常执行 setState()
3. 在尾部插入 close 比如 isbatchingUpdate = false 
4. 多个事务顺序 先入先出

```js
fn = () => {
  isBatchingUpdate = true // 开始

  // 逻辑处理
  setState(newState) // isBatchingUpdate true 触发
  setTimeout(()=>{
    setState(newState) // isBatchingUpdate false 不触发
  })

  isBatchingUpdate = false // 结束
}
```
:::

## 6 组件渲染过程
- [回顾Vue](../vue/principle.md#render) 组件渲染与关系过程
- [回顾JSX本质](#jsx) `createElement` -> vnode
- [回顾dirtyComponents](#dirty) 

:::tip 首次渲染
- props state 初始值/默认值
- render() 生成 vnode
- patch(emptyEle,vnode)
:::
:::tip 触发更新
- setState(newState) -> dirtyComponent batchUpdate机制
- render() 生成 newVnode
- patch(vnode,newVnode)
:::

### React-fiber 技术
:::danger 历史 性能问题
- JS单线程 与DOM渲染 是同线程
- 若组件足够复杂 组件更新 diff计算和组件渲染 压力变大
- 若再加上DOM操作（动画/鼠标拖拽 连续型操作等）将卡顿
:::

:::info 更新分为 2阶段
1. 阶段一 reconciliation 执行diff算法 找出想要更新的vnode 可拆分
2. 阶段二 commit 将diff对比最小修改结果 渲染到DOM 不可拆分
:::

:::tip 解决方案 fiber
- 将 reconciliation阶段 任务进行拆分
- 核心API window.`requestIdleCallback` 判断
  - DOM需渲染 繁忙时 暂停 reconciliation
  - DOM渲染完 空闲时 恢复 reconciliation
:::

