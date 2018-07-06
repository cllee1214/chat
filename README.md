# 一个聊天app demo（react + react-router + express + socket.io + webapck4.x）


## 途中遇到的相关问题：

 - 1.引入ant之后打包文件体积过大,使用babel-plugin-import

 - 2.关于路由模式：   
    hashrouter 不需要服务器配合  有#号    
    historyrouter 需要服务器配合  file直接不能打开  是否能保存状态待测试

- 3.关于公共模块的提取:   
  现在是webpack4.x  已经废除了commonChunksPlugin,用SplitChunksPlugin。
  [SplitChunksPlugin官方文档](https://webpack.js.org/plugins/split-chunks-plugin/#src/components/Sidebar/Sidebar.jsx)在这里

  - ### 默认设置

    包满足在下面的任一两个条件，webpack会自动的 splits chunks：
    -  被分享的或者是是来自于node_modules的
    -  压缩前体积大于30kb
    -  按需加载次数小于等于5
    -  初始化请求次数小于等于3




  

