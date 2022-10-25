---
sidebar_position: 3
---

# 事件

:::info 题目
- 编写 通用事件监听函数
- 描述 事件冒泡流程
  1. 基于DOM树形结构
  2. 事件沿着触发元素向上冒泡
  3. 场景 事件代理
- 无限下拉列表 如何监听每个图片的点击
:::
## 事件绑定
- addEventListener 
- removeEventListener
- e.preventDefault 阻止自身默认行为 a标签跳转
```js {5-7}
// 原生事件绑定
const btn = document.getElementById('btn1')
btn.addEventListener('click', event =>{
    console.log('click')
    console.log(event.target) // 事件触发元素
    event.preventDefault() // 阻止默认行为
    event.stopPropagation() // 阻止事件冒泡
})

// 手写绑定函数
function myBindEvent(ele,type,fn){
    ele.addEventListener(type,fn)
}
```
## 事件冒泡
由内而外 由子到父
- 阻止冒泡 e.stopPropagation

## 事件代理
- 利用事件冒泡
- 代码简洁 事件绑定到父/组元素上
- 减少浏览器内存占用
```js
function proxyEvent(elem, type, fn, selector) {
    elem.addEventListener(type, event => {
        event.preventDefault() // 阻止默认行为
        const target = event.target // 事件触发元素
        if (selector) {
            // 代理绑定
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            // 普通绑定
            fn.call(target, event)
        }
    })
}
```
