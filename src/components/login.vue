<template>
    <main>
        <header>
            <div class="head">
                <span @click="onClickLeft()"></span>
            </div>
        </header>
        <div class="main">
            <div class="title">
                <div v-if="num==1" class="number_login">
                    手机验证码登录<a></a>
                </div>
                <div v-else="num==2" class="user_login">
                    账号密码登录<a></a>
                </div>
            </div>
            <p>欢迎使用微星电子用户版</p>
            <div v-if="num==1" class="input_add">
                <div class="user">
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="pass">
                    <input type="text" placeholder="请输入图形验证码">
                    <ul>
                        <li @click="yzm()" v-if="ynum==1"><img src="images/yzm_01.png" alt=""></li>
                        <li @click="yzm()" v-else-if="ynum==2"><img src="images/yzm_02.png" alt=""></li>
                        <li @click="yzm()" v-else="ynum==3"><img src="images/yzm_03.png" alt=""></li>
                    </ul>
                </div>
                <div class="yzm">
                    <input type="text" placeholder="请输入验证码">
                    <button>获取验证码</button>
                </div>
                <span>未注册手机号，系统将自动为您创建账号</span>
            </div>
            <div v-else="num==2" class="input_login">
                <div class="user">
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="pass">
                    <input type="text" placeholder="请输入密码">
                </div>
                <a href="">忘记密码</a>
            </div>
        </div>
        <div class="true">
            <div class="go">
                <van-checkbox v-model="checked">勾选即代表您已同意<a href="">《隐私政策》</a><a href="">《注册协议》</a></van-checkbox>
            </div>
            <button class="login">登录</button>
            <button class="not_login" @click="onClickLeft()">暂不登录</button>
            <p @click="qh()" v-if="num==1">账号密码登录</p>
            <p @click="qh()" v-else="num==2">手机验证码登录</p>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                checked: false,
                num:1,
                ynum:1
            }
        },
        methods: {
            onClickLeft() {
            this.$router.go(-1);
            },
            qh(){
                this.num++;
                if(this.num==3)this.num=1;
                this.show=!this.show;
            },
            yzm(){
                this.ynum++;
                if(this.ynum==4)this.ynum=1;
                this.show=!this.show;
            }
        },
    }
</script>

<!-- 私有css样式 -->
<style scoped>
    .head{
        position: fixed;
        left: 20px;
        top: 0px;
    }
    .head span{
        position: fixed;
        left: 20px;
        margin-top: 15px;
        width: 12px;
        height: 12px;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
        -webkit-transform: rotate(225deg);
        transform: rotate(225deg);
        z-index: 9999;
    }
    .main,.true{
        display:block;
        width: 84%;
        margin: 0 auto;
    }
    .title{
        font-size: 33px;
        font-weight: 500;
        margin-top: 104px;
    }
    .number_login,.user_login{
        display: flex;
    }
    .title a{
        display: block;
        width: 12px;
        height: 12px;
        background-image: url(/images/o.png);
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .main p{
        font-size: 15px;
        color: #999;
    }
    .input_add,.input_login{
        margin-top: 52px;
    }
    .user,.pass,.yzm{
        margin-top: 10px;
        padding: 10px 0;
        display: flex;
        font-size: 15px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;
    }
    .user input,.pass input,.yzm input{
        display: block;
        font-size: 16px;
        line-height: 1.4em;
        height: 1.4em;
        min-height: 1.4em;
        overflow: hidden;
        border: none;
        outline: none;
    }
    .pass img{
        width: 122px;
        display: inline-block;
        overflow: hidden;
        position: relative;
    }
    .yzm{
        margin-top: 15px;
    }
    .yzm button{
        background-color: #fff;
        color: #ed1c24;
        width: 98px;
        padding: 0px 10px;
        border-radius: 31px;
        text-align: center;
        font-size: 13px;
        color: #ed1c24;
        line-height: 28px;
        border: 1px solid #ed1c24;
    }
    .input_add span{
        display: block;
        font-size: 12px;
        margin-top: 10px;
        color: #bfbfbf;;
    }
    .go{
        display: flex;
        margin-top: 41px;
        align-items: center;
        font-size: 12px;
    }
    .go a{
        color: #218dff;
    }
    .login,.not_login{
        display: block;
        width: 100%;
        margin-top: 41px;
        border-radius: 31px;
        background-color: #ed1c24;
        text-align: center;
        font-size: 16px;
        line-height: 46px;
        color: #fff;
        border: none;
        outline: none;
    }
    .not_login{
        background-color: rgb(191, 191, 191);
        margin-top: 15px;
    }
    .true p{
        margin-top: 15px;
        font-size: 12px;
        color: #000;
    }
    .input_login a{
        display: block;
        font-size: 12px;
        color: #bfbfbf;
        margin-top: 10px;
    }
</style>