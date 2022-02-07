---
sidebar_position: 2
---

# 原型与原型链

## JS 原型考点
- 如何判断变量是否是数组
- 手写简易jQuery，考虑插件和扩张性
- class的原型本质

## 用 class 实现继承
### 类与实例
- class
- constructor
- property
- methods
```js title='student.js'
    // highlight-start
class Student {
    constructor(name, number) {
        this.name = name
        this.number = number
    }
    sayHi() {
        // highlight-end
        console.log(
            `姓名 ${this.name} ，学号 ${this.number}`
        )
    }
}
// 通过类 new 对象/实例
const xialuo = new Student('夏洛', 100)
```
### 类的继承
- extends
- super
- 扩张或重写属性和方法
```js title='student2.js' {12,14,15,17}
// 父类
class People {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat something`)
    }
}

// 子类
class Student extends People {
    constructor(name, number) {
        super(name)
        this.number = number
    }
    sayHi() {
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
}
const xialuo = new Student('夏洛', 100)
```

## 理解 JS 原型
```js title='student2.js'
// class 构建函数 也是 函数
typeof People // 'function'
// 隐式原型 与 显式原型
console.log(xialuo.__proto__) // 实例的 隐式原型
console.log(Student.prototype) // 类的 显式原型
console.log(xialuo.__proto__ === Student.prototype) // true
```
### 原型关系
- 每个类都有显式原型 `prototype`
- 每个实例都有隐式原型 `__proto__`
- 实例的隐式原型 指向 其类的显式原型
### 原型的执行规则
1. 获取实例属性或执行方法时
2. 实例先寻找自身属性和方法
3. 找不到则自动去原型中寻找

## instanceof 原型链
```js title='student2.js'
// 原型链 子类可理解为父类的实例
console.log(Student.prototype.__proto__) // 子类 显式原型的隐式原型
console.log(People.prototype) // 父类 显式原型
console.log(Student.prototype.__proto__ === People.prototype) // true
console.log(Object.prototype.__proto__ === null) // true
// hasOwnProperty() 判断是否是自身属性
```

## 面试题
1. 如何判断变量是否是数组 
`a instanceof Array`
2. class 的原型本质
   1. 原型关系
   2. 原型的转型规则
   3. 原型链
3. 手写jQuery
```js title='jQuery.js'
class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index) {
        return this[index]
    }
    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}

// 扩展方式1 类的显式原型 扩张功能
jQuery.prototype.dialog = function (info) {
    alert(info)
}

// 扩张方式2 子类继承父类 扩张功能
class myJQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }
    // 扩展自己的方法
    addClass(className) {}
}
```