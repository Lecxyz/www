<template>
    <main>
        <header>
                <div @click="onClickLeft()" class="head">
                    <span class="return"></span>
                    <div class="head_txt">
                        <span>商品详情</span>
                    </div>
                </div>
        </header>
        <div class="main">
            <div class="lunbo">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" duration="1000">
                    <van-swipe-item><img src="images/details_01.png" alt=""></van-swipe-item>
                    <van-swipe-item><img src="images/details_02.png" alt=""></van-swipe-item>
                    <van-swipe-item><img src="images/details_03.png" alt=""></van-swipe-item>
                    <van-swipe-item><img src="images/details_04.png" alt=""></van-swipe-item>
                    <van-swipe-item><img src="images/details_05.png" alt=""></van-swipe-item>
                </van-swipe>
            </div>
            <div class="countdown">
                <a>秒杀狂欢购</a>
                <div class="timer">
                    <p>倒计时</p>
                    <van-count-down :time="time" format="DD天HH时mm分ss秒" class="cd"/>
                </div>
            </div>
            <div class="info">
                <div class="money">
                    <div class="moneys">
                        ￥16287<span>￥35499.00</span>
                    </div>
                    <div class="tog">
                        <div class="heat">热销</div>
                    </div>
                    <a>已售53</a>
                </div>
                <div class="huodong"></div>
                <div class="introduce">
                    强袭GE76/66 i9-12900HK/Windows 11 家庭版 英伟达GeForceRTX3080Ti游戏本电竞本
                    <p>英特尔酷睿14核心处理器/微星超增压模式设计/双烤功耗达220w/4K/120Hz刷新率/双显三模切换/12代新品/正品保证 官方直保</p>
                </div>
            </div>
            <div class="option">
                <div class="explain">
                    <van-cell is-link title="活动说明" @click="show = true" />
                    <van-action-sheet v-model="show" title="活动说明">
                        <div class="content">暂无说明</div>
                    </van-action-sheet>
                </div>
                <!-- <div class="xz">

                </div> -->
                <div class="serve">
                    <div class="serve_left"><span>服务保障</span></div>
                    <div class="serve_right"><a>支持7天无理由退货（激活后不支持/人为损坏不支持/包装破损不支持）</a></div>
                </div>
                <div class="comment">
                    <div class="comment_title">
                        <div class="ctitle_left">
                            <a></a><span>商品评价（5）</span>
                        </div>
                        <div class="ctitle_right">
                            查看全部<img src="images/right.png" alt="">
                        </div>
                    </div>
                    <div class="comment_main">
                        <div class="comment_info">
                            <img src="images/user.png" alt="">
                            <div class="comment_msg">
                                <div class="user_name">
                                    <span>微星用户7116</span> 
                                </div>
                                <div class="user_txt">
                                <a>到手了发现质感很好，值这个价格，玩游戏很流畅，2k分辨率很清晰，跑分尚可，有空试试3A看看</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods">
                <div class="goods_title">
                    -商品详情-
                </div>
                <div class="goods_imgs">
                    
                </div>
            </div>
        </div>
        <div class="g"></div>
        <footer>
            <van-goods-action>
                <van-goods-action-icon icon="images/kefu.png" text="客服"  />
                <van-goods-action-icon icon="images/shoucang.png" text="店铺"  color="#fff"/>
                <van-goods-action-icon icon="images/car.png" text="购物车" />
                <van-goods-action-button type="warning" text="加入购物车" />
                <van-goods-action-button type="danger" text="立即购买" />
                <!-- @click="onClickButton" -->
            </van-goods-action>
        </footer>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                time: 30 * 60 * 60 * 4000,
                show:false,
                xx:false
                }
            },
        methods: {
            onClickLeft() {
            this.$router.go(-1)
            },
            // show(){
            // }
            }
        }
</script>

<style>
    .title .van-nav-bar__content {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: 100vw;
        height: 6vw;
        color: black;
    }
    .title .van-nav-bar__title {
        max-width: 60vw;
        margin: 0 auto;
        color: #323233;
        font-weight: 500;
        font-size: 4vw;
    }
    .title .van-ellipsis {
        overflow: visible;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .title .van-nav-bar .van-icon {
        color: #000000;
    }
    .title .van-nav-bar__arrow {
        /* margin-right: 4px; */
        font-size: 4vw;
    }
    .explain .content {
        padding: 16px 16px 160px;
    }
    .explain .van-action-sheet{
        height: 45vh;
    }
</style>
<!-- 私有css样式 -->
<style scoped>
    /* 头部 */
    .head{
            /* position: fixed; */
        background-color: white;
        padding: 7px 3px;
        display: flex;
    }
    .return{
        position: absolute;
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
    .head_txt span{
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    /* 主要内容 */
    .lunbo{
        width: 100vw;
        height: 100vw;
    }
    .lunbo img{
        width: 100vw;
        /* height: 100%; */
    }
    .countdown{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(237, 28, 36);
        color: white;
        padding: 3vw 2vw;
    }
    .countdown a{
        font-size: 3vw;
    }
    .timer{
        font-size: 2.5vw;
        width: 40vw;
    }
    .cd{
        display: block;
        margin-top: 1vw;
        color: #fff;
        font-size: 3vw;
    }
    .info{
        width: 90vw;
        margin: 0 auto;
        margin-top: 2vw;
        padding-bottom: 2vw;
    }
    .money{
        padding: 2vw 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 4vw;
        font-weight: 600;
        color: #e02020;
    }
    .money span{
        text-decoration: line-through;
        font-size: 2.5vw;
        color: #999;
        margin-top: 1vw;
        margin-left: 1vw;
    }
    .tog{
        width: 40vw;
        display: flex;
        align-items: center;
    }
    .heat{
        background: url(https://minipro-store.msi.com/image/24.png) no-repeat 50%;
        background-size: 100vw 100vw;
        width: 8vw;
        height: 4vw;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2vw;
        font-size: 2vw;
    }
    .money a{
        font-size: 2vw;
        color: #999;
    }
    .huodong{
        padding-bottom: 2vw;
        color: #ed1c24;
        font-size: 2.5vw;
    }
    .introduce{
        font-size: 2.7vw;
        color: #000;
    }
    .introduce p{
        color: #999;
        font-size: 2.2vw;
        margin-top: 2vw;
    }
    .option{
        background-color: #f8f8f8;
    }
    .explain{
        padding-top: 1vh;
    }
    .xx{
        padding-top: 1vh;
    }
    .serve{
        margin: 1vh auto 0;
        background-color: #fff;
        padding: 2vw 4vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .serve_left{
        width: 20%;
        display: flex;
        align-items: center;
    }
    .serve_left span{
        font-size: 3vw;
        font-weight: 600;
    }
    .serve_right{
        width: 80%;
        overflow: inherit;
        white-space: inherit;
    }
    .serve_right a{
        color: #666;
        font-size: 3vw;
        font-weight: 500;
    }
    .comment{
        padding-top: 1vh;
        padding-bottom: 1vh;
        /* width: 100vw; */
    }
    .comment_title{
        /* width: 92vw; */
        margin: 0 auto;
        display: flex;
        padding: 2vw 4vw;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        /* padding: 2vw 0; */
    }
    .ctitle_left{
        display: flex;
        align-items: center;
    }
    .ctitle_left a{
        border-top-right-radius: 31px;
        border-bottom-right-radius: 31px;
        width: 3px;
        height: 12px;
        background-color: #ed1c24;
        margin-right: 5px;
    }
    .ctitle_left span{
        font-size: 3vw;
    }
    .ctitle_right{
        display: flex;
        align-items: center;
        font-size: 2vw;
        color: #999;
    }
    .ctitle_right img{
        width: 2vw;
        height: 3vw;
        margin-left: 1vw;
    }
    .comment_main{
        /* width: 90%; */
        margin: 0 auto;
        padding: 2vw 4vw;
        background-color: white;
    }
    .comment_info{
        /* width: 100%; */
        display: flex;
        justify-content: space-between;
    }
    .comment_info img{
        width: 14vw;
        height: 14vw;
    }
    .comment_msg{
        width: 85%;
    }
    .user_name{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2vw 2vw 0;
    }
    .user_name span{
        width: 78%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 2vw;
    }
    .user_txt{
        padding: 2vw 2vw;
    }
    .user_txt a{
        font-size: 2vw;
        color: #666;
    }
    .goods_title{
        padding: 1vh 0;
        text-align: center;
    }
    .g{
        height: 20vw;
    }
    /* 底部购物车 */
    footer{
        padding: 2vw 0;
        width: 100vw;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>