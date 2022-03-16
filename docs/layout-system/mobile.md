---
sidebar_position: 7
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 移动端 适配布局
> 实现各种设备的等比适配 让所有移动端整体效果看起来相同

##  移动端概念
### 逻辑像素与物理像素
:::info 总结
- 逻辑像素：CSS中的像素，`绝对单位`，保证不同设备下元素的尺寸是相同的。
- 物理像素：设备屏幕实际拥有的像素点，`相对单位`，不同设备下物理像素大小不同。
:::

### viewport视口
:::info 总结
- 在移动端布局中，一定要提前设置好视口大小，即vsCode默认添加形式
- 保证CSS逻辑像素不会受到缩放处理

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
:::
#### viewport 属性与值
|  属性  |   值   |    描述   |
|  ----  | ----  |  ----     |
| width  |  正整数或devive-width  |   定义视口的宽度，单位为像素 |
| height  | 正整数 |  定义视口的高度，单位为像素，不常用 |
| initial-scale  | 比例值 |  定义初始缩放值，如1.0 |
| minimum-scale  | 比例值 |  定义缩小最小比例，如1.0 |
| maximum-scale  | 比例值 |  定义放大最大比例，如1.0 |
| user-scalable  | yes/on |  定义是否允许用户手动缩放页面，默认值yes |

### 750px UI设计稿
:::info 总结
- 移动端UI设计稿尺寸大小为750px，即设备的物理像素，可使效果展示更加清晰。
- 移动端需要实现像素换算和设备适配，以及页面元素等比缩放布局等，逻辑像素375px。
:::

## rem 布局
:::info 原理
- em 相对字体大小单位 font-sizes
  - `text-indent:2rem`
- root + em 以root标签html的字体大小为基准
- 不同屏幕尺寸的设备 根据自己尺寸计算rem 
:::

### 动态计算 font-size
:::info 原理
- 利用vw相对单位
- 页面可视区分成了100vw和100vh
:::

:::tip 应用
```css {2-4,7-8}
html{
   /* 配置rem 计算1rem */
   /* font-size: 100vw; */   /* 在iphone6相当于 -> 375px */
   font-size: 26.666667vw;   /* 在iphone6相当于 -> 100px */
}
body{
   /* rem布局一定要在body重置 font-size大小 */
   font-size: 0.16rem;   /* 在iphone6相当于 -> 16px */
}
.box{
   width: 1rem;   /* 在iphone6相当于 -> 100px */
   height: 1rem;  /* 在iphone6相当于 -> 100px */
   background: pink;
}
```
:::

### 测量rem + 插件 
:::info 插件
- vsCode 扩展插件 px to rem
- 配置 Px-per-rem 为 100px
- 快捷键 alt + z 选取css后
:::

:::tip 推荐工具
- 利用 pxCook 获取 rem
- 单位 为 rem单位
- 设计图 为 2x
- 基数px 为 100 即 `1rem 为 100px`
- 保留 3位小数
:::

### rem案例 网易新闻
- flex 顶部 导航主菜单 新闻项
- grid 导航子菜单

![设计图](/img/layout/163.jpg)

## vw 布局 + 插件
:::info 插件
- 比rem更直接 方便
- vsCode 扩展插件 px to vw
- 配置 Viewport Width 为 375px/750px(根据设计稿来配置)
- 快捷键 alt + z 选取css后
:::

:::tip 推荐工具
- 利用 pxCook 获取 vw
- 单位 为 vw单位
- 保留 3位小数
:::

### vw案例
- flex 顶部 导航菜单
- grid 商品列表

![设计图](/img/layout/bili.jpg)
