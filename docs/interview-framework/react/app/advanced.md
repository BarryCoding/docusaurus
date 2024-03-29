---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 高级特性

## 1 函数组件
:::info 特点
- 纯函数 
  - 输入props 
  - 输出jsx
- 无
  - 实例 / class
  - 生命周期 
  - state
- react hooks 
  - useState state效果
  - useEffect 生命周期效果
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

## 2 非受控组件 与 ref {#ref}
:::info 特点
- `ref` 用于操作 DOM元素
  - ref.current 获取值 
- `defaultValue` `defaultChecked` 关联 state
- 不使用 `setState` 与 事件函数
- todo api
:::
:::danger 使用场景 必须使用DOM 因为setState无法实现
1. 文件上传 获取文件
2. 富文本编辑器 获取DOM元素
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

## 3 Portals 传送门
:::info
- 一般子组件都是向内嵌套渲染关系
- 使用 Portal 将子组件 传送渲染到父组件之外
- todo api
:::
:::danger 使用场景
- 跳出父组件
  - 父组件 overflow:hidden 子组件跟着隐藏
  - 父组件 z-index 太小 子组件外层压盖
- 需放在body第一层 
  - position:fixed 跟随body节点 如 自定义modal
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
      document.body // 渲染到 body 等任意节点
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

## 4 context {#context}
:::danger 上下文场景
- 修改不频繁的公共信息 如 国际化/主题 
- props 太繁琐
- redux 也可以  
:::

:::info api
- todo
:::

:::tip 上下文应用
<Tabs>
  <TabItem value="mian" label="创建与提供上下文">

```jsx title="ContextDemo.jsx" {2-3,11-15}
import React from "react";
// 1 创建 Context 填入默认值（任何一个 js 变量）
const ThemeContext = React.createContext("light");
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "light",};
  }
  render() {
    return (
      // 2 提供context 传递给 内部组件 一般放在外层组件
      <ThemeContext.Provider value={this.state.theme}>
        <Toolbar />
        <button onClick={this.changeTheme}>change theme</button>
      </ThemeContext.Provider>
    );
  }
  changeTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };
}
```
  </TabItem>
  
  <TabItem value="middle" label="过渡组件">

```js title="ContextDemo.jsx"
// 不必再往下传递/提供上下文 Provider。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <ThemeLink />
    </div>
  );
}
```
  </TabItem>
  <TabItem value="class" label="消费上下文">

```js title="ContextDemo.jsx" {2,3,5}
class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  static contextType = ThemeContext
  render() {
    const theme = this.context; // React 会往上找到最近的 theme Provider，然后使用它的值。
    return (
      <p>button's theme is {theme}</p>
    );
  }
}
```
  </TabItem>
  <TabItem value="fn" label="函数组件消费">

```js title="ContextDemo.jsx" {3,5-7}
function ThemeLink(props) {
  // const theme = this.context // 会报错。函数式组件没有实例，即没有 this
  // 函数式组件可以使用 Consumer
  return (
    <ThemeContext.Consumer>
      {(value) => <p>link's theme is {value}</p>}
    </ThemeContext.Consumer>
  );
}
```
  </TabItem>
</Tabs>
:::

## 5 懒加载 异步组件 {#lazy}
:::info 使用
- import() 异步组件 **性能优化**
- React.lazy() 懒加载
- React.Suspense 包裹懒加载组件 加载效果
  - fallback 处理 加装效果
:::

:::tip
```jsx title
import React from "react";
// 1 异步组件 import("path")
// 2 使用懒加载 React.lazy()
const ContextDemo = React.lazy(() => import("./ContextDemo"));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>懒加载异步组件 且 处理加载完成前效果</p>
        {/* 3 React.Suspense 包裹懒加载组件 */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <ContextDemo />
        </React.Suspense>
      </div>
    );
    // 1. 强制刷新，可看到 loading （看不到就限制一下 chrome 网速）
    // 2. 看 network 的 新加装的js文件 名称 时间 顺序
  }
}
```
:::