//对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//start 进度条开始  done 进度条结束
//引入进度条样式
import "nprogress/nprogress.css"
//1.利用axios对象的方法，去创建一个axios实例
//2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象,发请求的时候会在Ip地址后面加上/api
    baseURL:'/mock',
    //代表请求超时的时间
    timeout:5000,
})

//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情，

requests.interceptors.request.use((config)=>{
    //进度条开始工作
    nprogress.start()
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到
    // 进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'));
});
export default requests;