---
sidebar_position: 1
---

# HTML / CSS
<!-- *无需视频* -->
## HTML
### 1 HTML 语义化？
- 增加代码可读性 
  - 易于理解代码结构
  - 都用 div 可读性差 不易于理解
- 有利于SEO

### 2 标签分类 块级与内联
- 是否独占一行
- display: block/table; 
  - div h1 p ul ol li table
- display: inline/inline-block; 
  - span img input button

---

## 1 布局
### 1.1 盒子模型的宽高如何计算？
- offsetwidth
- `box-sizing: content-box;`
  - offsetWidth = width + 2 \* padding + 2 \* border
- `box-sizing: border-box;`
  - offsetWidth = width
  - 用 width 完全控制 盒子宽度

### 1.2 Margin 纵向重叠问题？
- 相邻元素 margin-top 与 margin-bottom 重叠
- 空内容标签也会重叠 被忽略

### 1.3 margin 负值问题？
- 自身动
  - margin-top 上移动 下方元素也移动
  - margin-left 左移动 右元素也移动
- 自身不动
  - margin-bottom 下方元素上移
  - margin-right  右方元素左移

### BFC 理解与应用
- Block Format Context 块级格式化上下文
- 一块独立渲染区域 内部元素渲染 不影响外界元素
- 常见形成条件
   1. float 非 none
   2. overflow 非 visible
   3. position: absolute / fixed;
   4. display: flex / inline-block;
- 常见应用 清除浮动 `overflow: hidden;`

### PC float 布局(圣杯/双飞翼) / 手写 clearfix
- 布局(圣杯/双飞翼)需求
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
  content:'';
  display: table;
  clear: both;
 }
.clearfix{
  *zoom:1;
}
```

### flex布局 画 3点色子
1. flex-direction 主轴方向
2. flex-wrap 主轴换行
3. justify-content 主轴对齐方式
4. align-items 交叉轴 容器项控制
5. align-self 交叉轴 子项自控制

## 2 定位
### 2.1 absolute / relative 根据什么定位？
- relative 根据自身定位
- absolute 根据外层最近定位元素来定位 / 无则根据body定位

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
- 数值 30px 继承同一值
- 比例 1.5 继承比例 根据自身font-size计算
- 百分比 200%  继承 某个计算后的值

## 4 响应式
### 4.1 rem 是什么？
| 单位 | 描述                        |
| ---- | --------------------------- |
| px   | 绝对长度单位                |
| em   | 相对长度单位 相对父元素     |
| rem  | 相对长度单位 相对根元素html |

### 4.2 如何实现响应式？
- media-query 根据不同的屏幕宽度设置 根元素html的font-size
- 使用rem

### 4.3 相对单位 vw wh
- rem的弊端
   - 不同屏幕尺寸 媒体查询 阶梯性计算
- 网页视口尺寸
   - window.screen.height
      - 设备屏幕高度 包括 浏览器功能栏
   - window.innerHeight
      - 浏览器网页 可视内容区高度
   - document.body.clientHeight
      - body 页面内容高度
- vw vh 针对
   - vh 网页视口高度的1% window.innerHeight
   - vw 网页视口宽度的1% window.innerWeight
   - vmax / vmin 为 vh / vw的极限值

## 5 CSS3
### 5.1 关于 CSS3 动画
- 非重点？


