---
sidebar_position: 2
---

# 周边工具

## redux {#redux}
- store 
  - 管理的数据 state关联视图渲染
- action 
  - 行动 类型和参数对象
  - **异步action** 中间件 redux-thunk / redux-saga
- dispatch 
  - 分配 某个行动
- reducer 
  - 根据行动类型 返回newState
- todo redux.org official doc

### 单向数据流概述
  1. dispatch(action)
  2. reducer -> return newState (遵循 不可变值)
  3. subscribe 触发通知
### 中间件 
- applyMiddleWare
- 对 dispatch 再进行扩展 
- 对 action 进行异步处理 redux-thunk redux-saga react-mbox
```js
const next = store.dispatch
store.dispatch = function exDispatch(action){
    // 补充逻辑
    next(action)
}
```

![图解](/img/react/react-redux.png)

:::info 数据流
1. 视图上操作触发某个action
2. action 被 dispatch 分发
   - 若有中级间等 可继续触发其他action 如 redux-thunk
3. reducer 返回 newState
4. 有订阅的相关视图 收到通知 渲染新state数据效果
:::

## react-redux
- provider组件 传递store
- connect()() HOC 组件取得全局store
- mapStateToProps 映射state到props
- mapDispatchToProps 映射dispatch到props

- todo redux.org official doc

## react-router {#router}
### 路由模式
1. HashRouter http://localhost:3000/#/user  
2. BrowerRouter 模式  http://localhost:3000/user 需server端支持
### 路由配置 
1. 动态路由 path配置 `:id` 获取参数`useParams()` 
2. 跳转
     - 链接`<Link to='path'>首页</Link>`
     - Js `const history = userHistory()` `history.push('path')`

:::tip 懒加载路由
```jsx
import {BrowserRouter, Route, Switch} form "react-router-dom"
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./routes/Home"));
const Detail = lazy(() => import("./routes/Detail"));

const App = ()=>{
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </Suspense>
  </BrowserRouter>
}
```
::: 

