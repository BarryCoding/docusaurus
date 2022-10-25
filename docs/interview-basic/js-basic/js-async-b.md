---
sidebar_position: 5
---

# 异步高级

:::info keys
- event loop
- promise advanced
- async await
- micro macro
:::

:::danger
- 描述 event loop （事件循环 事件轮询）的机制
- 什么是 宏任务 微任务 区别
- Promise 3种状态 与状态变化
```js
// Q1
Promise.resolve().then(()=>{
  console.log(1)
}).catch(()=>{
  console.log(2)
}).then(()=>{
  console.log(3)
})

// Q2
Promise.resolve().then(()=>{
  console.log(1)
  throw new Error('er')
}).catch(()=>{
  console.log(2)
}).then(()=>{
  console.log(3)
})

// Q3
Promise.resolve().then(()=>{
  console.log(1)
  throw new Error('er')
}).catch(()=>{
  console.log(2)
}).catch(()=>{
  console.log(3)
})
```
- then 与 catch 的链接
- async / await / Promise
- promise setTimeout 执行顺序
:::

## Event Loop
- JS 是 单线程运行
- 异步 基于回调
- event loop 是 异步回调 实现原理

### 执行过程
:::info 概念
- Call Stack
- Web APIs
- Event Loop
- Callback Queue
:::

:::tip 流程
1. 同步代码 从上至下 在 Call Stack 执行
2. 遇到异步代码(定时任务 网络请求等) 先记录 等待时机
3. 当时机到了(定时时机到了 网络返回) 再移动到 Callback Queue
4. 同步代码 执行完； Call Stack 为空； Event Loop 开始运作
5. 轮询查找 Callback Queue, 有则移动到 Call Stack 执行
6. 无限轮询下去
:::
### DOM event 与 event loop
:::tip 流程
1. 同步代码 从上至下 在 Call Stack 执行
2. 遇到事件 先监听事件 等待事件触发
3. 同步代码 执行完； Call Stack 为空； Event Loop 开始运作
4. 当事件触发时 再移动到 Callback Queue
5. 轮询查找 Callback Queue, 有则移动到 Call Stack 执行
6. 无限轮询下去
:::

## Promise Advanced

### 3 status
- pending 不会触发then/catch 还未 resolve/reject
  - resolved 不可逆 触发 then回调
  - rejected 不可逆 触发 catch回调

### then/catch
:::tip
- then回调
  - 正常返回 resolved 可继续触发下个 then回调
  - 报错返回 rejected 可继续触发下个 catch回调
- catch回调 同 then回调
  - 正常返回 resolved 可继续触发下个 then回调
  - 报错返回 rejected 可继续触发下个 catch回调
:::
:::danger
- Q1 1 3
- Q2 1 2 3 catch 正常返回 resolved状态
- Q3 1 2
:::
## async/await
- 用同步语法 不用回调函数写异步
- async 包裹 函数
  - await 获取 Promise resolved 数据

:::tip 与 Promise 关系
- 执行 async函数fn 返回的是 Promise对象
  - fn() 返回 promise
- await 相当于 Promise 的 then
  - await fn() 返回 resolve() 数据
- try catch 捕获异常 替代 Promise 的 catch
```js
try{
  await fn()
}catch (e){
  console.log(e)
}
```
:::

:::info 本质
- JS还是单线程 有异步 有 event loop
- async/await 取消了异步回调的写法
  - **await 后代码 看为 异步回调**
  - 语法糖 但真香

```js
async function async1(){
  console.log('1')
  await async2()
  // await 后方代码 作为 异步回调代码
  console.log('2')
}
async function async2(){
  console.log('3')
}
console.log('4')
async1()
console.log('5')
```
- 区分 async1() 与 await async2()
  - async1() 直接执行内部代码
  - await async2() 有 await 触发回调机制
- 顺序 4 1 3 5 2
:::
## microTask macroTask
- Micro 比 Macro 早执行
- MicroTask 微任务 DOM渲染前
  - Promise 
  - async/await
- MacroTask 宏任务 DOM渲染后
  - setTimeout setInterval 
  - Ajax 
  - DOM-event

### event loop & DOM render
- JS 单线程 与 DOM render 同一个线程
- JS 执行时 需留时间给 DOM render

:::tip 流程补充 DOM渲染
当 Call Stack 为空闲时
- 先尝试 DOM render 若JS改变了DOM结构
- 再触发 Event loop
:::
### difference
- 微任务 如 Promise
  - ES6 语法规定
  - micro task queue 中处理 微任务
  - **DOM渲染前触发** 
- 宏任务 如 setTimeout
  - 浏览器 规定
  - callback queue 中处理 宏任务
  - **DOM渲染后触发** 

:::tip 流程补充 DOM渲染
当 Call Stack 为空闲时
1. 先执行微任务
2. 再尝试 DOM render 
3. 再触发 Event loop 执行宏任务
:::

## Hand writing Promise
- 有意义吗？

<!-- 看看就好 不笔记了 -->
1. 构造函数 
2. 链式调用
3. API all() race() resolve() reject()