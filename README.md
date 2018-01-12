# react_home
这是一个react的脚手架项目，其中包含着当前最新得脚手架配置方式，技术技术栈包括react16+redux+antd+react-router4++webpack3+sass/less+axios+immutable+proxy，

# 更新日志  
1. 更新了router4的嵌套路由写法，实现公共头部
2. 实现了reoter4的使用函数跳转的方式，可以跳转传值

# 功能与特色
1. 项目集成了antd，已配置好
2. 项目集成了sass和less这2种样式开发
3. immutable我觉得是如今和reducers配合最好得数据处理库
4. 本项目使用得axios来作为ajax，有简单得库在utils中的fetchData
5. 本项目引入了[autils](https://github.com/zhangkun-Jser/autils)，一个很小巧的函数工具库，在开发过程中，里面得很多功能都能用到
6. 项目没有containers功能块，大家可以看下，我已将这块得代码写入component中，这是因为，在实际得开发过程中，会发现重复写containers非常烦躁，所以我就将他整合进component中，减少不必要得代码量，提高效率与代码清晰度
7. 项目具备了本地开发和打包上线得2个不同状态得场景，在开发状态，本地服务已配置了http-proxy，方便用户跨域调用后端开发得接口，并且本地调试阶段用得是根目录下得index.html，打包上线得时候部署到服务器得是加过hash的index.html，避免了网页的缓存问题


# 注意
  如果在build或者start的时候出现node-sass之类的报错，可以使用 npm rebuild node-sass来处理下，再build或start，有不了解的同学可以issues告诉我。

# 使用方法：
    安装模块：npm install  
    
    开发模式：npm start  

    打包：npm run build
    
    访问地址：http://localhost:3012
    
# 打包上线
* 将webpack.config.js中的publicPath的 http://111.111.11.11/build/ 改成你线上的地址，比如 http://129.0.0.111 之类，然后再执行npm run build
* 打包后直接将build文件夹提交至你们项目得根目录中
* 务必通知你们得后端人员，将404指向build/index.html，这样基本就可以愉快得查看了
* 如果在上线后首屏调用速度较慢，可以让后端人员开启服务器得gzip压缩功能将js压缩一下，压缩后大小基本只有原来得三分之一，这个很实用

# 希望
* 本项目是根据react社区一些朋友分享得脚手架综合，并且实际项目运用后所得出得经验
* 朋友们如果有一些对本项目得建议，或者想法欢迎提issues，我将持续改进
