---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 尺寸与位置
## 盒模型（尺寸）
### 盒模型 空间组成
:::info content-box组成
1. content width/height
2. padding
3. border
4. margin
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
- 具备内联盒子特性 宽度不设置 则由内容来决定 如 内容是一段文本，则宽度默认为文本内容宽度
- 具备块级盒子特性 支持所有样式
- 浮动元素排不下 自动换行
:::

## 定位（位置）
:::info 定位详解
- position 元素在文档中的定位方式
- `position: static` 默认值 
- `position: relative `
  - 还在文档流中 且不影响其他元素
  - 相对自己原来的位置 为参照
- `position: absolute `
  - 脱离了文档流 且不占空间
  - 具备内联盒子特性 宽度不设置 则由内容决定
  - 具备块级盒子特性 支持所有样式
  - 以外层最近定位元素 为参照 `最近非static定位祖先元素` 
  - 没有定位祖先 则以可视区 为参照 不是body
- `position: fixed `
  - 与absolute其他特性类似
  - 以可视区 为参照
- `top / right / bottom / left` 决定具体位置
:::
:::caution 定位注意
- `position: sticky`
  - 未触发特定阀值 为相对定位 `relative`
  - 触发特定阀值后 为固定定位 `fixed`
  - 特定阀值 以可视区 为参照 是否触发
- z-index 失效
  - 优先与同级元素z-index比较 而非同级元素的子元素z-index比较
:::

## 扩展

<!-- ### display属性 略过 -->

### writing-mode
:::info writing-mode
- horizontal-tb 水平方向自上而下的书写方式
- vertical-rl 垂直方向自右而左的书写方式
- vertical-lr 垂直方向自左而右的书写方式
- sideways-rl 内容垂直方向从上到下排列
- sideways-lr 内容垂直方向从下到上排列
:::
<!-- - 逻辑属性 略过 -->

### BFC
:::info 概念
>BFC即Block Formatting Contexts(块级格式化上下文)

>可以看作是隔离后的独立容器，容器里元素不会在布局上影响到外面的元素。
:::
:::tip 触发条件 满足任意一个
- `float` 的值不是none `脱离文档流`
- `position` 的值不是static或者relative `脱离文档流`
- `display` 的值是inline-block、table-cell、flex、table-caption或者inline-flex
- `overflow` 的值不是visible
:::

:::caution BFC应用
- 避免 margin-top 的传递
- 避免 父容器 高度塌陷
- flex 和 grid 默认自带BFC规范
:::

### 默认样式 清除方案
:::caution 默认样式与设计图冲突
>一些HTML标签会有默认样式，如：body会有margin:8px；ul会有margin:16px 0;及padding-left:40px。

>切图软件中进行尺寸或位置测量完对应到样式时，可能会受到默认样式的影响，从显示效果跟设计图效果不符。
:::

:::tip 清除方案
<Tabs>
  <TabItem value="reset" label="Reset CSS">

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
  </TabItem>
  <TabItem value="normal" label="Normalize CSS">

```css
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
body {
  margin: 0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
button,
input { /* 1 */
  overflow: visible;
}
button,
select { /* 1 */
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
```
  </TabItem>
  <TabItem value="css" label="混合2者">

```css title='reset.css'
@charset "utf-8";

/* --------------------重置样式-------------------------------- */

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
button,
input,
textarea,
th,
td {
    margin : 0;
    padding: 0
}

/*设置默认字体*/
body {
    font-size  : 14px;
    font-style : normal;
    font-family: -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji;
}

/*字体太小用户体检不好，让small恢复12px*/
small {
    font-size: 12px
}

h1 {
    font-size: 18px
}

h2 {
    font-size: 16px
}

h3 {
    font-size: 14px
}

h4,
h5,
h6 {
    font-size: 100%
}

ul,
ol {
    list-style: none
}

a {
    text-decoration : none;
    background-color: transparent
}

a:hover,
a:active {
    outline-width  : 0;
    text-decoration: none
}

/*重置表格*/
table {
    border-collapse: collapse;
    border-spacing : 0
}

/*重置hr*/
hr {
    border: 0;
    height: 1px
}

/*图形图片*/
img {
    border-style: none
}

img:not([src]) {
    display: none
}

svg:not(:root) {
    overflow: hidden
}

/*下面的操作是针对于html5页面布局准备的，不支持ie6~8以及其他低版本的浏览器*/
html {
    /*禁用系统默认菜单*/
    -webkit-touch-callout   : none;
    /*关闭iphone & Android的浏览器纵向和横向模式中自动调整字体大小的功能*/
    -webkit-text-size-adjust: 100%
}

input,
textarea,
button,
a {
    /*表单或者a标签在手机点击时会出现边框或彩色的背景区域，意思是去除点击背景框*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

/*重置html5元素的默认样式*/
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
    display: block
}

audio,
canvas,
progress,
video {
    display: inline-block
}

audio:not([controls]),
video:not([controls]) {
    display: none;
    height : 0
}

progress {
    vertical-align: baseline
}

mark {
    background-color: #ff0;
    color           : #000
}

sub,
sup {
    position      : relative;
    font-size     : 75%;
    line-height   : 0;
    vertical-align: baseline
}

sub {
    bottom: -0.25em
}

sup {
    top: -0.5em
}

button,
input,
select,
textarea {
    font-size: 100%;
    outline  : 0
}

button,
input {
    overflow: visible
}

button,
select {
    text-transform: none
}

textarea {
    overflow: auto
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
    -webkit-appearance: button
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
    border-style: none;
    padding     : 0
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding   : 0
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset    : -2px
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-input-placeholder {
    color  : inherit;
    opacity: .54
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font              : inherit
}
```
  </TabItem>
</Tabs>
:::