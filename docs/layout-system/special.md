---
sidebar_position: 9
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 特殊 布局

## 瀑布流布局-横向
:::info 原理
- 不推荐 float 右侧无法自动对齐(需特殊处理)
- 不推荐 grid 限制太死了
- 复杂 `position:absolute` + JS库(masonry.js / isotope.js)
- 简单 flex 搞定
:::

:::tip 实现
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="flex-container">
    <div class="item"><img src="./imgs/1.jpg" alt=""></div>
    <div class="item"><img src="./imgs/2.jpg" alt=""></div>
    <div class="item"><img src="./imgs/3.jpg" alt=""></div>
    <div class="item"><img src="./imgs/4.jpg" alt=""></div>
    <div class="item"><img src="./imgs/5.jpg" alt=""></div>
    <div class="item"><img src="./imgs/6.jpg" alt=""></div>
    <div class="item"><img src="./imgs/7.jpg" alt=""></div>
    <div class="item"><img src="./imgs/8.jpg" alt=""></div>
    <div class="item"><img src="./imgs/9.jpg" alt=""></div>
    <div class="item"><img src="./imgs/10.jpg" alt=""></div>
    <div class="item"><img src="./imgs/11.jpg" alt=""></div>
    <div class="item"><img src="./imgs/12.jpg" alt=""></div>
    <div class="item"><img src="./imgs/13.jpg" alt=""></div>
    <div class="item"><img src="./imgs/14.jpg" alt=""></div>
    <div class="item"><img src="./imgs/15.jpg" alt=""></div>
</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css
.flex-container{
    /* flex容器 内容自动换行 项间隔10px */
    display: flex; flex-wrap: wrap;
    gap: 10px;
}
.flex-container .item{
    /* flex项 自动填充每行剩余空间 且 控制容器最小宽度并高度高度*/
    flex-grow: 1;
    flex-basis: 200px; height: 200px; 
}
.flex-container .item img{
    /* 图片充满容器 且自动适应容器 */
    width:100%; height:100%;
    object-fit: cover;
    /* 响应式时 控制图片最大宽度 防止无限扩展宽度 */
    max-width: 500px;
}
```

</TabItem>
</Tabs>
:::

## 瀑布流布局-纵向
:::info 多栏布局 无法加载更多
- multi-columns 多栏布局
- column-count 多栏个数
- column-width 多栏宽度
- column-gap 多栏间距
- column-rule 多栏边线
- column-span 多栏合并
:::

:::tip 实现
<Tabs>
<TabItem value="1" label="结构">

```html
<div class="columns-container">
    <h1>我是标题</h1>
    <div class="item"><img src="./imgs/1.jpg" alt=""></div>
    <div class="item"><img src="./imgs/2.jpg" alt=""></div>
    <div class="item"><img src="./imgs/3.jpg" alt=""></div>
    <div class="item"><img src="./imgs/4.jpg" alt=""></div>
    <div class="item"><img src="./imgs/5.jpg" alt=""></div>
    <div class="item"><img src="./imgs/6.jpg" alt=""></div>
    <div class="item"><img src="./imgs/7.jpg" alt=""></div>
    <div class="item"><img src="./imgs/8.jpg" alt=""></div>
    <div class="item"><img src="./imgs/9.jpg" alt=""></div>
    <div class="item"><img src="./imgs/10.jpg" alt=""></div>
    <div class="item"><img src="./imgs/11.jpg" alt=""></div>
    <div class="item"><img src="./imgs/12.jpg" alt=""></div>
    <div class="item"><img src="./imgs/13.jpg" alt=""></div>
    <div class="item"><img src="./imgs/14.jpg" alt=""></div>
    <div class="item"><img src="./imgs/15.jpg" alt=""></div>
</div>
```

</TabItem>
<TabItem value="2" label="样式">

```css
.columns-container{
    /* 写死列的最大数量 */
    column-count: 6;
    /* 只控制最小column宽度 能够自动适应屏幕宽度*/
    column-width: 300px;
    column-gap: 20px;
    column-rule: 1px gray dashed;
}
.columns-container h1{
    /* 横跨 所有列 */
    column-span: all;
    text-align: center;
}
.columns-container .item img{
    /* 图片充满容器 且自动适应容器 */
    width:100%; height:100%;
    object-fit: cover;
}
```

</TabItem>
</Tabs>
:::

## 视觉差布局
### 原理解析
> 视觉差滚动布局 多层背景以不同速度移动 产生立体运动效果 视觉体验更生动

- [Iphone SE 案例](https://www.apple.com/ph/iphone-se/)

:::tip 入门
<Tabs>
<TabItem value="1" label="结构">

```html
<head>
    <!-- 引入 3方 滚动插件 -->
    <script src="./skrollr.min.js"></script>
</head>
<body>
    <div class="box"></div> <!-- 演示 背景图固定 -->
    <!-- 演示滚动渐变动画 3方库通过 data-滚动距离 控制动画触发 -->
    <div class="box2" 
        data-200="width: 500px;" 
        data-400="width: 1000px; transform:rotate(0deg)" 
        data-600="transform:rotate(360deg)"
    >
        bbbbbbbbbbbbbbb
    </div>
    <script>
        skrollr.init(); // 滚动插件 初始化
    </script>
</body>
```

</TabItem>
<TabItem value="2" label="样式">

```css
body{
    /* 产生滚动条 */
    height: 3000px;
}
.box{
    width: 300px; 
    height: 300px;
    border:10px pink solid;
    background-image: url(./20.jpg);
    /* 背景图固定 不随着页面一起滚动 */
    background-attachment: fixed;
}
.box2{
    width: 500px;
    height: 100px;
    background: skyblue;
    margin-top: 400px;
}
```

</TabItem>
</Tabs>
:::

<!-- ### 高级案例实现 -->

## 文字环绕布局
> 通过float即可实现

## Table 布局 
- 略过
- 一般使用 UI库
- 按工作需求再学习

## Form 布局
- 略过
- 一般使用 UI库
- 按工作需求再学习

## 超大图布局
- 全屏大图
- 大图适应容器
- 居中且融合背景色
- 视频适应容器尺寸





