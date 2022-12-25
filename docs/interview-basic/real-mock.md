---
sidebar_position: 7
---

# 初级真题

## 1 何为变量提升
:::info
- var let const
  - var es5 有变量提升 为undefined
  - let const es6 有块级作用域 最基本代码书写规范
- typeof 返回那些类型
  - undefined string number boolean symbol
  - object
  - function
- 列举 强制类型转换 隐式类型转换
  - 强制 parseInt parseFloat toString
  - 隐式 if ! == +
:::

## 2 手写深度比较 isEqual
:::info
- lodash isEqual
- split() join()
  - str.split(sep) => arr
  - arr.join(sep) => str
- pop() push() unshift() shift()
  - 都不是纯函数 影响原数组 
    - pop() 返回 尾元素
    - shift() 返回 头元素
    - push(item) 尾插入 返回 length
    - unshift(item) 头插入 返回 length
  - 数组 纯函数 不改变原数组 返回新数组
    - concat
    - map
    - fliter
    - slice
:::
```js
// 辅助函数 是否是对象或数组
function isObject(obj){
  return typeof obj === "object" && obj !== null
}
function isEqual(obj1, obj2){
  if(!isObject(obj1) || !isObject(obj2)){
    // 非对象 则 值比较
    return obj1 === obj2
  }
  // 地址相等
  if(obj1===obj2){return true}
  // 正常比较
  // 1 比较key的数量
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  // key数量不同 则一定不相等
  if(obj1Keys.length !== obj2Keys.length){
    return false
  }
  return obj1Keys.every((key)=>isEqual(obj1[key], obj2[key]))
}
```

## 3 数组map
:::info
- 数组 slice splice 区别
  - slice 剪切 纯函数
  - splice 剪辑 非纯函数
- `[10,20,30].map(parseInt)` 返回结果
```js
[10,20,30].map((item,index)=>parseInt(item,index))
// parseInt(10,0) // 10
// parseInt(20,1) // NaN
// parseInt(30,2) // NaN
```

- ajax get post 的区别
  - get 用于查询 参数拼接在url
  - post 用于提交 参数放在请求体 更安全
:::

## 4 闭包
:::info
- call apply 区别
  - fn.call(this, p1,p2,p3)
  - fn.apply(this, arguments)
- 事件代理 是什么
  - 上层容器 根据 选择器判断 处理事件
- 闭包是什么 有什么特性 有什么负面影响
  - 函数作为参数 或者 作为返回值
  - 变量 在函数定义处查找
  - 变量会常驻内存 得不到释放
:::

## 5 DOM操作与优化
:::info
- 如何阻止 事件冒泡和默认行为
  - e.stopPropagation
  - e.preventDefault
- 查找 添加 删除 移动 DOM
  - getElementsByXx
  - appdenChild
  - removeChild
- 减少DOM操作
  - 查询缓存
  - 统一操作 createElementFragment
:::

## 6 jsonp 本质是 ajax 吗
:::info
- 解释 jsonp原理 为何不是 ajax
  - 浏览器 同源策略 协议/域名/端口 不同导致跨域
  - html link img script 绕过跨域
    - script 得到后端 返回的 带参数函数的执行
    - 前端自定义此同名函数 对其参数进行处理
- document的 load ready 区别
  - load事件 在全部资源（图片视频）加装完后执行
  - DOMContentLoaded事件 DOM渲染完后执行（图片视频等可能未加装完）
- == === 区别
:::

## 7 Object.create()
:::info
- 函数 声明/表达式 区别 
  - 声明 function fn()
    - 会预加装 
    - 函数定义提升
  - 表达式 const fn = function(){}
    - 赋值给 常量 
    - 函数定义不提升
- New Object() / Object.create() 区别
  - New Object 相当于 自变量形式{}
  - Object.create(prototypeObj)
  - 原型问题！！！ 
- this 场景
  - this 由谁来执行确定
:::

## 8 常见 正则表达式
:::info
- `const reg = /^[a-zA-Z]\w{5-29}$/`

:::

## 9 获取最大值
- Math.max()

## 10 URL参数
:::info
- 如何捕获 JS 异常
```js
// 手动捕获 异常
try {
  // 异常可能代码
} catch (e) {
  console.log(e) 
} finally {
  // 成功 失败 都到达此次
}

// 自动捕获 异常
window.onerror = fn
```

- 什么是 JSON
  - 一种数据格式 XML
  - 本质是字符串
  - 结构 与 JS对象一致 
    - key 一定要用双引号
  - API
    - JSON.stringify(obj)
    - JSON.parse(str)

- 获取当前页面URL参数
  - location.search
  - URLSearchParams(location.search)
:::
## 11 数组去重
:::info
- url参数解析为对象
  - location.search.substr(1) 去？
  - split('&') split('=') key value

- 手写数组 faltern 考虑多层级
```js
function flat(arr) {
  let isDeep = arr.some(item => item instanceof Array)
  if(!isDeep){
    return arr // 无深层 已经扁平
  }
  const res = [].concat(...arr)
  return flat(res) // 递归处理
}
```

- 数组去重
```js
[...new Set(arr)]
```
:::

## 12 requestAnimationFrame
:::info
- 需要动画流畅 更新频率要每秒60帧，约16.67ms更新一次试图
- setTimeout 手动控制16.67ms频率 requestAnimationFrame浏览器自动控制
- 后台标签/iframe中 setTimeout继续 RAF会暂停
  - 如切换tab后 动画会暂停 回到页面后继续动画
:::

## 13 有序无序

:::info
- 无序 操作快
  - object
- 有序 操作慢 按顺序处理逻辑
  - array
:::


## 14 Map Object 区别
:::info
- API 不同 
  - get set delete has forEach size
- Map 可以使用任意类型为 key
  - Object key 只能是字符串
- Map 有序结构 但操作也很快
:::
```js
const m = new Map([
  ['key2', 200],
  ['key1', '100'],
  [obj1,obj2] // 任意类型为key 可关联数据
])
m.get(obj1)
m.set('key3','Springer')
m.delete('key1')
m.has('key2')
m.forEach(item=>console.log(item)) // 有序打印
m.size
```

## 15 Set Array 区别
:::info
- API 不同
  - add delete has forEach size
- Set 元素不能重复
- Set 无序结构 速度快
:::

```js
const s = new Set([1,2,3,4])
s.add(5)
s.delete(1)
s.has(2)
s.size
s.forEach(item=>console.log(item)) // 没有 index
```

## 16 WeakMap WeakSet
:::info
- 弱引用 `防止内存泄漏`
  - 当对象销毁后 key或item 也删除了
- WeakMap 只能用 `对象作为key`
  - 可用于对象之间的关联 且对象彼此独立 不影响对象销毁
- WeakSet 只能用 `对象作为item`
- 没 forEach size 
  - 对象可能被销毁 无法确定具体数据
- 有 add/set delete has
:::

## 17 reduce
- arr.reduce(fn, initialResult)
  - initialResult 参数
- fn 函数参数 
  - preResult 首次为 initialResult
  - item 为数组循环当前元素
  - index 当前下标 array 原始数组
  - return 计算的Result
```js
arr.reduce((prevResult,item)=>{
  let currentResult = preResult + item
  return currentResult
}, initialResult)
```