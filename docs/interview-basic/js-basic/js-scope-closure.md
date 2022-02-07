---
sidebar_position: 3
---

# 作用域与闭包

## 作用域与自由变量
### 作用域
- 全局作用域
- 函数作用域
- 块级作用域
### 自由变量
1. 变量在当前作用域没有定义 但被使用
2. 向上级作用域 层层寻找直到找到
3. 如果到了全局都没有 则抱错`xx is not defined`

## 闭包与使用场景
### 闭包
- 一种特色的作用域 2种表现
  1. 函数作为参数 被传递
  2. 函数作为返回值 被返回 
```js title='closure.js'
// 1 函数作为参数 被传递
const b = 1
function fn1 () {
    console.log(b)
}
function print(fn) {
    const b = 2
    fn()
}
print(fn1) // 1

// 2 函数作为返回值 被返回 
function create() {
    const a = 3
    return function () {
        console.log(a)
    }
}
const a = 4
const fn2 = create()
fn2() // 3
```
:::tip 闭包解
所有的自由变量的查找，是在**函数定义的作用域**，向上级作用域查找。
:::
:::danger 闭包坑
不是在函数执行的作用域！！！
:::

## this的指向 {#this}
- 全局 普通函数 window对象
- call apply bind 绑定对象
- 对象方法 当前对象
- class方法 实例对象
- 箭头函数 上级作用域的this

:::tip this解
this的取值，是在**函数执行时**确定的。
:::
```js title='this1.js'
function fn1(){console.log(this)}
fn1() // window

fn1.call({x:1}) // {x:1}
const fn2 = fn1.bind({x:2})
fn2() // {x:2}

const zs = {
    name: '张三',
    say(){
        console.log(this) // 当前对象zs
    }
    wait(){
        setTimeout(function(){
            console.log(this) // window
        })
    }
    wait2(){
        setTimeout(()=>{
            console.log(this) // 当前对象zs
        })
    }
}

class People{
    constructor(name){
        this.name = name // 构建的实例
    }
    say(){
        console.log(this) // 构建的实例
    }
}
```
## 面试题
- [this的指向](#this)
- 手写bind函数
  - bind apply call 在 `Function.prototype`
  - 搞清楚 bind apply call 了么？
```js title='bind.js'
// 原生bind
function fn1(p1,p2,p3){
    console.log('this is ', this)
    console.log(p1,p2,p3)
    return 'this is function fn1'
}
const f2 = fn1.bind({x:'target'},1,2,3)
console.log(f2())

// 手写
Function.prototype.myBind = function(){
    const arrArgs = Array.prototype.slice.call(arguments)
    const target = arrArgs.shift() // 首个参数为this的绑定对象
    const self = this
    return function(){
        return self.apply(target, arrArgs)
    }
}
const f3 = fn1.bind({x:'target'},1,2,3)
console.log(f3())
```
- 闭包的应用场景
  - 隐藏数据 如:缓存工具
```js title='cache.js'
// 隐藏数据 只提供 API
function createCache(){
    const data = {} // 隐藏的数据
    // 提供 API
    return {
        set(key,value){
            data[key] = value
        },
        get(key){
            return data[key]
        }
    }
}
const c = createCache()
c.set('a', 100)
console.log( c.get('a') )
```