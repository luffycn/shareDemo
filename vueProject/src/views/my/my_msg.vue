/**
* 首页底部选项卡:消息通知
* Toby 2018-7-30
*/
<template>
    <div id="my_msg">
        <el-radio-group v-model="nav_label">
            <el-radio-button label="game_notice">游戏公告</el-radio-button>
            <el-radio-button label="website_msg">站点消息</el-radio-button>
        </el-radio-group>

        <el-tabs stretch v-model="activeTab" ref="headerTab">
            <refresh class="test" :style="{top:top+'px',display:'none'}" ref="refresh"></refresh>
            <el-tab-pane label="全部" name="all" >
                <scroller lock-x :height="bodyHeight" :scroll-bottom-offset="200">
                    <!--游戏公告-->
                    <div v-if="nav_label == 'game_notice'" @touchstart="touchStart($event)" @touchmove="handMove($event)" @touchend="handEnd()">
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                    </div>
                    <!--站点消息-->
                    <div v-else>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                    </div>
                </scroller>
            </el-tab-pane>
            <el-tab-pane label="今日" name="today" >
                <scroller lock-x :height="bodyHeight">
                    <!--游戏公告-->
                    <div v-if="nav_label == 'game_notice'">
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                        <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                    </div>
                    <!--站点消息-->
                    <div v-else>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                        <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                    </div>
                </scroller>
            </el-tab-pane>
            <el-tab-pane label="昨日" name="yesterday">
                <!--游戏公告-->
                <div v-if="nav_label == 'game_notice'">
                    <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                    <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                </div>
                <!--站点消息-->
                <div v-else>
                    <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                    <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                </div>
            </el-tab-pane>
            <el-tab-pane label="其他" name="others">
                <!--游戏公告-->
                <div v-if="nav_label == 'game_notice'">
                    <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                    <router-link to="/home/home_mine_msg/msg_detail"><msg-notice></msg-notice></router-link>
                </div>
                <!--站点消息-->
                <div v-else>
                    <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                    <router-link to="/home/home_mine_msg/news_detail"><websiteNews></websiteNews></router-link>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import msgNotice from '@/components/home/msgNotice'
    import websiteNews from '@/components/home/websiteNews'
    import { Scroller } from 'vux'
    import { store } from "@/js/public/port";
    import refresh from '@/components/refresh'

    export default {
        name: 'my_msg',
        data() {
            return {
                nav_label: 'game_notice',
                activeTab: 'all',
                topTabHeight: 40,
                top: -40,
                startY: 0,            //保存y轴点的位置
                touching: false      //代表当前是否处于下拉刷新行为的开关,也就是当处于滚动行为时,就要退出该事件机制
            }
        },
        components: {
            msgNotice,
            websiteNews,
            Scroller,
            refresh
        },
        methods: {
            //手指触碰事件
            touchStart(e) {
                // e代表事件对象, e.targetTouches[0].pageY可以拿到手指按下的Y轴点
                this.startY = e.targetTouches[0].pageY;
                this.touching = true;   //开启下拉刷新状态
            },
            //手指移动事件
            handMove(e) {
                if(!this.touching) return;
                //拿到transform的translateY的值,判断在首屏页面滑动时刷新
                let el = getComputedStyle(document.getElementsByClassName('xs-container')[0]).transform;
                let translateY = el.replace(/[^0-9\-,]/g,'').split(',')[5];
                if(translateY > 0) {
                    //获取手指移动的距离
                    let diff = e.targetTouches[0].pageY - this.startY;
                    //判断移动方向上或下
                    if(diff > 0) {
                        e.preventDefault();
                        this.$refs.refresh.$el.style.display = "block"; //显示下拉组件
                        this.top = this.top + Math.floor(diff * 0.35); //改变top
                        //让top最多为5
                        if(this.top>5){
                            this.top=5;
                        }else {
                            this.$refs.refresh.$el.style.display = "none";
                            this.top = -40;
                            return;
                        }
                    }else {
                        return;
                    }
                }else {
                    return;
                }
            },
            //结束事件
            handEnd() {
                this.touching = false;
                //判断this.top的值
                if(this.top >= 5){
                    console.log('刷新成功');
                    setTimeout(() => {
                        this.$refs.refresh.$el.style.display = "none";
                    },3000);
                }
            }
        },
        computed:{
            bodyHeight(){
                console.log("高度="+store.state.footHeight+'');
                return  store.state.footHeight - this.topTabHeight  + '';
            }
        },
        mounted() {
            this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'',footShow:false});
        }
    }
</script>

<style scoped lang="scss">
    #my_msg {
        font-size: 1rem;
        background-color: rgba(161, 161, 161, 0.1);
    }
</style>

<!--覆盖element-ui组件源码中的样式-->
<style lang="scss">
    .el-radio-group {
        position: fixed;
        top: .08rem;
        height: .3rem;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        .el-radio-button {
            /*outline:none;*/
            .el-radio-button__inner {
                padding: .06rem .15rem;
                border: .01rem solid #ffffff;
                background-color: $home-color;
                color: #ffffff;
                font-size: .14rem;
                /*outline: none;*/
            }
        }
        .el-radio-button.is-active {
            .el-radio-button__inner {
                background-color: #ffffff;
                color: $home-color;
                font-size: .14rem;
                &focus {
                    outline:none;
                }
            }
        }
        .el-radio-button.is-active {
            /*outline:none;*/
            .el-radio-button__inner:active {
                outline:none;
            }
        }
    }
    .el-tabs__header.is-top {
        margin-bottom: 0;
        background-color: #fff;
        .el-tabs__nav.is-top.is-stretch {
            .el-tabs__active-bar {
                background-color: $home-color;
            }
            .el-tabs__active-bar.is-top {
                background-color: transparent;
            }
            .el-tabs__item {
                padding: 0 0;
                height: .4rem;
                line-height: .4rem;
            }
            .el-tabs__item.is-top {
                font-size: .14rem;
            }
        }
        .el-tabs__item.is-top.is-active {
            color: $home-color;
        }
        .el-tabs__item.is-top.is-active::after {
            content: '';
            position:absolute;
            width: .3rem;
            height: .02rem;
            left: 50%;
            top: 93%;
            transform: translate(-50%,0);
            background-color: $home-color;
            -webkit-transition:all .3s ease-out 0s;
            -moz-transition:all .3s ease-out 0s;
            -o-transition:all .3s ease-out 0s;
            transition:all .3s ease-out 0s;
        }
    }
</style>
