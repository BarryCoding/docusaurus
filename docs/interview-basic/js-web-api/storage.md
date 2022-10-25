---
sidebar_position: 5
---

# 存储
:::info 
- 描述 cookie localStorage sessionStorage 区别
  - 容量
  - API
  - 是否随请求发送
:::

## cookie
:::tip 用途
- 用于 browser 和 server 通讯
  - 获取 `document.cookie` 
  - 修改 `document.cookie` = 'key=value'
:::
:::danger 缺点
- 容量 最大 `4kb`
- 每次随请求发送到服务端 增加了请求数据量 在Requset Header中
- document.cookie API使用不便
:::

## localStorage sessionStorage
:::tip 用途
- 容量 最大`5M` HTML5 专门为存储设计 
- 不会随请求发送到服务端
- API使用简明 `setItem(key,value) getItem(key) removeItem(key) clear()`
:::
:::info
- localStorage 数据永久存储 直到删除
- sessionStorage 数据存储于当前会话 浏览器关闭后清空
- 一般使用 localStorage 比如 表单存储
:::


