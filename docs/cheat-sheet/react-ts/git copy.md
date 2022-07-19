---
sidebar_position: 1
---

# Basic
[github](https://github.com/typescript-cheatsheets/react)
[Website](https://react-typescript-cheatsheet.netlify.app/)

---

## Start
### typing component props
#### basic props types
```js
type AppProps = {
  message: string;
  count: number;
  disabled: boolean;
  /** an optional prop (VERY COMMON!) */
  optional?: OptionalType;
  /** string literals to specify exact string values, with a union type */
  status: "waiting" | "success";  

  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string;
    title: string;
  };
  /** array of string type! */
  names: string[];
  /** array of objects! (common) */
  objArr: {
    id: string;
    title: string;
  }[];

  /** a dict object with any number of properties of the same type */
  dict1: {[key: string]: MyTypeHere;};
  dict2: Record<string, MyTypeHere>; // equivalent to dict1
  
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void;
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void;
  /** function type syntax that takes an event (VERY COMMON) */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};
```

##### React components as props
```js
export declare interface AppProps {
  // best, accepts everything React can render
  children?: React.ReactNode; 
  childrenElement: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props

  // form events! the generic parameter is the type of event.target
  onChange?: React.FormEventHandler<HTMLInputElement>; 
  // to impersonate all the props of a button element and explicitly not forwarding its ref
  props: Props & React.ComponentPropsWithoutRef<"button">; 
  // to impersonate all the props of MyButtonForwardedRef and explicitly forwarding its ref
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; 
}
```

##### type vs interface
Use Interface until You Need Type

| Aspect                                          | Type  | Interface |
| ----------------------------------------------- | :---: | :-------: |
| Interfaces can extend it                        |   ⚠️   |     ✅     |
| Classes can extend it                           |   🚫   |     ✅     |
| Classes can implement it (`implements`)         |   ⚠️   |     ✅     |
| Can intersect another one of its kind           |   ✅   |     ⚠️     |
| Can create a union with another one of its kind |   ✅   |     🚫     |
| Can be used to create mapped types              |   ✅   |     🚫     |
| Expands in error messages and logs              |   ✅   |     🚫     |
| Can be augmented                                |   🚫   |     ✅     |
| Can be recursive                                |   ⚠️   |     ✅     |







