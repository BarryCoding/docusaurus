---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 基础语法

## 1 JSX语法 {#syntax}
- [对比vue](../../vue/app/basic.md#syntax)
```jsx title='JSXBaseDemo.js'
import React from "react";
import List from "./ListDemo"; // 7 引入组件

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "双越-imooc老师",
      imgUrl: "https://img1.mukewang.com/5a9fc8070001a82402060220-140-140.jpg",
      flag: true,
    };
  }
  render() {
    // 1 获取变量 插值 {this.state.xx}
    const pElem = <p>{this.state.name}</p>

    // 2 表达式 
    const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>

    // 3 标签动态属性
    const imgElem = <div>
        <p>我的头像</p>
        <img src="xxxx.png"/>
        <img src={this.state.imgUrl}/>
    </div>

    // 4 标签样式类名 className
    const classElem = <p className="title">设置 css class</p>

    // 5 行内样式 字符串 | 样式对象
    const styleData = { fontSize: '30px',  color: 'blue' }
    const styleElem = <p style={styleData}>设置 style</p>
    // 内联写法，注意 {{ 和 }}
    const styleElem2 = <p style={{ fontSize: '30px',  color: 'blue' }}>设置 style</p>

    // 6 修改原生 html dangerouslySetInnerHTML
    const rawHtml = "<span>富文本内容<i>斜体</i><b>加粗</b></span>";
    const rawHtmlData = {
      __html: rawHtml, // 注意，必须是这种格式 {__html:'htmlstring'}
    };
    const rawHtmlElem = (
      <div>
        <p dangerouslySetInnerHTML={rawHtmlData}></p>
        {/* ⬇直接插值 标签是明文 */}
        <p>{rawHtml}</p>
      </div>
    );

    // 7 使用组件 <XxxYyy> 首字母大写
    const componentElem = <div>
        <p>JSX 中加载一个组件</p>
        <hr/>
        <List/>
    </div>
    return componentElem
  }
}

export default JSXBaseDemo;

```

## 2 条件判断
- 个人偏向于 `&&` 判断更直白
- `if` 与 `3元` 都容易导致 嵌套地狱
- 复杂逻辑就 抽出为函数 单独处理一处逻辑
```jsx title='ConditionDemo.js'
import React from "react";

class ConditionDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: "black",};
  }
  render() {
    const blackBtn = <button className="btn-black">black btn</button>;
    const whiteBtn = <button className="btn-white">white btn</button>;

    // 1 if else 一般用于函数
    if (this.state.theme === 'black') {
        return blackBtn
    } else {
        return whiteBtn
    }

    // 2 三元运算符 一般用于jsx
    return <div>{ this.state.theme === 'black' ? blackBtn : whiteBtn }</div>

    // 3 && 一般用于 唯一判断
    return <div>{this.state.theme === "black" && blackBtn}</div>;
  }
}

export default ConditionDemo;
```

## 3 列表渲染
- List.map() v-for
- key 必填
```jsx title='ListDemo.js'
import React from "react";

class ListDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: "id-1",title: "标题1",},
        {id: "id-2",title: "标题2",},
        {id: "id-3",title: "标题3",},
      ],
    };
  }
  render() {
    return <ul>
      {
        this.state.list.map((item, index) => 
        <li key={item.id}>index {index}; id {item.id}; title {item.title}</li>)
      }
    </ul>
  }
}

export default ListDemo;
```

## 4 事件 {#event}
:::caution 注意
- 事件函数 this 指向
  - constructor fn.bind(this)
    - 避免在事件触发处 fn.bind(this) 重复创建函数性能低 重复书写bind(this)
  - **推荐** `fn=()=>{}` class组件箭头函数this自动绑定在实例上
- 事件参数 
  - 原生 event
  - 自定义 todo 非bind形式？
:::
:::tip 事件绑定
```js
import React from "react";

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "zhangsan",
      list: [
        { id: "id-1", title: "标题1",},
        { id: "id-2", title: "标题2",},
        { id: "id-3", title: "标题3",},
      ],
    };

    // 1.1 修改方法的 this 指向
    this.clickHandler1 = this.clickHandler1.bind(this);
  }
  render() {
    return 
    <div>
      {/* 1.1 this - 使用 bind */}
      <p onClick={this.clickHandler1}>{this.state.name}</p>

      {/* 1.2 this - 使用静态方法 */}
      <p onClick={this.clickHandler2}>clickHandler2 {this.state.name}</p>

      {/* 2.1 event参数 */}
      <a href="https://imooc.com/" onClick={this.clickHandler3}>click me</a>

      {/* 2.2 传递参数 - 用 bind(this, a, b) */}
      <ul>
        {this.state.list.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={this.clickHandler4.bind(this, item.id, item.title)}
            >
              index {index}; title {item.title}
            </li>
          );
        })}
      </ul>
    <div>
  }
  // 1.1
  clickHandler1() {
    this.setState({ name: "lisi",});
  }
  // 1.2 静态方法，this 指向当前实例 个人偏好
  clickHandler2 = () => {
    this.setState({ name: "lisi",});
  };
  // 2.1 获取 event
  clickHandler3 = (event) => {
    event.preventDefault(); // 阻止默认行为
    event.stopPropagation(); // 阻止冒泡行为
    console.log("target", event.target); // 指向当前元素，即当前元素触发
    console.log("current target", event.currentTarget); // 指向当前元素，假象！！！

    // React 封装了事件 为 __proto__.constructor 的 SyntheticEvent 组合事件
    console.log("event", event); // 不是原生的 Event ，原生的 MouseEvent
    console.log("event.__proto__.constructor", event.__proto__.constructor);

    // 原生事件 其 __proto__.constructor 是 MouseEvent
    console.log("nativeEvent", event.nativeEvent);
    console.log("nativeEvent target", event.nativeEvent.target); // 指向当前元素，即当前元素触发
    console.log("nativeEvent current target", event.nativeEvent.currentTarget); // 指向 document ！！！

    // 1. event SyntheticEvent ，模拟 DOM 事件所有能力
    // 2. event.nativeEvent 原生事件对象
    // 3. 所有的事件，都被挂载到 document 上 进行事件代理 提升性能
  };
  // 2.2 传递自定义参数
  clickHandler4(id, title, event) {
    console.log(id, title);
    console.log("event", event); // 最后追加一个参数，即可接收 event
  }
}

export default EventDemo;
```
:::

:::danger React17
- React 16 事件绑定到 原生的html标签 只能绑定一处
- React 17 事件绑定到 自定义root标签 可以绑定多处
  - 便于多个React版本并存 如微前段

![difference](/img/react/react_17_event_delegation.png)
:::

## 5 表单 受控组件
:::caution 注意
- 受控组件 受state控制
- input textarea select 控制 value
- checkbox radio 控制 checked
:::
:::tip form
```js
import React from "react";

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "双越", info: "个人信息",
      city: "beijing",
      flag: true,
      gender: "male",
    };
  }
  render() {
    return 
    <div>
      {/* 受控组件 */}
      <p>{this.state.name}</p>
      <label htmlFor="inputName">姓名：</label> {/* 用 htmlFor 代替 for */}
      <input id="inputName" value={this.state.name} onChange={this.onInputChange}/>

      {/* textarea - value */}
      <textarea value={this.state.info} onChange={this.onTextareaChange} />
      <p>{this.state.info}</p>

      {/* select - value */}
      <select value={this.state.city} onChange={this.onSelectChange}>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="shenzhen">深圳</option>
      </select>
      <p>{this.state.city}</p>

    {/* checkbox - checked */}
      <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange}/>
      <p>{this.state.flag.toString()}</p>

    {/* radio - checked */}
        male <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.onRadioChange}/>
        female <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.onRadioChange}/>
        <p>{this.state.gender}</p>
    </div>
  }
  onInputChange = (e) => {this.setState({ name: e.target.value, })}
  onTextareaChange = (e) => {this.setState({ info: e.target.value, })}
  onSelectChange = (e) => { this.setState({ city: e.target.value, })}
  onCheckboxChange = () => { this.setState({ flag: !this.state.flag, })}
  onRadioChange = (e) => {this.setState({ gender: e.target.value, })}
}

export default FormDemo;
```
:::

## 6 父子组件 直接通讯 {#props}
:::caution 注意
- props 传递 状态
- props 传递 函数
- props 类型检查 prop-types | TS
- 传递的状态 与 控制此状态的函数 都放在父组件
:::

:::tip 父子组件通讯
<Tabs>
  <TabItem value="todoList" label="TodoList">

```jsx title="TodoListDemo.jsx"
import React from "react";
import PropTypes from "prop-types"; // 安装类型检查
export default class TodoListDemo extends React.Component {
  constructor(props) {
    super(props);
    // 状态（数据）提升到 父组件
    // 传递状态 放在父组件
    this.state = {
      list: [
        {id: "id-1",title: "标题1",},
        {id: "id-2",title: "标题2",},
      ],
      footerInfo: "底部文字",
    };
  }
  // 控制传递状态的函数 也放在父组件
  onSubmitTitle = (title) => {
    this.setState({list: this.state.list.concat({id: `id-${Date.now()}`,title,}),});
  };
  render() {
    return (
      <div>
        <Input submitTitle={this.onSubmitTitle} />
        <List list={this.state.list} />
        <Footer text={this.state.footerInfo} length={this.state.list.length} />
      </div>
    );
  }
}
```
  </TabItem>
  
  <TabItem value="input" label="Input">

```js title="SCUDemo.jsx"
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }
  render() {
    return (
      <div>
        <input value={this.state.title} onChange={this.onTitleChange} />
        <button onClick={this.onSubmit}>提交</button>
      </div>
    );
  }
  onTitleChange = (e) => {this.setState({title: e.target.value,});};
  onSubmit = () => {
    const { submitTitle } = this.props; // 获取父组件函数
    submitTitle(this.state.title); // 调用父组件函数
    this.setState({title: ""});
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
    const { list } = this.props; // 获取父组件属性
    return (
      <ul>
        {list.map((item, index) => (<li key={item.id}><span>{item.title}</span></li>}
      </ul>
    );
  }
}
// props 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
```
  </TabItem>
  <TabItem value="footer" label="Footer">

```jsx title='SCUDemo.jsx'
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<p>{this.props.text} {this.props.length}</p>)
  }
  componentDidUpdate() {
    console.log("footer did update");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.text !== this.props.text || nextProps.length !== this.props.length) {
      return true; // 可以渲染
    }
    return false; // 不重复渲染
  }

  // Todolist更新，footer也更新！
  // 优化 只当组件相关的props改变才触发更新
}
```
  </TabItem>
</Tabs>
:::

## 7 必会 4重点 state / setState {#setState}
:::caution 1 状态不可变 数组与对象
```js
// 不可变值 - 数组 （函数式编程，纯函数）
const list5Copy = this.state.list5.slice()
list5Copy.splice(2, 0, 'a') // 中间插入/删除
this.setState({
    list1: this.state.list1.concat(100), // 追加
    list2: [...this.state.list2, 100], // 追加
    list3: this.state.list3.slice(0, 3), // 截取
    list4: this.state.list4.filter(item => item > 100), // 筛选
    list5: list5Copy // 其他操作
})
// 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值

// 不可变值 - 对象
this.setState({
    obj1: Object.assign({}, this.state.obj1, {a: 100}),
    obj2: {...this.state.obj2, a: 100}
})
// 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值

```
:::

:::danger 2 状态可能异步更新
```js
import React from "react";

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    // 1 state 要在构造函数中定义
    this.state = {count: 0,};
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p> <button onClick={this.increase}>累加</button>
      </div>
    );
  }
  increase = () => {
    // 2 不要直接操作 state ，遵循不可变值
    // this.state.count++ // 错误
    // 使用 setState 修改状态
    this.setState({count: this.state.count + 1})

    // 3 setState 异步/同步 
    // 3.1 一般的 setState({xxx:yyy}) 是异步
    this.setState({count: this.state.count + 1}, () => {
      // setState 内部回调函数 可以拿到最新state  如 Vue $nextTick
      console.log('count by callback', this.state.count) 
    })
    // 一般的 setState 是异步 拿不到最新状态
    console.log('count', this.state.count)

    // 3.2 setTimeout 中 setState 是同步的 记得销毁定时器
    setTimeout(() => {
      this.setState({count: this.state.count + 1})
      console.log('count in setTimeout', this.state.count)
    }, 0)
  };

  bodyClickHandler = () => {
    this.setState({count: this.state.count + 1})
    console.log('count in body event', this.state.count)
  }
  componentDidMount() {
    // 3.3 自定义 DOM 事件，setState 是同步的
    document.body.addEventListener('click', this.bodyClickHandler)
  }
  componentWillUnmount() {
    // 3.2 clearTimeout 销毁定时器
    // 3.3 及时销毁 自定义 DOM 事件
    document.body.removeEventListener('click', this.bodyClickHandler)
  }
}

export default StateDemo;
```
:::

:::caution 3 状态可能合并更新
```js title='简单写法'
// setState 传入对象 会被压盖。只执行最后一次更新 count结果为3
this.setState({count: this.state.count + 1})
this.setState({count: this.state.count + 2})
this.setState({count: this.state.count + 3})
```
```js title='规范推荐写法'
// setState 传入箭头函数来返回对象 不被合并 按函数顺序执行 count结果为6
this.setState((prevState, props) => ({count: prevState.count + 1}));
this.setState((prevState, props) => ({count: prevState.count + 2}));
this.setState((prevState, props) => ({count: prevState.count + 3}));
```
:::

:::info 4 18版本状态更新
- React <= 17
  - 状态 一般为 异步更新 合并更新
  - 自定义事件 setTimeout 状态 同步更新 不合并更新
  - 不统一 React只处理了组件事件
- React 18
  - automatic batching 自动批量处理
  - 状态 异步更新 合并更新
  - 保持统一性 降低了复杂度
:::

## 8 组件生命周期 {#lifecycle}
- 回顾 父子组件生命周期 同 Vue生命周期
- constructor
  - 默认状态等 准备好
- render
  - 首次渲染 默认状态的 默认静态页面 （非接口数据） 
  - 状态改变后 重新渲染 动态页面
- componentDidMount
  - DOM已挂载后触发 掉接口数据后的 动态页面
- shouldComponentUpdate
  - 组件是否需要更新 优化组件性能
- componentDidUpdate
  - state更新后触发 注意改状态导致死的循环
- componentWillUnmount
  - 组件销毁前的清理 如 定时器 和 自定义事件
- [图解](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)