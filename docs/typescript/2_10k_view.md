---
sidebar_position: 2
---

# TS A 10k Foot View
> TypeScript Compiler(TSC)

## The compiler
:::info 一般编译步骤
1. Program is parsed into an AST(abstract syntax tree)
2. AST is compiled to bytecode
3. Bytecode is evaluated by the runtime
:::

:::note Typechecker
a special program that verifies that the code is typesafe
:::

:::tip TS编译运行流程 
| TSC                              | JS runtime                          |
| -------------------------------- | ----------------------------------- |
| 1. TS source to TS AST           | 4. JS source to JS AST              |
| 2. AST is checked by typechecker | 5. AST to bytecode                  |
| 3. TS AST to JS source           | 6. Bytecode is evaluated by runtime |
:::

## The type system
:::note Type system
a set of rules that a typechecker uses to assign types to the program
:::

```ts title='explict'
let a: number = 1
let b: string = 'hello'
let c: boolean[] = [true, false]
```

```ts title='infer'
let a = 1
let b = 'hello'
let c = [true, false]
```

:::info
In general, it is good style to let TS infer as many types as it can, keeping explicitly typed code to a minimum
:::

### TS vs JS
| Type system feature                 | JS             | TS                  |
| ----------------------------------- | -------------- | ------------------- |
| 1 how are types bound               | dynamically    | statically          |
| 2 are types automatically converted | yes            | no mostly           |
| 3 when are types checked            | runtime        | compile time        |
| 4 when are errors surfaced          | runtime mostly | compile time mostly |

#### how are types bound
- Dynamic type binding means that JS needs to actually run program to know the types
- TS is a gradually typed lang and knows the type at compile time

#### are types automatically converted
- JS is weakly typed, and tries to be helpful by doing *clever* type conversions
- TS complains as soon as the code is invalid and gives error
- If you must convert types, do it explicitly

#### when are types checked
- TS typechecks the code at compile time, show error before runing the code

#### when are errors surfaced
- TS throws both syntax-related errors and type-related errors at compile time

## Code editor setup
- edior VSCode
- env NodeJS

```bash
# Create a new folder
mkdir chapter-2
cd chapter-2

# Initialize a new NPM project
npm init

# Install TSC TSlint and type declarations for NodeJS
npm install --save-dev typescript tslint @types/node
```

### tsconfig.json
```bash
# manually
touch tsconfig.json

# TSC initializes a TypeScript project and creates a tsconfig.json file
tsc --init
./node_modules/.bin/tsc --init
```

```json title='tsconfig.json'
{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015",
  },
  "include": [
    "src"
  ]
}
```

| Option  | Description                                           |
| ------- | ----------------------------------------------------- |
| include | which folder shoud TSC look for .ts files             |
| lib     | which APIs shoud TSC assume exist in the running env  |
| module  | which JS module system should TSC compile the code to |
| outDir  | which folder should TSC put the generated JS code in  |
| strict  | enforces all of the code is properly typed            |
| target  | which JS version should TSC compile the code to       |

### tslint.json
:::info
TSlint is strongly recommend for all TS projects to enforce a consistent coding style
:::

```bash
# generate a tslint.json file with a default TSlint setting
tslint --init
./node_modules/.bin/tslint --init
```

```json title='tslint.json'
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": false,
    "trailing-comma": false
  }
}
```

## index.ts
```bash
mkdir src
touch src/index.ts
```

```js title='folder structure'
chapter-2/
  ├──node_modules/
  ├──src/
  │ └──index.ts
  ├──package.json
  ├──tsconfig.json
  └──tslint.json
```

```ts title='index.ts'
console.log('Hello TypeScript!')
```

```bash
# Compile TypeScript with TSC
./node_modules/.bin/tsc

# Run your code with NodeJS
node ./dist/index.js
```

:::tip tools
- install `ts-node`, compile and run ts with a single command
- use `typescript-node-starter` to gbenerate folder structure
:::
