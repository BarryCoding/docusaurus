---
sidebar_position: 4
---

# HTTP

## 题目
1. 常见状态码
2. Restful API
3. 常见header
4. http 缓存机制（重要）
5. https 加密与解析

## http状态码
:::info 状态码分类
- 1xx 服务端收到请求
- 2xx 请求成功
- 3xx 重定向
- 4xx 客户端错误
- 5xx 服务端错误
:::
:::tip 常见状态码
- 200 成功
- 301 永久重定向 
- 302 临时重定向 
- 304 资源未被修改
- 404 资源未找到
- 403 无权限
- 500 服务器错误
- 504 网关超时
:::

## Restful API
- 传统 http methods
  - get 获取数据
  - post 提交数据
- 现在 http methods
  - get 获取数据
  - post 新建数据
  - patch/put 更新数据
  - delete 删除数据

:::tip 过渡到 Restful API
- 传统API设计 
  1. 把每个url作为`一个功能` 用不同命名表示操作类型
  2. 使用url参数 /api/list?page=1
- Restful API设计 
  1. 把每个url作为`一个唯一资源标识` 
  2. 不使用url参数 /api/list/1
  3. 同一个url 用method 表示操作类型 get/post/put/delete
:::

## 常见 header
:::info 前端 Request Headers
- content-type 发送数据的格式 application/json
- connection:keep-alive 一次TCP连接 重复使用
- cookie
- user-agent 浏览器信息
- accept 浏览器可接收 数据格式
- accept-encoding 浏览器可接收 压缩算法 gzip
- accept-language 浏览器可接收 语言 zh-cn
- host
:::
:::caution 后端 Response Headers
- content-type 返回数据 格式 application/json
- content-length 返回数据 大小
- content-encoding 返回数据 压缩算法 gzip
- set-cookie
:::
:::tip 缓存相关
- cache-control expires
- last-modified if-modified-since
- etag if-none-match
:::

## 缓存
- 网络请求的优化 减少请求数量
- 静态资源（js/css/img） 可以被缓存
- 通过webpack给文件名配置 contenthash来计算文件是否改变

### 强制缓存 cache-control 
:::tip 流程
1. 浏览器向服务器发送 初次请求
2. 服务器返回资源和cache-control
3. 下次请求先在 本地缓存中寻找资源
:::
:::info response header
- 强制控制缓存逻辑
  - `max-age: timestamp` 缓存过期时间 
  - `no-cache` 不使用 强制缓存
  - `no-store` 不使用 强制缓存和协商缓存
- 取代的老方式 expires
:::

### 协商缓存 Etag / Last-Modified 
:::tip 流程
1. 浏览器向服务器发送 初次请求
2. 服务器返回资源 和 资源标识 （last-modified ｜ etag）
3. 再次请求将带上资源标识（if-modified-since ｜ if-none-match） 服务器判断客户端资源是否与服务器一致
4. 一致则返回`304`去缓存获取资源 若不一致则返回200和最新资源与其标识（last-modified ｜ etag）
:::

:::info response header
1. last-modified 资源最后修改时间 
   - 再次请求 request header 将带上 if-modified-since 与服务端标识对比
   - 只能精确到秒级
2. etag 资源`唯一标识`
   - 再次请求 request header 将带上 if-none-match 与服务端标识对比
   - 优先使用etag作 资源标识
   - 更精准
:::

:::danger 判断顺序
先进行强制缓存判断 有则在缓存中获取资源 无则再进行协商缓存判断
:::


### 刷新页面
:::tip 3种方式
1. 正常刷新 输入url回车/跳转/前进后退
   - 强制缓存有效 协商缓存有效
2. 手动刷新 F5 点击刷新按钮 右键菜单刷新
   - 强制缓存失效 协商缓存有效
3. 强制刷新 ctrl + F5
   - 强制缓存失效 协商缓存失效
:::

## 加密方式 https过程解析
:::note http 与 https
- http 是明文传输 敏感信息容易被劫持

![http](/img/http/http.png)
- https = http + 加密 信息劫持也无法解密
- 现代浏览器 开始强制 https
:::
:::tip 加密方式 
1. 对称加密 一个key负责加密和解密

![symmetric](/img/http/encryption-symmetric.png)
2. 非对称加密 一对keys pucblic-key用来加密 private-key用来解密

![asymmetric](/img/http/encryption-asymmetric.png)
- https 先用非对称加密 然后用对称加密减少开销
:::

:::danger https证书与加密解析过程
- 问题 中间人攻击 劫持请求后发送自己的一对key
- 规则 使用合法第三方证书
- 浏览器校验证书 判断是否被劫持

![https](/img/http/https.png)
:::