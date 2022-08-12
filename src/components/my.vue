<template>
    <main>
        <div class="bg">
            <router-link to="/login">
                <div class="user">               
                    <div class="img">
                        <img src="images/user.png" alt="">
                    </div>
                    <div class="name">
                        <p>昵称：</p>
                        <span>电话号码：</span>
                    </div> 
                </div>
            </router-link>
            <div class="order">
                <div class="order_top">
                    <span>我的订单</span>
                    <div class="all">
                        <router-link to="">
                            全部订单<a><img src="images/right.png" alt=""></a>
                        </router-link>
                    </div>
                </div>
                <div class="tog">
                    <van-grid square>
                        <van-grid-item   icon="images/d1.png" text="待付款" to=""/>
                        <van-grid-item   icon="images/d2.png" text="待发货" to=""/>
                        <van-grid-item   icon="images/d3.png" text="待收货" to=""/>
                        <van-grid-item   icon="images/d4.png" text="待评价" to=""/>
                    </van-grid>
                </div>
            </div>
            <div class="link">
                <van-grid square>
                    <van-grid-item v-for="(le,index) in le" :key="index" :icon="le.src" :text="le.txt" :to="le.add"/>
                </van-grid>
            </div>
        </div>
    </main>
</template>

<script>
        export default {
        data() {
            return {
            activeKey: 0,
            le:[
                {
                    src:'images/link_01.png',
                    txt:'我的拼团',
                    add:'/index'
                },
                {
                    src:'images/link_02.png',
                    txt:'我的助力',
                    add:'/index'
                },                
                {
                    src:'images/link_03.png',
                    txt:'积分商城',
                    add:'/index'
                },                
                {
                    src:'images/link_04.png',
                    txt:'积分订单',
                    add:'/index'
                },                
                {
                    src:'images/link_05.png',
                    txt:'优惠券',
                    add:'/index'
                },                
                {
                    src:'images/link_06.png',
                    txt:'我的收藏',
                    add:'/index'
                },                
                {
                    src:'images/link_07.png',
                    txt:'地址管理',
                    add:'/index'
                },                
                {
                    src:'images/link_08.png',
                    txt:'基本信息',
                    add:'/index'
                },                
                {
                    src:'images/link_09.png',
                    txt:'帮助与反馈',
                    add:'/index'
                },                
                {
                    src:'images/link_10.png',
                    txt:'常见问题',
                    add:'/index'
                },                
                {
                    src:'images/link_11.png',
                    txt:'设置',
                    add:'/index'
                },                
                {
                    src:'images/link_12.png',
                    txt:'客服服务',
                    add:'/index'
                },                            
            ]
            };
        }
        }
</script>
<!-- 私有css样式 -->
<style scoped>
    .bg{
        /* display: block; */
        position: absolute;
        top: 0;
        width: 100%;
        /* height: 100vh; */
        height: 100vh;
        background-color: #f8f8f8;
        z-index: -999;
    }
    .user{
        width: 92%;
        margin: 40px auto 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: none;
        color: #000;
    }
    .img img{
        width: 62px;
    }
    .name{
        display: block;
        width: 78%;
    }
    .name p{
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .name span{
        display: block;
        font-size: 14px;
        color: #666;
        margin-top: 10px;
    }
    .order{
        width: 86%;
        padding: 10px;
        margin: 0 auto;
        margin-top: 10px;
        background-color: #fff;
        border-radius: 5px;
    }
    .order_top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .order_top span{
        display: block;
        font-size: 17px;
    }
    .all{
        display: flex;
        align-items: center;
    }
    .all img{
        width: 6px;
        margin-left: 4px;
    }
    .all a{
        font-size: 13px;
        color: #777;
    }
    .tog{
        width: 100%;
    }
    .link{
        width: 86%;
        padding: 10px;
        margin: 0 auto;
        margin-top: 10px;
        background-color: #fff;
        border-radius: 5px;
    }
</style>