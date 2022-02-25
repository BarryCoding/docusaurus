---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 高级特性2

## 性能优化

### shouldComponentUpdate SCU
- [一般场景](./basic.md#props)

:::info 总结
- React默认 父组件更新，子组件也更新
- SCU 默认返回 true
- 必须配合 immutable 理念
- 根据需求和性能 再考虑SCU
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
    // _.isEqual 做对象或者数组的深度比较（一次性递归到底）耗费性能
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

### 纯组件

### immutable.js

## 高阶组件 HOC

## render prop

