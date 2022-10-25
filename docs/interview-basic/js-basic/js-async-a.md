---
sidebar_position: 4
---

# 异步基础
:::info
1. [同步与异步区别](#async)
2. [前端异步使用场景](#application)
3. 手写 Promise加载一张图片
:::

## 同步与异步 {#async}
- JS 是单线程语言 同时只能做一件事
  - 异步不阻塞代码执行 如 `setTimeout(fn,1000)`
    - 回调函数
  - 同步会阻塞代码执行 如 `alert(100)`

## 异步应用场景 {#application}
1. 网络请求 如 ajax 图片加载
2. 定时任务 如 setInterval / setTimeout

## Promise 基本使用
:::danger 历史原因
- 回调地狱 函数内部层层嵌套其他函数逻辑
- 嵌套地狱 if层层嵌套if
  - check clean code？
:::
:::tip 解决方案
- Promise 函数之间如管道串联 链式结构
:::
```js title='promise1.js'
function getData(url){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url,
            success(data){
                resolve(data)
            },
            error(err){
                reject(err)
            }
        })
    })
}

getData(url1)
.then(data1=>getData(url2))
.then(data2=>getData(url3))
.then(data3=>console.log(data3))
.catch(err=>console.log(err))
```

## 面试题
1. [同步与异步区别](#async)
2. [前端异步使用场景](#application)
3. 手写 Promise加载一张图片
```js
function loadImg(src){
    return new Promise((resolve,reject)=>{
        const img = document.createElement('img')
        // 图片 加装成功 与 加装失败
        img.onload = ()=>{
            resolve(img)
        }
        img.onerror = ()=>{
            reject(new Error('图片加载失败 '+src))
        }
        img.src = src
    })
}
loadImg(url1)
.then(img1=>loadImg(url2))
.then(img2=>loadImg(url3))
.then(img3=>console.log(img3.height))
.catch(err=>console.log(err))
```
