---
sidebar_position: 3
---

# All About Types
> 28 

:::note type
a set of values and the things you can do with them
![type hierarchy](/img/typescript/3_type_hierarchy.png)
:::


## Talking about types

:::info
```ts
function squareOf(n: number) {
  return n * n
}
squareOf(2)     // 4
squareOf('z')   // error
```
- squreOf's parameter n is constrained to number
- the type of the value 2 is assignable to number
:::

## The ABCs of types

### any
- it's the Godfather of types
- it's a last resort type, and I should avoid it when possible
- it totally prevents the typechecker

:::tip TSC flag: 
- "noImplicitAny": true
- By **default**, TS is permissive and won't complain about value that it infers as any
- To get TS to complain about **implicit anys**, enable the **noImplicitAny** falg in *tsconfig.json*
- It is part of the strict family
:::

### unknown
- it's the undercover FBI
- compatable with `== === || && ? !` `typeof` `instanceof`

:::info example
```ts
let a: unknown = 30   
let b = a === 123     
let c = a + 30        // Error
if(typeof a === 'number') {
  let d = a + 10      // 40
} 
```
- TS will never infer a varible as unknown
- type unknown values can be compared to values
- it can't be use as a specific type, unless it is proved to be the type first
:::

### boolean
- compare with `== === || && ? !`

:::info example
```ts
let a = true            // boolean
let b = false           // boolean
const c = true          // true
let d: boolean = true   // boolean
let e: true = true      // true   a type literal
let f: true = false     // Error
```
- implicit 
  - infer a boolean
  - infer a specific boolean with const
- explicit 
  - declare a boolean
  - declare a specific boolean as type literal
:::

:::note type literal
a type that represents a single value and nothing else
:::

### number
- integers floats positives negatives Infinity NaN ...

:::info example
```ts
let a = 1234              // number
var b = Infinity * 0.10   // number
const c = 5678            // 5678
let e: number = 100       // number
let f: 3.14 = 3.14        // 3.14
let g: 3.14 = 10          // Error
```
- implicit
  - infer a number
  - infer a specific number with const
- explicit
  - declare a number
  - declare a specific number as type literal
:::

:::tip _
> when working with long numbers, use **numeric separators** to make them easier to read
```ts
let oneMillion = 1_000_000
let twoMillion: 2_000_000 = 2_000_000
```
:::

### bitint
- newcomer to JS and TS
- work with large integers without errors
- number type is up to 2^53, bigint is bigger

:::info example
```ts
let a = 1234n           // bigint
const b = 5678n         // 5678n
var c = a + b           // bigint
let e = 88.5n           // Error float is not integer
let f: bigint = 100n    // bigint
let g: 100n = 100n      // 100n
let h: bigint = 100     // Error 100 is not bigint
```
- 4 ways to decalre
:::

:::caution
bigint is not yet natively supported by every JS engine
:::

### string
:::info example
```ts
let a = 'hello'         // string
var b = 'billy'         // string
const c = '!'           // !
let d = a + ' '         // string
let e: string = 'zoom'  // string
let f: 'john' = 'john'  // john
```
- 4 ways to decalre
:::

### symbol
- used as an alternative to string keys in objects and maps

```ts
let a = Symbol('a')           // symbol
let b: symbol = Symbol('b')   // symbol
let d = a + 'x'               // Error cant +
```

```ts
const e = Symbol('e')
const f: unque symbol = Symbol('f')
let g: unque symbol = Symbol('f')     // Error must be const
```

- pass through

### Objects
- object types specify the **shapes** of objects
:::note structural typing
a style of programming where you just care that an object has certain properties, and not what its name is.
:::

```ts
// object literal 
let a = {b: 'x'}    // {b: string}  TS infer object's shape

let c: {b: number} = {b: 1}   // {b: number}  explict

const d: {b: number} = {b: 1}   // {b: number}  same
```

- might be object literal or a class
```ts
let c: {firstName: string} = {firstName: 'john'}

class Person{
  constructor(public firstName: string){}
}

c = new Person('xMan')    // same object shape

c = {}                    // Error missing firstName
c = {firstName: 'yMan', age: 10}  // Error extra age
```

```ts
let a: {
  b: number               
  c?: string              // optional 
  [key:number]: boolean 
}

a = {b: 1}
a = {b: 1, c: undefined}
a = {b: 1, c: 'd'}
a = {b: 1, 1: true}
a = {b: 1, 1: true, 2: false}
a = {1: true}                 // Error b is missing
a = {b: 1, 3: 'red'}          // Error 'red' is not boolean
```

:::note Index Signature
- `[key: T]: U` syntax is called an index signature
  - all keys of type T must have value of type U
  - T must be either number or string
  - key's name dosen't have to be key

```ts
let airplaneSeatingAssignments: {
  [setNumber: string]: string
} = {
  '34D': 'bill',
  '34E': 'gates'
}
```
:::

```ts
let user: {
  readonly firstName: string
} = {
  firstName: 'abby'
}

user.firstName = 'ebby'   // Error readonly property
```

```ts
let avoid: {}
avoid = {}
avoid = {x: 1}
avoid = []
avoid = 1
```

### Intermission
#### Type aliases
```ts
type Age = number
type Person = {age: Age}
```

- never inferred
```ts
let age: Age = 18
```

```ts
type Color = 'red'
type Color = 'blue'   // Error
```

```ts
type Color = 'red'
let x = Math.random() < .5
if(x){
  type Color = 'blue' // Shadows the Color delcared above
  let b: Color = 'blue'
}else {
  let c: Color = 'red'
}
```

#### Union and intersection types
```ts
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

fucntion trueOrNull(isTrue: boolean) {
  if(isTrue) {
    return 'true'
  }
  return null
}
type Returns = 'true' | null
```

### Array
```ts
let a = [1,2,3]           // number[]
var b = ['a','b']         // string[]
let c: string[] = ['a']   // string[]
let d = [1,'a']           // (string | number)[]
const e = [2,'b']         // (string | number)[]

let f = ['red']           // string[]
f.push('blue')            // string[]
f.push(true)              // Error boolean

let g = []                // any[]
g.push(1)                 // number[]
g.push('red')             // (string | number)[]

let h: number[] = []      // number[]
h.push(1)                 // number[]
h.push('a')               // Error string
```

:::note syntax
- `T[]`
- `Array<T>`
:::

#### Tuples
- subtypes of array
  - fixed lengths
  - each element has specific type

```ts
let a: [number] = [1]

let b: [string, string, number] = ['Springer','Barry',1988]
b = ['a','b','c', 1999]   // Error

// support optional elements
let trainFare: [number, number?][] = [
  [1.33],
  [8.01,7.89]
]

// support rest elements
let friends: [string, ...string[]] = ['a','b','c']
let list: [number, boolean, ...string[]] = [1,true,'a','b']
```

#### Read-only arrays and tuples
```ts
let as: readonly number[] = [1,2,3]
```

### null undefined void never
```ts
// fn returns a number or null
function a(x: number){
  if (x<10) {
    return x
  }
  return null
}

// fn returns undefined
function b(){
  return undefined
}

// fn returns void
function c(){
  let a = 1 + 1
}

// fn returns never
function d(){
  throw TypeError('error')
}

// fn returns never
function e(){
  while (true) {
    doSomething()
  }
}
```

| Type      | Meaning                                         |
| --------- | ----------------------------------------------- |
| null      | absent of a value                               |
| undefined | variable that has not been assigned a value yet |
| void      | function that doesn't have a return statement   |
| never     | function that never returns                     |

### Enums
```ts
enum Language {
  English,
  Spanish,
  Russian
}
```

:::info
By convention, enum names are uppercase and singular and its keys are also uppercase
:::

```ts
enum Language {
  English = 0,
  Spanish = 1,
  Russian = 2
}
let firstLan = Language.Russian
let seconLan = Language['English']
```

```ts title='auto merge'
enum Language {
  English = 0,
  Spanish = 1
}
enum Language {
  Russian = 2
}
```

```ts title='safe'
const enum Language {
  English = 0,
  Spanish = 1,
  Russian = 2
}
```

:::caution
- stay away from enum, there are plenty of better ways to express
- careful about numeric values and non const enums
:::
## Summary
|Type|Subtype|
|---|---|
|boolean|literal|
|bigint|literal|
|number|literal|
|string|literal|
|symbol|unique symbol|
|object|literal|
|array|tuple|
|enum|const enum|

## Exercises