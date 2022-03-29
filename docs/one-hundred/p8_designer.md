---
sidebar_position: 9
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 设计-项目上将

## 上将职责
- todo 好好看 好好学

:::info 目标结果
- 保证项目按时 按质量的交付上线
- 以及上线之后的安全稳定运行。
:::

:::danger 上将总结
1. 开发前 把控需求 技术方案设计
2. 开发中 参与开发 监督代码质量 跟踪进度
3. 开发完 稳定安全的运行
:::

### 开发前-设计
#### 把控需求
> 新项目开始、或者新功能模块开始时要参与需求评审，认真审阅需求的详细内容，给出评审意见，提出问题。自己已经同意的需求要能保证按时、按质量的完成。

1. 评审需求需要你能深入理解项目的业务，不仅仅是自己负责的功能，还有上下游全局的串联。所以，一入职的新人无论技术能力多好，都无法立刻作为项目技术负责人，他还需要一段时间的业务积累和熟练。PS：除非他在其他公司已经是这个方面的业务专家。
2. 需求评审之后，还可能有 UI 设计图的评审，也要参与，提出自己的意见和问题。保证评审通过的 UI 设计图都能保质保量的开发出来。
3. 需求和 UI 设计图评审完之后，还要给出开发的排期。此时要全面考虑，不仅仅要考虑开发时间，还有内部测试、单元测试的时间，以及考虑一些延期的风险，多加几天的缓冲期。
4. 最后，在项目进行过程中，老板或者 PM 有可能中途插入新需求。此时要积极沟通，重新评估，还要争取延长项目开发周期。需求增加了，肯定周期也要延长一些。

#### 技术方案设计
> 需求指导设计，设计指导开发。

- 需求和 UI 设计图确定之后，要先进行技术方案设计，写设计文档，评审，通过之后再开发。技术方案设计应该包含核心数据结构的设计，核心流程的设计，核心功能模块的组织和实现。评审时看看这些有没有不合理、隐患、或者和别人开发重复了。
- 技术方案设计还要包括和其他对接方的，如和服务端、客户端的接口格式。也要叫他们一起参与评审，待他们同意之后再开发。

### 开发中-监控
#### 参与开发
> 主要精力不在代码开发，但也不能完全不写代码。正面影响团队士气！

- 应该去写一些`通用能力，核心功能，底层逻辑`的代码。其他比较简单的业务代码，可以交给项目成员来完成。

#### 监督代码质量
> 要把控整个项目的代码质量

- 制定代码规范 -> 整理成 代码规范文档
- 定期组织代码审核 Code Review
- CI 时使用自动化单元测试
  - 什么是CI？

#### 跟踪进度
- 每天都组织 10 分钟站会，收集当前的进度、风险和问题。如有延期风险，要及时汇报。
- 不仅仅要关心前端开发的进度，还要关心上下游。
  - 如上游的 UI 设计图延期
  - 将会导致前端开发时间不够
  - 进而导致测试时间不够
  - 甚至整个项目延期。

### 开发完-维护
#### 稳定安全的运行
> 上线之后，要能实时把控项目运行状态的稳定与安全。万一遇到问题，要第一时间报警。

- 项目中要增加各种统计和监控功能
  - 如流量统计
  - 性能统计
  - 错误监控
  - 及时报警的机制。

## 前端统计 sdk
> 让我设计一个前端统计 SDK ，你会如何设计？ Software Development Kit

:::info 分析
#### 前端统计的范围
- 访问量 PV(Page-View)
- 自定义事件（如统计某个按钮被点击了多少次 确定/取消/退出）
- 性能 性能耗时
- 错误 统计错误 减少错误

#### 统计数据的流程 （只做前端 SDK ，但是要了解全局）
- 前端发送统计数据给服务端
- 服务端接受，并处理统计数据
- 查看统计结果
:::

:::tip SDK解析
<Tabs>
<TabItem value="sdk" label="SDK结构">

> SDK 要用于多个不同的产品，所以初始化要传入 `productId`

```js
// SDK
class MyStatistic {
    private productId: number
    constructor(productId: number = 0) {
        if (productId <= 0) {
            throw new Error('productId is invalid')
        }
        this.productId = productId // 产品 id （SDK 会被用于多个产品）

        this.initPerformance() // 性能统计
        this.initError() // 监听错误
    }
    // 发送 统计数据
    private send(url: string, paramObj: object = {}) {}
    // 自定义事件 发送数据
    event(key: string, value: string) {}
    // 访问量 PV 一个特殊的自定义事件
    pv() {}
    // 初始化 性能统计
    private initPerformance() {}
    // 初始化 监听错误
    private initError() {}
    // 错误统计 结合Vue/React的报错
    error(key: string, info: object = {}) {}
}

// 使用SDK
const myStatistic = new MyStatistic('abc')
```

</TabItem>
<TabItem value="send" label="发送统计">

> 发送统计数据，用 `<img>` 1浏览器兼容性好 2没有跨域限制

> 再精细一点的优化，`send` 中可以使用 `requestIdleCallback` （兼容使用 `setTimeout`）

```js
private send(url: string, paramObj: object = {}) {
    // 追加 productId 区分不同的产品线
    paramObj.productId = this.productId

    // params 参数拼接为字符串
    const paramArr = []
    for (let key in paramObj) {
        const value = paramObj[key]
        paramArr.push(`${key}=${value}`)
    }

    const img = document.createElement('img')
    img.src = `${url}?${paramArr.join('&')}` // 路径拼接
}
```

</TabItem>
<TabItem value="event" label="自定义事件">

> 自定义事件统计 将用户的操作 统计发送

```js
event(key: string, value: string) {
    const url = 'xxx' // 接受自定义事件的 API
    this.send(url, { key, value }) // 发送 具体执行的操作类型与值(key:value)
}
```

#### 用户使用 按钮点击统计发送

```js
// 如需要统计“同意” “不同意” “取消” 三个按钮的点击量，即可使用自定义事件统计
$agreeBtn.click(() => {
    // ...业务逻辑...
    // 其他不同的按钮，传递不同的 value (如 'refuse' 'cancel')
    myStatistic.event('ad-button', 'agree') 
})
```

</TabItem>
<TabItem value="pv" label="访问量">

> PV 访问量 一种特殊的自定义事件的方式。但是为了避免用户重复发送，需要加一个判断

```js
// 定义一个全局的 Set ，记录已经发送 pv 的 url; 避免重复发送pv
const PV_URL_SET = new Set()
```
```js
pv() {
    const href = location.href // 1 获取当前路由进入的页面
    if (PV_URL_SET.has(href)) return // 4 不重复发送pv
    this.event('pv', '') // 2 发送 pv
    PV_URL_SET.add(href) // 3 发送完 pv 就记录到set中
}
```
```js
myStatistic.pv() //用户使用
```
> PV 统计需要让用户自己发送吗，能不能在 DOMContentLoaded 时自动发送？
> 最好让用户发送，因为 SPA 中切换路由也可能发送 PV

</TabItem>
<TabItem value="performance" label="性能统计">

> 通过 `console.table( performance.timing )` 可以看到网页的各个性能。统计尽量要最原始数据，不加工处理 全部传给服务端，让服务端去计算结果  

```js
private initPerformance() {
    const url = 'yyy' // 接受性能统计的 API
    this.send(url, performance.timing) 
    // 
}
```
> 想要得到全面的性能数据，要在网页加载完成之后（ DOMContentLoaded 或 onload ）去初始化 `myStatistic`

</TabItem>
<TabItem value="err" label="错误统计">

> 监听全局操作

```js
private initError() {
    // 全局操作
    window.addEventListener('error', event => {
        const { error, lineno, colno } = event
        this.error(error, { lineno, colno })
    })
    // Promise 未 catch 的报错 （ 参考 unhandledrejection.html ）
    window.addEventListener("unhandledrejection", event => {
        this.error(event.reason)
    })
}
```

> 被开发这主动收集的错误，需要调用 API 来统计

```js
error(error: Error, info: object = {}) {
    // error 结构 { message, stack }
    // info 是附加信息
    const url = 'zzz' // 接受错误统计的 API
    this.send(url, Object.assign(error, info))
}
```

> 用户使用 错误监听

```js
// try catch 中的报错
try {
    100()
} catch (e) {
    myStatistic.error(e)
}

// Vue 错误监听
app.config.errorHandler = (error, instance, info) => {
    myStatistic.error(error, { info })
}

// React 错误监听
componentDidCatch(error, errorInfo) {
    myStatistic.error(error, { info: errorInfo })
}
```

</TabItem>
</Tabs>
:::


### 连环问：sourcemap
> sourcemap 有什么作用？该如何配置

:::info 背景
- JS 上线之前要`合并混淆压缩`。例如 jquery 的线上代码
- 压缩之后，一旦线上有报错，通过行、列根本找不到`源代码的位置`，不好`定位错误`
- sourcemap 就是用于解决这个问题。可以看 jquery 的 sourcemap 文件
:::

:::caution 示例
- todo 认真观察
- 一个网页中引用了 CDN jquery.min.js ，通过 chrome Sources 即可看到之前源码的样子
- 寻找 sourcemap 有两种方式：1. 同目录下的同名文件；2. js 文件最后一样指定（如 wangEditor js）
:::
<!-- ![](./img/sourcemap1.png) -->

:::tip 配置
> sourcemap 是在打包、压缩 js 时生成，通过 webpack 的打包工具即可配置。

> webpack 通过 `devtool` 来配置 sourcemap ，有[多种选择](https://webpack.docschina.org/configuration/devtool/#devtool)

- 不用 `devtool` - 正常打包，不会生成 sourcemap 文件
- `eval` - 所有代码都放在 `eval(...)` 中执行，不生成 sourcemap 文件
- `source-map` - 生成单独的 sourcemap 文件，并在 js 文件最后指定
- `eval-source-map` - 代码都放在 `eval(...)` 中执行，sourcemap 内嵌到 js 代码中，不生成独立的文件
- `inline-source-map` - sourcemap 以 base64 格式插入到 js 末尾，不生成单独的文件
- `cheap-source-map` - sourcemap 只包含行信息，没有列信息（文件体积更小，生成更快）
- `eval-cheap-source-map` - 同上，但是所有代码都放在 `eval(...)` 中执行

#### 推荐
- 开发和测试 `eval` `eval-source-map` `eval-cheap-source-map` —— 追求效率
- 生产环境 `source-map` 或者不产出 sourcemap —— 看个人需求
:::

:::danger 保护源码
- 公司实际项目的 sourcemap 可用于内部反查 bug ，但不要泄漏。否则等于源码泄漏了。
- 开源项目的 sourcemap 文件也是开源的。
:::


## SPA MPA
> 何时用 SPA 何时用 MPA ？

:::info 分析
> SPA - Single-page Application 单页面应用，只有一个 html 文件，用前端路由切换功能

> MPA - Multi-page Application 多页面应用，每个页面是单独的 html 文件

- 现在基于 React Vue 开发时，大部分产出的都是 SPA ，很少会产出 MPA 。
- 但并不是所有的场景都适用于 SPA ，项目设计时要确定好，否则后面不好改。
:::

### SPA 适用于一个综合应用

:::info 特点
- 功能较多，一个界面展示不完
- 以操作为主，不是以展示为主
:::

:::tip 举例
- 大型的后台管理系统（阿里云的管理后台）
- 知识库（语雀、腾讯文档）
- 功能较复杂的 WebApp（外卖）
:::

### MPA 适用于孤立的页面

:::info 特点
- 功能较少，一个页面展示得开
- 以展示为主，而非操作
:::

:::tip 举例
- 分享页（微信公众号文章）
- 新闻 App 里的落地页（有可能是用 H5 + hybrid 开发的）
:::

### Webpack 配置

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  // 多入口
  entry: {
    home: './src/home/index.js',
    product: './src/product/index.js',
    about: './src/about/index.js'
  },
  output: {
    filename: 'js/[name].[contentHash].js', // name 即 entry 的 key
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin(),

    // 三个页面
    new HtmlWebpackPlugin({
      title: '首页',
      template: './template/index.html',
      filename: 'home.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      title: '产品',
      template: './template/product.html',
      filename: 'product.html',
      chunks: ['product']
    }),
    new HtmlWebpackPlugin({
      title: '关于',
      template: './template/about.html',
      filename: 'about.html',
      chunks: ['about']
    })
  ]
}
```

## H5 编辑器
:::note 设计一个H5编辑器
<!-- ![](./img/H5编辑器.png) -->
:::

:::caution 用 vue + vuex 来实现
1. 在点“保存”按钮的时候，往服务端传递的**数据结构**是什么样子的？
2. 如何保证画布和属性面板是同步更新的？
3. 如果在扩展一个“图层”面板，数据结构该怎么设计？
:::

:::danger 设计盲区
- node 结构，不规范
- 组件用对象，是无序的
- 缺失用 vuex 表示当前选中的组件
- 图层单独的数据有冗余
:::

:::info 设计思路
- node 结构，不规范
  - 每个组件尽量符合 vnode 规范
  - 要参考现有标准，而非自造标准
- 组件用对象，是无序的
  - 用数组来组织数据，有序
- 缺失用 vuex 表示当前选中的组件
  - 补充选中状态 用于表示当前选中组件
- 图层单独的数据有冗余
  - 尽量使用引用关系，去冗余
:::

:::tip 代码思路
- tab 化代码

#### vuex store

```js
{
    // 作品
    work: {
        title: '作品标题',
        setting: { /* 一些可能的配置项，用不到就先预留 */ },
        props: { /* 页面 body 的一些设置，如背景色 */ },
        components: [
            // components 要用数组，有序结构

            // 单个 node 要符合常见的 vnode 格式
            {
                id: 'xxx', // 每个组件都有 id ，不重复
                name: '文本1',
                tag: 'text',
                attrs: { fontSize: '20px' },
                children: [
                    '文本1' // 文本内容，有时候放在 children ，有时候放在 attrs 或者 props ，没有标准，看实际情况来确定
                ]
            },
            {
                id: 'yyy',
                name: '图片1',
                tag: 'image',
                attrs: { src: 'xxx.png', width: '100px' },
                children: null
            },
        ]
    },

    // 画布当前选中的组件，记录 id 即可
    activeComponentId: 'xxx'
}
```

#### vuex getter

```js
{
    layers() => {
        store.work.components.map(c => {
            return {
                id: c.id,
                name: c.name
            }
        })
    }
}
```
:::


## SSR
> 何时使用 SSR ，何时不用？

:::note 分析
- SSR - Server-side render 服务端渲染
- SSR 历史悠久，之前的 ASP JSP PHP 就是 SSR 。
:::

:::info SSR 的优势
- 服务端直出 html
- 高性能
  - 项目是否在意极致的性能优化，是否有可能处于弱网环境 —— 管理后台就不需要
- 对 SEO 优化
  - 项目是否需要 SEO ？—— 管理后台就不需要
:::

:::caution SSR 的劣势
- 前后端同构，开发成本高（学习、调试、运维等）
  - 急需要高性能和SEO，那就去承担 SSR 的成本
  - 不需要这些优势，用 SSR 就成了一个累赘
:::


:::tip SSR 的应用场景
- C 端，以阅读信息为主的单页面
- 如新闻页，运营宣传广告页面，官网等
  1. 性能好 开启网页速度快
  2. 需要 SEO 让更多用户点进来
:::

## 权限管理

:::note 如何设计一个基础的 用户-角色-权限 模型？
> 例如: 一个博客管理后台，可以添加很多用户，分配不同的角色，不同角色具有不同权限

- 普通用户：查看博客，审核通过博客，下架博客
- 管理员：修改博客，删除博客 + 普通用户的权限
- 超级管理员：添加用户，删除用户，绑定用户和角色 + 管理员的权限
:::

:::info 分析
- 很多公司招聘前端工程师来开发、维护后台管理系统，toB 的系统。
- 角色权限管理是最基本的模块。
:::

### RBAC 模型
- 好好看 好好学

> RBAC - Role-based access control 基于角色的访问控制。

<!-- ![](./img/RBAC1.png) -->

:::info 核心
- 三个模型 
  - 1.用户(顶层) 2.角色(轴心) 3.权限(底层)
- 两个关系 
  - 以角色为“轴” 上联用户 下联权限
:::

### 案例

<!-- ![](./img/RBAC2.png) -->

- tab化

:::tip 数据结构与功能
- 顶层模型-用户管理
  - 增删改查
  - 需绑定角色 (用户 - 角色) 引用角色id
- 轴心模型-角色管理
  - 增删改查
  - 需绑定权限 (角色 - 权限) 引用权限id
- 底层模型-权限管理
  - 增删改查
  - 底层数据
:::

## hybrid 更新机制
> 请设计一个 hybrid 包的更新流程

- todo hybrid 基本概念？？？

:::info 运作流程图
<!-- ![](./img/hybrid1.png) -->
:::

:::caution 小提示
- hybrid html 中 ajax 请求的 url 不能省略协议名称（如 `//xxx.com/api/getInfo`），否则会默认以 `file` 协议请求。
- 必须明确协议名称 `http` 或者 `https`。
:::

:::info 上传新版本的包

hybrid 包是需要实时更新的，就跟 H5 网上上线一样。更新之后，App 要下载、使用最新版本的 hybrid 包。

<!-- ![](./img/hybrid2.png) -->
:::

:::caution 触发检查、下载最新版本方式
1. App 启动时检查、下载
2. 实时检查、下载（如每隔 5min）
:::

:::danger 最新版本 延迟使用
> 以上两种时机，都会遇到一个问题：如果检查到最新版本，立刻下载使用，可能会影响性能。

#### 延迟使用
- 检测到新版本，先后台下载，目前先使用旧版本
- 待现在完成，再替换为新版本使用
:::


## H5 抽奖页
> 考察我对一个业务的理解能力

:::note 题目

<!-- ![](./img/抽奖.png) -->

> 你作为前端负责人，来开发一个 h5 页，某个抽奖功能的运营活动，如上图。假定 PM 和后端 RD 都是实习生，技术和业务都不熟练。 你要从 0 开发这个页面，你会要求 server 端给你哪些接口和能力？
:::

:::caution 设计盲区
1. 所有人都能想到，需要一个**抽奖接口**。否则，他就不是一个合格的程序员了。
2. 很少一部分人能想到，需要一个**用户信息接口**，否则都不知道奖品给谁，总得登录一下。或者直接输入手机号抽奖也行，但需求没说这里有手机号。
3. 还有，假如刚刚抽了奖，再重新进入界面，是否要禁用抽奖？是否要限制每个人抽奖一次？—— 这些需求没说，但这些很重要，这些可都需要后端支持。
:::

<!-- ![](./img/抽奖-流程.png) -->

:::danger 设计思路
1. 抽奖内容（具体奖品）接口 get
2. 获取用户关联的抽奖信息 是否可抽奖或已经已经抽奖 get
3. 抽奖接口 post
   - 未登陆 
     - 也可看见抽奖内容
     - 点抽奖则提醒用户先登陆
   - 已登陆 
     - 未抽奖 或 抽奖次数还有 则可以 点抽奖
     - 已抽奖 或 抽奖次数用完 则显示 中奖结果 提示已抽奖
4. 埋点统计
    - pv
    - 自定义事件
5. 微信分享 增加抽奖次数
:::


## 技术选型
> 如何做技术选型？

> 技术没有好坏之分，要看是否适合自己和团队成员

:::info 选什么
- 核心框架
- JS vs TS  代码书写规范
:::

:::danger 技术选型的依据-稳定性
1. 选择社区已经成熟的，用户已经足够多的 —— 经受了大量用户的验证，出了问题也好找人讨论
   - 如 Vue React TS 都具备这个条件，而 Angular 至少在国内没有
   - 如 Vue3 Svelte 等新发布的，等等再用
2. 选择公司已经有技术沉淀的，甚至已经有了很多第三方的可用组件，节省开发成本
3. 考虑团队成员的学习成本 评估团队成员的综合能力 (都是初级就搞不了 需要一些扛霸子的人)
4. 说到成本 就要对比它带来的价值，能否抵消成本。例如
   - 如 做一个大型系统，用 TS 确实能减少很多 bug ，那就用 
     - 要考虑 TS 的学习成本，以及维护成本（规避各种 `any`）
   - 如 做一个小型系统，用 TS 提升也不太大，那就别用
:::

:::tip 更进一步-扩展性
- 团队的技术氛围 需要构建和维护。 橘生淮南则为橘 生于淮北则为枳。 要从工作环境入手，如果一个环境很有营养(能不断学习和应用新技术，给程序员机会展示技术和价值)，我想很少会有人愿意离开，只想留下茁壮成长。谁不想装个逼，开花结果呢？
- 团队氛围或士气主要看领导力。 若领导自己不成长，还怕手下太强，进行打压和约束。他并不需要比他更优秀的人，反而抢别人功劳逼走真正努力的人，结果团队留下的都是混子，人心散了最终部门也解散了。所以员工对领导(评估公司面试人)的选择非常关键。你是选择刘备做主公还是选择袁术呢？
:::


## 图片懒加载
> 设计一个 H5 页面的图片懒加载功能

:::info 要点
1. 加载效果和图片资源
   - `<img>` 要使用 `data-src`（或其他属性）记录 src 
   - loading.gif 要自定义，要配合实际图片的尺寸。
```html
<img src="./img/loading.gif" data-src="./img/animal1.jpeg"/>
```
2. 图片位置 
   - 可以使用 `Element.getBoundingClientRect()` 来判断当前元素的位置
<!-- ![](./img/rect.png) -->
3. 滚动加载
   - 页面滚动实时计算，注意**节流**
:::

:::tip 实现
代码参考 img-lazy-load.html
:::

## B 端 - C 端
> B 端和 C 端有什么区别

:::info 介绍
- B 端，即 toB - to Business 面向商业、生产者
- C 端，即 toC - to Customer 面向消费者、终端用户
:::

- tab化 todo

#### B 端
> B 端一般是对内的管理系统。

- 大厂会自研很多内部管理平台、运营平台，供自己人使用。还有一些公司是专门为企业提供内部管理系统的，如 OA CMS ERP 财务软件等。
- 管理系统一般用于专业的业务领域，所以功能都非常复杂。这就需要复杂的组件设计，拆分和抽离，要深入熟悉业务才能更好的制作技术方案。
- B 端系统一般都是业务驱动的，业务运营人员的话语权更重。
- 但它的流量不会太大，一般后台一个服务器、一个数据库即可满足。而且用户环境比较单一，网络情况好，不用考虑极致的性能优化、浏览器兼容性等。

#### C 端
> C 端一般是对外的落地页，就是我们日常消费的各种新闻、小视频页面。

- 这代表着这个公司对外的核心业务，也是公司最核心的产品，一般都会自研、不会购买或者外包。
- C 端系统一般都是民用级别的，不会有什么复杂专业的功能。
- 但它的流量一般很大，后台可能需要很多服务器集群，需要各种 CDN 和缓存。而且，它的用户群体很不固定，手机、浏览器、网络等都不确定，需要全面的性能优化和统计、监控。
- C 端一般是技术驱动的，技术人员话语权很重。 `我选择C端`

#### SaaS
> SaaS - Software as a service 软件即服务，它集合了 B 端和 C 端。

- 常见的腾讯文档、在线画图软件、在线 PS 等。他们既有 B 端的复杂功能，又有 C 端面向终端用户的特点。
- SaaS 的研发成本是非常高的。

:::info 前端工程师更多服务于 B 端
- C 端产品，即我们日常使用的产品，其实数量并不多，而且需求变化也不会太快。所以并不需要大量的人来维护。像百度的搜索页面，2-3 个前端团队即可以维护。C 端产品，在大流量、大用户的情况下，会暴露出各种问题，以及新的解决方案。
- B 端产品，业务非常多，业务天天变，新的需求每天都会产生。也因为复杂度高，bug 就一直断不了。所以，B 端会需要更多的前端人员来开发和维护。
:::

