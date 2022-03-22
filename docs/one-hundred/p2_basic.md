---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 根基-基础知识
- [前端知识体系-思维导图](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)

:::danger 重点
1. HTML CSS JS 基础知识
2. HTTP Ajax 基础知识
3. Vue React 基础知识
:::

:::caution 常见考题
1. Ajax Fetch Axios 区别
2. 箭头函数缺点 哪里不能用箭头函数
3. Vue 组件通讯方式 尽可能全面
:::

## 1 Ajax
>Ajax Fetch Axios 区别？

:::tip 解答
- ajax 是一种技术称呼，不是具体的 API 和库
- fetch 是新的异步请求 API ，可代替 XMLHttpRequest
- axios 是第三方库
:::

:::info 问题衍生
1. 库 和 API 区别
  - API 是`轮子零件`（底层逻辑）， 
  - 库 是对轮子零件进行组装/封装，形成高效`好用的轮子`
2. 库 和 框架 区别
   - 框架比库更复杂一层 管理多个不同库
   - 把vue框架比做一个`公司结构` 不同公司擅长不同业务
   - 每个库就是公司的各个部门 `不同部门`各司其职 解决某一方面问题
     - element 如 员工着装+工牌
     - axios 如 公司内部物流 要进货原材料 再出货自己的产品
     - vue核心库 如 公司的行政部门 统一管理不同部门
   - 也可以一部分业务外包给别的公司 付费3方库(微服务)
     - 语音服务 邮箱服务 云服务 等等
:::

:::note 知识扩展
<Tabs>
<TabItem value="ajax" label="AJAX 技术">

> Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）即使用 JS 进行异步请求 基于过去 JS 规范，异步请求主要使用 XMLHttpRequest 这个底层 API 。

```js
function ajax(url, successFn) {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.onreadystatechange = function () {
        // 这里的函数异步执行，可参考之前 JS 基础中的异步模块
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                successFn(xhr.responseText)
            }
        }
    }
    xhr.send(null)
}
```

</TabItem>
<TabItem value="fetch" label="fetch API">

> fetch 是一个原生 API ，它和 XMLHttpRequest 一个级别。

- fetch 和 XMLHttpRequest 的区别
  - 写法更加简洁
  - 原生支持 promise

```js
function ajax(url) {
    return fetch(url).then(res => res.json())
}
```

</TabItem>
<TabItem value="axios" label="axios 库">

> axios 是一个[第三方库](https://www.npmjs.com/package/axios)，随着 Vue 一起崛起。它如同 jquery 3方库（jquery 也有 ajax 功能）。

> axios(库 轮子) 内部可以用 XMLHttpRequest 或者 fetch (api 轮子零件)实现。

</TabItem>
</Tabs>
:::

## 2 防抖
>防抖与节流区别，什么时候用防抖？

>防抖，即防止抖动。病人抖动则需等待他安静下来，再打针。

:::tip 搜索输入框，等密集输入停止后，再执行最终搜索。
```html
搜索 <input id="input1">

<script>
    function debounce(fn, delay = 200) {
        let timer = 0 // 形成闭包
        return function () {
            if (timer) clearTimeout(timer) // 当前密集操作 清空 前一操作
            timer = setTimeout(() => {
                fn.apply(this, arguments) // 箭头函数 透传 this 和 (事件)参数
                timer = 0 // 执行完逻辑 清空定时器
            }, delay)
        }
    }

    const input1 = document.getElementById('input1')
    input1.addEventListener('keyup', debounce(() => {
        console.log('发起搜索请求', input1.value)
    }))
</script>
```
:::

## 3 节流
>防抖与节流区别，什么时候用节流？

>节流，按合理的节奏进行操作。
>- 做菜，将10cm黄瓜等份切，切10段-50段是正常操作，但切200片以上就是不正常操作了，也没有必要。

>例如，drag / scroll 的回调，上传进度的回调，都可以设置一个固定的频率，没必要那么频繁。

:::tip drag 拖拽
```html
<div id="div1" draggable="true" style="width: 100px; height: 50px; background-color: #ccc; padding: 10px;">可拖拽</div>

<script>
    function throttle(fn, delay = 100) {
        let timer = 0
        return function () {
            if (timer) return //上一未完成定时操作 必须执行完
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = 0
            }, delay)
        }
    }

    const div1 = document.getElementById('div1')
    div1.addEventListener('drag', throttle((e) => {
        console.log('鼠标的位置', e.offsetX, e.offsetY)
    }))
</script>
```
:::

:::danger 区别与共性
- 相同点
  - 防抖和节流都用于处理频繁触发的操作，优化操作体验。
- 不同点
  - 防抖，关注结果 密集触发 只执行最后一次
  - 节流，关注过程 按合理频率 有节奏的执行
:::

## 4 px | % | em | rem | vw | vh
:::danger 区别
- px 像素，基本单位，绝对单位
- % 一般相对于父元素的尺寸 
  - 一般用于 等分父容器 25%
- em 相对于当前元素的 `font-size`
  - 一般用于 首行缩进 2em
- rem 相对于根元素html的 `font-size`
  - 一般用于 移动端适配 不同设备需计算1rem
- 1vw 屏幕宽度1% 1vh 屏幕高度1%
  - 一般用于 移动端适配 不同设备无需计算1vw 更简单直接
:::

## 5 箭头函数
>何时不推荐使用箭头函数

:::danger 箭头函数的缺点
- 没有 arguments 参数
- 无法改变 this 
- 无法call apply bind
- 多个箭头函数链式写法 难以阅读 (装逼过头)
:::

:::caution this指向的缘故 不适用场景 
- 对象方法
- 对象原型 
- 构造函数
- 动态上下文 如addEventListener 需要this指向事件对象
- Vue 生命周期和方法
  - Vue 传统组件是一个JS对象 不可用箭头函数
  - React 传统的类组件是一个 class 可用箭头函数 
:::


## 6 TCP
>描述 TCP 3次握手 4次挥手

:::danger 流程
#### 3握手

1. 客户端发包，服务端收到。服务端确认：客户端的发送能力是正常的。
2. 服务端发包，客户端收到。客户端确认：服务端的接收能力是正常的。
3. 客户端发包，服务端收到。服务端确认：客户端即将给我发送数据，我要准备接收。

#### 4挥手
1. 客户端发包，服务端接收。服务端确认：客户端已经请求结束
2. 服务端发包，客户端接收。客户端确认：服务端已经收到，我等待它关闭
3. 服务端发包：客户端接受。客户端确认：服务端已经发送完成，可以关闭
4. 客户端发包，服务端接收。服务端确认：可以关闭了
:::

:::tip 点外卖 结合 理论
#### 3握手
1. 用户点开周黑鸭外卖app 商家需确定用户在送餐区域才提供服务
2. 用户确定 商家现在可以给我送餐 
3. 用户准备下单 点单放入购物车 商家需准备处理 用户订单

#### 4挥手
1. 用户下单 鸭脖10份 点击支付宝完成付款 用户完成订单
2. app回馈 已经收到货款 鸭脖10份 备餐中请稍等
3. 一会后 app回馈 快递员已取餐 在路上了 已寄出外卖
4. 用户收到外卖 给5分评价 订单完成 商家确定收到用户取餐结果
:::

## 7 for 循环

### 7.1 for-in | for of
:::danger 区别
- for...in 遍历 key , for...of 遍历 value
- for...in 遍历一个对象的“可枚举属性 enumerable”，如对象、数组、字符串。针对属性，所以获得 key
  - 原理 `Object.getOwnPropertyDescriptors(obj)` 对象的属性描述 `enumerable: true`
- for...of 遍历一个“可迭代对象 Symbol.iterator”，如数组、字符串、Map/Set 。针对一个迭代对象，所以获得 value
  - 原理 `arr[Symbol.iterator]` 迭代器模式，通过一个 `next` 方法返回下一个元素
  - 如 `arguments` `NodeList` `Map` `Set`
- 数组方法用不了 map函数/foreach函数 
  - 类数组处理 `[...类数组]`
  - 对象处理 ES6 `Object.keys() Object.values()`
:::

### 7.2 for-await-of
- 视频？ 
>遍历的每个value为promise对象


## 8 offset | scroll | cilent + Height
- 视频？ 实际内容的高度

:::danger 区别
- offsetHeight -> border + padding + content
- clientHeight -> padding + content
- scrollHeight -> padding + 实际内容的高度
- scrollTop DOM 内部元素滚动的距离
:::

## 9 HTMLCollection vs NodeList
:::info 基础
- DOM 结构是一棵树，树的所有节点都是 `Node` 
  - 包括：document，元素，文本，注释，fragment 等
- `Element` 继承于 Node 是 html 元素的基类

```js
// 节点类
class Node {}

// document 继承于 节点类
class Document extends Node {}
class DocumentFragment extends Node {}

// 文本和注释 继承于 节点类
class CharacterData extends Node {}
class Comment extends CharacterData {}
class Text extends CharacterData {}

// elem 继承于 节点类
class Element extends Node {}
// 具体元素标签类 则 继承于 元素类
class HTMLElement extends Element {}
class HTMLParagraphElement extends HTMLElement {}
class HTMLDivElement extends HTMLElement {}
// 其他 elem ...
```

- HTMLCollection 和 NodeList 都不是数组，而是“类数组”
  - 使用数组方法前 先转换为数组
```js
const arr1 = Array.from(list)
const arr2 = Array.prototype.slice.call(list)
const arr3 = [...list] // 推荐
```
:::

:::danger 答案
- HTMLCollection 是 Element 集合
  - Element 是 html 元素的基类
  - Element 继承于 Node
  - 扩1 API `elem.children` `document.getElementsByTagName('p')`
- NodeList 是 Node 集合
  - Node 是 DOM 节点的基类
  - 扩1 `elem.childNodes` `document.querySelectorAll('p')`
- 相同点 都不是数组，而是“类数组”
:::

## 10 Vue computed vs watch
:::danger 答案
- computed 就data产出新数据，有缓存。
  - 用于产出 二次处理后的数据
- watch 监听已有数据
  - 用于监听 data具体数据变化

- 举例
  - 公司员工数据为例 进行 计算/监听
  - computed 可以得出 程序员总人数 人均工资
  - watch 可以得出 谁离职 谁入职 根据最新kpi(谁在努力得加薪 谁在偷懒给裁员)
:::

## 11 Vue 通讯方式
:::danger 答案
- 父子组件 通讯
    - `props` `emits` `this.$emit`
    - `$attrs` （也可以通过 `v-bind="$attrs"` 向下级传递）
    - `$parent` `$refs`
- 多级组件 上下级
    - `provide` `inject`
- 跨级、全局
    - 自定义事件
    - Vuex
:::
### 11.1 props-emits 自定义事件
:::info 直接的上下通讯
#### 适用于父子组件。
- 父组件向子组件传递 props 和事件
- 子组件接收 props ，使用 `this.$emit` 调用事件
:::

:::info 自定义事件
#### 适用于兄弟组件，或者“距离”较远的组件。
- 绑定事件 `event.on(key, fn)` 或 `event.once(key, fn)`
- 触发事件 `event.emit(key, data)`
- 解绑事件 `event.off(key, fn)` 有on必有off 完成闭环
  - 【注意】组件销毁时记得 `off` 事件，否则可能会造成内存泄漏

#### Vue 版本的区别
- Vue 2.x 可以使用 Vue 实例作为自定义事件
- Vue 3.x 需要使用第三方的自定义事件，例如 https://www.npmjs.com/package/event-emitter
:::

### 11.2 props-$attrs
- 视频？
:::info new
- `$attrs` 存储是父组件中传递过来的，且未在 `props` 和 `emits` 中定义的属性和事件
- 相当于 `props` 和 `emits` 的一个补充。
- 继续向下级传递，可以使用 `v-bind="$attrs"`。这会在下级组件中渲染 DOM 属性，可以用 `inheritAttrs: false` 避免。
- 【注意】Vue3 中移除了 `$listeners` ，合并到了 `$attrs` 中。
:::

### 11.3 props-$parents | $refs
:::info 找关系或建立关系
#### $parent
- 通过 `this.$parent` 可以获取父组件，获取其属性、调用其方法等。
- 【注意】Vue3 中移除了 `$children` ，建议使用 `$refs`

#### $refs
1. 模板中要设置 `ref="xxx"`。
2. 通过 `this.$refs.xxx` 获取某个子组件
3. 【注意】要在挂载完成后 `mounted` 中获取 `this.$refs` ，不能在 `created` 中获取。
:::

### 11.4 props-provide | inject
- 视频？
:::info 垂直关系
> 如果是多层级的上下级组件通讯，可以使用 provide 和 inject 
1. 在上级组件定一个 provide ，
2. 下级组件即可通过 inject 接收。

- 传递静态数据直接使用 `provide: { x: 10 }` 形式
- 传递组件数据需要使用 `provide() { return { x: this.xx } }` 形式，但做不到响应式
- 响应式需要借助 `computed` 来支持
:::

## 12 Vuex action vs muation
:::danger 答案
- mutation
    - 建议原子操作，每次只修改一个数据，不要贪多
    - 必须是同步代码，方便查看 devTools 中的状态变化
- action
    - 可包含多个 mutation
    - 可以是异步操作
:::

## 13 JS 严格模式
:::info 介绍
- `'use strict'` 在当前作用域 开启严格模式
- Javascript 设计之初，有很多不合理、不严谨、不安全之处
- 现在 ES 规范已经普及，已规避了这些问题
- 一般开发环境用 ES语法规范 或者 Typescript语法规范，而打包的 js 代码使用严格模式
:::

:::danger 常用细则
- 全局变量必须声明
- 禁止使用 with
- 创建 eval 作用域
- 禁止 this 指向全局作用域
- 函数参数 不能重名
:::

## 14 Http
> HTTP跨域时为何要发送options请求
- 视频？

:::info 背景知识
#### 跨域
浏览器同源策略，默认限制跨域请求。跨域的解决方案
- jsonp
  - img link script
- CORS 
  - Cross Origin Resouce Sharing 跨预资源共享

```js
// CORS 配置允许跨域（服务端）
response.setHeader("Access-Control-Allow-Origin", "http://localhost:8011") // 或者 '*'
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With")
response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
response.setHeader("Access-Control-Allow-Credentials", "true") // 允许跨域接收 cookie
```

#### options 请求

该请求就是为了检查服务端的 headers 信息，是否符合客户端的预期。所以它没有 body 的返回。

> 规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。—— MDN
:::

:::danger 答案
options 请求就是对 CORS 跨域请求之间的一次预检查，检查成功再发起正式请求，是浏览器自行处理的。
:::

## 15 Restful API
:::danger 总结
- C 新增 POST
- R 查询 GET
- U 更新 PUT | PATCH
- D 删除 DELETE
:::

:::info 案例 文档的增删改查
- C 新增 POST
  - url `http://xxx.com/api/doc`
- R 查询 GET
  - url `http://xxx.com/api/doc/666` 单个查询
  - url `http://xxx.com/api/doc` 列表查询
- U 更新 PUT / PATCH
  - url `http://xxx.com/api/doc/666`
  - 更新区别内容 PUT 完全替换
  - 更新部分内容 PATCH 常见的场景
- D 删除 DELETE
  - url `http://xxx.com/api/doc/666`
:::