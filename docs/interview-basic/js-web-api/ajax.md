---
sidebar_position: 4
---

# Ajax

## 题目
- 手写简易 ajax
- [跨域的常用方式](#跨域方式)

## 核心API XMLHttpRequest {#ajax}
```js title='ajax.js'
function ajax(url){
    // 0 返回 promise
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest() // 1 创建xhr
        xhr.open('GET',url,true) // 2 open 连接
        xhr.onreadystatechange = function(){ // 3 onreadystatechange 事件绑定
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                } else if(xhr.status === 404){
                    reject(new Error('page is not found'))
                }
            }
        }
        xhr.send(null) // 4 发送请求
    })
}
```

## 状态码 
### readyState 准备态
- 0 未初始化 还没调用send()
- 1 载入 已调用send() 正在发请求
- 2 载入完成 send()执行完成 已接收到response
- 3 交互 解析response
- 4 解析完成 客户端可调用解析后的响应内容
### status 返回状态
- 2xx 成功处理请求 200
- 3xx 重定向 301(永久) 302(临时) 304(资源未改变)
- 4xx 客户端错误 404(页面找不到) 403(无权限)
- 5xx 服务端错误

## 浏览器同源策略
- ajax请求时 **浏览器要求** 当前网页和server同源（安全）
- 同源要求: 1协议 2域名 3端口 三者必须都一致
### 前端 无视同源策略
1. `<img src='xxx.gif'>` img文件
   - 统计打点
2. `<link href='xxx.css'>` css文件
   - CDN
3. `<script src='xxx.js'>` js文件
   - CDN
   - JSONP

## 跨域方式
:::caution 跨域前提
- 必须经过 server端 允许和配合
- 未经过server端实现跨域 说明浏览器有漏洞
:::
:::tip 跨域方式
1. JSONP 前端跨域处理
2. CORS 服务端跨域处理 http header配置
:::

### JSONP
1. `<script src='xxx.js'>` 可绕过跨域
2. 服务器可任意动态拼接数据返回
3. 若服务端配合 script标签可获取跨域数据
```html title='index.html'
<!-- 先定义好函数 -->
<script>
    window.abc = function (data) {
        console.log(data)
    }
</script>
<!-- 也可以状态创建script标签 jsonp跨域返回函数的执行 可传参数 -->
<script src="http://localhost:8002/jsonp.js?username=xxx&callback=abc"></script>
```
```js title='jsonp.js'
// 根据参数 动态返回 执行的函数 
abc({ name: 'xxx' })
```


## ajax插件
1. jquery 没用promise
2. fetch 返回promise
3. axios 对 XMLHttpRequest封装返回promise
