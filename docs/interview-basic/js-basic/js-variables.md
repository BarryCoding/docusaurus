---
sidebar_position: 1
---

# 变量
:::info 题目
- [typeof 能判断哪些类型](#typeof-判断类型) 
- [何时 === 何时 ==](#何时用--何时用-)
- [值类型 与 引用类型 区别](#值类型和引用类型)
- [手写 深拷贝](#难点-手写深拷贝)
:::

## 变量类型和计算

### 值类型和引用类型

- 值类型与引用类型区别
   - 堆栈存储区别
   - 栈从上往下排列 
   - 堆从下往上排列

```js
// 值类型 1Symbol 2undefined 3boolean 4string 5number 
// 值存储到 栈
let a = 100
let b = a
a = 200
console.log(b) // 100

// 引用类型 1null 2fn 3arr 4obj
// 地址存储在栈 数据存储在堆
let a = {age:10}
let b = a
b.age = 20
console.log(a.age) // 20
```

### typeof 判断类型 
- 识别所有 值类型
- 识别函数 ‘function’
- 判断 是否 是引用类型 ‘object’
  - null arr obj

### 难点 手写深拷贝
```js
function deepClone(obj = {}) {
  // 1 非对象或数组 特色情况null
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  // 2 初始化返回结果 可能是对象或数组
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    // 3 保证key不是原型的 而是自身的
    if (obj.hasOwnProperty(key)) {
      // 4 递归处理
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
```

### 何时用 === 何时用 ==
- 除了 == null（空值含义） 以外 一律使用 ===
```js
const obj = {x:1}
if(obj.y == null){}
// 等同与
if(obj.y === null || obj.y === undefined){}
```

### 6个flasely变量
```js
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false == false
```

- aa && bb 不断执行true项 直到返回false项
- aa || bb 不断执行false项 直到返回true项

```js
console.log(10 && 0) // 0
console.log('' || 'abc') // 'abc'
```
