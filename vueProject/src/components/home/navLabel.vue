<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="nav_label" stretch>
            <el-tab-pane label="滚球" name="bowls">
                <Scroller lock-y :scrollbar-x="false">
                    <!--球类型-->
                    <Ball-kind :tabType="activeName"></Ball-kind>
                </Scroller>
            </el-tab-pane>
            <el-tab-pane label="今日" name="today">
                <Scroller lock-y :scrollbar-x="false">
                    <!--球类型-->
                    <Ball-kind :tabType="activeName"></Ball-kind>
                </Scroller>
            </el-tab-pane>
            <el-tab-pane label="早盘" name="morningSession">
                <Scroller lock-y :scrollbar-x="false">
                    <!--球类型-->
                    <Ball-kind :tabType="activeName"></Ball-kind>
                </Scroller>
            </el-tab-pane>
        </el-tabs>

        <!--<div>-->
            <tab :line-width=2 v-model="index">
                <tab-item class="vux-center" :selected="curTab === item" v-for="(item,index) in tabList" @click="curTab = item" :key="index">
                    {{item}}
                </tab-item>
            </tab>
            <swiper v-model="index" :show-dots="false">
                <swiper-item >
                    <div class="tab-swiper vux-center">
                        <Scroller lock-y :scrollbar-x="false">
                            <!--球类型-->
                            <Ball-kind class="ball_kind"></Ball-kind>
                        </Scroller>
                    </div>
                </swiper-item>
            </swiper>
        <!--</div>-->

    </div>
</template>

<script>
    import {Tab,TabItem,Swiper,SwiperItem,Scroller } from 'vux'
    import BallKind from './ballKind.vue'
    const list = () => ['滚球','今日','早盘'];

    export default {
        name: '',
        data() {
            return {
                activeName: 'bowls',
                index: 0,
                tabList: list(),
                curTab: '滚球',
            }
        },
        components: {
            Scroller,
            BallKind,
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        methods: {
            handleClick(tab,event) {

            }
        }
    }
</script>

<style lang="scss">
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
            /*border-bottom: 2px solid red;*/
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

    .vux-tab-wrap {
        .vux-tab-container {
            .vux-tab {
                .vux-tab-item {
                    color: #333333;
                    font-size: .14rem;
                }
                .vux-tab-item.vux-tab-selected {
                    color: $home-color;
                }
                .vux-tab-ink-bar {
                    background-color: $home-color;
                }
            }
        }
    }
    .vux-slider {
        font-size: .14rem;
        .vux-swiper {
            .vux-swiper-item {
                height: 1.2rem !important;
                top: 46px !important;
                background-color: #fff;
                box-sizing: border-box;
            }
        }
    }
</style>
<style scoped lang="scss">
    .nav_label {
         font-size: .14rem;
         color: #999;
         overflow: hidden;
         background-color: #fff;
         padding-bottom: .08rem;
         margin-top: .2rem;
     }
    .ball_kind {
        color: #999999;
    }
</style>
