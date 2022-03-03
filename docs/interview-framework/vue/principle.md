---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vue 原理

## 组件化 / MVVM
:::info 组件化基础
- 老组件化 依赖操作DOM
- 数据驱动视图 Vue M-V-VM

![mvvm](/img/vue/vue-mvvm.png)
:::

## 响应式原理
> 组件data改变 立即触发视图更新
:::tip 核心原理
<Tabs>
  <TabItem value="defineReactive" label="核心原理-浅">

```js
// 响应式监听 对象上的属性
function defineReactive(target, key, value) {
  // 核心 API
  Object.defineProperty(target, key, {
    get() { return value; },
    set(newValue) {
      if (newValue !== value) {
        // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值
        value = newValue;
        updateView(); // 触发更新视图
      }
    },
  });
}

// 触发更新视图
function updateView() {
  console.log("视图已更新");
}
```
  </TabItem>
  <TabItem value="observe" label="监听对象-浅">

```js
// 监听 目标
function observer(target) {
  if (typeof target !== "object" || target === null) {
    // 不是对象或数组
    return target;
  }
  // 遍历监听 所有浅层key属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
// 数据-浅 
const data = {
  name: "zhangsan",
  age: 20,
};
observer(data);// 监听 数据-浅

// 测试 监听对象
data.name = 'lisi' // 触发 视图已更新
data.age = 21 // 触发 视图已更新
```
  </TabItem>
</Tabs>

:::

### 深度监听 对象变化
:::深度静态缺点 缺点
- 深度监听 需要递归 更耗性能
- 无法监听 新增的属性/删除的属性 使用Vue.set Vue.delete
- 无法原生监听数组
:::

:::tip 监听对象-深
<Tabs>
  <TabItem value="defineReactive" label="核心原理-深">

```js
// 响应式监听 对象上的属性
function defineReactive(target, key, value) {
  // 深度监听 递归监听属性对象上的属性
  observer(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听 值变化/引用变化后的属性
        observer(newValue);
        value = newValue;
        updateView();
      }
    },
  });
}

// 触发更新视图
function updateView() {
  console.log("视图已更新");
}
```
  </TabItem>
  <TabItem value="observe" label="监听对象-深">

```js
// 监听 目标
function observer(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
// 数据-深
const data = {
  name: "zhangsan",
  info: {
    address: "北京", // 需要深度监听
  },
};
observer(data);// 监听 数据-深

// 测试 深度监听对象
data.name = 'lisi' // 触发 视图已更新
data.info.address = '上海' // 触发 视图已更新
data.x = '100' // 新增属性，监听不到 —— 所以有 Vue.set
delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete
```
  </TabItem>
</Tabs>

:::

### 深度监听 数组变化 略
:::tip 监听数组
<Tabs>
  <TabItem value="array" label="处理数组">

```js
// 获取 原生数组原型
const oldArrayProto = Array.prototype;
// 创建新数组原型对象，并指向原生数组原型 ，用于扩展新的方法
const newArrayProto = Object.create(oldArrayProto);
// 会改变数组的函数
["push", "pop", "shift", "unshift", "splice"].forEach((methodName) => {
  newArrayProto[methodName] = function () {
    updateView(); // 触发视图更新 横切进来
    oldArrayProto[methodName].call(this, ...arguments);
    // Array.prototype.push.call(this, ...arguments)
  };
});
```
  </TabItem>
  <TabItem value="defineReactive" label="核心原理-深">

```js
// 响应式监听 对象上的属性
function defineReactive(target, key, value) {
  // 深度监听 递归监听属性对象上的属性
  observer(value);
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听 值变化/引用变化后的属性
        observer(newValue);
        value = newValue;
        updateView();
      }
    },
  });
}

// 触发更新视图
function updateView() {
  console.log("视图已更新");
}
```
  </TabItem>
  <TabItem value="observe" label="监听数组-深">

```js
// 监听 目标
function observer(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  // 只处理 对象上的隐式原型
  if (Array.isArray(target)) {
    target.__proto__ = arrProto;
  }
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
// 数据-深
const data = {
  nums: [10, 20, 30],
};
observer(data);// 监听 数据-深

// 测试 深度监听对象
data.nums.push(4); // 监听数组
```
  </TabItem>
</Tabs>

:::

## vdom / diff算法
### vdom
:::caution 
1. DOM 操作非常耗费性能
2. Vue React **数据驱动视图**
3. React 提出解决方案 vdom 
   1. vdom 用js模拟DOM结构 
   2. 新旧vdom对比 做最小更新 到DOM
   3. 最小更新 就是 数据驱动视图的逻辑
:::
:::tip JS 模拟 DOM
<Tabs>
  <TabItem value="dom" label="DOM">

```html
<div id='div1' class='container'>
  <p>vdom</p>
  <ul style='font-size: 20px'>
    <li>a</li>
  </ul>
</div>
```
  </TabItem>
  <TabItem value="js" label="JS模拟">

```js
{
  // 1 tag 标签
  tag:'div', 
  // 2 props 标签属性
  props:{ className:'container',id:'div1'},
  // 3 子vnode
  childern:[ 
    {tag:'p',children:'vdom'},
    {
      tag:'ul',
      props:{style: 'font-size: 10px'},
      childeren:[
        {tag:'li',children:'a'}
      ]
    }
  ]  
}
```
  </TabItem>
</Tabs>

:::

### snabbdom
[github](https://github.com/snabbdom/snabbdom)
:::info 总结
- h 函数 用于创建vnode
- vnode 结构 
  - 标签元素 选择器
  - 标签元素 属性/事件监听函数
  - 标签元素 内部内容/子vnode
- patch 函数
  - `patch(emptyDOM, vnode)`
  - `patch(vnode, newVnode)`

```js
import {init,classModule,propsModule,styleModule,eventListenersModule,h} from "snabbdom";
// 初始化补丁函数
const patch = init([
  classModule, // 元素 类名模块 / makes it easy to toggle classes
  propsModule, // 元素 属性模块 / for setting properties on DOM elements
  styleModule, // 元素 样式模块 支持动画样式 / handles styling on elements with support for animations
  eventListenersModule, // 元素 事件监听模块 / attaches event listeners
]);
const container = document.getElementById("container");
// 创建 vnode
const vnode = h(
  "div#container.two.classes", 
  { on: { click: someFn } }, 
  [
    h("span", { style: { fontWeight: "bold" } }, "This is bold"),
    " and this is just normal text",
    h("a", { props: { href: "/foo" } }, "I'll take you places!"),
]);
// 补丁 打到 空的DOM上 / Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);
// 创建 新的vnode
const newVnode = h(
  "div#container.two.classes",
  { on: { click: anotherEventHandler } },
  [
    h("span", { style: { fontWeight: "normal", fontStyle: "italic" } }, "This is now italic type"),
    " and this is still just normal text",
    h("a", { props: { href: "/bar" } }, "I'll take you places!"),
  ]
);
// 将新vnode 打补丁到 原始vnode上 / Second `patch` invocation
patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
```
:::

### diff算法
:::note diff 应用
- Vue React 体现在 v-for 中 key的作用
- Linux / Git 的 diff命令
:::

:::info diff 算法优化
1. 只同级比较 不跨级比较
![same-level](/img/vue/diff1.png)
2. 同级中 比较类型
   1. tag类型（selector）相同 (list中key也相同) 则为同一节点
   1. tag类型（selector）不同 则直接删掉重建
![same-level](/img/vue/diff2.png)
![same-level](/img/vue/diff3.png)
3. list中 key 不相同
![same-level](/img/vue/diff4.png)
:::

## 模板编译
:::info 
1. 前置知识 Js with
2. vue template compiler 将模版编译为 render函数
   1. React 没有模版 直接render
3. 执行render 生成 vnode 
   1. createElement(tagType,props,childNode/content)
:::

```js title='with.js'
const obj = {a:1}
console.log(obj.a) // 1
console.log(obj.b) // undefined

// with 能直接 使用obj变量 
// 打破了作用域规则 找不到属性会保存
with(obj){
  console.log(a) // 直接获取a变量
  console.log(b) // 报错
}
```

## 组件渲染过程
:::info 初次渲染过程
1. 解析 template 为 render函数
2. 触发响应式 监听data属性 getter/setter
3. 执行render函数 生成vnode 渲染到页面
:::
:::tip 更新过程
1. 修改data 触发setter 监听成功
2. 重新执行render函数 生成newVnode
3. newVnode vs. oldVnode 完成视图更新
:::
![show](/img/vue/render-process.png)

### 异步渲染
:::tip
1. [回顾 $nextTick](./app/advanced.md#tick)
2. 汇总data修改后 一次性更新试图
   1. 减少了DOM操作 提高性能
:::

## 前端路由
```js
// 基本概念
const url = "http://127.0.0.1:8880/hash.html?a=100&b=200#/a/b"
const protocol = 'http'
const hostname = '127.0.0.1'
const port = '8880'
const host = '127.0.0.1:8880'
const pathname = '/hash.html'
const search = '?a=100&b=200'
const hash = '#/a/b'
```

### hash 模式
:::tip hash特点
- hash变化 会触发页面跳转 
  1. JS 修改 url 如 点击跳转逻辑
  2. 手动修改 url输入框 的 hash 
  3. 浏览器自带的 前进、后退
- hash变化 不会刷新页面 SPA特点
- hash不会提交到服务端 完全由前端控制
- window.onhashstate 监听hash变化

```html
<button id="btn1">修改 hash</button>
<script>
  window.onhashchange = (event) => {
    console.log("old url", event.oldURL);
    console.log("new url", event.newURL);
    console.log("hash:", location.hash); //当前hash
  };
  document.addEventListener("DOMContentLoaded", () => {
    console.log("hash:", location.hash); // 页面初次加载，获取 hash
  });
  document.getElementById("btn1").addEventListener("click", () => {
    location.href = "#/user"; // a. JS 修改 url
  });
</script>
```
:::

### H5 history 模式
:::tip H5 history 特点
- 跳转不刷新页面
- history.pushState 路由跳转
- window.onpopstate 监听前进后退

```html
<button id="btn1">修改 url</button>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    console.log("load", location.pathname); // 页面初次加载，获取 path
  });
  // 打开一个新的路由
  // 【注意】用 pushState 方式，浏览器不会刷新页面
  document.getElementById("btn1").addEventListener("click", () => {
    const state = { name: "page1" };
    console.log("切换路由到", "page1");
    history.pushState(state, "", "page1"); // 重要！！
  });
  // 监听浏览器前进、后退
  window.onpopstate = (event) => {
    console.log("onpopstate", event.state, location.pathname);
  };
  // 需要 server 端配合，可参考
</script>
```
:::
:::caution 选择
- ToB系统 推荐hash 简单易用
- ToC系统 考虑H5 history 需服务端配合
:::