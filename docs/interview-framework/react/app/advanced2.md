---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 高级特性2

## 性能优化

### shouldComponentUpdate
- [一般场景](./basic.md#props)

:::info 总结
- React默认 父组件更新 所有子组件也更新
- SCU 默认返回 true
- SCU 必须配合 immutable 理念
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

### PureComponent memo
:::caution SCU浅比较
- PureComponent 纯类组件 自动实现浅比较
- memo 纯函数组件 自动实现浅比较
- 浅比较已经适用于大部分情况 设计数据时应该
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

### immutable.js
:::caution 特点
- 彻底 不可变值
- 基于共享数据（非深拷贝） 速度快
- 有 学习成本 迁移成本
:::
:::tip
```js
const map1 = Immutable.Map({a:1})
const map2 = map1.set('a',2)
map1.get('a')
map2.get('a')
```
:::

## 组件公共逻辑抽离
:::caution 
- mixin 已被 React 废弃
:::

### 高阶组件 HOC
:::info 特点
- High Order Component
- 工厂模式 装饰器
:::
:::tip 用法
<Tabs>
  <TabItem value="basic" label="基础">

```jsx
import React from 'react'
// 高阶组件是一种设计模式 工厂模式 返回一个组件/函数
const HOCFactory = (LowComponent) => {
  class HOC extends React.Component {
    // 公共逻辑处理
    render(){
      // 穿透传递 props 且 返回加工后的组件
      return <LowComponent {...this.props} />
    }
  }
}
```
  </TabItem>
  <TabItem value="hoc" label="高阶鼠标组件">

```jsx title='HOCDemo.jsx'
import React from 'react'
const withMouse = (Component) => {
    class withMouseComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = { x: 0, y: 0 } // 鼠标 x轴y轴 坐标
        }
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
    return withMouseComponent
}
```
  </TabItem>
  <TabItem value="apply" label="应用HOC">

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

### render prop

