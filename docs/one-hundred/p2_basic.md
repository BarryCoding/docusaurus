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

- todo 合并 防抖和节流

:::danger 区别与共性
- 相同点
  - 防抖和节流都用于处理频繁触发的操作，优化操作体验。
- 不同点
  - 防抖，关注结果 密集触发 只执行最后一次
  - 节流，关注过程 按合理频率 有节奏的执行
- 地球绕太阳运动1年365天 地球运动轨迹
  - 防抖 关注结果 获得 终点到起点2维距离 
  - 节流 关注过程 获得 每天的运动起始距离 能得到1年过程中的运动轨迹 不是一个2维平面圆 而是3维螺旋前进
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
- arguments 参数
- 无法改变 this 函数无法call apply bind
- 多个箭头函数链式写法 难以阅读 (装逼过头)
:::

:::caution 不适用场景
- 对象方法
- 对象原型 
- 构造函数
- 动态上下文 如addEventListener
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

:::tip 点外卖 类比
#### 3握手
1. 用户点开周黑鸭外卖app 用户的手机网络正常
2. 外卖app提供各种美食 商家外卖app正常运行
3. 用户准备下单 在思考吃啥 外卖app发现有用户准备点他家外卖

#### 4挥手
1. 用户下单 鸭脖10份 鸭架3份 点击支付宝完成付款 用户完成订单
2. app回馈 已经收到货款 鸭脖10份 鸭架3份 准备中 商家收款成功 并开始准备外卖
3. app回馈 外卖已在路上 快递员马上就到 商家寄出外卖
4. 用户收到外卖 订单完成 用户关闭app
:::

## 7 for 循环

### 7.1 for-in | for of
:::danger 区别
- for...in 遍历 key , for...of 遍历 value
- for...in 遍历一个对象的“可枚举属性 enumerable”，如对象、数组、字符串。针对属性，所以获得 key
  - 原理 `Object.getOwnPropertyDescriptors(obj)` 对象的属性描述 `enumerable: true`
- for...of 遍历一个“可迭代对象 Symbol.iterator”，如数组、字符串、Map/Set 。针对一个迭代对象，所以获得 value
  - 原理 `arr[Symbol.iterator]` 迭代器模式，通过一个 `next` 方法返回下一个元素
  - 如 `arguments` `NodeList` `Map` `Set` `generator`
:::

### 7.2 for-await-of

## 8 offset | scroll | cilent + Height

## 9 HTMLCollection vs NodeList

## 10 Vue computed vs watch

## 11 Vue 通讯方式
### 11.1 props-emits 自定义事件
### 11.2 props-$attrs
### 11.3 props-$parents | $refs
### 11.4 props-provide | inject

## 12 Vuex action vs muation

## 13 JS 严格模式

## 14 Http
> HTTP跨域时为何要发送options请求

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