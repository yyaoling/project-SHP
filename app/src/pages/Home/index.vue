<!--  -->
<template>
    <div>
        <!-- 三级联动全局组件:三级联动已经是全局组件，因此不需要引入，可以直接使用 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor">
        </Floor>

        <Brand></Brand>

    </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import { mapState } from 'vuex'
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'Home',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
    mounted() {
        this.$store.dispatch("getFloorList")
    },
    computed:{
        ...mapState({
            floorList:state=>state.home.floorList
        })
    }
}
</script>
<style lang='less' scoped>
</style>