## 目标

1、从零到一搭建React项目工程架构
2、学习React技术栈：React、React-Router、Mobx
3、硬件：win7/win10
4、环境：node.js v12+
5、构建工具：Webpack


## 起步

1、创建项目 npm init


## Webpack

是前端工程的构建工具
是前端资源打包器

重点：入口、出口、loader、plugin

安装：
  cnpm install webpack -D
  cnpm install webpack -g
  cnpm install webpack-cli -D
  cnpm install webpack-cli -g

手动创建 webpack.config.js

编写webpack.config.js配置文件

打包命令：webpack --config webpack.config.js

plugin插件：
  用于打包时的额外功能
  html-webpack-plugin
  clean-webpack-plugin

loaders用于编译打包文件模块，将其转换成浏览器能够识别的代码
  css -> 用到 style-loader  css-loader
  sass -> 用到 style-loader  css-loader  sass-loader  node-sass
  js -> babel-loader  @babel/core

本地服务：
   webpack-dev-server
     open
     contentBase
     hot
  热更新：
    devServer.hot = true
    使用两个webpack的内置插件

生成环境与开发环境的区分：
  cross-env 使用这个包来指定 process.env.NODE_ENV 环境变量

ESLint配置：
  cnpm install eslint eslint-loader -D
  手动创建 .eslintrc.json 配置文件

使用React:
  cnpm install react react-dom -S
  cnpm @babel/preset-react -D
  添加一个配置文件：.babelrc.json

使用较新js语法：
  cnpm install @babel/preset-env


## React

1、jsx理解

  jsx = javascript xml 语法糖
  jsx 变量、对象
  jsx 不是强制的，但jsx让代码更具可读性
  jsx 可以嵌套
  jsx 中可以使用表达式，使用方法用 单大括号进行包裹

2、组件定义

  react中有多少种创建组件的方法？

  ES5组件 React.createElement()
  类组件 class User extends React.Component {}
  无状态组件 function User(props) {}
  高阶组件 function Hoc(Child) { }
  Hocks 组件

3、props

  props是父子之间的通信纽带
  props是只读的

4、state

  当state发生变化时，视图自动变化（单向数据流）
  this.setState({},[callback])异步的

5、事件绑定

  事件中怎么拿到事件对象？（阻止冒泡、阻止默认事件、键盘事件）
  事件处理器中的this指向问题
  如何进行事件传参？
  ```
  {/* 注释：常用下面两种方式进行事件绑定 */}
  <button onClick={this.click1.bind(this, '一')}>点击事件1</button>
  <button onClick={(e)=>this.click2('二', e)}>点击事件2</button>
  {/* 注释：一般不建议这么写 */}
  <button onClick={this.click3}>点击事件3</button>
  ```

## 路由

1、withRouter的使用

  withRouter是一个高阶函数，它的作用是让那些没有被Route包裹的组件拥有this.props.history等API。
  import { withRouter } from 'react-router-dom'
  export default withRouter(组件名)

2、代码分割（组件按需加载）

  cnpm install babel-eslint @babel/plugin-syntax-dynamic-import -D
  cnpm install @loadable/component -S

  eslint-babel，它的作用是把较更高版本的ES6语法转化成eslint可以检测的代码。

  ```
  # .babelrc.json
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
  ```
  ```
  # .eslintrc.json
  "parser": "babel-eslint"
  ```

  使用动态加载：
  ```
  import loadable from '@loadable/component'
  const Home = loadable(()=>import('./home/index.js'))
  ```


## 状态工具：可预测的数据管理

flux

mobx -- 写法非常灵活，非常适合小型项目
  mobx-react

redux -- 写法相对难以理解，中大型项目
  react-redux

vuex

#### mobx的使用

1、安装 mobx 和 mobx-react
```
cnpm install mobx -S
cnpm install mobx-react -S
```

2、安装支持装饰器语法的babel插件并配置文件
```
# .babelrc.json
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]
```

3、创建 store根实例
```
# /store/index.js
class Store {
  constructor() {
    this.TodoStroe = new TodoStroe()
  }
}
export default new Store()
```
4、创建 子store
```
import { observable, action, computed } from 'mobx'
class TodoStroe {
  @observable count = 0
  @observable list = []
  @action addCount() {
    this.count++
  }
  @action changeList(payload) {
    this.list.push(payload)
  }
  @computed get count2() {
    return this.count*100
  }
}
```
5、使用 store
```
# App.js
import store from '@/store'
import { Provider } from 'mobx-react'

<Provider store={store}></Provider>
```
```
# Home.js
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {
  # 在 this.props.store.TodoStroe 中即可使用状态数据和方法
}
````
