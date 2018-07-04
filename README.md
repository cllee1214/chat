# 一个聊天app demo（react + react-router + express + socket.io + webapck4.x）


## 途中遇到的相关问题：

 - 1.引入ant之后打包文件体积过大,使用babel-plugin-import

 - 2.关于路由模式：   
    hashrouter 不需要服务器配合  有#号    
    historyrouter 需要服务器配合  file直接不能打开  是否能保存状态待测试

- 3.关于公共模块的提取:   
  现在是webpack4.x  已经废除了commonChunksPlugin,用SplitChunksPlugin