---
sidebar_position: 6
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# grid 布局应用

## 高级方法
### repeat() 
:::info 核心概念
- `repeat(times, size)` 参数 循环次数和尺寸大小
- times 自动填充数量 自适应屏幕大小 auto-fill
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

```css
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
:::info 原理
- 多个元素 占用同一个网格 按先后顺序显示
- 使用 `justify-self / align-self` 控制水平垂直对齐方式
:::

:::tip 应用
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="grid-container">
   <!-- 图片占满容器 -->
   <img src="./phone.png" alt="">
   <!-- 图片右上角 -->
   <span>自制</span>
   <!-- 图片最下方 -->
   <p>手机热卖中.....</p>
</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css
.grid-container{
   /* 图片大小 */
   width: 530px; height: 300px;
   display: grid;
}
.grid-container img{
   grid-area: 1/1/1/1; /* 同一区域 */
}
.grid-container span{
   grid-area: 1/1/1/1; /* 同一区域 */
   /* 右上角 */
   justify-self: end; align-self: start;
   margin:5px;
}
.grid-container p{
   grid-area: 1/1/1/1; /* 同一区域 */
   /* 最下方 */
   align-self: end;
   background:rgba(0,0,0,0.5); color:white;
   height:30px; line-height: 30px;
}
```

</TabItem>
</Tabs>
:::

### 多组合排列布局
:::info 原理
- 控制核心项的特殊area 其他项自动的一般排列
:::

:::tip 应用
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="grid-container">
   <!-- 1占2*2空间 其他各占1*1空间 -->
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <div>4</div>
   <div>5</div>
   <div>6</div>
</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css
.grid-container{
   width:300px;height:300px;background:skyblue;
   display: grid;
   /* 3*3网格+间隙 */
   grid-template-columns: repeat(3,1fr);
   grid-template-rows: repeat(3,1fr);
   gap:5px;
}
.grid-container div{background:pink;}
.grid-container div:nth-of-type(1){
   /* 控制特殊项area范围 其他项自动排列 */
grid-area: 2/1/span 2/span 2;
}
```

</TabItem>
</Tabs>
:::

### 栅格布局
:::info 原理
- 网格容器行12等分 且按行隐式网格填充
- 根据类名 控制每个项的area
:::

:::tip 应用
<Tabs>
<TabItem value="1" label="结构">

```html
<!-- 按行切割12等分 -->
<div class="row">
   <!-- 占6等分宽 -->
   <div class="col-6">1</div>
   <!-- 占3等分宽 -->
   <div class="col-3">2</div>
   <!-- 占4等分宽 -->
   <div class="col-4">3</div>
</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css
.row{
   background:skyblue;
   display: grid;
   /* 将一行12等分 且按行隐式网格填充 */
   grid-template-columns: repeat(12, 1fr);
   grid-template-rows: 50px;
   grid-auto-rows: 50px;
}
.row div{background:pink;}
.row .col-1{grid-area: auto/auto/auto/span 1;} /* 自动向右填充1格 */
.row .col-2{grid-area: auto/auto/auto/span 2;}
.row .col-3{grid-area: auto/auto/auto/span 3;}
.row .col-4{grid-area: auto/auto/auto/span 4;}
.row .col-5{grid-area: auto/auto/auto/span 5;}
.row .col-6{grid-area: auto/auto/auto/span 6;}
.row .col-7{grid-area: auto/auto/auto/span 7;}
.row .col-8{grid-area: auto/auto/auto/span 8;}
.row .col-9{grid-area: auto/auto/auto/span 9;}
.row .col-10{grid-area: auto/auto/auto/span 10;}
.row .col-11{grid-area: auto/auto/auto/span 11;}
.row .col-12{grid-area: auto/auto/auto/span 12;} /* 自动向右填充12格 */            
```

</TabItem>
</Tabs>
:::

### 自适应 行列布局
:::info 原理
- 定宽条件下 网格按行n等分 按行隐式网格填充 自动向下方填充
- 定高条件下 网格按列n等分 按列隐式网格填充 自动向右方填充 非常牛逼
:::

:::tip 应用
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="grid-container">
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <div>4</div>
   <div>5</div>
   <div>1</div>
   <div>2</div>
   <div>3</div>
   <div>4</div>
   <div>5</div>
</div>
```

</TabItem>
<TabItem value="2" label="自适应-行布局">

```css
.grid-container{ 
   /* 固定宽度 */
   width:300px; background:skyblue;
   display: grid;
   /* 按行3等分 且 按行隐式填充(默认) 并控制填充行高 */
   grid-template-columns: repeat(3, 1fr);
   grid-auto-rows: 100px;
   gap:5px;
}
.grid-container div{background:pink;}   
```

</TabItem>
<TabItem value="3" label="自适应-列布局">

```css
.grid-container{ 
   /* 固定高度 */
   height:300px; background:skyblue;
   /* 不要独占一行 自动适应内容宽度 */
   display: inline-grid;
   /* 按列3等分 */
   grid-template-columns: repeat(3, 1fr);
   /* 必须修正 隐式填充方式为列 并控制填充列宽 */
   grid-auto-flow: column;
   grid-auto-columns: 100px;
   gap:5px;
}
.grid-container div{background:pink;}   
```

</TabItem>
</Tabs>
:::

## 综合案例

### 百度热词风云榜
![效果图](/img/layout/baidu.jpg)

:::info 原理
- 通过 grid-tempalate-area 定义区域名
- 子项 匹配 对应的区域
:::

:::tip 中间网格区
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="top-list">
   <div class="theme1">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
   <div class="theme2">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
   <div class="theme1">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
   <div class="theme1">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
   <div class="theme1">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
   <div class="theme3">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
   <div class="theme3">
      <a href="#"><h3>实时热点</h3><p>阿里第一颗芯</p></a>
   </div>
</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css {6-16,18-24}
.top-list{
   width:336px; height:352px;
   padding: 0 14px;
   border:1px #dadadc solid;
   margin:20px auto;
   display: grid;
   /* 网格 3列 4行 自动等高等宽 */
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(4, 1fr);
   /* 分配区域 命名方式比基线划分 【更直观】 需保证每个区域都是完整矩形 */
   grid-template-areas: 
   "a1 a3 a3"
   "a2 a3 a3"
   "a4 a4 a5"
   "a6 a7 a7";
   gap:8px;
}
.top-list div:nth-of-type(1){grid-area: a1;}
.top-list div:nth-of-type(2){grid-area: a2;}
.top-list div:nth-of-type(3){grid-area: a3;}
.top-list div:nth-of-type(4){grid-area: a4;}
.top-list div:nth-of-type(5){grid-area: a5;}
.top-list div:nth-of-type(6){grid-area: a6;}
.top-list div:nth-of-type(7){grid-area: a7;}

.top-list a{
   display: block; 
   height:100%;line-height: 30px;
   color:white;
}
.top-list h3{
   text-align: right;margin-right:4px;
}
.top-list p{
   text-align: center;
}
```

</TabItem>
</Tabs>
:::