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

## 模板编译

## 组件渲染过程

## 前端路由

