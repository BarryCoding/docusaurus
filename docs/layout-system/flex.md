---
sidebar_position: 4
---

# flex 弹性布局

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
:::info 混合 主轴方向+换行
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
### 交叉轴对齐
### align-content
:::info 控制交叉轴 多行/多列 对齐方式
- 不换行 则无卵用 必须 flex-wrap:wrap
- strech (default) 拉伸
- flex-start
- flex-end 
- center 
- space-around 针对多行/多列
- space-between 针对多行/多列 
- space-evenly 针对多行/多列
:::
### align-items
:::info 控制交叉轴 每一行/每一列 对齐方式
- strech (default) 拉伸
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
对应子项 自动挤开横向空间
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
- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self
:::

### flex-grow
- 默认值为0 内容长度不超过主轴长度 不会占用剩余主轴方向空间
- 值为1或大于1 则占满剩余空间
- 值为0.5 占满剩余空间的0.5
- 多个子元素 根据值 进行等比分配

### flex-shrink
- 默认值为1 内容长度超过主轴长度 自动收缩为主轴长度
- 多个子元素 根据值 和 超出长度 进行等比分配

### flex-basis / flex缩写

## flex 子项布局
### 等高布局
### 2列与3列布局
### sticky footer布局
### 溢出项布局

## 综合案例
### swiper 轮播图
### 知乎 导航