<template>
    <main>
        <div class="bg">
            <header>
                <div @click="onClickLeft()" class="head">
                    <span class="return"></span>
                    <div class="head_txt">
                        <span>分类</span>
                    </div>
                </div>
            </header>
            <router-link to="">
                <div class="search">
                    <a href="" class="input">
                        <span class="icon">
                            <img src="images/icon_ash.png" alt="">
                        </span>
                        <a class="input_txt">请输入商品名称</a>
                    </a>
                </div>
            </router-link>
            <div class="main">
                <div class="main_list">
                    <van-sidebar v-model="activeKey">
                        <van-sidebar-item title="笔记本" />
                        <van-sidebar-item title="主板" />
                        <van-sidebar-item title="显卡" />
                        <van-sidebar-item title="DIY电脑组件" />
                        <van-sidebar-item title="显示器" />
                        <van-sidebar-item title="套装组合" />
                        <van-sidebar-item title="键鼠/外设" />
                        <van-sidebar-item title="台式机" />
                    </van-sidebar>
                </div>
                <div class="info">
                    <div class="info_top">
                        <a href=""><img src="images/fenlei_01.jpg" alt=""></a>
                    </div>
                    <div class="info_main">
                        <div class="info_title">
                            <span>笔记本</span>
                        </div>
                        <div class="info_imgs">
                            <van-grid :column-num="3">
                                <van-grid-item v-for="(nb,index) in nb" :key="index" :icon="nb.src" :text="nb.txt" />
                            </van-grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
            activeKey: 0,
            nb:[
                {
                    src:'images/nb_01.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_02.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_03.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_04.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_05.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_06.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_07.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_08.png',
                    txt:'幻影系列',
                },
                {
                    src:'images/nb_09.png',
                    txt:'幻影系列',
                },    
                {
                    src:'images/nb_03.png',
                    txt:'幻影系列',
                },    
                {
                    src:'images/nb_06.png',
                    txt:'幻影系列',
                },                                                
            ]
            };
        },
        methods: {
            onClickLeft() {
            this.$router.go(-1);
            }
        }
    }
</script>

<style>
    .main_list .van-sidebar {
        width: 100%;
        overflow-y: auto;
    }
    .main_list .van-sidebar-item {
        padding: 15px 8px;
    }
    .info_imgs .van-grid-item__content{
        padding: 0;
    }
    .info_imgs .van-icon__image{
        width: 2.2em;
        height: auto;
    }
</style>
<!-- 私有css样式 -->
<style scoped>
    .bg{
        width: 100%;
        height: 100vh;
        z-index: -99;
        background-color: #f8f8f8;
    }
    /* 头部 */
    .head{
        background-color: white;
        padding: 7px 3px;
        display: flex;
    }
    .return{
        position: fixed;
        left: 20px;
        margin-top: 7.5px;
        width: 12px;
        height: 12px;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg);
        z-index: 9999;
    }
    .head_txt{
        display: inline-block;
        margin: 0 auto;
        min-width: 0;
    }
    .head_txt>span{
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /* 搜索框 */
    .search{
        width: 90%;
        line-height: 38px;
        border-radius: 31px;
        border: 1px solid #d8d8d8;
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0 10px;
        align-items: center;
    }
    .input{
        /* display: block; */
        width: 100%;
        display: flex;
        border-radius: 31px;
        background: hsla(0,0%,95.3%,.18);
        align-items: center;
        height: 40px;
    }
    .icon{
        width: 16px;
        height: 16px;
        /* margin-left: 10px; */
    }
    .icon img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .input_txt{
        margin-left: 5px;
        font-size: 14px;
        color: #8b8b8b;
    }
    /* 左侧列表 */
    .main{
        width: 100%;
        /* height: 100%; */
        margin: 0 auto;
        padding-top: 15px;
        display: flex;
        /* background-color: #f8f8f8; */
    }
    .main_list{
        width: 26%;
        font-size: 14px;
        color: #666;
        font-weight: 400;
        /* height: 600px; */
        overflow: hidden;
        overflow-y: scroll;
    }
    .list li{
        padding: 13px 0;
        position: relative;
        display: flex;
        align-items: center;
    }
    .list a{
        display: inline-block;
        width: 3px;
        height: 15px;
        background-color: #ed1c24;
        display: none;
    }
    .list span{
        display: inline-block;
        margin-left: 10px;
        color: #666666;
        font-weight: 500;
        background-color: #fff;
    }
    .current{
        background-color: #fff;
    }
    #color{
        color: #ed1c24;
    }
    #xs{
        display: inline-block;
    }
    /* 商品信息 */
    .info{
        width: 70%;
        margin-left: 3%;
        /* display: none; */
    }
    .info_top{
        width: 100%;
        height: 83px;
    }
    .info_top img{
        width: 100%;
        height: 100%;
    }
    .info_main{
        margin: 0 auto;
        margin-top: 10px;
        background-color: #fff;
    }
    .info_title{
        padding: 0 10px;
        padding-top: 10px;
    }
    .info_title span{
        display: block;
        font-size: 12px;
        font-weight: 500;
    }
    .info_imgs{
        display: block;
        margin-top: 10px;
        /* display: flex; */
        /* flex-wrap: wrap; */
        padding-bottom: 10px;
    }
    .info_img{
        width: 31%;
        display: inline-block;
        margin: 1%;
    }
    .info_img span{
        width: 66px;
        height: 66px;
        display: block;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
    }
    .info_img img{
        width: 100%;
        height: 100%;
    }
    .info_img p{
        text-align: center;
        font-size: 12px;
        color: #666666;
    }
    .info_two{
        width: 70%;
        margin-left: 3%;
        display: none;
    }
</style>