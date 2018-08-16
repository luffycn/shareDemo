/**
* 首页底部选项卡:我的
* Luffy 2018-7-27
*/
<template>
    <div id="My_index">
        <div class="my-header">
            <div class="my-header-content">
                <div class="my-header-content-left">
                    <img class="my-header-img" src="../../../static/imgs/my/head_portrait577@2x.png" alt="">
                    <div>煤球王</div>
                </div>
                <div class="my-header-content-right">
                    <span>退出登录</span><span class="iconfont icon-tuichu my-header-content-right-ziti"></span>
                </div>
            </div>
        </div>
        <div class="my-content">
            <div class="my-content-top">
                <div class="my-content-top-l">
                    <div>余额</div>
                    <div v-if="isclose" class="my-content-money">¥ <span>600,000,000</span></div>
                    <div v-else class="my-content-money">
                        <span>¥ </span>
                        <span class="money-hide">******</span>
                    </div>
                </div>
                <div class="my-content-top-r">
                    <span class="iconfont icon-shuaxin"></span>
                    <span>|</span>
                    <span :class="'iconfont '+ showClose" @click="stateClose"></span>
                </div>
            </div>
            <ul class="my-content-ul">
                <li class="my-content-ul-li" v-for="item in liItem" @click="goView(item.liId)">
                    <div class="my-content-ul-li-l">
                        <span :class="'iconfont ' + item.liIconL"></span>
                        <span>{{item.liContent}}</span>
                        <div>
                            <div>
                                <span class="message-num">{{item.liNum}}</span>
                            </div>
                        </div>
                    </div>
                    <span :class="'iconfont ' + item.liIconY +' my-content-ul-li-ziti'" ></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { router, CONST, tools, storages, axios, store } from "@/js/public/port";
    export default {
        name: 'My_index',
        data(){
            return {
                liItem:[
                    {liId:0,liIconL:'icon-qianbao',liContent:'钱包记录',liNum:12,liIconY:'icon-youjiantou'},
                    {liId:1,liIconL:'icon-gonggao',liContent:'消息公告',liNum:12,liIconY:'icon-youjiantou'},
                    {liId:2,liIconL:'icon-shezhi',liContent:'投注设置',liNum:12,liIconY:'icon-youjiantou'}
                ],
                isclose:true,
                showClose:'icon-xianshi xianshi',
            }
        },
        methods:{
            //路由跳转
            goView(index){
                //console.log(index);
                if(index === 0){
                    this.$router.push({path: '/home/home_mine_money'});
                }else if(index === 1){
                    this.$router.push({path: '/home/home_mine_msg'});
                }else{
                    this.$router.push({path: '/home/home_mine_betSet'});
                }
            },
            //控制金额显示隐藏
            stateClose(){
                if(this.isclose === true){
                    this.isclose = false;
                    this.showClose = 'icon-yincang yincang'
                }else{
                    this.isclose = true;
                    this.showClose = 'icon-xianshi xianshi'
                }
            }
        },
        mounted(){
            this.$store.commit('homeHeaderControl',{shwoback:false,type:'string',val:'我的',footShow:true});

            //ajax
//            this.$api.Axios('get', CONST.GETMONEY, '', function(success, result) {
//              if (success) {
//                console.log(result);
//              }
//            });
          }
    }

</script>

<style scoped lang='scss'>
    @import '../../scss/my/my_index';
</style>

