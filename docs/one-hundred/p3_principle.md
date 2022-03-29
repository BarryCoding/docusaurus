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