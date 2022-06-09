
$router:进行编程式导航的路由跳转
this.$router.push|this.$router.replace
$route:可以获取路由的信息|参数
this.$route.path
this.$route.params|query
this.$route.meta


1)编程式导航路由跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误?
注意:编程式导航（push|replace）才会有这种情况的异常，声明式导航是没有这种问题，因为声明式导航内部已经解决这种问题。
这种异常，对于程序没有任何影响的。
为什么会出现这种现象:
由于vue-router最新版本3.5.2，引入了promise，当传递参数多次且重复，会抛出异常，因此出现上面现象,
第一种解决方案：是给push函数，传入相应的成功的回调与失败的回调
第一种解决方案可以暂时解决当前问题，但是以后再用push|replace还是会出现类似现象，因此我们需要从‘根’治病；



2)将Home组件的静态组件拆分
2.1静态页面（样式）
2.2拆分静态组件
2.3发请求获取服务器数据进行展示
2.4开发动态业务
拆分组件：结构+样式+图片资源
一共要拆分为七个组件








3)axios二次封装
AJAX:客户端可以'敲敲的'向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。
XMLHttpRequest、$、fetch、axios
跨域:如果多次请求协议、域名、端口号有不同的地方，称之为跨域
JSONP、CROS、代理
2.1:工作的时候src目录下的API文件夹，一般关于axios二次封装的文件
2.2进度条：nprogress模块实现进度条功能
工作的时候，修改进度条的颜色，修改源码样式.bar类名的



4:接口统一管理
项目很小：可以在组件的生命周期函数中发送请求
项目很大：axios.get("xxx")


5.跨域问题
在vue.config.js中添加
devServer: {
        proxy: {
          '/api': {
            target: 'http://gmall-h5-api.atguigu.cn',
            changeOrigin: true,
            // pathRewrite: {'^/api' : ''}
          }
        }
      }

6.nprogress进度条的使用

7.vuex状态管理库
7.1 vuex是什么？
vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件共用的数据。
切记，并不是全部项目都需要vuex，如果项目很小，完全不需要。     
7.2 vuex的基本使用

7.3 vuex的模块化开发


8.完成一级分类动态添加背景颜色
第一种：采用样式添加，即修改对应的style
第二种：通过js完成

















