---
sidebar_position: 2
---

# Vue 组件

## 生命周期 {#lifecycle}
:::danger 主要步骤
1. 创建 create
2. 挂载 mount
3. 更新 update
4. 销毁 destroy / unmount
:::
![vue-lifecycle](/img/vue/lifecycle.svg)

## 组件通讯
:::caution 组件通讯
1. props $emit
2. 自定义事件 `$on $off $emit`
:::
:::tip 代码
```js title='customEvent.js'
import Vue from 'vue'
// 知识点2 创建一个单独的组件 来自定义事件
export default new Vue()
```
```html title='index.vue'
<template>
  <div>
    <!-- 知识点1 父子组件通讯 -->
    <Input @add="addHandler" />
    <List :list="list" @delete="deleteHandler" />
  </div>
</template>

<script>
import Input from "./Input";
import List from "./List";
export default {
  components: { Input, List,},
  data() {
    return {
      list: [
        { id: "id-1", title: "标题1",},
        { id: "id-2", title: "标题2",},
      ],
    };
  },
  methods: {
    addHandler(title) {
      this.list.push({id: `id-${Date.now()}`,title,});
    },
    deleteHandler(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
  },
  // 组件未完成渲染
  created() {console.log("index created");},
  // 组件已完成渲染 且在所有子自己完成created和mounted之后
  mounted() {console.log("index mounted");},
  // 处理data
  beforeUpdate() {console.log("index before update");},
  // 处理渲染
  updated() {console.log("index updated");},
};
</script>
```
```html title='Input.vue'
<template>
  <div>
    <input type="text" v-model="title" />
    <button @click="addTitle">add</button>
  </div>
</template>

<script>
import event from "./event"; // 知识点2 自定义事件
export default {
  data() {return {title: "",};},
  methods: {
    addTitle() {
      // 知识点1 触发父组件事件 @add
      this.$emit("add", this.title);
      // 知识点2 调用自定义事件 突破了父子组件的限制 
      event.$emit("onAddTitle", this.title);
      this.title = "";
    },
  },
};
</script>
```
```html title='List.vue'
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.title }}
        <button @click="deleteItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import event from "./event"; // 知识点2 自定义事件
export default {
  // props: ['list'] 
  props: { // prop 规范写法 类型和默认值
    list: {
      type: Array,
      default() {return [];},
    },
  },
  methods: {
    deleteItem(id) {
      // 知识点1 触发父组件事件 @delete
      this.$emit("delete", id);
    },
    addTitleHandler(title) {console.log("on add title", title);},
  },
  // 在父组件created后 子组件进行created 和 mounted
  created() {console.log("list created");},
  mounted() {
    console.log("list mounted");
    // 知识点2 绑定自定义事件
    event.$on("onAddTitle", this.addTitleHandler);
  },
  beforeUpdate() {console.log("list before update");},
  updated() {console.log("list updated");},
  beforeDestroy() {
    // 知识点2 自定义事件及时销毁，防止内存泄露
    event.$off("onAddTitle", this.addTitleHandler);
  },
};
</script>
```
:::