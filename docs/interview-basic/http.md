---
sidebar_position: 4
---

# HTTP

:::info
1. 常见状态码
2. Restful API
3. 常见header
4. http **缓存机制（重要）**
5. https 加密与解析
:::

## http状态码
:::info 状态码分类
- 1xx 服务端 收到请求
- 2xx 请求成功
- 3xx 重定向
- 4xx 客户端 错误
- 5xx 服务端 错误
:::
:::tip 常见状态码
- 200 成功
- 301 永久 重定向 (域名到期)
- 302 临时 重定向 
- 304 资源未被修改 （已经请求过 是最新资源）
- 404 资源未找到
- 403 无权限 （后台系统）
- 500 服务器错误
- 504 网关超时
:::

## Restful API
- 传统 http methods
  - get 获取数据 读
  - post 提交数据 写
- 现在 http methods
  - get 获取 数据
  - post 新建 数据
  - patch/put 更新 数据
  - delete 删除 数据

:::tip 过渡到 Restful API
- 传统API设计 
  1. 把每个url作为 `一个功能` 
  2. 使用 url参数 /api/list?page=1
  3. 用不同url 表示操作类型 
     1. api/getblog?id=1 get
     2. api/createblog post
     3. api/updateblog post
     4. api/deleteblog post
- Restful API设计 
  1. 把每个url作为 `一个唯一资源标识` 
  2. 不使用 url参数 /api/list/1
  3. 同一个url 用method 表示操作类型 get/post/put/delete
     1. api/blog/1 get
     2. api/blog post
     3. api/blog/1 put
     4. api/blog/1 delete
:::

## 常见 header
:::info 前端 Request Headers
- accept 浏览器可接收 数据格式
- accept-encoding 浏览器可接收 压缩算法 gzip
- accept-language 浏览器可接收 语言 zh-cn
- connection:keep-alive 一次TCP连接 重复使用
- cookie
- content-type 发送数据的格式 application/json
- host
- user-agent 浏览器信息
- 其他和后端讨论的 headers
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
  - 通过webpack给静态文件名配置 contenthash 来计算文件是否改变

### 强制缓存 cache-control 
:::tip 流程
1. 浏览器 向服务器发送 初次请求
2. 服务器返回资源和cache-control(缓存控制)
3. 下次请求先在 `本地缓存` 中寻找资源
:::
:::info 服务端 response header
- cache-control 值
  - `max-age: timestamp` 缓存过期时间 
  - `no-cache` 不使用 强制缓存
  - `no-store` 不使用 强制缓存和协商缓存
- 取代 老方式 expires
:::

### 协商缓存 Etag / Last-Modified 
:::tip 流程
1. 浏览器向服务器发送 初次请求
2. 服务器返回资源 和 `资源标识` （last-modified ｜ etag）
3. 再次请求将带上资源标识（if-modified-since ｜ if-none-match） 服务器判断客户端资源是否与服务器一致
4. 一致则返回`304`去缓存获取资源 若不一致则返回`200`和最新资源与新标识（last-modified ｜ etag）
:::

:::info 服务端 response header
1. `last-modified` 资源最后修改时间 
   - 再次请求 `request header` 将带上 `if-modified-since` 与服务端标识对比
   - 只能精确到秒级
2. `etag` 资源`唯一标识 指纹字符串` 
   - 再次请求 `request header` 将带上 `if-none-match` 与服务端标识对比
   - 优先使用etag作 资源标识
   - 更精准
:::

:::danger 缓存前提和流程
- 再完成第一次请求后 后端使用缓存策略 配置到resonse header中
- 后面的请求 先进行强制缓存判断 无则再进行协商缓存判断
1. 判断强制缓存 cache-control
   - 满足条件 读取缓存数据 针对有时效性的资源
   - 条件不足 进入协商缓存
2. 判断协商缓存 是否有Etag
   - 无 发送请求 获取资源和资源标识
   - 有 发送请求时带上资源标识 if-none-match
3. 服务端 协商缓存策略
   - 一致 则返回 304 旧资源 针对经常更新的资源
   - 不同 则返回 200 新资源和标识 用于下次缓存判断
:::


### 刷新页面 与 缓存
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
- http 是`明文传输` 敏感信息容易被劫持 如 邮箱 手机 密码

![http](/img/http/http.png)
- https = http + 加密 信息劫持也无法解密
- 现代浏览器 开始强制 https
:::
:::tip 加密方式 
1. 对称加密 一个key同时负责 加密和解密
   - key 也可能被劫持
   - 不安全

![symmetric](/img/http/encryption-symmetric.png)

2. 非对称加密 一对keys 
   - 用pucblic-key来加密 可能被劫持
   - 用private-key来解密 无法被劫持
   - 安全的

![asymmetric](/img/http/encryption-asymmetric.png)
- 先用非对称加密 
  - 客户端用公钥加密 秘钥key 将加密后的key发送给服务端 
  - 加密后key 在服务端被私钥解密 为秘钥key
- 在使用对称加密 减少性能开销
- 加深理解
  - 公钥 服务端给客户端发公钥 用于加密
    - 用于 非对称加密
  - 秘钥 客户端使用公钥加密秘钥 加密的秘钥发送给服务端 
    - 用于 对称加密
  - 私钥 服务端收到加密的秘钥 使用私钥解密 得到私钥
    - 用于 非对称加密
:::

:::danger https证书校验
- 问题 中间人攻击 劫持请求后发送自己的一对key
- 规则 使用合法第三方证书 含公钥
- 浏览器校验证书 合法后 使用公钥

![https](/img/http/https.png)
:::