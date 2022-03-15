---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# grid 布局基础
> CSS grid 用于二维布局。把内容按行和列进行排版，实现复杂布局。

- [CSS-TRICKS To-Learn](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 网格容器与子项
:::tip 语法
<Tabs>
<TabItem value="container" label="网格容器">

- 网格模版
  - grid-template-rows
  - grid-template-columns
  - grid-template-areas
  - grid-template
- 网格间隙
  - 过时 grid-row-gap -> 推荐 row-gap
  - 过时 grid-column-gap -> 推荐 column-gap
  - 过时 grid-gap -> 推荐 gap
- 网格对齐方式-子项内部(子项尺寸>内容尺寸)
  - justify-items
  - align-items
  - place-items
- 网格对齐方式-容器内部(容器尺寸>网格尺寸)
  - justify-content
  - align-content
  - place-content
- 显式网格与隐式网格
  - grid-auto-cloumns
  - grid-auto-rows
  - grid-auto-flow

</TabItem>
<TabItem value="item" label="网格子项">

- 基于线的元素放置
  - grid-column-start
  - grid-column-end
  - grid-row-start
  - grid-row-end
  - grid-cloumn
  - grid-row
  - grid-area
- 单项对齐方式
  - justify-self
  - align-self
  - palce-self

</TabItem>
</Tabs>
:::

### 定义网格与fr单位
:::info 核心概念/属性
> 基于网格行和列的维度 去定义网格线的名称 和 网格轨道尺寸

- 每一列宽度 grid-template-columns
- 每一行高度 grid-template-rows
:::
:::tip
```css
.container{
   width:300px;height:300px;background:skyblue;
   /* 使用网格布局 */
   display: grid; 
}
.container-type1{
   /* 3列*2行 左上对齐网格 */
   grid-template-columns: 50px 50px 50px;
   grid-template-rows: 50px 50px 50px;
}
.container-type2{
   /* 可使用单位 可以是百分百 也可auto自动填充剩余 */
   grid-template-columns: 50px 20% auto;
   grid-template-rows: 50px 50px;
}
.container-type3{
   /* fr单位 1fr相当于1full-range 自动进行对比计算 */
   grid-template-columns: 150px 1fr 1fr;
   grid-template-rows: 0.3fr 0.3fr;

}
```
:::

### 网格命名+合并网格
:::info 核心概念/属性
> 使用命名方式定义`网格区域` 需配合子项的grid-area属性 才能合并

- 容器定义区域名 grid-template-areas
- 子项调用区域名 grid-area
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="区域命名">

```css
.container{
   width:300px;height:300px;background:skyblue;
   /* 使用网格布局 且3*3*/
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   /* 区域命名分为 a1 a2 a3 3个名称 占领3*3位置 */
   grid-template-areas: 
   "a1 a1 a2"
   "a1 a1 a2"
   "a3 a3 a3";
}
.item:nth-of-type(1){
   /* 子项使用区域命名 */
   grid-area: a1; background:pink;
}
.item:nth-of-type(2){
   grid-area: a2; background:tomato;
}
.item:nth-of-type(3){
   grid-area: a3; background:mediumspringgreen;
}
```

</TabItem>
<TabItem value="2" label="自动排列">

```css
.container{
   width:300px;height:300px;background:skyblue;
   /* 使用网格布局 且3*3*/
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   /* 区域命名分为 a1 a2 a3 3个名称 占领第一行位置 */
   grid-template-areas: 
   "a1 a2 a3";
}
.item:nth-of-type(1){
   /* 出现在第一行第3个格 其他子项自动排列与填充 */
   grid-area: a3; background:pink;
}
```

</TabItem>
<TabItem value="3" label="缩写">

```css
.container{
   /* 使用网格布局 且3*3*/
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   /* 区域命名分为 a1 a2 a3 3个名称 占领3*3位置 */
   grid-template-areas: 
   "a1 a1 a2"
   "a1 a1 a2"
   "a3 a3 a3";
}
/* 缩写 */
.combine{
   display: grid;
   /* 更直观的格子宽高 与 区域命名 */
   grid-template: 
   "a1 a1 a2" 1fr
   "a1 a1 a2" 1fr 
   "a3 a3 a3" 1fr
   / 1fr 1fr 1fr;
}

```

</TabItem>
</Tabs>
:::

### 网格间隙
:::info 核心概念/属性
> 用于设置元素间的gap大小 也通用于弹性布局

- 行间间隙 row-gap
- 列间间隙 column-gap
- 行列间隙 gap
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="行列间隙">

```css {10-13}
.container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   grid-template-areas: 
   "a1 a1 a2"
   "a1 a1 a2"
   "a3 a3 a3";
   /* 行之间的间隙 */
   row-gap: 20px;
   /* 列之间的间隙 */
   column-gap: 30px;
}
.item:nth-of-type(1){
   grid-area: a1; background:pink;
}
.item:nth-of-type(2){
   grid-area: a2; background:tomato;
}
.item:nth-of-type(3){
   grid-area: a3; background:mediumspringgreen;
}
```

</TabItem>
<TabItem value="3" label="缩写">

```css {9-10}
.container{
   /* 行之间的间隙 */
   row-gap: 20px;
   /* 列之间的间隙 */
   column-gap: 30px;
}
/* 缩写 */
.combine{
   /* gap: 行间隙 列间隙; */
   gap: 20px 30px;
}
```

</TabItem>
</Tabs>
:::

### 网格对齐方式
:::info 核心概念/属性
> 网格容器中`单项`内容的对齐方式 默认stretch拉伸填满

- 左右方向 justify-self
- 上下方向 align-self
- 上下左右 place-self
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="某项自己的对齐方式">

```css
.container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 容器分配子项大小 */
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px 100px 100px;
}
.item:nth-of-type(1) {
   /* 子项的大小 小于 容器分配的大小 才有对齐效果 */
   width:50px;
   height:50px;
   background:pink;
   justify-self: center;
   align-self: center;
}
```

</TabItem>
<TabItem value="3" label="缩写">

```css {9-10}
.item{
   /* 单项 左右对齐方式 */
   justify-self: start;
   /* 单项 上下对齐方式 */
   align-self: end;
}
/* 缩写 */
.combine{
   /* place-self: 上下 左右; */
   place-self: end start;
}
```

</TabItem>
</Tabs>
:::

:::info 核心概念/属性
> 网格容器中`子项内容`的对齐方式 默认stretch拉伸填满

- 左右方向 justify-items
- 上下方向 align-items
- 上下左右 place-items
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="每个单元对齐方式">

```css {4,7-10,13}
.container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 容器分配子项大小 */
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px 100px 100px;
   /* 每项 左右对齐方式 */
   justify-items: start;
   /* 每项 上下对齐方式 */
   align-items: end;
}
.item{
   /* 子项的大小 小于 容器分配的大小 才有对齐效果 */
   width:50px;
   height:50px;
   background:pink;
}
```

</TabItem>
<TabItem value="3" label="缩写">

```css {9-10}
.container{
   /* 每项 左右对齐方式 */
   justify-items: start;
   /* 每项 上下对齐方式 */
   align-items: end;
}
/* 缩写 */
.combine{
   /* place-items: 上下 左右; */
   place-items: end start;
}
```

</TabItem>
</Tabs>
:::

:::info 核心概念/属性
> 网格容器中`所有子项`的对齐方式 默认stretch拉伸填满

- 左右方向 justify-content
- 上下方向 align-content
- 上下左右 place-content
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="所有单元对齐方式">

```css {2,5,8-11}
.container{
   /* 容器大小 大于 整体网格大小 */
   width:500px;height:500px;background:skyblue;
   display: grid;
   /* 容器分配的所有子项大小 小于 容器大小 */
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px 100px 100px;
   /* 横向整体 左右对齐方式 */
   justify-content: space-around;
   /* 纵向整体 上下对齐方式 */
   align-content: end;
}
```

</TabItem>
<TabItem value="3" label="缩写">

```css {9-10}
.container{
   /* 横向整体 左右对齐方式 */
   justify-content: start;
   /* 纵向整体 上下对齐方式 */
   align-content: end;
}
/* 缩写 */
.combine{
   /* place-content: 上下 左右; */
   place-content: end start;
}
```

</TabItem>
</Tabs>
:::

### 显式网格与隐式网格
:::info 核心概念/属性
> 指定在显式网格外的隐式网格的排列与尺寸 应用于自动适应剩余空间

- grid-auto-flow
- grid-auto-rows
- grid-auto-cloumns
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="按行占领隐式网格">

```css {2,5,8-11}
.container{
   /* 容器大小 大于 整体网格大小 */
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 显式网格3*1 隐士网格在下方的剩余空间3*1 */
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px;
   /* 默认：row 就是按行产生隐式网格 */
   grid-auto-flow: row;
   /* 调节按行产生隐式网格的高度 默认是strech自动适应占满了*/
   grid-auto-rows: 100px;
}
/* 若5个子项 第4个和第5个将在下方填充隐式网格 */
```

</TabItem>
<TabItem value="2" label="按列占领隐式网格">

```css {2,5,8-11}
.container{
   /* 容器大小 大于 整体网格大小 */
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 显式网格1*3 隐士网格在右侧的剩余空间1*3 */
   grid-template-columns: 100px;
   grid-template-rows: 100px 100px 100px;
   /* column 就是列产生隐式网格 */
   grid-auto-flow: column;
   /* 调节按列产生隐式网格的宽度 默认是strech自动适应占满了*/
   grid-auto-columns: 100px;
}
/* 若5个子项 第4个和第5个将在右侧填充隐式网格 */
```

</TabItem>
<TabItem value="3" label="控制排序-后挪">

```css {11,13}
.container{
   /* 容器大小 大于 整体网格大小 */
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 显式网格3*1 隐士网格在下方的剩余空间3*1 */
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px;
   grid-auto-flow: row;
   grid-auto-rows: 100px;
}
/* 若有5项 且第1项排在第2个显式网格 之后的项一顺后移一位 略过第1个显式网格 */
.item:nth-of-type(1){
   grid-column-start: 2;
}
```

</TabItem>
<TabItem value="4" label="控制排序-紧密">

```css {8,11,13}
.container{
   /* 容器大小 大于 整体网格大小 */
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 显式网格3*1 隐士网格在下方的剩余空间3*1 */
   grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px;
   grid-auto-flow: row dense;
   grid-auto-rows: 100px;
}
/* 若有5项 且第1项排在第2个显式网格 之后的项紧密排列 从第1个显式网格开始 */
.item:nth-of-type(1){
   grid-column-start: 2;
}
```

</TabItem>
</Tabs>
:::

### 基于线的元素放置
:::info 核心概念/属性
> 子项区域的起始和结束位置 含水平和垂直方向

- grid-column-start 项按列线的开始位置
- grid-column-end 项按列线的结束位置
- grid-row-start 项按行线的开始位置
- grid-row-end 项按行线的结束位置
- grid-cloumn 简写 项按列线的开始结束位置
- grid-row 简写 项按行线的开始结束位置
- grid-area 简写 项的区域
:::

:::tip 语法
<Tabs>
<TabItem value="1" label="基于线放置-后项自动">

```css
.container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
}
.item:nth-of-type(1){
   background:pink;
   grid-column-start: 2;
   grid-column-end: 3;
   /* 默认值：auto */
   grid-row-start: auto;
   grid-row-end: auto;
}
/* 后面项会自动后方填充 */
.item:nth-of-type(2){ background:slategray;}
```

</TabItem>
<TabItem value="2" label="基于线放置-后项回头">

```css
.container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr;
}
.item:nth-of-type(1){
   background:pink;
   grid-column-start: 2;
   grid-column-end: 3;
   /* 确定上下左右所有位置*/
   grid-row-start: 1;
   grid-row-end: 2;
}
/* 后面项会从头开始填充 */
.item:nth-of-type(2){ background:slategray;}
```

</TabItem>
<TabItem value="3" label="夸线+线的命名">

```css
.container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 3*3格 4*4线 线的用'[命名]' */
   grid-template-columns:[col1] 1fr [col2] 1fr [col3] 1fr [col4];
   grid-template-rows:[row1] 1fr [row2] 1fr [row3] 1fr [row4];
}
.item:nth-of-type(1){
   background:pink;
   /* 按线的数量的自动命名 */
   grid-column-start:2; 
   /* span 用来夸 n格 */
   grid-column-end:span 2;
   /* 使用 定义的基线名 */
   grid-column-start: col2;
   grid-column-end: col4;
}
.item:nth-of-type(2){ background:slategray;}
```

</TabItem>
<TabItem value="4" label="基线缩写">

```css {3-5,9-10}
.item:nth-of-type(1){
   background:pink;
   /* 开始 / 结束 使用'/'隔开 */
   grid-column: 2 / 3;
   grid-row: 2 / 4;
}
.item:nth-of-type(2){ 
   background:slategray;
   /* row-start / column-start / row-end / column-end */
   grid-area: 1 / 2 / 3 / 4;
}
```

</TabItem>
</Tabs>
:::
