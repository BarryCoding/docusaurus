---
sidebar_position: 4
---

# React hooks
- todo 结合官方文档 过一遍 hooks

## 面试题解答
:::danger
#### 1 为什么使用 Hooks 解决了什么问题
- 完善和扩展 函数组件
- 简化了 公共逻辑 自定义钩子更简洁明了
- class组件问题 不易维护
  - 代码写法冗余 不同生命周期处理相同逻辑 
  - 逻辑混乱 生命周期中 逻辑穿插到一起 过于复杂
  - 函数组件 可通过 useEffect 匹配依赖 解耦逻辑
#### 2 Hooks 如何模拟 生命周期
- [跳转](#lifecycle)

#### 3 如何自定义 Hook
- [跳转](#custom)

#### 4 Hooks 性能优化
- 默认情况下 父组件每次渲染 子组件跟着一起渲染
1. useMemo 缓存数据
2. useCallback 缓存函数
- 从而避免 子组件不必要的渲染
#### 5 Hooks 遇到过什么坑
- [跳转](#problems)
#### 6 Hooks 对比 HOC 与 Render Prop 
- [跳转](#common)
:::
## class 组件问题
:::caution
- 大型组件 难以拆分和重构 
- 相同业务逻辑 分散到各个方法中 逻辑混乱
  - 获取数据 在 didMount didUpdate 都要用到
  - 创建自定义事件在 didMount； 销毁事件在 destroy
- 复用逻辑复杂 
  - HOC 
  - Render Prop
:::
- 原始的 函数组件过于简单 用Hooks来增强功能 

:::info 函数组件
- 默认没有state
- 是纯函数 执行完就销毁 也无法存储state
- 需要 stateHook 把 state 钩到 纯函数中
:::

## useState

:::info 使用
  - useState(initValue) 传入初始值 返回数组 `[state, setState]`
  - 通过 state 直接获取状态
  - 通过 setState() 修改状态 
:::

:::danger 命名规范
- 所有钩子 都用 use开头 如 useXxx
- 非钩子 不要用 use开头 避免歧义
:::

```jsx
const [count, setCount] = useState(0) // 默认值为0

<button onClick={setCount(count+1)}></button>
```

## useEffect 模拟 lifecycle {#lifecycle}
:::tip
- 模拟 首次挂载 ComponentDidMount 
  - useEffect 依赖 空数组[]
- 模拟 状态更新 ComponentDidUpdate 
  - useEffect 依赖 非空数组 且根据依赖的状态改变才触发更新
- 模拟 组件销毁 ComponentwillUnmount 
  - useEffect 中 **返回一个函数fn** 在此函数中处理 销毁逻辑
    - 更准确的说 是在依赖状态变化后 触发下次 useEffect 前 执行返回的函数逻辑 
      - 不一定只用在 组件销毁时 也用在是 组件更新时
    - 也让 纯函数有了副作用 可销毁 全局定时任务 自定义事件等
:::

```jsx
useEffect(()=>{
  console.log('模拟 ComponentDidMount 和 ComponentDidUpdate')
}) // 第2个参数 不传 相当于依赖所有state

useEffect(()=>{
  console.log('模拟 ComponentDidMount')
},[]) // 第2个参数 传 [] 空依赖

useEffect(()=>{
  console.log('模拟 ComponentDidUpdate 并 关联依赖的数据')
},[state1, state2]) // 第2个参数 传 [state1, state2] 依赖改变则更新


useEffect(()=>{
  let timeId = window.setInterval(()=>{
    console.log(Date.now())
  },1000)
  // 返回函数中 处理 需要销毁的 定时器 自定义事件等
  return ()=>{
    window.clearInterval(timeId)
  }
},[])
```


## useRef
```jsx
// 1 创建ref 初始值 null
const btnRef = useRef(null) 

// 3 获取 绑定的 DOM节点
useEffect(()=>{
  console.log(btnRef.current) 
},[])

// 2 节点绑定 ref
return <button ref={btnRef}></button> 
```

## useContext
```jsx
const themes = {
  light:{ background: '#eee'},
  dark:{background: '#222'}
}

// 1 创建context 并赋予初始值
const ThemeContext = React.createContext(themes.light) 

function App() {
  return (
    // 2 传递给 子孙组件
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div> <ThemedButton /> </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext); // 3 使用需要的context
  return (
    <button style={{ background: theme.background }}>
      I am styled by theme context!
    </button>
  );
```


## useReducer
:::info
- 借鉴了 redux 思路
- useState的替代方案 复杂的state版本
  - action 方式 清晰了逻辑 
- 但是只管理单组件状态（相当于私人仓库） 
  - 组件通讯 还得使用props
- redux 是 全局通讯 （相当于共享仓库）
:::

```jsx
const initState = {count: 0}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {count: state.count + 1}
    default:
      return state
  }
}

const app = ()=>{
  const [state, dispatch] = useReducer(reducer, initState)
  return <div>
    count: {state.count}
    <button onClick={()=>dispatch({type:'INCREASE'})}>increase</button>
  </div>
}
```

## useMemo
- 父组件任何更新 子组件默认也跟着更新
- 性能提升 父组件中更新子组件状态(memo数据) 才触发子组件更新

```jsx
const FnComponent = ({userInfo})=>{
  return <p>{userInfo.name} {userInfo.age}</p>
}
// 1 memo() 包裹函数组件
const MemoChild = memo(FnComponent)

const App = ()=>{
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Springer')

  // 2 useMemo 缓存子组件数据
  const userInfo = useMemo(()=>{ 
    return {name, age:21} // 返回 数据扁平？
  }, [name]) // 关联子组件更新依赖

  return <div>
    <button onClick={()=>setCount(count+1)}>{count}</button>
    <MemoChild userInfo={userInfo} />
  </div>
}
```

## useCallback
:::tip 钩子最常见优化
1. useMemo 缓存数据
2. useCallback 缓存函数
:::

```jsx
const saveFn = useCallback(fn,[]) // 依赖与fn函数体有关
```

## 自定义 Hook {#custom}
:::info
- 封装抽离 通用功能 
  - 比 HOC renderprops 强多了 
- 开发和发布 第三方Hooks
- Hooks扩展性 代码解耦 
:::
:::tip
- 本质是函数 以use开头
- 内部正常使用 useState useEffect 等钩子
- 返回自定义数据
  - react-router
:::
```jsx title='useAxios'
import { useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (url) => {
  // 创建 自定义状态
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)

  // 在 useEffect 中处理 状态改变
  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => setErr(err))
      .finally(()=> setLoading(false))
  }, [url])

  // 返回 自定义状态
  return [{laoding, data, err}]
}

export default useAxios
```

## 两条原则
- 书写规范是 以 use开头的 驼峰命名

:::tip
1. 只能用于 react 函数组件 或 自定义钩子
2. 只能放在 代码顶层 且不能在 判断或循环中使用钩子
   - 保证 钩子调用顺序必须保持一致
:::

:::danger 钩子调用顺序必须保持一致
- 无论是render 还是 re-render hooks 调用顺序必须一致
- 如果 Hooks 出现在 循环或判断逻辑中 顺序将错位 获取的状态也会错位
:::
## 组件逻辑复用 {#common}
:::caution 类组件 复用
- 高阶组件 HOC 工厂模式 返回一个加工后的组件
  - 问题1 向外包裹了一层 如加个多功能外套
  - 问题2 props 覆盖
- Render Props 传递render函数给子组件 props.render
  - `不推荐` 不简洁 不易理解 多绕了一圈 如绳子多打个结 未解耦
  - 子组件的渲染(props.render) 跑到父组件中控制 
  - 像个无能的儿子 系鞋带穿衣服 渲染效果 都要父母来处理 心累 
:::

:::info 函数组件 复用
- 易于理解 代码简单优雅 直接useHook可获取相关功能
- 逻辑解耦且清晰 状态和逻辑都在钩子中
- 没有组件嵌套逻辑
:::

## 注意事项 {#problems}
:::tip 钩子两原则
1. 只能用于 react 函数组件 或 自定义钩子
2. 只能放在 代码顶层 且不能在 判断或循环中使用钩子
   - 保证 钩子调用顺序必须保持一致
:::
:::danger 易错点
- useState 
  - 初始化值 只有第一次有效
    - 如不要将 props值 作为state的初始值
    - 解法 直接调用 props就好
- useEffect
  - 内部修改 setState
    - 依赖为空[] 内部state只能挂载时获取一次 且保持不变
    - 无依赖 `忘记依赖` 每次都执行 多余的触发
      - 解法 使用 useRef 来替代 state
  - 容易可能出现 死循环
    - 如依赖是 props.user user是个对象
      - 依赖是 对象或数组等 依赖数据未变 但数据引用地址变了
    - 解法 将依赖数据 平坦化 改为值类型
:::
