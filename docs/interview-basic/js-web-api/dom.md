---
sidebar_position: 1
---

# DOM
:::caution 前言
- VUE / React框架 封装了DOM操作
- DOM操作是 基础和必备知识
- 只会VUE 不会DOM 渣渣
:::

:::info
- DOM 是什么数据结构
- DOM 常用API
- attr 与 property 区别
- 一次性插入多个DOM节点 性能优化
:::
## 本质
- document
:::info
Document Object Model: html文件解析出来的 **树形结构**
:::

## 节点操作
- 获取 DOM节点 `document`
  - `getElementById(id)`
  - `getElementsByTagName(tag)`
  - `getElementsByclassName(className)`
  - `querySelectorAll(cssSelector)`
- 节点 attribute
  - 以 API 形式操作
    - node.`getAttribute(key)`
    - node.`setAttribute(key,value)`
  - 修改标签属性 **attribute 改变了 html**
- 节点 property 常用
  - 以 JS对象属性 操作 
    - node.`propertyName`
  - 修改对象属性 **property 不改变 html**

## 结构操作 CRUD
- 新增/插入/移动 节点
  - 新增 `document.createElement(tagStr)`
  - 插入 `dad.appendChild(node)`
  - 移动 `newDad.appendChild(node)`
- 获取子元素list 获取父元素
  - `child.parentNode`
  - `dad.childNodes` `dad.children`
- 删除子元素
  - `dad.removeChild(child)`

```js title='node-structure.js'
const div1 = document.getElementById('div1')
const p1 = document.createElement('p') // 创建节点
p1.innerHTML = 'this is p1'
div1.appendChild(p1) // 插入节点
const p2 = document.getElementById('p2')
div1.appendChild(p2) // 移动节点

const dad = div1.parentNode // 获取 父节点
const childs = div1.childNodes // 获取 子节点
const childsList = Array.prototype.slice.call(childs).filter(child=>child.nodeType===1) // 子元素节点
const firstEle = childsList[0]
div1.removeChild(firstEle) // 删除子元素
```

## 性能
:::danger 
DOM操作非常昂贵 避免频繁DOM操作
- 对DOM查询做缓存 不要重复查询
- 将频繁DOM操作 改为一次性操作
  - `createDocumentFragment()`
  - 文档片段 集中处理 和 过渡
:::
```js title='performance.js' {2,3,7,8,10,11}
const list = document.getElementById('list')
// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment()
for (let i  = 0; i < 20; i++) {
    const li = document.createElement('li')
    li.innerHTML = `List item ${i}`
    // 先插入文档片段中
    frag.appendChild(li)
}
// 都完成之后，再统一插入到 DOM 结构中
list.appendChild(frag)
```

