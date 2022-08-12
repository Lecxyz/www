<template>
    <main>
        <div class="bg">
            <header>
                <div @click="onClickLeft()" class="head">
                    <span class="return"></span>
                    <div class="head_txt">
                        <span>购物车</span>
                    </div>
                </div>
            </header>
            <div class="commodity">
                <p>优惠券统一在结算页面使用（一单仅限使用一张优惠券)</p>
                <div class="comm-item">
                    <van-swipe-cell :before-close="beforeClose">
                    <template #left>
                        <van-button square type="primary" text="选择" />
                    </template>
                    <van-cell :border="false" title="单元格" value="内容" />
                    <template #right>
                        <van-button square type="danger" text="删除" />
                    </template>
                    </van-swipe-cell>
                </div>
            </div>
            <footer></footer>
        </div>
    </main>
</template>

<script>
    export default {
        methods: {
            onClickLeft() {
            this.$router.go(-1);
            },
            beforeClose({ position, instance }) {
            switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
        }
    }
</script>

<style>
    .goods-card {
        margin: 0;
        background-color: white;
    }
    .delete-button {
        height: 100%;
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
    /* 主要内容 */
    .commodity{
        width: 100%;
    }
    .commodity p{
        padding: 8px 0;
        text-align: center;
        font-size: 12px;
        color: grey;
    }
    .comm-item{
        width: 100%;
        display: flex;
        position: relative;
        margin: 10px auto;
        flex-direction: row; 
        margin-top: 10px;
    }
    footer{
        width: 100%;
        height: 50px;
    }
</style>