---
sidebar_position: 8
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 破解-独立思考
> 能看懂代码的逻辑，识破代码的一些坑。看破一切虚妄。优先独立思考。

## parseInt函数
:::danger 以下代码，执行会输出什么
```js
['1', '2', '3'].map(parseInt)
```
:::

:::info
`parseInt(string, radix)` 按指定进制解析一个字符串 返回**十进制**整数
- `string` 要解析的字符串
- `radix` 可选参数，即进制，范围为 2-36 

```js
parseInt('11', 1) // NaN ，1 非法，不在 2-36 范围之内
parseInt('11', 2) // 3 = 1*2 + 1
parseInt('3', 2) // NaN ，2 进制中不存在 3
parseInt('11', 3) // 4 = 1*3 + 1
parseInt('11', 8) // 9 = 1*8 + 1
parseInt('9', 8) // NaN ，8 进制中不存在 9
parseInt('11', 10) // 11
parseInt('A', 16) // 10 ，超过 10 进制，10-A 11-B 12-C 13-D 14-E 15-F 
parseInt('F', 16) // 15
parseInt('G', 16) // NaN ，16 进制个位数最多是 F ，不存在 G
parseInt('1F', 16) // 31 = 1*16 + F
```
:::

:::caution 不写进制参数 或 为0
- 如果 `string` 以 `0x` 开头，则按照 16 进制处理，例如 `parseInt('0x1F')` 等同于 `parseInt('1F', 16)`
- 其他情况，按 10 进制处理
- 为了保证规范 还是写上进制参数
:::

:::tip 分析
- 拆解代码
```js
const arr = ['1', '2', '3']
const res = arr.map((s, index) => {
    console.log(`s is ${s}, index is ${index}`)
    return parseInt(s, index)
})
console.log(res)
```
- 分析过程
```js
parseInt('1', 0) // 1 ，radix === 0 按 10 进制处理
parseInt('2', 1) // NaN ，radix === 1 非法（不在 2-36 之内）
parseInt('3', 2) // NaN ，2 进制中没有 3
```
:::

## 数组转树
> 定义一个 `convert` 函数，将以下数组转换为树结构。

### 树转数组
> 定义一个 `convert` 函数，将以下对象转换为数组

## 构造函数与原型属性重名
- 什么鬼？

:::danger 以下代码，执行会输出什么
```js
function Foo() {
    Foo.a = function() { console.log(1) }
    this.a = function() { console.log(2) }
}
Foo.prototype.a = function() { console.log(3) }
Foo.a = function() { console.log(4) }

Foo.a()
let obj = new Foo()
obj.a()
Foo.a()
```
:::

## Promise then的执行顺序
- 扩展 前端基础文档 是时候了

:::danger 以下代码，执行会输出什么
```js
Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(4)
}).then((res) => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
}).then(() =>{
    console.log(6)
})
```
:::

## React setState
- 在 前端框架中

:::danger 以下代码，执行会输出什么
```js
class Example extends React.Component {
    constructor() {
      super()
      this.state = { val: 0 }
    }
  
    componentDidMount() {
      // this.state.val 初始值是 0 

      this.setState({val: this.state.val + 1})
      console.log(this.state.val)
  
      this.setState({val: this.state.val + 1})
      console.log(this.state.val)
  
      setTimeout(() => {
        this.setState({val: this.state.val + 1})
        console.log(this.state.val)
  
        this.setState({val: this.state.val + 1})
        console.log(this.state.val)
      }, 0)
    }
  
    render() {
      return <p>{this.state.val}</p>
    }
}
```
:::

### setState 宏任务/微任务
- 好好看 好好学

## 对象赋值
:::danger 以下代码，执行会输出什么
```js
let a = { n: 1 }
let b = a
a.x = a = { n: 2 }

console.log(a.x) 	
console.log(b.x)
```
:::


## 对象属性赋值
- Symbol？

:::danger 以下代码，执行会输出什么
```js
// example1
let a = {}, b = '123', c = 123
a[b] = 'b'
a[c] = 'c'
console.log(a[b])

// example 2
let a = {}, b = Symbol('123'), c = Symbol('123')
a[b] = 'b'
a[c] = 'c'
console.log(a[b])

// example 3
let a = {}, b = { key:'123' }, c = { key:'456' }
a[b] = 'b'
a[c] = 'c'
console.log(a[b])
```
:::

## 函数参数
:::danger 以下代码，执行会输出什么
```js
function changeArg(x) { x = 200 }

let num = 100
changeArg(num)
console.log('changeArg num', num) // 输出？

let obj = { name: '双越' }
changeArg(obj)
console.log('changeArg obj', obj) // 输出？

function changeArgProp(x) {
    x.name = '张三'
}
changeArgProp(obj)
console.log('changeArgProp obj', obj) // 输出？
```
:::

## 解题常见思路

### 举例
> 如果没有示例，你可以举几个示例让面试官确认，这样可以保证自己理解正确。

- 例如“数组转树”和“树转数组”两个问题，可以举几个例子。对比输入和输出，即可找出变化的规律。

### 画图
> 遇到抽象的问题，画图，把抽象变形象，更容易找出突破口。

### 拆解
> 把代码拆解到最细的力度，就很容易定位问题

例如 `['1', '2', '3'].map(parseInt)` 
```js
const arr = ['1', '2', '3']
const res = arr.map((s, index) => {
    // console.log(`s is ${s}, index is ${index}`)
    return parseInt(s, index)
})
console.log(res)
```

### 本质
> 不要被复杂的表象所迷惑，要尝试去找出问题的本质考点。

例如下面对象属性赋值的问题，考点就是对象 key 的数据类型。
```js
let a = {}, b = '123', c = 123
a[b] = 'b'
a[c] = 'c'
console.log(a[b])
```