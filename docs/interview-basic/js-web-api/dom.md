---
sidebar_position: 1
---

# DOM
:::caution 前言
- VUE / React框架 封装了DOM操作
- DOM操作是 基础和必备知识
- 会VUE 不会DOM 渣渣
:::
## 本质
:::info
Document Object Model: html文件解析出来的树形结构
:::

## 节点操作
1. 获取 DOM节点
  - getElementById(id)
  - getElementsByTagName(tag)
  - getElementsByclassName(className)
  - querySelectorAll(cssSelector)
2. 节点 attribute
  - node.getAttribute(key)
  - node.setAttribute(key,value)
  - 修改标签属性 **改变了html**
3. 节点 property 常用
  - 以JS对象操作属性 `node.propertyName`
  - 修改对象属性 **不改变html**

## 结构操作
1. 新增/插入/移动 节点
  - `createElement(tagStr) dad.appendChild(node)`
2. 获取子元素list 获取父元素
  - `parentNode childNodes`
3. 删除子元素
  - `removeChild(child)`

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
- DOM操作非常昂贵 避免频繁DOM操作
- 将频繁DOM操作 改为一次性操作
  - 文档片段 `createDocumentFragment()`
- 对DOM查询做缓存
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

