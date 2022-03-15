---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# grid 布局应用

## 方法
### repeat() 
:::info 核心概念
- `repeat(times, size)` 根据循环次数和大小 进行填写
- times 自动填充/自适应屏幕大小 auto-fill
:::

:::tip 应用
<Tabs>
<TabItem value="1" label="简单应用">

```css {4-6}
.container{
   height:400px; background:skyblue;
   display: grid;
   /* grid-template-columns: 100px 100px 100px; */
   /* 上下效果一致 */
   grid-template-columns: repeat(3, 100px);
   grid-template-rows: 100px;
}
.item{background:pink;}
```

</TabItem>
<TabItem value="2" label="自由应用">

```css {4-6}
.container{
   height:400px; background:skyblue;
   display: grid;
   /* grid-template-columns: 150px 100px 100px; */
   /* 上下效果一致 */
   grid-template-columns: 150px repeat(2, 100px);
   grid-template-rows: 100px;
}
/* 超出项按 自动按行的隐式网格填充 */
.item{background:pink;}
```

</TabItem>
<TabItem value="3" label="自动适应屏幕">

```css {4-5}
.container{
   height:400px; background:skyblue;
   display: grid;
   /* 按 100px 每个cloumn宽度 自动填充 实现自动适应屏幕 */
   grid-template-columns: repeat(auto-fill, 100px);
   grid-template-rows: 100px;
}
.item{background:pink;}
```

</TabItem>
</Tabs>
:::

### minmax()
:::info 核心概念
- `minmax(min, max)` 设置最小值～最大值范围
:::

:::tip 应用
<Tabs>
<TabItem value="1" label="中间区域自适应">

```css {4-5}
.container{
   height:400px; background:skyblue;
   display: grid;
   /* 左右固定 中间项自动适应宽度 */
   grid-template-columns: 100px minmax(100px, 1fr) 100px;
   grid-template-rows: 100px;
}
.item{background:pink;}
```

</TabItem>
<TabItem value="2" label="每项等宽+最小宽+自适应">

```css {4-6}
.container{
   /* 容器完全由内容撑开 */
   background:skyblue;
   display: grid;
   /* 1 实现自动适应屏幕宽度 */
   /* 2 每项大小一致 且控制项的最小宽度 */
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   grid-template-rows: 100px;
   /* 3 按行 自动填充隐式网格 自动创建新的行 */
   grid-auto-rows: 100px;
   /* 4 每项间 等间距 */
   grid-gap:20px 20px;
}
.item{background:pink;}
```

</TabItem>
</Tabs>
:::

## 网格布局应用
### 叠加布局
### 多组合排列布局
### 栅格布局
### 自适应行列布局

## 综合案例
### 百度热词风云榜
### 小米商城导航菜单