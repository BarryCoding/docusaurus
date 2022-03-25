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
:::note
> 定义一个 `convert` 函数，将以下数组转换为树结构。

```js
[
    { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
    { id: 2, name: '部门B', parentId: 1 },
    { id: 3, name: '部门C', parentId: 1 },
    { id: 4, name: '部门D', parentId: 2 },
    { id: 5, name: '部门E', parentId: 2 },
    { id: 6, name: '部门F', parentId: 3 },
]
```
![部门树](/img/onehundren/departments_tree.png)
:::

:::info 思路
1. 遍历数组
2. 每个元素生成 树节点
3. 找到其父节点 并加入到children中 
   - 遍历数组 性能低下
   - 用map结构维护关系 便于查找
:::

:::tip 代码
```ts
// 接口 数组项 原始结构
interface IArrayItem {
    id: number
    name: string
    parentId: number
}
// 接口 树节点
interface ITreeNode {
    id: number
    name: string
    children?: ITreeNode[] // 可能有 且是 树节点数组类型
}
// 传入数组 返回树节点
function convert(arr: IArrayItem[]): ITreeNode | null {
    // 用于 id 和 treeNode 的映射
    const idToTreeNode: Map<number, ITreeNode> = new Map()
    // 声明返回变量
    let root = null
    arr.forEach(item => {
        const { id, name, parentId } = item
        // 定义 树节点 配合其 id 插入到 map
        const treeNode: ITreeNode = { id, name }
        idToTreeNode.set(id, treeNode)
        // 通过 map 找到 parentNode 并加入到它的 children
        const parentNode = idToTreeNode.get(parentId)
        // 有父树节点
        if (parentNode) {
            // 若父树节点 暂无children 则配置children为数组结构 再插入
            if (parentNode.children == null) parentNode.children = []
            parentNode.children.push(treeNode)
        }
        if (parentId === 0) root = treeNode // 找到根节点
    })
    return root
}
```
:::

### 树转数组
:::note
> 定义一个 `convert` 函数，将以下对象转换为数组。反过来

```js
const obj = {
    id: 1,
    name: '部门A',
    children: [
        {
            id: 2,
            name: '部门B',
            children: [
                { id: 4, name: '部门D' },
                { id: 5, name: '部门E' }
            ]
        },
        {
            id: 3,
            name: '部门C',
            children: [{ id: 6, name: '部门F' }]
        }
    ]
}
```
:::

:::info 思路
1. 遍历树节点(`广度优先` 非深读优先)
2. 将树节点转换为 item 插入到数组
3. 根据父子关系 item 找到 parentId
   - 遍历树 性能低下
   - 用map结构维护关系 便于查找
:::

- 学了算法 再回来手写？

:::tip 代码
```ts
// 传入树节点 返回数组
function convert1(root: ITreeNode): IArrayItem[] {
    // Map 映射 父子树节点关系 子对父
    const nodeToParent: Map<ITreeNode, ITreeNode> = new Map()
    // 声明返回变量
    const arr: IArrayItem[] = []
    // 广度优先遍历，queue 队列算法
    const queue: ITreeNode[] = []
    queue.unshift(root) // 根节点 入队 才有队列
    while (queue.length > 0) {
        const curNode = queue.pop() // 出队 右取出
        if (curNode == null) break
        const { id, name, children = [] } = curNode
        // 查找父树节点 没有则parentId为0
        const parentNode = nodeToParent.get(curNode)
        const parentId = parentNode?.id || 0
        const item = { id, name, parentId }
        arr.push(item) 
        children.forEach(child => {
            // 映射 parent 子对父
            nodeToParent.set(child, curNode)
            // 按广度优先入队 左插入
            queue.unshift(child)
        })
    }
    return arr
}
```
:::

## 构造函数与原型属性重名

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

:::caution 不做人了
把自己想象成 JS 引擎，你不是在读代码，而是在`执行代码`
:::

![原型图](/img/onehundren/Foo_prototype.png)

:::tip 关注函数的执行
```js
function Foo() {
    Foo.a = function() { console.log(1) } // 1 在构造函数上
    this.a = function() { console.log(2) } // 2 在实例上
}
Foo.prototype.a = function() { console.log(3) } // 3 在原型上
Foo.a = function() { console.log(4) } // 4 在构造函数上

Foo.a() // 在构造函数上 4 压盖 1
let obj = new Foo() // 在构造函数上 1 压盖 4
obj.a() // 2 在实例上
Foo.a() // 1 
```
:::

## Promise then的执行顺序
:::note 以下代码，执行会输出什么
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

:::info 回顾
- 单线程和异步
- 事件循环
- 宏任务 微任务
:::

:::caution 交替执行
- 多个 fulfilled 状态的 promise 实例，同时执行 then 链式调用
- then 会交替调用
- 这是编译器的优化，防止一个 promise 持续占据事件

```js
Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
})

Promise.resolve().then(() => {
    console.log(10)
}).then(() => {
    console.log(20)
})

Promise.resolve().then(() => {
    console.log(100)
}).then(() => {
    console.log(200)
})
```
:::

:::danger “慢两拍”
> then 中 return promise 实例和直接执行 `Promise.resolve()` 不一样，它需要等待两个过程

1. promise 状态由 pending 变为 fulfilled
2. then 函数挂载到 microTaskQueue
   - 每个then都是一拍
:::

:::tip 运行实现
```js
Promise.resolve().then(() => {
    console.log(0) // 第1拍
    return Promise.resolve(4)
    // 第3拍 上方返回的promise pending 变 fulfillled
    // 第5拍 then 函数挂载到 microTaskQueue
}).then((res) => {
    console.log(res) // 第7拍
})
// 规则 上下2个链式promise 交替执行
Promise.resolve().then(() => {
    console.log(1) // 第2拍
}).then(() => {
    console.log(2) // 第4拍
}).then(() => {
    console.log(3) // 第6拍
}).then(() => {
    console.log(5) // 第8拍
}).then(() =>{
    console.log(6) // 第9拍
})
// 结果为 1 2 3 4 5 6
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
> 函数参数是`赋值传递`

:::danger 以下代码，执行会输出什么
```js
function changeArg(x) { 
    x = 200 // 函数参数重新赋值
}

function changeArgProp(x) {
    x.name = '张三' // 函数参数指向同一个对象 有副作用
}

let num = 100
changeArg(num) // 函数参数相当于 let x = num 
console.log('changeArg num', num)

let obj = { name: '双越' }
changeArg(obj) // 函数参数相当于 let x = obj
console.log('changeArg obj', obj)

changeArgProp(obj) // 函数参数相当于 let x = obj
console.log('changeArgProp obj', obj)
```
:::
:::tip eslint
- 规范 将`函数参数作为常量`不进行修改
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