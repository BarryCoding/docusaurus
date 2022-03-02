---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

## $nextTick & $refs ❤️ {#tick}
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

## slot 插槽
:::caution 注意
- 基本使用
- 作用域slot
- 具名slot
:::

:::info 父组件调用
<Tabs>
  <TabItem value="SlotDemo" label="SlotDemo">

```html
<template>
  <div>
    <!-- slot 基本使用 直接插入内容 -->
    <SlotDemo :url="website.url">
      {{website.title}}
    </SlotDemo>
  </div>
</template>

<script>
import SlotDemo from './SlotDemo'
export default {
  components: {SlotDemo},
  data() {
      return {
        website: {url: "http://imooc.com/",title: "imooc",
      },
    }
  }
}
</script>
```
  </TabItem>
  
  <TabItem value="ScopedSlotDemo" label="ScopedSlotDemo">

```html
<template>
  <div>
    <!-- slot 作用域插槽 v-slot 使用子组件属性 -->
    <ScopedSlotDemo :url="website.url">
      <template v-slot="slotProps">
        {{slotProps.slotData.title}}
      </template>
    </ScopedSlotDemo>
  </div>
</template>

<script>
import ScopedSlotDemo from './ScopedSlotDemo'
export default {
  components: {ScopedSlotDemo},
  data() {
      return {
        website: {url: "http://imooc.com/",},
    }
  }
}
</script>
```
  </TabItem>
  <TabItem value="NamedSlot" label="NamedSlot">

```html
<template>
  <div>
    <!-- slot 具名插槽 v-slot:name / #name -->
    <NamedSlot>
      <template #header>
        <h1>将插入 header slot 中</h1>
      </template>
      <p>将插入 无名 slot 中</p>
      <template v-slot:footer>
        <h2>将插入 footer slot 中</h1>
      </template>
    </NamedSlot>
  </div>
</template>

<script>
import NamedSlot from './NamedSlot'
export default {
  components: {NamedSlot},
}
</script>
```
  </TabItem>
</Tabs>

:::

:::tip 子组件群
<Tabs>
  <TabItem value="SlotDemo" label="SlotDemo">

```html title='SlotDemo.vue' {3}
<template>
  <a :href="url">
    <slot> 默认内容，即父组件没设置内容时，这里显示 </slot>
  </a>
</template>

<script>
export default {
  props: ["url"], // props 传参简写
};
</script>
```
  </TabItem>
  
  <TabItem value="ScopedSlotDemo" label="ScopedSlotDemo">

```html title='ScopedSlotDemo.vue' {3}
<template>
  <a :href="url">
    <slot :slotData="website">
      {{ website.subTitle }}
      <!-- 默认值显示 subTitle ，即父组件不传内容时 -->
    </slot>
  </a>
</template>

<script>
export default {
  props: ["url"],
  data() {
    return {
      website: {
        title: "wangEditor",
        subTitle: "轻量级富文本编辑器",
      },
    };
  },
};
</script>
```
  </TabItem>
  <TabItem value="NamedSlot" label="NamedSlot">

```html title='NamedSlot.vue' {4,7,10}
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
```
  </TabItem>
</Tabs>

:::

## 动态组件
:::caution 注意
- `<component :is="dynamicComponent"/>`
- 具体渲染哪个组件不明确 需要根据数据动态渲染所需组件
:::
:::info 父组件
```html title='index.vue' {4}
<template>
  <div>
    <!-- 动态组件 根据名称处理组件 -->
    <component :is="dynamicComponent"/>
  </div>
</template>

<script>
import NextTick from './NextTick'
export default {
  components: {NextTick},
  data() {
      return {
        dynamicComponent: "NextTick",
    }
  }
}
</script>
```
:::

## 异步组件
:::caution 注意
- import()
- 按需加载 异步加载大组件/模块
:::
:::info 父组件
```html title='index.vue' {4,11}
<template>
  <div>
    <!-- 异步组件 -->
    <FormDemo v-if="showFormDemo"/>
    <button @click="showFormDemo = true">show form demo</button>
  </div>
</template>

<script>
export default {
  components: {FormDemo: () => import('./FormDemo'),},
  data() {
      return {
        showFormDemo: false,
    }
  }
}
</script>
```
:::

## keep-alive
:::caution 注意
- 缓存组件 常见性能优化
- 频繁切换 页面/tab 但无需重复渲染页面
:::

:::info 父组件
```html title='KeepAlive.vue' {7-11}
<template>
    <div>
        <button @click="changeState('A')">A</button>
        <button @click="changeState('B')">B</button>
        <button @click="changeState('C')">C</button>

        <keep-alive> <!-- tab切换 组件不会销毁 -->
            <KeepAliveStageA v-if="state === 'A'"/>
            <KeepAliveStageB v-if="state === 'B'"/>
            <KeepAliveStageC v-if="state === 'C'"/>
        </keep-alive>
    </div>
</template>

<script>
import KeepAliveStageA from './KeepAliveStateA'
import KeepAliveStageB from './KeepAliveStateB'
import KeepAliveStageC from './KeepAliveStateC'

export default {
    components: {
        KeepAliveStageA,
        KeepAliveStageB,
        KeepAliveStageC
    },
    data() {
        return {state: 'A'}
    },
    methods: {
        changeState(state) {this.state = state}
    }
}
</script>
```
:::

:::tip 子组件群
<Tabs>
  <TabItem value="KeepAliveStageA" label="KeepAliveStageA">

```html title='KeepAliveStageA.vue'
<template>
  <p>state A</p>
</template>

<script>
export default {
  mounted() {console.log("A mounted");},
  destroyed() {console.log("A destroyed");}, //keep-alive 不会销毁组件
};
</script>
```
  </TabItem>
  
  <TabItem value="KeepAliveStageB" label="KeepAliveStageB">

```html title='KeepAliveStageB.vue'
<template>
  <p>state B</p>
</template>

<script>
export default {
  mounted() {console.log("B mounted");},
  destroyed() {console.log("B destroyed");}, //keep-alive 不会销毁组件
};
</script>
```
  </TabItem>
  <TabItem value="KeepAliveStageC" label="KeepAliveStageC">

```html title='KeepAliveStageC.vue'
<template>
  <p>state C</p>
</template>

<script>
export default {
  mounted() {console.log("C mounted");},
  destroyed() {console.log("C destroyed");}, //keep-alive 不会销毁组件
};
</script>
```
  </TabItem>
</Tabs>

:::

## mixin 逻辑混合
:::caution 注意
- 多个组件有相同逻辑 应该抽离为 mixin
- mixin 非完美方案 会有一些问题
  1. 变量来源不明确(mixin/组件) 不利于阅读
  2. 使用多个mixin 可能变量冲突 
  3. 多个组件使用多个mixin 多对多关系 复杂度高
- Vue3 Composition API 旨在解决这些问题
:::
:::info 调用mixin
```html title='MixinDemo.vue' {10,12}
<template>
  <div>
    <!-- city showName 在mixin中 -->
    <p>{{name}} {{major}} {{city}}</p>
    <button @click="showName">显示姓名</button>
  </div>
</template>

<script>
import myMixin from './mixin'
export default {
  mixins: [myMixin], // 可以添加多个，会自动合并起来
  data() {
    return {name: '双越',major: 'web 前端'}
  },
  mounted() {
    console.log('component mounted', this.name)
  }
}
</script>
```
:::
:::tip mixin文件
```js
export default {
  data() {
    return {city: "北京", };
  },
  methods: {
    showName() {console.log(this.name); },
  },
  mounted() {
    console.log("mixin mounted", this.name);
  },
};

```
:::
