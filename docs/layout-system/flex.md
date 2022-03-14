---
sidebar_position: 4
---

# flex 弹性布局
- [CSS-TRICKS To-Learn](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## flex 容器语法
- display:flex 将容器变为弹性布局
- 适合 一维 单行/单列
- 二维 多行布局 用grid

:::info flex容器 样式属性
1. flex-direction 主轴方向
2. flex-wrap 沿交叉轴方向换行
3. flex-flow 1+2缩写
4. justify-content 主轴对齐
5. align-items
6. align-content
:::

### flex-direction
:::info 控制主轴方向 交叉轴总与主轴垂直
- row (default) 主轴 左右
  - 交叉轴 上下
- row-reverse 主轴 右左
  - 交叉轴 上下
- column 主轴 上下
  - 交叉轴 左右
- column-reverse 主轴 下上
  - 交叉轴 左右
:::

### flex-wrap
:::info 控制沿交叉轴方向换行
- nowrap (default) 不换行
- wrap 换行 每行平分父容器高度
- wrap-reverse 交叉轴反向
:::

### flex-flow 缩写
:::info 容器混合 主轴方向+换行
- flex-flow: flex-direction值 flex-wrap值;
:::

### justify-content 
:::info 控制主轴对齐方式
- flex-start (default) 主轴开始方向
- flex-end 主轴结束方向
- center 都居中
- space-around 离主轴开始间隔+离主轴结束间隔=子项间间隔
- space-between 离主轴开始间隔+离主轴结束间隔=0
- space-evenly 离主轴开始间隔+离主轴结束间隔=子项间间隔
:::

### align-content
:::info 控制交叉轴 多行/多列 对齐方式
- 不换行 则无卵用 必须 flex-wrap:wrap
- strech (default) 拉伸充满交叉轴
- flex-start
- flex-end 
- center 
- space-around 针对多行/多列
- space-between 针对多行/多列 
- space-evenly 针对多行/多列
:::

### align-items
:::info 控制交叉轴 每一行/每一列 对齐方式
- strech (default) 拉伸充满交叉轴
- flex-start
- flex-end 
- center 
- baseline 以小写x对齐
:::

## flex 容器布局
### 内联/块 上下左右居中布局
```css
/* 容器盒子 */
.box-center{
   display:flex;
   justify-content:center;
   align-items:center;
}
```
### 不定项 居中布局
- 不确定子项个数底部居中 
- pagenation / 轮播图下方小点

```css
.flex-box{
   display:flex;
   justify-content:center;
   align-items:flex-end;
}
```
### 均分列布局
```css 手机底部 导航栏
.flex-box{
   display:flex;
   justify-content:space-around;
   align-items:flex-end;
}
```
### 子项分组布局
某处等宽子项 自动挤开横向空间
```css
.mian {
   display: flex;
   align-items: center;
}
.main div:nth-of-type(3){
   margin-right: auto;
}
.main div:nth-of-type(6){
   margin-right: auto;
}
```

## flex 子项语法
:::info flex子项 样式属性
- flex-grow
- flex-shrink
- flex-basis
- flex
- order
- align-self
- 配合选择器`sel:nth-of-type(n)`
:::

### flex-grow
- 默认值为0 内容长度`不超过主轴长度` 不会占用剩余主轴方向空间
- 值为1或大于1 则占满剩余空间
- 值为0.5 占满剩余空间的0.5
- 多个子元素 根据值 进行等比分配

### flex-shrink
- 默认值为1 内容长度`超过主轴长度` 自动收缩为主轴长度
- 多个子元素 根据值 和 超出长度 进行等比分配

### flex-basis
> flex-basis 子项在主轴方向的初始大小 
:::info 可配置属性值
- 默认值为auto 自动适应内容大小
- 0% 50% 100% 主轴百分比占比 0%为最小内容宽度
- 100px 主轴初始绝对大小 优先级大于宽高
:::

### flex 缩写
:::info 子项混合 自增+自减+初始
- flex: flex-grow值 flex-shirk值 flex-basis值;
:::

### order
- 默认值 0 改变当前子项的排序 
- 可用负数 

### align-self
- 默认值 auto 改变当前子项的交叉轴对齐方式 
- 相当于 align-items的单个修改

## flex 子项布局
### 子项自动等高-布局
- 应用：左栏右栏 保持高度相等
- 弹性布局默认就是等高布局 `display:flex`
- 弹性容器盒子高度由子项的最大内容高度撑开

### 2列与3列-布局
- 应用：管理系统
- 弹性容器 `display:flex; height:100vh`
- 左侧(菜单栏) / 右侧(其他栏) 子项固定宽度 `width:200px`
- 内容区 子项宽度自动适应剩余宽度 `flex-grow:1`

### 粘性footer-布局
- 应用：移动端页脚
- 弹性容器 `display:flex; min-height:100vh; flex-direction:column`
- header / footer 子项固定高度 `height:200px`
- 内容区 子项高度自动适应 `flex-grow:1`

### 溢出项布局
- 应用：移动端可滑动菜单栏 轮播图
- 弹性容器 `display:flex;`
- 子项 `flex-shrink:0` 内容长度超出主轴长度后 不收缩

## 综合案例
### swiper 轮播图
- 顶级容器相对定位`position: relative;` 便于 小点切换 与 左右箭头定位
- 轮播图容器 `display: flex;`
  - 图容器 `width:100%; flex-shrink:0`
  - 图片 `width:100%`
- 轮播图页脚容器 绝对定位到最下方 弹性布局 子项完全居中对齐
- 左右箭头容器 绝对定位到左上/右上 高度充满 弹性布局 子项箭头垂直居中

### 知乎 导航
- 头部顶级容器 背景色
- 头部内容容器 margin居中 配置最大最小宽度 弹性布局 弹性项上下居中 
- 左侧导航菜单 右侧按钮群 都弹性布局
- 中间搜索栏容器 弹性布局+自动增长 。。。