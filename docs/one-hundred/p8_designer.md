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

- 制定代码规范 -> 整理成文档
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
> 让我设计一个前端统计 SDK ，你会如何设计？

- 难啃的骨头 我来处理

:::info 分析
#### 前端统计的范围
- 访问量 PV
- 自定义事件（如统计一个按钮被点击了多少次）
- 性能
- 错误

#### 统计数据的流程 （只做前端 SDK ，但是要了解全局）
- 前端发送统计数据给服务端
- 服务端接受，并处理统计数据
- 查看统计结果
:::

- tab 化
### 1 代码结构

SDK 要用于多个不同的产品，所以初始化要传入 `productId`

```js
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
    private send(url: string, paramObj: object = {}) {
        // TODO 发送统计数据
    }
    private initPerformance() {
        // TODO 性能统计
    }
    private initError() {
        // TODO 监听全局错误（有些错误需要主动传递过来，如 Vue React try-catch 的）
    }
    pv() {
        // TODO 访问量 PV 统计
    }
    event(key: string, value: string) {
        // TODO 自定义事件
    }
    error(key: string, info: object = {}) {
        // TODO 错误统计
    }
}
```

用户使用

```js
const myStatistic = new MyStatistic('abc')
```

### 2 发送数据

发送统计数据，用 `<img>` —— 浏览器兼容性好，没有跨域限制

```js
private send(url: string, paramObj: object = {}) {
    // 追加 productId
    paramObj.productId = this.productId

    // params 参数拼接为字符串
    const paramArr = []
    for (let key in paramObj) {
        const value = paramObj[key]
        paramArr.push(`${key}=${value}`)
    }

    const img = document.createElement('img')
    img.src = `${url}?${paramArr.join('&')}`
}
```

如果再精细一点的优化，`send` 中可以使用 `requestIdleCallback` （兼容使用 `setTimeout`）

### 3 自定义事件统计

```js
event(key: string, value: string) {
    const url = 'xxx' // 接受自定义事件的 API
    this.send(url, { key, value }) // 发送
}
```

用户使用

```js
// 如需要统计“同意” “不同意” “取消” 三个按钮的点击量，即可使用自定义事件统计
$agreeBtn.click(() => {
    // ...业务逻辑...
    myStatistic.event('some-button', 'agree') // 其他不同的按钮，传递不同的 value (如 'refuse' 'cancel')
})
```

### 3 访问量 PV

PV 可以通过自定义事件的方式。但是为了避免用户重复发送，需要加一个判断

```js
// 定义一个全局的 Set ，记录已经发送 pv 的 url
const PV_URL_SET = new Set()
```

```js
pv() {
    const href = location.href
    if (PV_URL_SET.has(href)) return

    this.event('pv', '') // 发送 pv

    PV_URL_SET.add(href)
}
```

用户使用

```js
myStatistic.pv()
```

【注意】PV 统计需要让用户自己发送吗，能不能在 DOMContentLoaded 时自动发送？—— 最好让用户发送，因为 SPA 中切换路由也可能发送 PV

### 4 性能统计

通过 `console.table( performance.timing )` 可以看到网页的各个性能

<!-- ![](./img/performance.png) -->

```js
private initPerformance() {
    const url = 'yyy' // 接受性能统计的 API
    this.send(url, performance.timing) // 全部传给服务端，让服务端去计算结果 —— 统计尽量要最原始数据，不要加工处理
}
```

PS：想要得到全面的性能数据，要在网页加载完成之后（ DOMContentLoaded 或 onload ）去初始化 `myStatistic`

### 5 错误统计

监听全局操作

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

被开发这主动收集的错误，需要调用 API 来统计

```js
error(error: Error, info: object = {}) {
    // error 结构 { message, stack }
    // info 是附加信息

    const url = 'zzz' // 接受错误统计的 API
    this.send(url, Object.assign(error, info))
}
```

用户使用

```js
// try catch
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

### 总结

- 自定义事件（包括 PV）
- 性能统计
- 报错统计

PS：以上是一个统计 SDK 的基本估计，可以应对面试，实际工作中还可能需要进一步完善很多细节。

### 连环问：sourcemap
> sourcemap 有什么作用？该如何配置

:::info 背景
- JS 上线之前要合并、混淆和压缩。例如 jquery 的线上代码
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
- 在点“保存”按钮的时候，往服务端传递的**数据结构**是什么样子的？
- 如何保证画布和属性面板是同步更新的？
- 如果在扩展一个“图层”面板，数据结构该怎么设计？
:::

### 渣渣的答案

第一个问题，大家的答案往往都是这样的：

```js
{
    components: {
        'text1': {
            type: 'text',
            value: '文本1',
            color: 'red',
            fontSize: '16px'
        },
        'text2': {
            type: 'text',
            value: '文本2',
            color: 'red',
            fontSize: '16px'
        },
        'img1': {
            type: 'image',
            src: 'xxx.png',
            width: '100px'
        }
    }
}
```

第二个问题，大家觉得数据存到 vuex 中，就可以同步更新了 —— 这没错，但具体如何做到呢？很多同学想不出来，或者到这里就懵了。

第三个问题，很多同学觉得应该在 vuex store 中新增一个属性

```js
{
    layer: [
        {
            id: 'text1', // 对应到 components 的 key
            name: '文本1'
        },
        {
            id: 'text2',
            name: '文本2'
        }
    ]
}
```

:::danger 总结一下缺点
- node 结构，不规范
- 组件用对象，是无序的
- 缺失用 vuex 表示当前选中的组件
- 图层单独的数据有冗余
:::

### 正确的设计思路
- tab 化

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

:::tip 优化
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


## SSR
> 何时使用 SSR ，何时不用？

:::note 分析
- SSR - Server-side render 服务端渲染
- SSR 历史悠久，之前的 ASP JSP PHP 就是 SSR 。
:::

:::info SSR 的优势
- 服务端直出 html
- 性能好
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
- C 端，以阅读为主的单页面
- 如新闻页，运营宣传广告页面，官网等
  1. 性能好 开启网页速度快
  2. 需要 SEO 让用户点进来 提升知名度
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
    - 用户
    - 角色
    - 权限
- 两个关系（以角色为“轴”）
    - 角色 - 用户
    - 角色 - 权限
:::

### 案例

<!-- ![](./img/RBAC2.png) -->

- tab化

:::tip 数据结构与功能
顶层模型-用户管理
- 增删改查
- 绑定角色 (用户 - 角色)

轴心模型-角色管理
- 增删改查
- 绑定权限 (角色 - 权限)

底层模型-权限管理
- 增删改查
:::
