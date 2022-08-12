<template>
    <main>
        <div class="bg">
            <header>
                <div class="head_bg">
                    <img src="images/header_bg.png" alt="">
                </div>
                <div class="search">
                    <div class="logo">
                        <a href=""><img src="images/logo.png" alt=""></a>
                    </div>
                    <router-link to="/search" class="input">
                        <span class="icon">
                            <img src="images/icon.png" alt="">
                        </span>
                        <a class="input_txt">请输入商品名称</a>
                    </router-link>
                </div>
                <div class="lunbo">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item><router-link to=""><img src="images/lunbo_01.png" alt=""></router-link></van-swipe-item>
                        <van-swipe-item><router-link to=""><img src="images/lunbo_02.png" alt=""></router-link></van-swipe-item>
                        <van-swipe-item><router-link to=""><img src="images/lunbo_03.png" alt=""></router-link></van-swipe-item>
                        <van-swipe-item><router-link to=""><img src="images/lunbo_04.png" alt=""></router-link></van-swipe-item>
                        <van-swipe-item><router-link to=""><img src="images/lunbo_05.png" alt=""></router-link></van-swipe-item>
                        <van-swipe-item><router-link to=""><img src="images/lunbo_06.png" alt=""></router-link></van-swipe-item>
                        <van-swipe-item><router-link to=""><img src="images/lunbo_07.png" alt=""></router-link></van-swipe-item>
                    </van-swipe>
                </div>
            </header>
            <nav>
                <div class="nav_list">
                    <router-link to="/list" class="list_one">
                        <span class="list_img"><img src="images/list_01.png" alt=""></span>
                        <p>笔记本</p>
                    </router-link>
                    <router-link to="/type" class="list_one">
                        <span class="list_img"><img src="images/list_02.png" alt=""></span>
                        <p>主板</p>
                    </router-link>
                    <router-link to="/list" class="list_one">
                        <span class="list_img"><img src="images/list_03.png" alt=""></span>
                        <p>显卡</p>
                    </router-link>
                    <router-link to="/list" class="list_one">
                        <span class="list_img"><img src="images/list_04.png" alt=""></span>
                        <p>DIY电脑组件</p>
                    </router-link>
                    <router-link to="/login" class="list_one">
                        <span class="list_img"><img src="images/list_05.png" alt=""></span>
                        <p>全部分类</p>
                    </router-link>
                </div>
                <div class="nav_new">
                    <router-link to=""><img src="images/nav_new.png" alt=""></router-link>
                </div>
                <div class="nav_youhui">
                    <div class="yh_left">
                        <router-link to=""><img src="images/yh_01.jpg" alt=""></router-link>
                    </div>
                    <div class="yh_right">
                        <div class="yh_rightone">
                            <router-link to=""><img src="images/yh_02.png" alt=""></router-link>
                        </div>
                        <div class="yh_righttwo">
                            <router-link to=""><img src="images/yh_03.png" alt=""></router-link>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="commodity">
                <div class="com_top">
                    <ul class="com_toptxt">
                        <li @click="ss()"><span class="current">推荐</span></li>
                        <li @click="aa()"><span>笔记本</span></li>
                        <li><span>主板</span></li>
                        <li><span>显卡</span></li>
                        <li><span>DIY电脑组件</span></li>
                        <li><span>显示器</span></li>
                        <li><span>套装组合</span></li>
                        <li><span>键鼠/外设</span></li>
                        <li><span>台式机</span></li>
                    </ul>
                </div>
                <div class="com_type">
                    <div class="type_one">
                        <ul class="type_ul">
                            <li v-for="(it,index) in vvv" :key="index">
                                <router-link to="">
                                    <div class="type_img">
                                        <img :src="it.src" alt="">
                                    </div>
                                    <p>{{it.introduce}}</p>
                                    <div class="one_money">
                                        <span>{{it.money}}</span>
                                        <s>销量：{{it.num}}</s>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer></footer>
        </div>
    </main>
</template>

<script>
        export default{
        data(){
            return{
                
                tuijian:[
                {
                    src:'images/index_zb01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xsq01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xsq02.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xk01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xk02.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xk03.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xk04.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_sr01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_jp01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_ej01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                ],
                xian:[
                {
                    src:'images/index_zb01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xsq01.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                },
                {
                    src:'images/index_xsq02.png',
                    introduce:'【首发】MAG B660M MORTAR MAX WIFI DDR4 迫击炮 电脑主板',
                    money:'1299',
                    num:'91',
                }
                ],
                vvv:[]
            }
        },
        methods:{
            aa(){
                this.vvv=this.xian
            },
            ss(){
                this.vvv=this.tuijian
            }
        },
        mounted:function(){
            this.ss()//需要触发的函数
            }
        }
</script>

<!-- 私有css -->
<style scoped>
    .bg{
        width: 100%;
        height: 100%;
        background-color: #f8f8f8;
        z-index: -1;
    }
    /* 头部样式 */
    header{
        /* width: 100%; */
        /* height: 208px; */
        position: relative;
    }
    /* 头部背景 */
    .head_bg{
        width: 100%;
        /* height: 208px; */
        z-index: -1;
    }
    .head_bg img{
        width: 100%;
        /* height: 100%; */
    }
    /* 头部搜索框 */
    .search{
        width: 100%;
        position: fixed;
        z-index: 999;
        display: flex;
        top: 0;
        align-items: center;
        transition: all .7s;
        background-color: #f73b49;
    }
    .logo{
        width: 87px;
        height: 41px;
        margin-right: 10px;
        margin-left: 4%;
    }
    .logo img{
        width: 100%;
        /* height: 100%; */
    }
    .input{
        display: block;
        width: 68%;
        display: flex;
        border-radius: 31px;
        background: hsla(0,0%,95.3%,.18);
        align-items: center;
        height: 31px;
    }
    .icon{
        width: 15px;
        /* height: 15px; */
        margin-left: 10px;
    }
    .icon img{
        width: 100%;
        /* height: 100%; */
    }
    .input_txt{
        margin-left: 5px;
        font-size: 12px;
        color: #fff;
    }
    .lunbo{
        width: 92%;
        /* height: 156px; */
        position: relative;
        z-index: 3;
        margin: 0 auto;
        margin-top: -140px;
        border-radius: 6px;
        overflow: hidden;
    }
    .lunbo img{
        width: 100%;
        /* height: 156px; */
    }
    /* 导航栏样式 */
    .nav_list{
        width: 92%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 17px;
    }
    .list_one{
        display: inline-block;
        width: 20%;
        text-align: center;
        font-size: 2vw;
        position: relative;
        color: #000;
    }
    .list_img{
        width: 45px;
        /* height: 45px; */
        display: block;
        margin: 0 auto;
        margin-bottom: 4px;
    }
    .list_img img{
        width: 100%;
        /* height: 100%; */
    }
    .nav_new{
        width: 92%;
        margin: 0 auto;
        margin-top: 15px;
        /* height: 93px; */
        border-radius: 6px;
        overflow: hidden;
    }
    .nav_new img{
        width: 100%;
        /* height: 100%; */
    }
    .nav_youhui{
        width: 92%;
        margin: 0 auto;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }
    .yh_left{
        width: 49%;
        /* height: 174px; */
        border-radius: 6px;
        overflow: hidden;
    }
    .yh_left img{
        width: 100%;
        /* height: 100%; */
    }
    .yh_right{
        width: 49%;
        height: 174px;
    }
    .yh_rightone{
        width: 100%;
        /* height: 83px; */
        border-radius: 6px;
        overflow: hidden;
    }
    .yh_rightone img{
        width: 100%;
        /* height: 100%; */
    }
    .yh_righttwo{
        margin-top: 5px;
        width: 100%;
        /* height: 83px; */
        border-radius: 6px;
        overflow: hidden;
    }
    .yh_righttwo img{
        width: 100%;
        /* height: 100%; */
    }
    /* 主页商品列表 */
    .commodity{
        width: 92%;
        margin: 0 auto;
        margin-top: 15px;
    }
    .com_top{
        width: 100%;
        box-sizing: border-box;
        position: relative;
        z-index: 99;
        height: 52px;
        white-space: nowrap;
        line-height: 52px;
    }
    .com_toptxt{
        display: flex;
        overflow: auto hidden;
    }
    .com_toptxt::-webkit-scrollbar {
        display: none;
    }
    .com_toptxt li{
        display: inline-block;
        font-size: 3vw;
        margin-right: 3vw;
        position: relative;
        color: #666;
    }
    .current{
        color: #ee373e;
    }
    .con_type{
        margin: 0 auto;
        /* display: flex;
        flex-wrap: wrap; */
        margin-top: 10px;
    }
    .type_ul{
        display: flex;
        flex-wrap: wrap;
        /* display: none; */
    }
    .type_ul li{
        display: inline-block;
        width: 48%;
        margin: 1%;
        border-radius: 7px;
        background-color: #fff;
        overflow: hidden;
    }
    .type_img{
        width: 100%;
        /* height: 174px; */
    }
    .type_img img{
        width: 100%;
        /* height: 174px; */
    }
    .type_ul p{
        display: inline-block;
        width: 92%;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 3vw;
        margin-top: 5px;
        color: #666;
    }
    .one_money{
        width: 92%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .type_ul span{
        font-size: 2vw;
        color: #ed1c24;
    }
    .type_ul s{
        color: #b1b1b1;
        font-size: 2vw;
    }
    /* 底部 */
    footer{
        height: 50px;
    }
</style>
