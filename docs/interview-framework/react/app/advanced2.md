---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 高级特性2

## 1 性能优化
:::info
- React 核心理念 不可变值
- 优化1 SCU
- 优化2 PureComponent memo
- 优化3 使用 immutable.js 三方库处理不可变值
:::

### 1.1 shouldComponentUpdate {#scu}
- [一般场景](./basic.md#props)

:::info 总结
- React 默认 **父组件更新 所有子组件也更新**
- SCU 默认 返回 true
  - `shouldComponentUpdate(nextProps, nextState){}`
  - nextProps 对比 this.props 返回false 不渲染
  - nextState 对比 this.state 返回false 不渲染
- SCU 必须配合 immutable 理念
  - 对象和数组 isEqual loadash
- 根据需求和性能 再考虑SCU优化
:::
:::tip immutable 理念
<Tabs>
  <TabItem value="todoList" label="TodoList">

```jsx title="SCUDemo.jsx"
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash"; // 使用lodash库
export default class TodoListDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: "id-1",title: "标题1",},
        {id: "id-2",title: "标题2",},
      ],
    };
  }
  render() {
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={this.state.list} />
      </div>
    );
  }
  onSubmitTitle = (title) => {
    // 正确用法 遵循了immutable理念
    this.setState({
      list: this.state.list.concat({id: `id-${Date.now()}`,title,}),
    });
    // 错误用法 破坏了immutable理念
    this.state.list.push({id: `id-${Date.now()}`,title})
    this.setState({list: this.state.list})
  };
}
```
  </TabItem>
  
  <TabItem value="input" label="Input">

```js title="SCUDemo.jsx"
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",};
  }
  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.onTitleChange} />
        <button onClick={this.onSubmit}>提交</button>
      </div>
    );
  }
  onTitleChange = (e) => {
    this.setState({title: e.target.value,});
  };
  onSubmit = () => {
    const { submitTitle } = this.props;
    submitTitle(this.state.title);
    this.setState({title: "",});
  };
}
// props 类型检查
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired,
};
```
  </TabItem>
  <TabItem value="list" label="List">

```jsx title='SCUDemo.jsx'
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((item, index) => {
          return <li key={item.id}><span>{item.title}</span></li>
        })}
      </ul>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    // _.isEqual 做对象或者数组的深度比较（一次性递归到底）
    // 一般使用浅数据比较 深层数据比较很耗费性能
    if (_.isEqual(nextProps.list, this.props.list)) {
      return false; // 相等 则无需渲染
    }
    return true; // 不相等 则渲染
  }
}
// props 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
```
  </TabItem>
</Tabs>
:::

### 1.2 PureComponent memo {#pure}
:::caution SCU浅比较
- PureComponent `纯类组件` 自动实现 **浅比较** 
- memo `纯函数组件` 自动实现 **浅比较**
- 浅比较已经适用于大部分情况 设计数据时平坦化处理
:::

:::tip 浅比较应用
<Tabs>
  <TabItem value="list" label="List">

```jsx title='SCUDemo.jsx' {1}
class List extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    return (
      <ul>
        {list.map((item, index) => {
          return <li key={item.id}><span>{item.title}</span></li>
        })}
      </ul>
    );
  }
  shouldComponentUpdate() {/*自动浅比较*/}
}
// props 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
```
  </TabItem>
  
  <TabItem value="memo" label="memo">

```jsx title='memo.jsx'
function ListFn(props) {
  const {list} = this.props
  return <ul>
      {list.map((item, index) => <li key={item.id}>title {item.title}</li> )}
    </ul>
  );
}
function areEqual(prevProps, nextProps){
  // 处理逻辑 类似SCU
}
export default React.memo(ListFn, areEqual)
```
  </TabItem>
</Tabs>
:::

### 1.3 immutable.js
:::caution 特点
- 彻底 不可变值
- 基于共享数据（非深拷贝） 速度快
- 有 学习成本 迁移成本
:::
:::tip
```js
const map1 = Immutable.Map({a:1})
const map2 = map1.set('a',2)
map1.get('a') // 1
map2.get('a') // 2
```
:::

## 组件公共逻辑抽离 {#common}
:::caution 
- mixin 已被 React 废弃
- HOC 高阶组件
  - 模式简单 但增加了组件层级 可能覆盖props
  - 作为父组件 外嵌 可理解为外套大衣（公共数据和功能）
- Render Props 
  - 代码简介 不会覆盖props
  - 作为子组件 内嵌
:::

### 高阶组件 HOC
:::info 特点
- High Order Component
- **工厂模式** 装饰器
  - 原组件 为参数 
  - 返回 扩展后的 新组件
- props 穿透下去
- redux 就是 HOC的应用
:::
:::tip 用法
<Tabs>
  <TabItem value="basic" label="基础概念">

```jsx
import React from 'react'
// 高阶组件是一种设计模式 工厂模式 返回一个（数据和功能扩展后的）组件/函数
const HOCFactory = (LowerComponent) => {
  return class HOC extends React.Component {
    // 公共逻辑处理
    render(){
      // 穿透传递 props 且 返回加工后的组件
      return <LowerComponent {...this.props} />
    }
  }
}
const HOC1 = HOCFactory(comExample)
```
  </TabItem>
  <TabItem value="hoc" label="公共逻辑">

```jsx title='HOCDemo.jsx'
import React from 'react'
const withMouse = (Component) => {
    return class withMouseComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = { x: 0, y: 0 } // 新数据 鼠标 x轴y轴 坐标
        }
        // 新功能 移动鼠标更新数据
        handleMouseMove = (event) => {
            this.setState({x: event.clientX, y: event.clientY})
        }
        render() {
            return (
                <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
                    {/* 1. 穿透传递 props  2. 赋予 mouse 坐标属性 */}
                    <Component {...this.props} mouse={this.state}/>
                </div>
            )
        }
    }
}
```
  </TabItem>
  <TabItem value="apply" label="应用">

```jsx title='HOCDemo.jsx' {9}
const App = (props) => {
    const { x, y } = props.mouse // 接收高阶组件中的 mouse 属性
    return (
        <div style={{ height: '500px' }}>
            <h1>The mouse position is ({x}, {y})</h1>
        </div>
    )
}
export default withMouse(App) // 返回加工后的组件
```
  </TabItem>
</Tabs>
:::

### render props
:::info
- 层级 与HOC相反 可理解为内衣 对比 外套大衣
- 作为子组件 
  - 父组件 调用子组件时 传递 自定义render函数
  - 子组件 调用父组件的 props.render
:::
:::tip 用法
<Tabs>
  <TabItem value="basic" label="基础概念">

```jsx
import React from 'react'
// 子组件 通过 state 传递给 父纯函数组件
class RenderProps extends React.Component {
  constructor() {
    this.state={
      // 公共数据
    }
    // 公共逻辑处理
    render(){
      const upperRender = this.props.render
      return <div>{upperRender(this.state)}</div>
    }
  }
}
// 父纯函数组件
const App = (props)=>{
  <RenderProps render={(childState)=><CustomComponent />}
  />
}
```
  </TabItem>
  <TabItem value="common" label="公共逻辑">

```jsx title='RenderProps.jsx'
import React from 'react'
import PropTypes from 'prop-types'
class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x: 0, y: 0 }
    }
    handleMouseMove = (event) => {
      this.setState({x: event.clientX,y: event.clientY})
    }
    render() {
      return (
        <div style={{ height: '500px' }} onMouseMove={this.handleMouseMove}>
            {/* 1 调用 父组件render函数 */}
            {/* 2 将当前 state 传递给 父组件来渲染 （render 是一个函数组件） */}
            {this.props.render(this.state)}
        </div>
      )
    }
}
Mouse.propTypes = {
    render: PropTypes.func.isRequired // 必须接收一个 render 属性，而且是函数
}
```
  </TabItem>
  <TabItem value="rpa" label="应用">

```jsx title='RenderProps.jsx'
export default const App = (props) => (
    <div style={{ height: '500px' }}>
        <Mouse render={
            /* render 是一个函数组件 ()=> <CustomComponent> */
            ({ x, y }) => <h1>The mouse position is ({x}, {y})</h1>
        }/>
    </div>
)
//组件如何渲染，App 说了算，通过 render prop 的方式告诉 Mouse 
```
  </TabItem>
</Tabs>
:::

:::danger 对比 HOC
- HOC 
  - 模式简单 增加组件层级（外层 套个大衣） 
  - 组件 通过外层传递的 props 来扩展数据和功能
- Render Props 
  - 代码简洁（内层 穿个内衣） 
  - 学习理解成本更高 多个render处理
  - 组件 传递 render函数 给子组件
:::
