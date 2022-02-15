---
sidebar_position: 1
---

# 基础语法

## 模板语法 {#syntax}
- [对比react](../../react/app/basic.md#syntax)
```html
<template>
  <div>
    <p>1 文本插值 {{ message }}</p>
    <p>2 JS 表达式 {{ flag ? "yes" : "no" }} （只能是表达式，不能是 js 语句）</p>
    <p :id="dynamicId">3 动态属性 id</p>
    <p v-html="rawHtml">
      <span>4 有 xss 风险</span>
      <span>【注意】使用 v-html 之后，将会覆盖子元素</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hello vue",
      flag: true,
      rawHtml: "指令 - 原始 html <b>加粗</b> <i>斜体</i>",
      dynamicId: `id-${Date.now()}`,
    };
  },
};
</script>
```

## computed / watch
:::caution 注意
- computed 有缓存 data改变才重新计算
- watch 默认为**浅监听** 可深度监听引用类型 但拿不到oldValue
:::

:::info computed 计算属性
```html
<template>
  <div>
    <p>data - num {{ num }}</p>
    <p>computed - double1 {{ double1 }}</p>
    <input v-model="double2" />
  </div>
</template>

<script>
export default {
  data() {
    return {num: 20,};
  },
  computed: {
    double1() {return this.num * 2;},

    // 若使用v-model 则必须配置 set get
    double2: {
      get() {return this.num * 2;},
      set(val) {this.num = val / 2;},
    },
  },
};
</script>
```
:::

:::danger watch 监听属性
```html
<template>
  <div>
    <input v-model="name" />
    <input v-model="info.city" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "双越", // imooc老师
      info: {city: "北京",},
    };
  },
  watch: {
    // 值类型，可正常拿到 oldVal 和 val
    name(oldVal, val) {
      console.log("watch name", oldVal, val); 
    },
    // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
    info: {
      handler(oldVal, val) {
        console.log("watch info", oldVal, val); 
      },
      deep: true, // 开启 深度监听
    },
  },
};
</script>
```
:::

## class / style
:::caution 注意
- class 可用动态属性
- style 用驼峰命名
:::
:::tip class/style
```html
<template>
  <div>
    <p :class="{ black: isBlack, yellow: isYellow }">1 动态判断使用 class</p>
    <p :class="[black, yellow]">2 直接使用 class （数组）</p>
    <p :style="styleData">3 使用 style</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlack: true, // 1 用于判断类名 
      isYellow: true, // 对象中判断

      black: "black", // 2 直接作用于类名
      yellow: "yellow", // 数组中元素

      styleData: { // 3 样式对象
        fontSize: "40px", // 转换为驼峰式
        color: "red",
        backgroundColor: "#ccc", // 转换为驼峰式
      },
    };
  },
};
</script>

<style scoped>
.black {background-color: #999;}
.yellow {color: yellow;}
</style>
```
:::

## 条件渲染
:::caution 注意
- v-if 只渲染满足条件的内容
  - 一般用于一次性判断 如权限
- v-show 内容都渲染出来 并通过`display:none`隐藏内容
  - 一般用于多次判断 节约性能避免重复销毁和创建组件 如开关
:::
:::tip v-if/v-show
```html
<template>
  <div>
    <p v-if="type === 'a'">A</p>
    <p v-else-if="type === 'b'">B</p>
    <p v-else>other</p>

    <p v-show="type === 'a'">A by v-show</p>
    <p v-show="type === 'b'">B by v-show</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "a",
    };
  },
};
</script>
```
:::

## 循环 v-for
:::caution 注意
- `v-for="(item, index) in arr" :key="item.index"`
- `v-for="(item, key, index) in obj" :key="item.key"`
- key 的唯一性
- v-for 与 v-if 不能并列使用 但可纵向嵌套使用
:::
:::tip v-for 循环数组/对象 
```html
<template>
  <div>
    <p>遍历数组</p>
    <ul v-if="flag">
      <li v-for="(item, index) in listArr" :key="item.id">
        {{ index }} - {{ item.id }} - {{ item.title }}
      </li>
    </ul>

    <p>遍历对象</p>
    <ul>
      <li v-for="(val, key, index) in listObj" :key="key">
        {{ index }} - {{ key }} - {{ val.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      listArr: [
        { id: "a", title: "标题1" }, // 数据结构中，最好有 id ，方便使用 key
        { id: "b", title: "标题2" },
        { id: "c", title: "标题3" },
      ],
      listObj: { // 对象key本身就是唯一的
        a: { title: "标题1" },
        b: { title: "标题2" },
        c: { title: "标题3" },
      },
    };
  },
};
</script>
```
:::
## 事件
:::caution 注意
- event参数 自定义参数$event
- 事件被绑定到哪里 [对比react](#)
- 事件修饰符 按键修饰符
:::
:::tip 事件绑定
```html
<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {num: 0,};
  },
  methods: {
    // 事件函数调用不带参数 则默认参数是event
    increment1(event) {
      // 1 event是原生的 event 对象
      console.log("event", event, event.__proto__.constructor); 
      // 事件对象
      console.log(event.target);
      // 2 事件是被注册到当前元素的，和 React 不一样
      console.log(event.currentTarget); 
      this.num++;

      // 2. 事件被挂载到当前元素
      // 和 DOM 事件一样
    },
    // 事件函数调用带参数 需手动传 $event
    increment2(val, event) {
      console.log(event.target);
      this.num = this.num + val;
    },
    loadHandler() {
      // do some thing
    },
  },
  mounted() {
    window.addEventListener("load", this.loadHandler);
  },
  beforeDestroy() {
    //【注意】用 vue 绑定的事件，组建销毁时会自动被解绑
    // 自己绑定的事件，需要自己销毁！！！
    window.removeEventListener("load", this.loadHandler);
  },
};
</script>
```
:::

:::danger 事件修饰符
- 阻止单击事件传播 `stop`
  - `v-on:click.stop='myClick'`
- 防止提交默认事件 `prevent`
  - `v-on:submit.prevent='mySubmit'`
- 串联多个修饰符 
  - `v-on:click.stop.prevent='myClick'`
- 只有修饰符？
  - `v-on:click.stop='fn'`
- 默认冒泡模式 变 捕获模式 事件触发 由外而内 `capture`
  - `v-on:click.capture='myClick'`
- 事件必须是自身触发 非内部元素冒泡触发 `self`
  - `v-on:click.self='myClick'`
:::
:::danger 按键修饰符
- ctrl按钮触发 可和其它按钮一起按 `ctrl` 
  - `@click.ctrl='myClick'`
- 只有ctrl按钮触发 `exact`
  - `@click.ctrl.exact='myClick'`
- 只有点击才触发 不含其它按键 `exact`
  - `@click.exact='myClick'`
:::

## 表单

