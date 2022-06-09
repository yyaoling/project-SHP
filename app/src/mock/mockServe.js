import Mock from 'mockjs'
//webpack默认对外暴露的：图片、JSON数据
import banners from './banners.json'
import floors from './floors.json'

//mock数据：第一个参数请求地址 第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banners})
Mock.mock("/mock/floor",{code:200,data:floors})