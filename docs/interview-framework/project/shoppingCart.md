---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 购物车
- 技术栈 Vue
- todo 原型图补充

## 状态设计
>state 数据结构设计
:::danger 设计原则
- 用数据描述所有内容 
  - 内容展示数据 核心数据
  - 无需设计逻辑数据 逻辑按组件功能分配
- 数据结构化 易用程序操作（查找/遍历）
  - 数组 / 对象 
- 数据可扩展 便于补充新功能 
  - 可修改 / 删除
:::
:::info 数据结构
```js
data(){
  return {
    poductList:[
      {id:1, title:'商品1',price:10}
    ],
    cartList:[
      // 用id 绑定商品 便于数据扩展
      {id:1, quntitly:1}
    ]
  }
}
```
:::

## 组件设计
:::danger 设计原则
- 按功能拆分
- 组件原子化 
  - 一个组件一个功能
  - `Tiny Habit` Components
- 组件分工
  - 容器组件 统一管理 所有数据与逻辑
  - UI组件 只负责视图与交互 调用部分数据与逻辑
:::
:::info 组件拆分
- 购物 Shopping 容器组件 负责数据和逻辑（若使用vuex 数据和逻辑放vuex）
  - 商品列表 ProductList UI组件
    - 单件商品 ProductItem
  - 购物车列表 CartList UI组件 含总价值
    - 单件购物车商品 CartItem 含购买数量
```html
<Shopping>
  <ProductList/>
  <CartList/>
</Shopping>
```
:::

:::tip 代码
<Tabs>
  <TabItem value="Shopping" label="Shopping">

```html title='./Shopping.vue'
<template>
  <div>
    <ProductList :list="ProductList" />
    <hr />
    <CartList :ProductList="ProductList" :cartList="cartList" />
  </div>
</template>

<script>
import ProductList from "./ProductList/index";
import CartList from "./CartList/index";
import event from "./event"; // 用于自定义事件

export default {
  components: {ProductList,CartList,},
  data() {
    return {
      ProductList: [
        {id: 1,title: "商品A",price: 10,},
        {id: 2,title: "商品B",price: 20,}
      ],
      cartList: [{id: 1,quantity: 1}],
    };
  },
  methods: {
    // 加入购物车
    addToCart(id) {
      const prd = this.cartList.find((item) => item.id === id); // 查找该商品
      if (prd) {
        prd.quantity++; // 购物车有该商品 数量加一
      }else{
        this.cartList.push({id,quantity: 1}); // 购物车没有该商品 添加一个此商品
      }
      
    },
    // 购物数量减一
    delFromCart(id) {
      const prd = this.cartList.find((item) => item.id === id); // 查找该商品
      if (prd.quantity <= 0) {
        this.cartList = this.cartList.filter((item) => item.id !== id); // 完全删除
      }else{
        prd.quantity--; // 数量减一
      }
    },
  },
  mounted() {
    event.$on("addToCart", this.addToCart); // 自定义事件绑定
    event.$on("delFromCart", this.delFromCart);
  },
};
</script>
```
  </TabItem>
  <TabItem value="ProductList" label="ProductList">

```html title='./ProductList/index.vue'
<template>
  <div>
    <ProductItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
  components: { ProductItem },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
```
  </TabItem>
  <TabItem value="ProductItem" label="ProductItem">

```html title='./ProductList/ProductItem.vue'
<template>
  <div>
    <span>{{ item.title }}</span> <span>{{ item.price }}元</span>
    <a href="#" @click="clickHandler(item.id, $event)">加入购物车</a>
  </div>
</template>

<script>
import event from "../event"; // 自定义事件
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    clickHandler(id, e) {
      e.preventDefault();
      event.$emit("addToCart", id); // 调用自定义事件
    },
  },
};
</script>
```
  </TabItem>
  <TabItem value="CartList" label="CartList">

```html title='./CartList/index.vue'
<template>
  <div>
    <CartItem v-for="item in list" :key="item.id" :item="item" />
    <p>总价 {{ totalPrice }}</p>
  </div>
</template>

<script>
import CartItem from "./CartItem";
export default {
  components: {CartItem},
  props: {
    ProductList: {type: Array,default() {return []}},
    cartList: {type: Array,default() {return []}},
  },
  computed: {
    // 计算 购物车商品列表 补充具体商品数据
    list() {
      return this.cartList.map((cartListItem) => {
        // 通过商品id 找到对应的 productItem
        const ProductItem = this.ProductList.find(
          (prdItem) => prdItem.id === cartListItem.id
        );
        // 返回商品信息，外加购物数量
        return {...ProductItem, quantity: cartListItem.quantity};
      });
    },
    // 总价 reduce函数
    totalPrice() {
      return this.list.reduce((acc, curItem) => acc + curItem.quantity * curItem.price,0);
    },
  },
};
</script>
```
  </TabItem>
  <TabItem value="ListItem" label="ListItem">

```html title='./CartList/CartItem.vue'
<template>
  <div>
    <span>{{ item.title }}</span><span>(数量 {{ item.quantity }})</span>
    <a href="#" @click="addClickHandler(item.id, $event)">增加</a>
    <a href="#" @click="delClickHandler(item.id, $event)">减少</a>
  </div>
</template>

<script>
import event from "../event"; // 自定义 购物车事件

export default {
  props: {
    item: {type: Object,default() {return {}},},
  },
  methods: {
    addClickHandler(id, e) {
      e.preventDefault();
      event.$emit("addToCart", id);
    },
    delClickHandler(id, e) {
      e.preventDefault();
      event.$emit("delFromCart", id);
    },
  },
};
</script>
```
  </TabItem>
  <TabItem value="event" label="event">

```js title='./event.js'
import Vue from 'vue'
export default new Vue()
```
  </TabItem>
</Tabs>
:::