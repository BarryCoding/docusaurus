---
sidebar_position: 2
---

# 生态

## vuex
![vuex](/img/vue/vuex.png)

- 项目设计 跳转 待处理

- state
- getters
- action
- mutation
- 组件中使用
  - dispatch
  - commit
  - mapState
  - mapGetters
  - mapActions
  - mapMutations

## vue-router {#router}
- to / push
- 路由模式 mode
  1. hash 模式（默认） http://localhost:3000/#/user  
  2. history 模式  http://localhost:3000/user 需server端支持
- 路由配置 
  1. 动态路由 path配置 `:id` 获取参数`$route.params.id`
  2. 懒加载 component配置 `()=> import('./CustomCompoent')`

