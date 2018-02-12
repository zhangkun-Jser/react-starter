<div  align="center">   
  <img  width = "200" height = "200" src="./src/images/logo.svg" align=center />
</div>

# react-kit

这是一个 react 的脚手架项目，其中包含着当前最新得脚手架配置方式，技术栈包括 react16+redux+antd+react-router4++webpack3+sass/less+axios+immutable+proxy，

# 更新日志

1. 添加了Code Splitting,实现router4路由按需加载

# 功能与特色

1. 项目集成了 antd，已配置好
2. 项目集成了 sass 和 less 这 2 种样式开发
3. immutable 我觉得是如今和 reducers 配合最好得数据处理库
4. 本项目使用得 axios 来作为 ajax，有简单得库在 utils 中的 fetchData
5. 本项目引入了[autils](https://github.com/zhangkun-Jser/autils)，一个很小巧的函数工具库，在开发过程中，里面得很多功能都能用到
6. 项目没有 containers 功能块，大家可以看下，我已将这块得代码写入 component 中，这是因为，在实际得开发过程中，会发现重复写 containers 非常冗余，所以我就将他整合进 component 中，减少不必要得代码量，提高效率与代码清晰度
7. 项目具备了本地开发和打包上线得 2 个不同状态得场景，在开发状态，本地服务已配置了 http-proxy，方便用户跨域调用后端开发得接口，并且本地调试阶段用得是根目录下得 index.html，打包上线得时候部署到服务器得是加过 hash 的 index.html，避免了网页的缓存问题

# 注意

如果在 build 或者 start 的时候出现 node-sass 之类的报错，可以使用 npm rebuild node-sass 来处理下，再 build 或 start，有不了解的同学可以 issues 告诉我。

# 使用方法：

    安装模块：npm install  

    开发模式：npm start  

    打包：npm run build

# 打包上线

* 执行 npm run build,然后将 build 里的文件提交至你们项目的根目录中
* 务必通知你们得后端人员，将 404 指向根目录中的 index.html，这样就可以愉快得查看了
* 如果在上线后首屏调用速度较慢，可以让后端人员开启服务器得 gzip 压缩功能将 js 压缩一下，压缩后大小基本只有原来得三分之一，这个很实用

# 希望

* 本项目是根据 react 社区一些朋友分享得脚手架综合，并且实际项目运用后所得出得经验
* 朋友们如果有一些对本项目得建议，或者想法欢迎去 github 提 issues，我将持续改进优化该项目
