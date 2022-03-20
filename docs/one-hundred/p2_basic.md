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

## 3 节流
>防抖与节流区别，什么时候用节流？

## 4 px | % | em | rem | vw | vh

## 5 箭头函数
>何时不推荐使用箭头函数

## 6 TCP
>描述 TCP 3次握手 4次挥手

## 7 for 循环

### 7.1 for-in | for of

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