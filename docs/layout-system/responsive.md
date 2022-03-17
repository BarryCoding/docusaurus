---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 响应式 布局
> 网页根据屏幕宽度调整网页设计。给不同的设备提供更舒适的界面和用户体验。

> 适合中小型项目。

- [CSS-TRICKS To-Learn](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [设备-尺寸](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

## 响应式 语法
### 语法基础
:::info 媒体查询
- 媒体类型 media type
  - all 所有设备
  - print 打印预览模式
  - screen 屏幕设备
  - speech 语言合成器 ？
- 媒体特性 media feature 写在()中
  - width 视口宽度
  - height 视口高度
  - aspect-ratio 视口宽高比
  - orientation 视口的旋转方向 竖着/横着
  - 其他 useragent 输出设备 浏览器环境等
- 逻辑操作符 logical operators 构造复杂的媒体条件
  - and `且(&&)` 组合多个媒体查询 为一个查询
  - not `非(!)`
  - only `仅(===)` 很少用
  - ， `或(||)` 组合多个媒体查询 为一个规则
- link标签方式 
  - 通过标签media属性 设置媒体类型和特征
:::

:::tip 简单演示
<Tabs>
<TabItem value="type" label="媒体类型">

```css
/* 媒体查询 设备类型 */
@media print {
   .box{
         font-size: 60px;
   }
}
```

</TabItem>
<TabItem value="feature" label="媒体特性">

```css
/* 媒体特性 feature 写在 () 中 */
@media ( min-width: 700px ) {  
   .box {
         width: 200px; height: 200px;
   }
}
/* 竖屏 */
@media (orientation: portrait) {
   .box {background: pink;}
}
/* 横屏 */
@media (orientation: landscape) {
   .box {background: skyblue;}
}
```

</TabItem>
<TabItem value="logical" label="逻辑操作符">

```css
/* and 且 && */
@media screen and ( min-width: 700px ) and (max-width: 1200px) {  
   .box {
         width: 200px; height: 200px;
   }
}
/* not 非 ! */
@media not screen and ( min-width: 700px ) {
   .box {background: pink;}
}
/* , 或 || */
@media screen , print and ( min-width: 700px ) {
   .box {background: skyblue;}
}
```

</TabItem>
<TabItem value="link" label="link标签">

```html
<link rel="stylesheet" href="./a.css" media="(orientation: portrait)">
<link rel="stylesheet" href="./b.css" media="(orientation: landscape)">
```

</TabItem>
</Tabs>
:::

### 媒体查询书写
:::info 位置和顺序
- 样式最底部 实现css覆盖
- 移动端到pc端
  - 先完成了移动端为默认样式在上方
  - 多个设备媒体查询 min-width 前后排列的样式必须从小到大 
  - 较大屏设备的样式 才能逐步压盖较小屏样式
- pc端到移动端 
  - 先完成了pc端作为默认样式在上方
  - 多个设备媒体查询 max-width 前后排列的样式必须从大到小
  - 较小屏设备的样式 才能逐步压盖较大屏样式
:::

:::tip 书写顺序
<Tabs>
<TabItem value="type" label="移动优先">

```css
/* 移动端过渡到pc端 min-width编写顺序：从小到大进行适配 */
/* 默认样式 移动设备 */
.box{
   width:100px;height:100px;
   background:blue;
}
/* min-width 从小 */
@media (min-width: 700px) {
   .box{background: pink;}
}
/* min-width 到大 */
@media (min-width: 1000px) {
   .box{background: green;}
} 
```

</TabItem>
<TabItem value="feature" label="pc优先">

```css
/* PC端响应式过渡到移动端 max-width , 从大到小区编写 */
/* 默认样式 pc端样式 */
.box{
   width:100px;height:100px;
   background:blue;
}
/* max-width 从大 */
@media (max-width: 1000px) {
   .box{background: pink;}
}
/* max-width 到小 */
@media (max-width: 700px) {
   .box{background: green;}
} 
```

</TabItem>
</Tabs>
:::

### 响应式 断点设定
:::info 屏幕宽度区分 由小到大
- `< 576px` es extra small
- `>= 576px` sm small
- `>= 768px` md medium
- `>= 992px` lg large
- `>= 1200px` xl extra large
- `>= 1400px` xxl extra extra large
:::

:::tip 简单案例
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="d-none">11111</div>
<div class="d-sm-none">22222</div>
<div class="d-md-none">33333</div>
<div class="d-lg-none">44444</div>
<div class="d-xl-none">55555</div>
<div class="d-xxl-none">66666</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css
.d-none{display: none;} /* 默认 xs */
@media (min-width: 576px){.d-sm-none{display: none;}}
@media (min-width: 768px){.d-md-none{display: none;}}
@media (min-width: 992px){.d-lg-none{display: none;}}
@media (min-width: 1200px){.d-xl-none{display: none;}}
@media (min-width: 1400px){.d-xxl-none{display: none;}}
```

</TabItem>
</Tabs>
:::

### 响应式 gird系统
:::info 原理
- 根据不同的设备宽度定断点查询
- grid配置 给不同的断点媒体查询 grid容器和grid项
- 给具体标签项配置 不同的断点媒体查询的类名 实现不同设备响应式效果
:::

:::tip 响应式网格系统
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="row">
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
   <div class="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6">col</div>
</div>
```

</TabItem>
<TabItem value="2" label="默认样式">

```css
/* 一行 12等分 */
.row{
   background:skyblue;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 50px;
   grid-auto-rows: 50px;
}
/* 一项 默认独占一行 默认为xs最小屏样式 */
.row div{
   background:pink;
   border:1px black solid;
   grid-area: auto/auto/auto/span 12;
}
```

</TabItem>
<TabItem value="sm" label="小屏">

```css {1}
@media (min-width: 576px){
   .row .col-sm-1{grid-area: auto/auto/auto/span 1;}
   .row .col-sm-2{grid-area: auto/auto/auto/span 2;}
   .row .col-sm-3{grid-area: auto/auto/auto/span 3;}
   .row .col-sm-4{grid-area: auto/auto/auto/span 4;}
   .row .col-sm-5{grid-area: auto/auto/auto/span 5;}
   .row .col-sm-6{grid-area: auto/auto/auto/span 6;}
   .row .col-sm-7{grid-area: auto/auto/auto/span 7;}
   .row .col-sm-8{grid-area: auto/auto/auto/span 8;}
   .row .col-sm-9{grid-area: auto/auto/auto/span 9;}
   .row .col-sm-10{grid-area: auto/auto/auto/span 10;}
   .row .col-sm-11{grid-area: auto/auto/auto/span 11;}
   .row .col-sm-12{grid-area: auto/auto/auto/span 12;}
}
```

</TabItem>
<TabItem value="md" label="中屏">

```css {1}
@media (min-width: 768px){
   .row .col-md-1{grid-area: auto/auto/auto/span 1;}
   .row .col-md-2{grid-area: auto/auto/auto/span 2;}
   .row .col-md-3{grid-area: auto/auto/auto/span 3;}
   .row .col-md-4{grid-area: auto/auto/auto/span 4;}
   .row .col-md-5{grid-area: auto/auto/auto/span 5;}
   .row .col-md-6{grid-area: auto/auto/auto/span 6;}
   .row .col-md-7{grid-area: auto/auto/auto/span 7;}
   .row .col-md-8{grid-area: auto/auto/auto/span 8;}
   .row .col-md-9{grid-area: auto/auto/auto/span 9;}
   .row .col-md-10{grid-area: auto/auto/auto/span 10;}
   .row .col-md-11{grid-area: auto/auto/auto/span 11;}
   .row .col-md-12{grid-area: auto/auto/auto/span 12;}
}
```

</TabItem>
<TabItem value="lg" label="大屏">

```css {1}
@media (min-width: 992px){
   .row .col-lg-1{grid-area: auto/auto/auto/span 1;}
   .row .col-lg-2{grid-area: auto/auto/auto/span 2;}
   .row .col-lg-3{grid-area: auto/auto/auto/span 3;}
   .row .col-lg-4{grid-area: auto/auto/auto/span 4;}
   .row .col-lg-5{grid-area: auto/auto/auto/span 5;}
   .row .col-lg-6{grid-area: auto/auto/auto/span 6;}
   .row .col-lg-7{grid-area: auto/auto/auto/span 7;}
   .row .col-lg-8{grid-area: auto/auto/auto/span 8;}
   .row .col-lg-9{grid-area: auto/auto/auto/span 9;}
   .row .col-lg-10{grid-area: auto/auto/auto/span 10;}
   .row .col-lg-11{grid-area: auto/auto/auto/span 11;}
   .row .col-lg-12{grid-area: auto/auto/auto/span 12;}
}
```

</TabItem>
<TabItem value="xl" label="超大屏">

```css {1}
@media (min-width: 1200px){
   .row .col-xl-1{grid-area: auto/auto/auto/span 1;}
   .row .col-xl-2{grid-area: auto/auto/auto/span 2;}
   .row .col-xl-3{grid-area: auto/auto/auto/span 3;}
   .row .col-xl-4{grid-area: auto/auto/auto/span 4;}
   .row .col-xl-5{grid-area: auto/auto/auto/span 5;}
   .row .col-xl-6{grid-area: auto/auto/auto/span 6;}
   .row .col-xl-7{grid-area: auto/auto/auto/span 7;}
   .row .col-xl-8{grid-area: auto/auto/auto/span 8;}
   .row .col-xl-9{grid-area: auto/auto/auto/span 9;}
   .row .col-xl-10{grid-area: auto/auto/auto/span 10;}
   .row .col-xl-11{grid-area: auto/auto/auto/span 11;}
   .row .col-xl-12{grid-area: auto/auto/auto/span 12;}
}
```

</TabItem>
<TabItem value="xxl" label="最大屏">

```css {1}
@media (min-width: 1400px){
   .row .col-xxl-1{grid-area: auto/auto/auto/span 1;}
   .row .col-xxl-2{grid-area: auto/auto/auto/span 2;}
   .row .col-xxl-3{grid-area: auto/auto/auto/span 3;}
   .row .col-xxl-4{grid-area: auto/auto/auto/span 4;}
   .row .col-xxl-5{grid-area: auto/auto/auto/span 5;}
   .row .col-xxl-6{grid-area: auto/auto/auto/span 6;}
   .row .col-xxl-7{grid-area: auto/auto/auto/span 7;}
   .row .col-xxl-8{grid-area: auto/auto/auto/span 8;}
   .row .col-xxl-9{grid-area: auto/auto/auto/span 9;}
   .row .col-xxl-10{grid-area: auto/auto/auto/span 10;}
   .row .col-xxl-11{grid-area: auto/auto/auto/span 11;}
   .row .col-xxl-12{grid-area: auto/auto/auto/span 12;}
}
```

</TabItem>
</Tabs>
:::

## 响应式 交互行为
:::info 方式
- `:checked +` 表单伪类checked 配合 兄弟选择器+
- Js
:::

:::tip 伪类方式
<Tabs>
<TabItem value="1" label="结构">

```html
<!-- 使用 label+input 增加点击范围 -->
<label for="menu">
   <span>菜单按钮</span>
</label>
<!-- input 利用 checkbox 的伪类 :checked 且与 ul列表 紧密相连为兄弟 -->
<input id="menu" type="checkbox">
<ul>
   <li>首页</li>
   <li>教程</li>
   <li>论坛</li>
   <li>文章</li>
</ul>
```

</TabItem>
<TabItem value="2" label="样式">

```css
ul{display: none;}
input {display: none;} /* 隐藏勾选框 */
/* 勾选时 触发 显示列表项 */
input:checked + ul{ 
   display: block;
}
/* 使用 移动端优先 min-width */
@media (min-width: 700px){
   /* 大屏 显示列表项 隐藏菜单按钮 */
   ul{display: block;}
   span{display: none;}
}
```

</TabItem>
</Tabs>
:::

## 响应式 [bootstrap](https://getbootstrap.com/)


