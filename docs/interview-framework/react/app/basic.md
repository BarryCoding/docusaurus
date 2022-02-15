---
sidebar_position: 1
---

# React 基本

## JSX语法
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
    // 1 获取变量 插值用 {this.state.xx}
    const pElem = <p>{this.state.name}</p>

    // 2 表达式 
    const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>

    // 3 子元素属性
    const imgElem = <div>
        <p>我的头像</p>
        <img src="xxxx.png"/>
        <img src={this.state.imgUrl}/>
    </div>

    // 4 元素样式类名
    const classElem = <p className="title">设置 css class</p>

    // 5 行内样式
    const styleData = { fontSize: '30px',  color: 'blue' }
    const styleElem = <p style={styleData}>设置 style</p>
    // 内联写法，注意 {{ 和 }}
    const styleElem2 = <p style={{ fontSize: '30px',  color: 'blue' }}>设置 style</p>

    // 6 修改原生 html
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

    // 7 使用组件 <组件名>
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

## 判断条件
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

    // 3 && 一般用于唯一判断
    return <div>{this.state.theme === "black" && blackBtn}</div>;
  }
}

export default ConditionDemo;
```

## 列表渲染
- map 与 key
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
        /* react 的 key 和 vue v-for key 类似，必填 */
        this.state.list.map((item, index) => 
        <li key={item.id}>index {index}; id {item.id}; title {item.title}</li>)
      }
    </ul>
  }
}

export default ListDemo;
```

## 事件

## 组件和props

## state / setState

## 组件生命周期

