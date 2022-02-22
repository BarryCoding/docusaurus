---
sidebar_position: 3
---

# 高级特性

## 自定义 v-model
:::info 父组件
```html title='index.vue' {4}
<template>
  <div>
    <p>{{name}}</p>
    <CustomVModel v-model="name"/>
  </div>
</template>

<script>
import CustomVModel from './CustomVModel'
export default {
  components: {CustomVModel},
  data() {
      return {
        name: '自定义v-model',
    }
  }
}
</script>
```
:::
:::tip 子组件
```html title='CustomVModel.vue' {4,5,14-21}
<template>
  <!-- 例如：输入颜色值 改 主题颜色样式 -->
  <input type="text"
    :value="customValue"
    @input="$emit('eventName', $event.target.value)"
  />
  <!-- 1. input 使用了 :value 而不是 v-model
       2. eventName 和 model.event 对应
       3. customValue 和 model.prop 对应 -->
</template>

<script>
export default {
  model: {
    prop: "customValue", // 对应 props customValue
    event: "eventName",
  },
  props: {
    customValue: String,
    default() {return "";},
  },
};
</script>
```
:::

## $nextTick & $refs ❤️
:::caution 注意
- Vue是异步渲染
- data改变后 不会立即渲染DOM 只会获取老DOM
- $nextTick 在DOM渲染完触发 可获取最新DOM
:::
:::tip 子组件
```html title='NextTick.vue' {22-27}
<template>
  <div id="app">
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem">添加一项</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["a", "b", "c"],
    };
  },
  methods: {
    addItem() {
      // 多次 data 修改将整合 并只会渲染一次
      this.list.push(`${Date.now()}`);
      this.list.push(`${Date.now()}`);
      // data改变后 不会立即渲染DOM
      console.log(this.$refs.ul1.length); // 获取节点$refs[refName]
      // $nextTick 在DOM渲染完触发
      this.$nextTick(() => {
        console.log(this.$refs.ul1.length);
      });
    },
  },
};
</script>
```
:::

## refs

## slot

## 动态组件

## 异步组件

## keep-alive

## mixin

