<template>
    <main>
        <header>
            <div class="head">
                <div class="search">
                    <router-link to="/index"><span></span></router-link>
                    <div class="input">
                        <div class="icon">
                            <img src="images/icon_ash.png" alt="">
                        </div>
                        <a>请输入商品名称</a>
                    </div>
                </div>
                <div class="screen">
                    <ul>
                        <li>综合</li>
                        <li>销量</li>
                        <li>价格</li>
                        <li>筛选</li>
                    </ul>
                </div>
            </div>
            <div class="main">
                <div class="info" v-for="(lt,index) in business" :key="index">
                    <router-link to="/details">
                        <div class="info_img">
                            <img :src="lt.src" alt="">
                        </div>
                        <p>{{lt.introduce}}</p>
                        <div class="info_txt">
                            <span>￥{{lt.money}}</span>
                            <s>销量：{{lt.num}}</s>
                        </div>
                    </router-link>
                </div>
            </div>
        </header>
    </main>
</template>

<script>
    export default{
        data(){
            return{
                business:[
                {
                    src:'images/list_nb01.png',
                    introduce:'泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本',
                    money:'39999',
                    num:'20',
                },
                {
                    src:'images/list_nb02.png',
                    introduce:'泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本',
                    money:'39999',
                    num:'20',
                },
                {
                    src:'images/list_nb03.png',
                    introduce:'泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本',
                    money:'39999',
                    num:'20',
                },
                {
                    src:'images/list_nb04.png',
                    introduce:'泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本',
                    money:'39999',
                    num:'20',
                },
                {
                    src:'images/list_nb05.png',
                    introduce:'泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本',
                    money:'39999',
                    num:'20',
                },
                {
                    src:'images/list_nb06.png',
                    introduce:'泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本',
                    money:'39999',
                    num:'20',
                },
            ]
            }
        }
        }
</script>
<!-- 私有css样式 -->
<style scoped>
    /* 头部样式 */
    .head{
        padding-top: 6px;
        position: fixed;
        z-index: 9;
        width: 100%;
        background-color: #fff;
        top: 0;
    }
    .search{
        display: flex;
        align-items: center;
    }
    .search span{
        display: block;
        position: inherit;
        margin: 0 15px;
        margin-left: 20px;
        /* margin-top: 15px; */
        /* position: fixed; */
        /* left: 20px; */
        width: 12px;
        height: 12px;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
        transform: rotate(225deg);
        z-index: 9999;
    }
    .input{
        width: 80%;
        border-radius: 31px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        line-height: 34px;
        background-color: #f8f8f8 /* margin-left: 12%; */;
    }
    .icon{
        width: 18px;
        height: 18px;
        margin-right: 5px;
        display: inline-block;
        overflow: hidden;
        position: relative;
    }
    .icon img{
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
    .input a{
        display: block;
        font-size: 13px;
        color: #969696;
    }
    .screen{
        align-items: center;
        position: relative;
        width: 100%;
        padding: 10px 0;
        background-color: #f7f7f7;
        margin-top: 10px;
    }
    .screen ul{
        display: flex;
    }
    .screen li{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25%;
        font-size: 14px;
    }
    /* 内容 */
    .main{
        width: 94%;
        margin: 110px auto 0px;
        display: flex;
        flex-wrap: wrap;
    }
    .info{
        width: 48%;
        margin: 1%;
        background-color: #fff;
        border-radius: 15px;
        overflow: hidden;
        /* display: flex; */
        /* flex-wrap: wrap; */
    }
    .info_img{
        height: 174px;
        display: inline-block;
        overflow: hidden;
        position: relative;
    }
    .info_img img{
        width: 100%;
        height: 100%;
    }
    .info p{
        display: block;
        width: 92%;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 14px;
        margin-top: 5px;
        color: #000;
    }
    .info_txt{
        display: block;
        width: 92%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .info_txt span{
        font-size: 15px;
        color: #ed1c24;
    }
    .info_txt s{
        color: #b1b1b1;
        font-size: 12px;
    }
</style>

