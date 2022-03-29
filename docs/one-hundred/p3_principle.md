---
sidebar_position: 4
---

# 深度-原理源码

## JS 内存泄漏
> 如何检测 JS 内存泄漏？内存泄漏的场景有哪些？

### JS 垃圾回收

:::info 正常 JS 垃圾回收
> 一个函数执行完，其中的变量都会是会 JS 垃圾回收。

```js
function fn() {
    const a = 'aaa'
    console.log(a)
    const obj = { x: 100 }
    console.log(obj)
}
fn()
```
:::

:::caution 不能回收 污染

```js
function fn() {
    const obj = {x: 100}
    window.obj = obj // 引用到了全局变量，obj 销毁不了
}
fn() // 污染了 window
```
:::


:::danger 不能回收 函数产生闭包
```js
function genDataFns() {
    const data = {} // 闭包，data 销毁不了
    return {
        get(key) {
            return data[key]
        },
        set(key, val) {
            data[key] = val
        }
    }
}
const { get, set } = genDataFns()
```
:::

<!-- 变量销毁不了，一定就是内存泄漏吗？—— 不一定 -->

### 垃圾回收算法 - 引用计数

早期垃圾回收算法，以“数据是否被引用”来判断要不要回收。

```js
// 对象 被 a 引用
let a = { b: {x: 10} }

let a1 = a // 对象 又被 a1 引用
let a = 0 // 对象 不再被 a 引用，但仍然被 a1 引用
let a1 = null // 对象 不再被 a1 引用

// 对象 最终没有任何引用，会被回收
```

但这个算法有一个缺陷 —— 循环引用。例如

```js
function fn() {
    const obj1 = {}
    const obj2 = {}
    obj1.a = obj2
    obj2.a = obj1 // 循环引用，无法回收 obj1 和 obj2
}
fn()
```


以上这个例子就是内存泄漏。即，**不希望它存在的，它却仍然存在**，这是不符合预期的。关键在于“泄漏”。

### 垃圾回收算法 - 标记清除

基于上面的问题，现代浏览器使用“标记-清除”算法。根据“是否可获得”来判断是否回收。

定期从根（即全局变量）开始向下查找，能找到的即保留，找不到的即回收。循环引用不再是问题。

:::tip 检测内存变化
> 使用 Chrome devTools Performance 来检测内存变化

1. 刷新页面，点击“GC”按钮
2. 点击“Record”按钮开始记录，然后操作页面
3. 操作结束，点击“GC”按钮，点击“结束”按钮，看分析结果
:::

### 内存泄漏的场景

- tab化

> 拿 Vue 来举例说明。


- 全局变量

```js
export default {
    data() {
        return {
            nums: [10, 20, 30]
        }
    },
    mounted() {
        window.printNums = () => {
            console.log(this.nums)
        }
    },
    beforeUnmount() {
        window.printNums = null
    },
}
```

- 定时器

```js
export default {
    data() {
        return {
            intervalId: 0,
            nums: [10, 20, 30]
        }
    },
    methods: {
        printNums() {
            console.log(this.nums)
        }
    },
    mounted() {
        this.intervalId = setInterval(this.printNums, 200)
    },
    beforeUnmount() {
        clearInterval(this.intervalId)
    },
}
```

全局事件

```js
export default {
    data() {
        return {
            nums: [10, 20, 30]
        }
    },
    methods: {
        printNums() {
            console.log(this.nums)
        }
    },
    mounted() {
        window.addEventListener('reisze', this.printNums)
    },
    beforeUnmount() {
        window.removeEventListener('reisze', this.printNums)
    },
}
```

自定义事件

```js
export default {
    data() {
        return {
            nums: [10, 20, 30]
        }
    },
    methods: {
        printNums() {
            console.log(this.nums)
        }
    },
    mounted() {
        event.on('event-key', this.printNums)
    },
    beforeUnmount() {
        event.off('event-key', this.printNums)
    },
}
```

:::danger 答案
- 可使用 Chrome devTools Performance 检测内存变化
- 内存泄漏的场景
    - 全局变量，函数
    - 全局事件
    - 全局定时器
    - 自定义事件
    - 关于闭包（无定论）
      - 若强调 `不可被垃圾回收就是内存泄漏` 则闭包属于内存泄漏
      - 若强调 `内存泄漏是非预期的` 闭包是特意设计 符合预期 则不属于内存泄漏
:::


## 事件循环
> 浏览器和 nodejs 事件循环的区别

### 单线程和异步

- 单线程，代码就必须“串行”执行，无法并行，同一时间只能干一件事。
- JS 是单线程，浏览器中 JS 和 DOM 渲染线程互斥。
- JS 是单线程，并行场景就只能使用“异步”。

```js
console.log('start')
setTimeout(() => { console.log('hello')} )
console.log('end')
```

### 宏任务和微任务

浏览器端异步的 API 有很多
- 宏任务：setTimeout 网络请求
- 微任务：promise

两者表面的区别：

第一，微任务比宏任务更快执行

```js
console.log('start')
setTimeout(() => {
    console.log('timeout')
})
Promise.resolve().then(() => {
    console.log('promise.then')
})
console.log('end')
```

第二，微任务在 DOM 渲染前执行，而宏任务在 DOM 显示后（即真正显示到页面上，肉眼可见）执行
- 好好看 好好学

```js
const p = document.createElement('p')
p.innerHTML = 'new paragraph'
document.body.appendChild(p)
console.log('length----', list.length)

console.log('start')
setTimeout(() => {
    const list = document.getElementsByTagName('p')
    console.log('timeout----', list.length)
    alert('阻塞')
})
Promise.resolve().then(() => {
    const list = document.getElementsByTagName('p')
    console.log('promise.then----', list.length)
    alert('阻塞')
})
console.log('end')
```

### 浏览器的事件循环

主要的流程
- 执行 JS 同步代码（执行异步 API 时，异步先放在一个队列中，先不执行）
- DOM 渲染
- 执行队列中的异步函数（执行异步 API 时，异步先放在一个队列中，先不执行）—— 异步中可能还嵌套异步
- DOM 渲染
- 执行队列中的异步函数（执行异步 API 时，异步先放在一个队列中，先不执行）
- DOM 渲染
- ...

<!-- ![](./img/event-loop.png) -->

考虑宏任务和微任务
- 执行 JS 同步代码（异步函数，分别放在 macroTaskQueue 和 microTaskQueue ）
- DOM 结构渲染（此时还没有在页面显示，但可以获取 DOM 内容了）
- 执行 microTaskQueue 函数（异步中还可能嵌套异步...）
- 显示 DOM 到页面
- 执行 macroTaskQueue 函数（异步中还可能嵌套异步...）
- ...

### nodejs 异步

nodejs 也是用了 V8 引擎和 ES 语法，所以也有同步、异步，异步也分宏任务、微任务。

- setTimeout setInterval —— 宏任务
- promise 和 async/await  —— 微任务
- process.nextTick —— 微任务，**但优先级最高**
- setImmediate —— 宏任务
- I/O 文件、网络 —— 宏任务
- Socket 连接：连接 mysql —— 宏任务

```js
console.log('start')
setImmediate(() => {
    console.log('immediate1')
})
setTimeout(() => {
    console.log('timeout1')
})
Promise.resolve().then(() => {
    console.log('promise then')
})
process.nextTick(() => {
    console.log('nextTick')
})
console.log('end')
```

### nodejs 事件循环

浏览器的各种宏任务，都是按照代码的顺序执行的，没有其他优先级。

nodejs 的宏任务是分了如下类型，nodejs 事件循环中宏任务需要按照这个顺序来执行。

- timers(计时器) - 执行 `setTimeout` 以及 `setInterval` 的回调
- I/O callbacks - 处理网络、流、TCP 的错误回调
- idle, prepare --- 闲置阶段 - node 内部使用
- poll(轮循) - 执行 poll 中的 I/O 队列，检查定时器是否到时间
- check(检查) - 存放 `setImmediate` 回调
- close callbacks - 关闭回调，例如 `socket.on('close')`

nodejs 事件循环的过程
- 执行同步代码
- 执行 `process.nextTick` 和微任务（前者优先级更高）
- 按照顺序执行 6 个类型的宏任务
- ...

<!-- ![](./img/event-loop-nodejs.png) -->

:::danger 答案
- 事件循环的大概模式相同
- 宏任务有优先级区分
- `process.nextTick` 在微任务的优先级更高
  - 但是，`process.nextTick` 在最新版 nodejs 中不被推荐使用，推荐使用 `setImmediate` 原因在于 `process.nextTick` 是在当前帧介绍后立即执行，会阻断IO并且有最大数量限制（递归时会有问题） 而 `setImmediate` 不会阻断 IO ，更像是 `setTimeout(fun, 0)`
:::

## vdom 
> vdom 真的很快吗？

:::info 框架的价值
> Vue React 等框架给前端开发带来了革命性变化

- 组件化 (不再是一个页面一堆逻辑 分工更细更清晰)
- 数据视图分离，数据驱动视图
  - 通过 vdom 实现
:::

### vdom本质

> Virtual DOM，虚拟 DOM ，即用 JS 对象模拟 DOM 数据。是 React 最先提出来的概念。

- React 的 JSX ，Vue 的 template 其实都是语法糖，它们本质上都是一个函数，成为 `render 函数`
- 执行 render 函数返回的就是一个 vdom 对象，一般叫做 vnode（虚拟节点），对应 DOM Node

```ts
// JSX: <p id="p1">hello world</p>
function render(): VNode {
    return createElement('p', { id: 'p1' }, ['hello world'])
}
```
- 每次更新 render 生成 newVnode ，与原vnode对比 `diff(vnode, newVnode)`，计出需修改的 DOM 节点，做最小修改。

- 认真的听讲

:::caution 对比 DOM 操作

下面两者，哪个更快？—— 很明显，前者更快。
- jquery 时代：直接修改 DOM
- 框架时代：生成 vdom ，进行 diff 运算 --> 修改 DOM

但凡事都要有一个业务背景。如果页面功能越来越复杂，直接操作 DOM 代码将会难以阅读和维护，大家更希望要“数据视图分离，数据驱动视图”。

在这个前提下，哪个更快？ —— 当然是后者。因为业务复杂、代码混乱，将会导致很多无谓的 DOM 操作 —— **DOM 操作是昂贵的**
- 直接修改 DOM
- 生成 vdom ，进行 diff 运算 --> 修改 DOM

而相比于昂贵的 DOM 操作，JS 运算非常快。所以 JS 多做事情（vdom diff）是更优的选择。
:::

:::danger 答案
- 直接进行 DOM 操作永远都是最快的（但要目标明确，不能有无谓的 DOM 操作 —— 这很难）
- 如果业务复杂，要“数据视图分离，数据驱动视图”，无法直接修改 DOM ，那 vdom 就是一个很好的选择
- 所以，**vdom 并不比 DOM 操作更快**（反而更慢，它做了 JS 运算），它只是在某个特定的场景下，无法做到精准 DOM 修改时，一个更优的选择。
:::

### 思路扩展

[Svelte](https://www.sveltejs.cn/) 不使用 vdom ，它将组件修改，编译为精准的 DOM 操作。和 React 设计思路完全不一样。

<!-- ![](./img/svelte.png) -->

## for vs forEach
> for 和 forEach 哪个更快？为什么

:::info 创建函数需要开销
- for 直接在当前函数中执行
- forEach 每次都要新创建一个函数。
- 函数有单独的作用域和上下文 所以耗时更久。
:::

:::danger 答案
for 更快，因为 forEach 每次创建函数需要开销
:::

:::caution 可读性
- 开发中不仅要考虑性能，还要考虑代码的可读性，forEach 可读性更好。
- 用for的一般是新手 不考虑可读性 后期代码的维护 
- 用forEach一般是老手 会考虑可读性 注释的编写 代码规范等
:::

## nodejs 多进程
> nodejs 如何开启一个进程，进程之间如何通讯

:::info 重要概念
#### 进程 process
- 进程，是操作系统进行资源调度和分配的基本单位，每个进程都拥有自己独立的内存区域。
- 一个进程无法直接访问另一个进程的内存数据，除非通过合法的进程通讯。
- 执行一个 nodejs 文件，即开启了一个进程，可以通过 `process.pid` 查看进程 id 。

#### 线程 thread
- 线程，是操作系统进行运算调度的最小单位，线程是附属于进程的。
- 一个进程可以包含多个线程（至少一个），多线程之间可共用进程的内存数据。

#### JS
- JS 是单线程的，即执行 JS 时启动一个进程（如 JS 引擎，nodejs 等），然后其中再开启一个线程来执行。
- JS 是基于事件驱动的，它不会阻塞执行，适合高并发的场景。
:::

:::caution 为何需要多进程
- 现代服务器都是多核 CPU ，适合同时处理多进程。即，一个进程无法充分利用 CPU 性能，进程数要等于 CPU 核数。
- 服务器一般内存比较大，但操作系统对于一个进程的内存分配是有上限的（2G），所以多进程才能充分利用服务器内存。
:::

### nodejs 开启多进程
- todo ???

`child_process.fork` 可开启子进程执行单独的计算（源码参考 process-fork.js）
- `fork('xxx.js')` 开启一个子进程
- 使用 `send` 发送信息，使用 `on` 接收信息

`cluster.fork` 可针对当前代码，开启多个进程来执行（源码参考 cluster.js）

:::danger 答案
- 可使用 `child_process.fork` 和 `cluster.fork` 开启子进程
- 使用 `send` `on` 传递消息
:::

### 扩展-工具使用 PM2
nodejs 服务开启多进程、进程守护，可使用 [pm2](https://www.npmjs.com/package/pm2) 
- 全局安装 pm2 `yarn global add pm2`
- 增加 pm2 配置文件
- 修改 package.json scripts


## js-bridge
> 请描述 js-bridge 原理

### 微信 jssdk

- 微信中的 h5 通过 [jssdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html) 提供的 API 可以调用微信 app 的某些功能。
- JS 无法直接调用 app 的 API ，需要通过一种方式 —— 通称 js-bridge 
- 前提是 app 得开发支持，控制权在 app 端

<!-- ![](./img/js-bridge.png) -->

### 方式1 - 注入 API

- 客户端为 webview 做定制开发，在 window 增加一些 API ，共前端调用。
  - 例如增加一个 `window.getVersion` API ，前端 JS 即可调用它来获取 app 版本号。
  - 但这种方式一般都是**同步**的。

```js
const v = window.getVersion()
```

### 方式2 - 劫持 url scheme

一个 iframe 请求 url ，返回的是一个网页。天然支持异步。

```js
const iframe1 = document.getElementById('iframe1')
iframe1.onload = () => {
    console.log(iframe1.contentWindow.document.body.innerHTML)
}
iframe1.src = 'http://127.0.0.1:8881/size-unit.html'
```

- 上述 url 使用的是标准的 http 协议，如果要改成 `'my-app-name://api/getVersion'` 呢？
  -  默认会报错，`'my-app-name'` 是一个未识别的协议名称。
  - 既然未识别的协议，那就可以为我所用：app 监听所有的网络请求，遇到 `my-app-name:` 协议，就分析 path ，并返回响应的内容。

```js
const iframe1 = document.getElementById('iframe1')
iframe1.onload = () => {
    console.log(iframe1.contentWindow.document.body.innerHTML) // '{ version: '1.0.1' }'
}
iframe1.src = 'my-app-name://api/getVersion'
```

- 这种自定义协议的方式，就叫做“url scheme”。微信的 scheme 以 `'weixin://'` 开头，可搜索“微信 scheme”。
  - 其他可参考 https://mp.weixin.qq.com/s/T1Qkt8DTZvpsm8CKtEpNxA
- chrome 也有自己的 scheme
  - `chrome://version` 查看版本信息
  - `chrome://dino` 恐龙小游戏

### 封装 sdk

scheme 的调用方式非常复杂，不能每个 API 都写重复的代码，所以一般要封装 sdk ，就像微信提供的 jssdk 。

```js
const sdk = {
    invoke(url, data, success, err) {
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        document.body.appendChild(iframe)

        iframe.onload = () => {
            const content = iframe.contentWindow.document.body.innerHTML
            success(JSON.parse(content))
            iframe.remove()
        }
        iframe.onerror = () => {
            err()
            iframe.remove()
        }
        iframe.src = `my-app-name://${url}?data=${JSON.string(data)}`
    }

    fn1(data, success, err) {
        invoke('api/fn1', data, success, err)
    }

    fn2(data, success, err) {
        invoke('api/fn2', data, success, err)
    }
}

// 使用
sdk.fn1(
    {a: 10},
    (data) => { console.log('success', data) },
    () => { console.log('err') }
)
```

:::danger 答案
常用方法：劫持 url scheme
:::

## requestIdleCallback
> 是否了解过 requestIdleCallback ？

:::note 背景
- React 16 内部使用 Fiber ，即组件渲染过程可以暂停，先去执行高优任务，CPU 闲置时再继续渲染。
- 核心 API 就是 requestIdleCallback 。
:::

:::danger 特点
#### requestAnimationFrame `每次渲染`都执行，高优
- 页面的渲染是一帧一帧进行的，至少每秒 60 次（即 16.6ms 一次）才能肉眼感觉流畅。所以，网页动画也要这个帧率才能流畅。
- 用 JS 来控制时间是不靠谱的，因为 JS 执行本身还需要时间，而且 JS 和 DOM 渲染线程互斥。所以 ms 级别的时间会出现误差。
- `requestAnimationFrame` 就解决了这个问题，浏览器每次渲染都会执行，不用自己计算时间。

```js
// todo
```

#### requestIdleCallback `空闲时`才执行，低优
- requestIdleCallback 会在网页渲染完成后，CPU 空闲时执行，不一定每一帧都执行。
- requestIdleCallback 不适合执行 DOM 操作，因为修改了 DOM 之后下一帧不一定会触发修改。
:::

:::info 相同点
requestAnimationFrame 和 requestIdleCallback 都是宏任务，它们比 setTimeout 更晚触发。
:::

:::tip 使用场景
- requestAnimationFrame 可用于网页动画。
- requestIdleCallback 可用于一些低优先级的场景，以代替 setTimeout 。例如发送统计数据。
  - 注意 requestIdleCallback 的浏览器兼容性
:::

## Vue 生命周期
> Vue 每个生命周期都做了什么

<!-- ![](./img/vue-生命周期.png) -->

- tag 化
> beforeCreate

- 初始化一个空的 Vue 实例
- `data` `methods` 等尚未被初始化，无法调用。

> created

- Vue 实例初始化完成，`data` `methods` 都已初始化完成，可调用。
- 但尚未开始渲染模板。

> beforeMount

- 编译模板，调用 `render` 函数生成 vdom 
- 但还没有开始渲染 DOM

> mounted

- 渲染 DOM 完成，页面更新。
- 组件创建完成，开始进入运行阶段。

> beforeUpdate

- 在数据发生改变后，DOM 被更新之前被调用。
- 这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。

> updated

- 在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。
- 注意，尽量不要在 `updated` 中继续修改数据，否则可能会触发死循环。

> onActivated

- 被 `keep-alive` 缓存的组件激活时调用。

> onDeactivated

- 被 `keep-alive` 缓存的组件停用时调用。

> beforeUnmount

- 组件进入销毁阶段。
- 卸载组件实例后调用，在这个阶段，实例仍然是完全正常的。
- 移除、解绑一些全局事件、自定义事件，可以在此时操作。

> unmounted

- 卸载组件实例后调用。调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载。

---

### 如何正确的操作 DOM

- `mounted` 和 `updated` 都不会保证所有子组件都挂载完成，如果想等待所有视图都渲染完成，需要使用 `$nextTick`

```js
mounted() {
  this.$nextTick(function () {
    // 仅在整个视图都被渲染之后才会运行的代码
  })
}
```

### ajax 放哪个生命周期

一般有两个选择：`created` 和 `mounted` ，建议选择后者 `mounted` 。

执行速度
- 从理论上来说，放在 `created` 确实会快一些
- 但 ajax 是网络请求，其时间是主要的影响因素。从 `created` 到 `mounted` 是 JS 执行，速度非常快。
- 所以，两者在执行速度上不会有肉眼可见的差距

代码的阅读和理解
- 放在 `created` 却会带来一些沟通和理解成本，从代码的执行上来看，它会一边执行组件渲染，一边触发网络请求，并行
- 放在 `mounted` 就是等待 DOM 渲染完成再执行网络请求，串行，好理解

所以，综合来看，更建议选择 `mounted` 。

### Composition API 生命周期

- `setup` 代替了 `beforeCreate` 和 `created`
- 生命周期换成了函数的形式，如 `mounted` -> `onMounted` 参考 https://v3.cn.vuejs.org/api/composition-api.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90

```js
import { onUpdated, onMounted } from 'vue'

export default {
    setup() {
        onMounted(() => {
            console.log('mounted')
        })
        onUpdated(() => {
            console.log('updated')
        })
    } 
}
```

## Vue React diff
> Vue React diff 算法有什么区别

### diff 算法

- diff 算法是一个非常普遍常用的方法，例如提交 github pr 或者（gitlab mr）时，会对比当前提交代码的改动，这就是 diff 。
- Vue React diff 不是对比文字，而是 vdom 树，即 tree diff 。
- 传统的 tree diff 算法复杂度是 `O(n^3)` ，算法不可用。

<!-- ![](./img/tree-diff.png) -->

### 优化

- Vue React 都是用于网页开发，基于 DOM 结构，对 diff 算法都进行了优化（或者简化）
  - 只在同一层级比较，不夸层级 （DOM 结构的变化，很少有跨层级移动）
  - `tag` 不同则直接删掉重建，不去对比内部细节（DOM 结构变化，很少有只改外层，不改内层）
  - 同一个节点下的子节点，通过 `key` 区分
- 最终把时间复杂度降低到 `O(n)` ，生产环境下可用。这一点 Vue React 都是相同的。

<!-- ![](./img/tree-diff-1.png) -->

### React diff 特点

比较子节点时，仅向右移动，不向左移动。

<!-- ![](./img/react-diff.png) -->

### Vue2 diff 特点
比较子节点时，双端比较

<!-- ![](./img/vue2-diff.png) -->

定义四个指针，分别比较
- oldStartNode 和 newStartNode
- oldStartNode 和 newEndNode
- oldEndNode 和 newStartNode
- oldEndNode 和 newEndNode

然后指针继续向中间移动，知道指针汇合。

## Vue3 diff 特点 - 最长递增子序列

例如数组 `[3，5，7，1，2，8]` 的最长递增子序列就是 `[3，5，7，8 ]` 。这是一个专门的算法。

<!-- ![](./img/vue3-diff.png) -->

算法步骤
- 通过“前-前”比较找到开始的不变节点 `[A, B]`
- 通过“后-后”比较找到末尾的不变节点 `[G]`
- 剩余的有变化的节点 `[F, C, D, E, H]`
    - 通过 `newIndexToOldIndexMap` 拿到 oldChildren 中对应的 index `[5, 2, 3, 4, -1]` （`-1` 表示之前没有，要新增）
    - 计算**最长递增子序列**得到 `[2, 3, 4]` ，对应的就是 `[C, D, E]` ，即这些节点可以不变
    - 剩余的节点，根据 index 进行新增、删除

该方法旨在尽量减少 DOM 的移动，达到最少的 DOM 操作。

:::danger 答案
- React diff 特点 - 仅向右移动
- Vue2 diff 特点 - 双端比较
- Vue3 diff 特点 - 最长递增子序列
:::


### diff 算法中 key

无论在 Vue 还是 React 中，`key` 的作用都非常大。以 React 为例，是否使用 `key` 对内部 DOM 变化影响非常大。

<!-- ![](./img/key.png) -->

```html
<ul>
    <li v-for="(index, num) in nums" :key="index">
        {{num}}
    </li>
</ul>
```

```jsx
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
)
```


## Vue-router 模式
>Vue-router 模式 `'hash' | 'history' | 'abstract'` 的区别

:::caution v4 的升级
Vue-router v4 升级之后，`mode: 'xxx'` 替换为 API 的形式，但功能是一样的
- `mode: 'hash'` 替换为 `createWebHashHistory()`
- `mode: 'history'` 替换为 `createWebHistory()`
- `mode: 'abstract'` 替换为 `createMemoryHistory()`
:::

### hash

```js
// http://127.0.0.1:8881/hash.html?a=100&b=20#/aaa/bbb
location.protocol // 'http:'
location.hostname // '127.0.0.1'
location.host // '127.0.0.1:8881'
location.port // '8881'
location.pathname // '/hash.html'
location.search // '?a=100&b=20'
location.hash // '#/aaa/bbb'
```

#### hash 的特点
- 会触发页面跳转，可使用浏览器的“后退” “前进”
- 但不会刷新页面，支持 SPA 必须的特性
- hash 不会被提交到 server 端（因此刷新页面也会命中当前页面，让前端根据 hash 处理路由）

url 中的 hash ，是不会发送给 server 端的。前端 `onhashchange` 拿到自行处理。

```js
// 页面初次加载，获取 hash
document.addEventListener('DOMContentLoaded', () => {
    console.log('hash', location.hash)
})
// hash 变化，包括：
// a. JS 修改 url
// b. 手动修改 url 的 hash
// c. 浏览器前进、后退
window.onhashchange = (event) => {
    console.log('old url', event.oldURL)
    console.log('new url', event.newURL)

    console.log('hash', location.hash)
}
```

### H5 history API

常用的两个 API
- `history.pushState`
- `window.onpopstate`

页面刷新时，**服务端要做处理**，可参考[文档](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)。。即无论什么 url 访问 server ，都要返回该页面。

按照 url 规范，不同的 url 对应不同的资源，例如：
- `https://github.com/` server 返回首页
- `https://github.com/username/` server 返回用户页
- `https://github.com/username/project1/` server 返回项目页

但是用了 SPA 的前端路由，就改变了这一规则，假如 github 用了的话：
- `https://github.com/` server 返回首页
- `https://github.com/username/` server 返回首页，前端路由跳转到用户页
- `https://github.com/username/project1/` server 返回首页，前端路由跳转到项目页

所以，从开发者的实现角度来看，前端路由是一个违反规则的形式。
但是从不关心后端，只关心前端页面的用户，或者浏览器来看，更喜欢 `pushState` 这种方式。

代码参考 history-api.html

:::danger 三种模式的区别
- hash - 使用 url hash 变化记录路由地址
- history - 使用 H5 history API 来改 url 记录路由地址
- abstract - 不修改 url ，路由地址在内存中，**但页面刷新会重新回到首页**。
:::

### react-router 模式
- [browser history](https://reactrouter.com/web/api/BrowserRouter)
- [hash history](https://reactrouter.com/web/api/HashRouter)
- [memory history](https://reactrouter.com/web/api/MemoryRouter)