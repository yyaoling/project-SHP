import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api"
const state={
    categoryList:[],
    bannerList:[],
    floorList:[],
}
const mutations={
    CATEFORYLIST(state,categoryList){
        state.categoryList=categoryList
        //console.log(categoryList)
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
const actions={
    async categoryList(){
        let result = await reqCategoryList();
        //console.log(result)
        if(result.code==200){
            //console.log(this)
            this.commit("CATEFORYLIST",result.data)
        }
    },
    //获取首页的轮播图
    async getBannerList(){
        let result= await reqGetBannerList()
        if(result.code==200){
            this.commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList(){
        let result = await reqFloorList()
        if(result.code==200){
            this.commit('GETFLOORLIST',result.data)
        }
    }
}
const getters={}

export default{
    state,
    mutations,
    actions,
    getters,
}