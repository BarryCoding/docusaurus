---
sidebar_position: 1
---

# Introduction

Type safety
- Using types to prevent programs from doing invalid things

```js title='invalid code in Javascript'
3 + []          // '3'

let obj = {}
obj.foo         // undefined

function a(b) {
  return b/2
}
a('z')          // NaN
```