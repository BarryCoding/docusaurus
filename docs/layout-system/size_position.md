---
sidebar_position: 3
---

# 尺寸与位置
## 盒模型（尺寸）
### 盒模型 空间组成
:::info content-box组成
- content width/height
- padding
- border
- margin
:::
:::caution 注意
- padding 不能为负值 margin 可以为负值
- 背景色会平铺到非 margin 区域
- margin-top 的传递： 子盒子 margin-top 传递给父盒子 margin-top
- margin上下折叠 取最大值
:::

### 块级盒子 内联盒子
:::info 块级盒子
- `display: block`
- 独占一行
- 支持 所有样式
- 不写宽度 盒子宽度与父容器宽度相同 内容会自适应
- 所占区域为矩形
:::
:::note 纯内联盒子
- `display: inline`
- 不独占一行 在空间足够时不会换行
- 不支持 部分样式 如 width height
- 宽度由内容决定
- 所占区域不一定是矩形 如 换行前后
- 内联盒子之间 会有空隙
:::
:::danger 布局
- 布局使用块级元素
- 不要使用内联元素布局
- 内联盒子 只用做 文本修饰
:::

### 自适应盒模型
- 不写width 盒子空间与父容器width相同 且内容会自适应
- `box-sizing: content-box`

### 标准与怪异 盒模型
:::info 区别
- 标准盒模型 宽高为content区域
  - `box-sizing: content-box`
- 怪异盒模型 宽度为content+padding+border
  - `box-sizing: border-box`
:::
:::tip 应用
1. 量取好UI设计稿具体尺寸后 不再去calc计算
2. 需要设置**百分比宽度**的盒子模型
:::

## 浮动（位置）
:::info 浮动详解
> 元素浮动会`脱离文档流` 并按浮动方向 元素外边界贴到 其他浮动元素外边界或父元素内边界为止

> 文档流：元素在web页面上的呈现方式 按照出现的先后顺序进行排列 如二维图片沿着三维高度方向飘起一定高度
:::
:::tip 清除浮动
```css
.clearfix::after{
    content : "";
    clear:both;
    display:block;
}
```
:::

:::caution 浮动特性
- 只会影响后面的元素 不影响前面的元素 （同级）
- 文本不会被浮动元素覆盖 文字会围绕浮动的元素
- 具备内联盒子特性 宽度由内容来决定 如 内容是一段文本，则宽度默认为文本内容宽度
- 具备块级盒子特性 支持所有样式
- 浮动元素排不下 自动换行
:::

## 定位（位置）
### 样式详解
### 特别注意

## 扩展
### display属性
### 书写模式 逻辑属性
### BFC
### 默认样式 清除方案
