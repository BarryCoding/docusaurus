---
sidebar_position: 1
---

# HTML / CSS

## HTML
### HTML 语义化？

- 增加代码可读性
- 有利于SEO

### 标签分类 块级与内联
- 是否独占一行
- display: block/table; div h1 p ul ol li table
- display: inline/inline-block; span img input button

---

## 1 布局

### 1.1 盒子模型的宽高如何计算？

- offsetWidth = width + 2 * padding + 2 * border
- `box-sizing: border-box;`

### 1.2 Margin 纵向重叠问题？

- 相邻元素 margin-top 与 margin-bottom 重叠
- 空内容标签也会重叠

### 1.3 margin 负值问题？

- margin-top / margin-left 负值 自身左/上移动 右/下方元素也移动
- margin-bottom 自身不动 其下方元素上移
- margin-right  自身不动 其右方元素左移

### BFC 理解与应用

- Block Format Context
- 一块独立渲染区域 内部元素渲染 不影响外界元素
- 常见形成条件
   1. float 非 none
   2. overflow 非 visible
   3. position: absolute / fixed;
   4. display: flex / inline-block;
- 常见应用 清除浮动 overflow: hidden;

### float 布局(圣杯/双飞翼) / clearfix

- 布局(圣杯/双飞翼)目的
   1. 3拦布局 中间内容区最先加载和渲染
   2. 两侧区域固定 中间内容区自适应
   3. 一般用于pc
- 布局(圣杯/双飞翼)技术
   1. 使用 float 布局
   2. 两侧处理？ 中间处理？
   3. Flex布局不香吗？
- 手写clearfix

```css
.clearfix:after{
	content:’’;
  display: table;
  clear: both;
 }
.clearfix{
  *zoom:1;
}
```

### flex 画 3点色子

1. flex-direction 主轴方向
2. flex-wrap 主轴换行
3. justify-content 主轴对齐方式
4. align-items 交叉轴 容器控制
5. align-self 交叉轴 容器子项控制

## 2 定位

### 2.1 absolute / relative 根据什么定位？

- relative 根据自身定位
- absolute 根据向上找到的最近的定位元素来定位 / 无则根据body定位

### 2.2 居中对齐实现方式 重点

- 水平居中
   - inline元素: text-align:center;
   - block元素: margin: auto;
   - absolute元素: `left:50%; transfom: trasnlateX(-50%);`
- 垂直居中
   - inline元素: line-height = height;
   - absolute元素: `top:50%; transfom: trasnlateY(-50%);`
- 水平垂直居中
   - absolute元素: `left:50%;right50%;transform:translate(-50%,-50%)` CSS3
   - absolute元素: `top/left/bottom/right:0; margin:auto;` 兼容

## 3 图文样式

### 3.1 line-height 继承问题

- 数值 30px 我们都一样
- 比例 1.5 根据自己的height计算 我们不一样（可能）
- 百分比 200%  我们都一样

## 4 响应式

### 4.1 rem 是什么？

- px 绝对长度单位
- em 相对长度单位 相对父元素
- rem 相对长度单位 相对根元素html

### 4.2 如何实现响应式？

- media-query 根据不同的屏幕宽度设置 根元素html的font-size
- 使用rem

### 4.3 相对单位 vw wh

- rem的弊端
   - 不同屏幕尺寸 媒体查询 阶梯性计算
- 网页视口尺寸
   - window.screen.height
      - 设备屏幕高度
   - window.innerHeight
      - 浏览器网页 视图内容区高度
   - document.body.clientHeight
      - body 内容高度
- vw vh 针对
   - vh 网页视口高度的1% window.innerHeight
   - vw 网页视口宽度的1% window.innerWeight
   - vmax / vmin 为 vh / vw的极限值

## 5 CSS3

### 5.1 关于 CSS3 动画

- 非重点？


