---
sidebar_position: 2
---

# 周边工具

## redux
- store 
  - 管理的数据 state关联视图渲染
- action 
  - 行动 类型和参数对象
  - 异步action 中间件 redux-thunk / redux-saga
- dispatch 
  - 分配 某个行动
- reducer 
  - 根据行动类型 返回newState
- 单向数据流概述
  1. dispatch(action)
  2. reducer -> return newState
  3. subscribe 触发通知
- 中间件
  - 对dispatch进行扩展 redux-thunk
```js
const next = store.dispatch
store.dispatch = function exDispatch(action){
    // 补充逻辑
    next(action)
}
```

![图解](/img/react/react-redux.png)

## react-redux 需案例
- provider
- connect
- mapStateToProps
- mapDispatchToProps

## react-router
- 路由模式
  1. HashRouter http://localhost:3000/#/user  
  2. BrowerRouter 模式  http://localhost:3000/user 需server端支持
- 路由配置 
  1. 动态路由 path配置 `:id` 获取参数`useParams()` 
  2. 跳转
     1. 链接`<Link to='path'>首页</Link>`
     2. Js `const history = userHistory()` `history.push('path')`

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

