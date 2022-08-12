<template>
    <main>
        <!-- router-view放置跳转以后渲染的内容 -->
        <router-view></router-view>
        <div class="foot">
            <van-tabbar v-model="active" active-color="red" router="true" >
            <van-tabbar-item to="/index">
                <span>首页</span>
                <template #icon="index">
                <img :src="index.active ? icon.inactive : icon.active" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/part">
                <span>分类</span>
                <template #icon="part">
                <img :src="part.active ? icon.party : icon.partx" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/car">
                <span>购物车</span>
                <template #icon="car">
                <img :src="car.active ? icon.cary : icon.carx" />
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/my">
                <span>我的</span>
                <template #icon="my">
                <img :src="my.active ? icon.myy : icon.myx" />
                </template>
            </van-tabbar-item>
            </van-tabbar>
        </div>
    </main>
</template>

<script>
        export default {
            data() {
            return {
            active: 0,
            icon: {
                active: 'images/box_01.png',
                inactive: 'images/box_06.png',
                partx:'images/box_03.png',
                party:'images/box_08.png',
                carx:'images/box_04.png',
                cary:'images/box_09.png',
                myx:'images/box_05.png',
                myy:'images/box_10.png',
            },
            }
        },
        watch:{
            active(){
                localStorage.setItem('aa',this.active)
            }
        }, 
            created(){
                    this.active=parseInt(localStorage.getItem('aa'))||0
            }
        };
</script>
<!-- 清样式 -->
<style>
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
</style>
<!-- 私有css样式 -->
<style scoped>
    .foot{
        position: fixed;
        bottom:0px;
        left: 0px;
        width: 100%;
        display: flex;
        height: 50px;
        background-color: white;
        z-index: 999;
    }
</style>
