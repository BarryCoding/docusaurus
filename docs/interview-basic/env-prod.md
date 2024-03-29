---
sidebar_position: 6
---

# 运行环境

## js线上运行在哪
:::info 
- 运行环境: 浏览器/app
- 需先下载代码 再渲染网页 并执行js
- 应保证 在浏览器/app中 稳定且高效
:::

## 网页加载与渲染
:::info 题目
- 从输入url到渲染出页面的整个过程
- window.onload VS. DOMContentLoaded
  - onload 必须 所有资源加载完成 包括图片视频等
  - DOMContentLoaded DOM加载完成 不包括图片视频等 更好的选择
:::

### 3知识点
1. 加载资源的形式
  - html
  - 媒体文件 图片/视频等 不会阻塞页面渲染
  - js / css

2. 加载资源的过程
     1. DNS解析 域名到IP地址 (Domain Name Server)
     2. 浏览器根据 IP地址 向服务器发起 http请求
     3. 服务器处理 http请求 并返回给浏览器

3. 渲染页面的过程
     1. 根据 html代码 生成 DOM-Tree
     2. 根据 css代码 生成CSSOM 
        - css放head中 相当于先穿衣服再出门 不然前期有空样式页面
     3. 将 DOM-Tree 和 CSSOM 整合成 Render-Tree
     4. 根据 Render-Tree 渲染页面
     5. 遇到 script 将暂停渲染 先加载执行js代码 再继续 
        - script 放在body最后 为了让主要内容先渲染出来 避免阻塞页面渲染
        - 使用 DOMContentLoaded 
     6. 直到页面渲染完成

## 前端性能优化 扩展 {#performance}
- 加载 更快
  - 减少资源体积 压缩代码 `webpack`
  - 减少访问次数 
    - 合并多文件到一个文件 `webpack` `雪碧图`
    - SSR服务端渲染 网页和数据一起加载 一起渲染
      - 非SSR 先加装页面 在加装数据 在渲染页面 更繁琐
    - 使用缓存 webpack配置 静态文件名加后缀contenthash 根据内容算hash 触发http缓存机制304
  - 使用更快的网络 CDN 获取静态资源
- 渲染 更快
  - css放在head js放在body最后
  - 尽快执行js 用DOMContentLoaded事件触发
  - 懒加载 图片/滑动加载
    - `<img src="loading.img" data-src="xxx.img">` 滑动到窗口再将 data-src 赋值给 src
  - 减少DOM开销
    - 对DOM查询进行缓存 
    - 把频繁DOM操作 合并到一起
  - 节流和防抖 体验优化

### 手写防抖 debounce
:::caution 防抖场景
- `<input type="text" id="input1">`
- 监听输入框文字输入 keyup频繁触发多余的change事件
- 防抖 用户输入暂停或结束时 才触发**最后的**change事件
:::
```js title='debounceMock.js'
const input1 = document.getElementById('input1')
let timer = null
input1.addEventListener('keyup', function(e){
  // 若再次快速输入 则清空上个定时器
  if(timer){
    clearTimeout(timer)
  }
  // 500ms后触发定时器任务
  timer = setTimeout(()=>{
    console.log(e.target, input1.value)
    // 清空定时器
    timer = null
  },500)
})
```
```js title='debounce.js'
const input1 = document.getElementById('input1')
// 防抖复用函数
function debounce(fn, delay = 500){
  // 使用闭包 控制定时器
  let timer = null
  // 返回 被防抖的函数
  return function(){
    // 若在防抖时间内 则清空上个定时器任务
    if(timer){
      clearTimeout(timer)
    }
    // 防抖时间后 触发定时器任务 且必须用箭头函数 绑定正确的this
    timer = setTimeout(()=>{
      fn.apply(this, arguments)
      // 清空定时器
      timer = null
    },delay)
  }
}
input1.addEventListener('keyup', debounce(function(e){
  console.log(e.target, input1.value)
}, 1000))
```

:::tip
- 频繁的新操作覆盖上次操作
- 定时任务 setTimeout 防抖时间300ms 500ms
- 频繁操作 清空上个定时器 重新创建定时任务
- 停止操作后 时间结束 触发接口函数
:::

### 手写节流 throttle
:::caution 节流场景
- `<div id="div1" draggable="true">可拖拽<div>`
- 拖拽一个元素并获取其位置 drag频繁触发导致卡顿
- 节流 无论怎么拖拽 只每隔100ms触发一次
:::
```js title='throttleMock.js'
const div1 = document.getElementById('div1')
let timer = null
div1.addEventListener('drag', function(e){
  // 上个定时器还未情况 则返回
  if(timer){return}
  // 100ms后触发 定时器任务
  setTimeout(()=>{
    console.log(e.target, div1.offsetX)
    // 清空定时器
    timer = null
  },100)
})
```
```js title='throttle.js'
const div1 = document.getElementById('div1')
funtion throttle(fn, delay){
  // 闭包 控制定时器
  let timer = null
  // 返回 被节流的函数
  return function(){
    // 若上个定时器还存在 则返回结束
    if(timer){return}
    // 创建定时器任务 使用箭头函数
    timer = setTimeout(()=>{
      fn.apply(this, arguments) // 得到event参数
      timer = null
    }, delay)
  }
}
div1.addEventListener('drag',throttle(function(e){
  console.log(e.target, div1.offsetX)
},200))
```
:::tip
- 稳定的连续的操作
- 定时任务 setTimeout 节流时间 100ms 300ms
- 频繁操作时 若存在任务 忽略操作
- 直到触发任务后 清空任务
:::

## 安全预防 
### xss攻击 跨站脚本
:::danger cross-site scripting
- 某博客网站 用户发布博客 并嵌入`<script>`脚本内容
- 脚本内容 发送点开此博客用户 cookie信息 到允许跨域的服务端
:::
:::tip 预防
- 替换特殊字符 `<` `>` 为 `&lt;` `&gt;`
- 脚本内容 变为 文本内容
:::

### xsrf攻击 跨站请求伪造
:::danger
- img src的请求路径 get接口直接触发了
:::
:::tip cross-site request forgery预防
- 使用post接口
- 增加最终验证 密码 短信验证 指纹等
:::