---
sidebar_position: 1
---

# 变量

## 变量类型和计算

### 值类型和引用类型

- 值类型与引用类型区别
   - 堆和栈 值类型与引用类型 存储区别

```js
// 值类型 Symbol
let a = 100
let b = a
a = 200
console.log(b) // 100

// 引用类型 null fn
let a = {age:10}
let b = a
b.age = 20
console.log(a.age) // 20
```

### typeof 判断类型
- 识别所有 值类型
- 识别函数 ‘function’
- 判断是否是引用类型 ‘object’

### 手写深拷贝
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
    // 3 保证key不是原型的
    if (Object.hasOwnProperty.call(obj, key)) {
      // 4 递归处理
      result[key] = deepClone(obj[key]);
    }
  }
  return result;
}
```

### 何时用 === 何时用 ==
- 除了 == null 以外 一律使用 ===
```js
const obj = {x:1}
if(obj.y == null){}
// 等同与
if(obj.y === null || obj.y === undefined){}
```

### flasely 变量
```js
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false == false
```
