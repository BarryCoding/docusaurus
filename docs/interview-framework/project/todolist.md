---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 任务清单
- 技术栈 React
- todo 原型图 与 拆分图

## 状态设计
>state 数据结构设计
:::danger 设计原则
- 用数据描述所有内容 
  - 功能交互数据
  - 内容展示数据
- 数据结构化 易用程序操作（查找/遍历）
  - 数组 / 对象 
- 数据可扩展 便于补充新功能 
  - 可修改 / 删除
:::
:::info 数据结构
```js
this.state = [
  // 数组结构 便于 遍历数据 增删数据
  list:[
    // 对象结构 便于 属性扩展
    // 数据遍历 留意 唯一key值 便于diff
    {id:1, title:'topic1', isDone:false},
    // more items
  ]
]
```
:::

## 组件设计
:::danger 设计原则
- 按功能拆分
- 组件原子化 
  - 一个组件一个功能
  - `Tiny Habit` Components
- 组件关系
  - 容器组件 统一管理 所有数据与逻辑
  - UI组件 只负责视图与交互 调用部分数据与逻辑
:::
:::info 组件拆分
- 任务清单 TodoList 容器组件 负责数据和逻辑
  - 交互组件 InputItem UI组件 负责输入 新增数据给 容器组件
    - 原子化 Input
  - 列表组件 List UI组件 负责显示 容器组件列表数据
    - 单列组件 ListItem 显示单条数据 切换状态 删除自身

```html
<TodoList>
  <InputItem/>
  <List/>
</TodoList>
```
:::

:::tip 代码
<Tabs>
  <TabItem value="TodoList" label="TodoList">

```jsx
import React from "react";
import List from "./List";
import InputItem from "./InputItem";
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [{id: 1,title: "标题1",completed: false,}]};
  }
  render() {
    return (
      <div>
        <InputItem addItem={this.addItem} />
        <List list={this.state.list}
          deleteItem={this.deleteItem}
          toggleCompleted={this.toggleCompleted} />
      </div>
    );
  }
  // 新增一项 使用 concat 返回不可变值
  addItem = (title) => {
    const {list} = this.state;
    this.setState({list: list.concat({id: list.length + 1,title,completed: false})});
  };
  // 删除一项 使用 filter 返回不可变值
  deleteItem = (id) => {
    this.setState({list: this.state.list.filter((item) => item.id !== id)});
  };
  // 切换完成状态 使用 map 返回不可变值 且item返回新对象
  toggleCompleted = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        const completed = item.id === id ? !item.completed : item.completed; // 切换完成状态
        return {...item,completed};
      }),
    });
  };
}
```
  </TabItem>
  <TabItem value="InputItem" label="InputItem">

```jsx title='InputItem.jsx'
import React from "react";
import Input from "./UI/Input";
export default class InputItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "",};
  }
  render() {
    return (
      <div>
        <Input value={this.state.title} onChange={this.changeHandler} />
        <button onClick={this.clickHandler}>新增</button>
      </div>
    );
  }
  changeHandler = (newTitle) => {
    this.setState({title: newTitle});
  };
  clickHandler = () => {
    const { addItem } = this.props;
    addItem(this.state.title);
    this.setState({title: ""});
  };
}
```
  </TabItem>
  <TabItem value="Input" label="Input">

```jsx title='./UI/Input.jsx'
import React from "react";
export default class Input extends React.Component {
  render() {
    return <input value={this.props.value} onChange={this.onChange} />;
  }
  onChange = (e) => {
    // 传给父组件
    const newVal = e.target.value;
    this.props.onChange(newVal);
  };
}
```
  </TabItem>
  <TabItem value="List" label="List">

```jsx title='List.js'
import React from "react";
import ListItem from "./ListItem";
export default function List({ list = [], deleteItem, toggleCompleted }) {
  return (
    <div>
      <h2>清单</h2>
      {list.map((item) => (
        <ListItem item={item} key={item.id}
          deleteItem={deleteItem} toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
```
  </TabItem>
  <TabItem value="ListItem" label="ListItem">

```jsx title='ListItem.js'
import React from "react";
import CheckBox from "./UI/CheckBox";
export default class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div style={{ marginTop: "10px" }}>
        <CheckBox onChange={this.completedChangeHandler} />
        <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
          {item.title}
        </span>
        <button onClick={this.deleteHandler}>删除</button>
      </div>
    );
  }
  completedChangeHandler = (checked) => {
    const { item, toggleCompleted } = this.props;
    toggleCompleted(item.id);
  };
  deleteHandler = () => {
    const { item, deleteItem } = this.props;
    deleteItem(item.id);
  };
}
```
  </TabItem>
  <TabItem value="CheckBox" label="CheckBox">

```jsx title='./UI/CheckBox.js'
import React from "react";
export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }
  render() {
    return (
      <input type="checkbox" checked={this.state.checked}
        onChange={this.onCheckboxChange}
      />
    );
  }
  onCheckboxChange = () => {
    const newVal = !this.state.checked;
    this.setState({checked: newVal});
    // 传给父组件
    this.props.onChange(newVal);
  };
}
```
  </TabItem>
</Tabs>
:::