---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 高级特性

## 函数组件
:::caution 特点
- 纯函数 输入props 输出jsx
- 无实例 无生命周期 无state
- 不能扩展 其他方法
:::

:::tip 类组件与函数组件 对比
<Tabs>
  <TabItem value="ListClass" label="ListClass">

```jsx title="ListClass.jsx"
import React from "react";
export default class ListClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {list} = this.props
    return 
      <ul>{list.map((item, index) => 
        <li key={item.id}>title {item.title}</li> 
        )}
      </ul>
    );
  }
}
```
  </TabItem>
  
  <TabItem value="ListFn" label="ListFn">

```js
export default function ListFn(props) {
  const {list} = this.props
  return 
    <ul>{list.map((item, index) => 
      <li key={item.id}>title {item.title}</li> 
    )}
    </ul>
  );
}
```
  </TabItem>
</Tabs>
:::

## 非受控组件 与 ref
:::caution 特点
- `ref` 用于操作 DOM元素
- `defaultValue` `defaultChecked`
- 不使用 `setState`
:::
:::danger 使用场景 必须使用DOM 因为setState无法实现
- 文件上传 获取文件
- 富文本编辑器 获取DOM元素
:::
:::tip
```jsx
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "双越",flag: true,};
    // 1 创建 ref 并绑定到组件
    this.nameInputRef = React.createRef(); 
    this.fileInputRef = React.createRef();
  }
  render() {
    return (
      <div>
        {/* 使用 defaultValue / defaultChecked 而不是 value / checked
        2 关联 ref 到 DOM 节点 */}
        <input defaultValue={this.state.name} ref={this.nameInputRef} />
        <input type="checkbox" defaultChecked={this.state.flag} />
        {/* 修改input值 未触发setState state不会改变 */}
        <span>state.name: {this.state.name}</span>
        <button onClick={this.alertName}>alert name</button>
        <input type="file" ref={this.fileInputRef} />
        <button onClick={this.alertFile}>alert file</button>
      </div>
    );
  }
  alertName = () => {
    // 3 获取 DOM 节点方式
    alert(this.nameInputRef.current.value); // DOM 节点值， 不用 this.state.name
  };
  alertFile = () => {
    const elem = this.fileInputRef.current; // 通过 ref 获取 DOM 节点
    alert(elem.files[0].name);
  };
}
```
:::

## Portals
> 将组件渲染到父组件之外

:::danger 使用场景
- 父组件 overflow:hidden
- 父组件 z-index 太小
- 改变组件定位的区间 position:fixed
:::

:::tip 使用方式
<Tabs>
  <TabItem value="NoPortal" label="正常渲染">

```jsx title="NoPortal.jsx"
import React from "react";
import "./style.css";
export default class NoPortal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="modal"> {/* 渲染到 调用的父组件上 */}
        {this.props.children} {/* 相当于 vue slot */}
      </div>
    );
  }
}
```
  </TabItem>
  
  <TabItem value="UsePortal" label="使用Portals">

```js title="UsePortal.jsx"
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
export default class UsePortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // 使用 Portals
    return ReactDOM.createPortal(
      <div className="modal">{this.props.children}</div>,
      document.body // 渲染到 body 节点上
    );
  }
}
```
  </TabItem>
  <TabItem value="style" label="style">

```css title='style.css' {2}
.modal {
    position: fixed;
    width: 300px;
    height: 100px;
    top: 100px;
    left: 50%;
    margin-left: -150px;
    background-color: #000;
    /* opacity: .2; */
    color: #fff;
    text-align: center;
}
```
  </TabItem>
</Tabs>
:::

## context

## 懒加载 异步组件

## 性能优化

## shouldComponentUpdate

## 纯组件

## immutable

## 高阶组件 HOC

## render prop

