# react-starter

PC 端 react+redux 的脚手架，持续进行更新迭代。


## 特点

1. 当中集成了当前react生态的几个主流技术栈：
  - react 16.12.0
  - ant design 3.26.2
  - react-router 5.1.2
  - redux 4.0.4
  - redux-thunk 2.2.0
  - webpack 4.41.2

2. 符合目前前后端分离项目的开发、部署、测试、上线各环节及操作的要求。
3. 优化了传统redux-thunk中action、reducer书写上的不便。
4. 根据路由地址，懒加载所需模块，就是说目前脚手架中提供的示例代码无需删除，只需要确保路由无效即可
5. 增加错误边界，捕捉嵌套组件在生命过程中发生的错误
6. 封装 axios（`src/common/request.js`），对失败的请求进行了统一处理，使用方法：

```
import { get, post, put, del } from 'common/request';
post(URL, params).then(res => {});

// 如果需要自行处理请求失败的情况，也可以直接引入 axios 实例
import axios from 'common/request';
axios.post(URL, params)
  .then(res => {})
  .catch(error => {})
```

## 文件目录

> 注意：带 ✎ 号的表示示例配置，可以根据自己的项目配置自行替换；带 +/- 号的表示示例组件，可保留修改或删除

```
├─asset                     // ========================= 静态资源目录
│  ├─css
|  |  ├─app.less            // ========================= 样式文件入口
|  |  ├─base.less           // ========================= 基础样式
|  |  ├─icon.less           // ========================= iconfont 样式（✎）
|  |  ├─reset.less          // ========================= 样式重置文件
|  |  ├─variables.less      // ========================= 变量文件（✎）
|  |  └─vendor_antd.less    // ========================= 专门用于覆盖 antd 样式（✎）
│  ├─font                   // ========================= iconfont文件，在icon.less文件中引用
|  |  ├─iconfont.eot（+/-）
|  |  ├─iconfont.svg（+/-）
|  |  ├─iconfont.ttf（+/-）
|  |  └─iconfont.woff（+/-）
│  └─img                    // ========================= 图片资源存放目录
│
├─build                     //  ========================= webpack 相关配置目录
│   ├─postcss.config.js     //  ========================= postcss 相关配置
│   ├─publicPath.js         //  ========================= 发布路径（✎）
│   ├─theme.js              //  ========================= antd 主题配置（✎）
│   ├─webpack.base.conf.js  //  ========================= webpack 公用项配置
│   ├─webpack.dev.conf.js   //  ========================= webpack 开发/联调环境项配置
│   └─webpack.prod.conf.js  //  ========================= webpack 生产/测试环境项配置
│
├─mock                      //  ========================= mock 文件目录
│  ├─config
│  ├─data
│  └─template
│
├─src                       //  ========================= js 源码目录
│   ├─common                //  ========================= 公共模块目录
│   │  └─request.js         //  ========================= 对axios进行封装
│   │ 
│   ├─components            //  ========================= 纯组件目录
│   │  ├─Layout             //  ========================= 布局相关组件目录
│   │  │  ├─Footer.jsx（+/-）
│   │  │  ├─Header.jsx（+/-）
│   │  │  └─Sider.jsx（+/-）
│   │  ├─Pages（+/-）        //  ========================= 分页组件
│   │  ├─ErrorBoundary.jsx  //  ========================= 错误边界组件
│   │  └─index.js（+/-）
│   │ 
│   ├─constants
│   │  ├─constant.js        //  ========================= 常量集中管理目录（✎）
│   │  └─url.js             //  ========================= url集中管理目录（✎）
│   │ 
│   ├─redux                 //  ========================= redux 处理目录
│   │  ├─skuunit（+/-）
│   │  ├─configureStore.js  //  ========================= store/中间件配置
│   │  └─reducers.js        //  ========================= 所有reducer入口（✎）
│   │ 
│   ├─routers               //  ========================= 按路由划分的业务模块目录
│   │  ├─Skuunit（+/-）
│   │  ├─index.jsx（✎）
│   │  └─PrimaryLayout.jsx（+/-）
│   │ 
│   └─app.jsx               //  ========================= 项目入口
│
├─.babelrc                  //  ========================= babel配置文件
├─.eslintignore
├─.eslintrc.js              //  ========================= eslint规则文件
├─.gitignore
├─index.html
├─package-lock.json
├─package.json
├─README.md（✎）
├─template.html（✎）         //  ========================= html嵌入模板
└─webpack.config.js         //  ========================= webpack配置入口

```

## Changelog

- 2019.07.15
  - [x] src目录支持使用less
  - [x] 兼容IE11

- 2019.06.11
  - [x] 更改UI

- 2019.06.03
  - [x] 升级babel 7
  - [x] 更新示例组件
  - [x] 修复eslint报错
  - [x] 完善README.md

- 2019.05.22
  - [x] 完成基础版本，给出规范目录结构，满足打包构建路由懒加载数据管理错误处理一条龙服务。


## babel7依赖说明

基础依赖：

- @babel/cli: 为babel的脚手架工具
- @babel/core: babel-core是作为babel的核心存在，babel的核心api都在这个模块里面，比如：transform，用于字符串转码得到AST
- @babel/plugin-proposal-class-properties: 解析class类的属性
- @babel/plugin-proposal-decorators: 解析装饰器模式语法，如使用react-redux的@connect
- @babel/plugin-proposal-export-default-from: 解析export xxx from 'xxx'语法
- @babel/plugin-transform-runtime: 防止转换后的代码重复
- @babel/preset-env : 官方解释“用于编写下一代JavaScript的编译器”，编译成浏览器认识的JavaScript标准
- @babel/preset-react: 用于编译react的jsx，开发react应用必备
- babel-loader: 就是用于编译JavaScript代码
- babel-plugin-import: 用于进行按需加载

代码优化相关依赖：

- [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports)：去除未使用的模块
- [babel-plugin-transform-react-remove-prop-types](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types): 生产环境下移除不必要的 React propTypes，以减少代码体积


## 参考文章

- 2019.06.03
  - [Webpack4+Babel7优化70%速度](https://juejin.im/post/5c763885e51d457380771ab0#heading-11)
  - [一口(很长的)气了解 babel](https://juejin.im/post/5c19c5e0e51d4502a232c1c6#heading-0)
- 2019.05.22
  - [Web Performance Optimization with webpack](https://developers.google.com/web/fundamentals/performance/webpack/)
  - [Webpack 4 配置最佳实践](https://juejin.im/post/5b304f1f51882574c72f19b0#heading-1)
  - [Webpack 4 默认分包策略](https://panjiachen.github.io/awesome-bookmarks/blog/webpack/webpack4-b.html)
  - [webpack-libs-optimizations](https://github.com/GoogleChromeLabs/webpack-libs-optimizations)


朋友们如果有一些对本项目得建议，或者想法欢迎去 github 提 issues，我将持续改进优化该项目
