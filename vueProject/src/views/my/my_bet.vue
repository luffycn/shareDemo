<template>
    <Scroller lock-x :scrollbar-x=false :height='bodyHeight'>
        <div class="bet_set_page">
            <!--语言版本-->
            <div class="choose_lang">
                <p class="lang_selection">语言版本</p>
                <div class="sim_item" @click="chooseSim">
                    <label :style="sim_chinese">简体中文</label>
                    <i class="iconfont icon-dagou radio_button" v-show="sim_selected"></i>
                </div>
                <div  class="com_item" @click="chooseCom">
                    <label :style="com_chinese">繁体中文</label>
                    <i class="iconfont icon-dagou radio_button" v-show="com_selected"></i>
                </div>
            </div>
            <!--赔率类型-->
            <div class="bet_type">
                <p class="bet_type_txt">赔率类型</p>
                <div class="hk_disc" @click="chooseHk">
                    <label :style="hk">香港盘 0.84</label>
                    <i class="iconfont icon-dagou radio_button" v-show="hk_selected"></i>
                </div>
                <div  class="eu_disc" @click="chooseEu">
                    <label :style="eu">欧洲盘 0.84</label>
                    <i class="iconfont icon-dagou radio_button" v-show="eu_selected"></i>
                </div>
                <div  class="ma_disc" @click="chooseMa">
                    <label :style="ma">马来盘 0.84</label>
                    <i class="iconfont icon-dagou radio_button" v-show="ma_selected"></i>
                </div>
                <div  class="ind_disc" @click="chooseInd">
                    <label :style="ind">印尼盘 0.84</label>
                    <i class="iconfont icon-dagou radio_button" v-show="ind_selected"></i>
                </div>
            </div>
            <!--通知显示-->
            <group>
                <x-switch title="赔率通知显示" v-model="isShow" @on-click="changeState"></x-switch>
                <div class="show_bet_rate" v-show="isShow">
                    <div class="bet_rate_color" @click="chooseBet">
                        <span class="txt_style">
                            <label :style="bet_rate_color">赔率颜色 &nbsp;</label>
                            <span class="rate_color_green">0.84 &nbsp;</span>
                            <span class="rate_color_red">0.96</span>
                        </span>
                        <i class="radio_button iconfont icon-dagou" v-show="color_selected"></i>
                    </div>
                    <div class="show_arrow" @click="chooseArrow">
                        <span class="arrow_txt_style">
                            <label :style="show_arrow">箭头显示 &nbsp;</label>
                            <span class="arrow_num_style">0.84</span>
                            <span class="arrow_up_green">↑ &nbsp;</span>
                            <span class="arrow_num_style">0.96</span>
                            <span class="arrow_down_red">↓</span>
                        </span>
                        <i class=" radio_button iconfont icon-dagou" v-show="arrow_selected"></i>
                    </div>
                </div>
            </group>
        </div>
    </Scroller>
</template>

<script>
    import {Scroller, Radio, Group, XSwitch, Cell } from 'vux';
    import { store } from "@/js/public/port";

    export default {
        name: '',
        data() {
            return {
                isShow: true,
                sim_selected: true,
                com_selected: false,
                sim_chinese: {fontSize: '.16rem', color: '#11A7DE'},
                com_chinese: {fontSize: '.16rem', color: '#333'},
                hk_selected: true,
                eu_selected: false,
                ma_selected: false,
                ind_selected: false,
                hk: {fontSize: '.16rem', color: '#11A7DE'},
                eu: {fontSize: '.16rem', color: '#333'},
                ma: {fontSize: '.16rem', color: '#333'},
                ind: {fontSize: '.16rem', color: '#333'},
                bet_rate_color: {fontSize: '.16rem', color: '#11A7DE'},
                show_arrow: {fontSize: '.16rem', color: '#333'},
                color_selected: true,
                arrow_selected: false,
                headerTop: 40
            }
        },
        components: {Scroller,Radio,Group,Cell,XSwitch},
        methods: {
            changeState() {
                this.isShow = !this.isShow;
            },
            chooseSim() {
                this.sim_selected = true;
                this.com_selected = false;
                this.sim_chinese.color = '#11A7DE';
                this.com_chinese.color = '#333'
            },
            chooseCom() {
                this.com_selected = true;
                this.sim_selected = false;
                this.com_chinese.color = '#11A7DE';
                this.sim_chinese.color = '#333';
            },
            chooseHk() {
                this.hk_selected = true;
                this.eu_selected = false;
                this.ma_selected = false;
                this.ind_selected = false;
                this.hk.color = '#11A7DE';
                this.eu.color = '#333';
                this.ma.color = '#333';
                this.ind.color = '#333';
            },
            chooseEu() {
                this.eu_selected = true;
                this.hk_selected = false;
                this.ma_selected = false;
                this.ind_selected = false;
                this.eu.color = '#11A7DE';
                this.hk.color = '#333';
                this.ma.color = '#333';
                this.ind.color = '#333';
            },
            chooseMa() {
                this.ma_selected = true;
                this.hk_selected = false;
                this.eu_selected = false;
                this.ind_selected = false;
                this.ma.color = '#11A7DE';
                this.hk.color = '#333';
                this.eu.color = '#333';
                this.ind.color = '#333';
            },
            chooseInd() {
                this.ind_selected = true;
                this.hk_selected = false;
                this.eu_selected = false;
                this.ma_selected = false;
                this.ind.color = '#11A7DE';
                this.hk.color = '#333';
                this.eu.color = '#333';
                this.ma.color = '#333';
            },
            chooseBet() {
                this.color_selected = true;
                this.arrow_selected = false;
                this.bet_rate_color.color = '#11A7DE';
                this.show_arrow.color = '#333'
            },
            chooseArrow() {
                this.arrow_selected = true;
                this.color_selected = false;
                this.show_arrow.color = '#11A7DE';
                this.bet_rate_color.color = '#333';
            }
        },
        computed: {
            bodyHeight(){
                console.log("高度="+store.state.footHeight+'')
                return  store.state.footHeight - this.headerTop + '';
            }
        },
        mounted(){
            this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'投注设置',footShow:false})
        }
    }
</script>

<style scoped lang="scss">
    @import '../../scss/my/my_bet';
</style>

<style lang="scss">
    .vux-radio-label {
        font-size: .16rem;
        color: #333333;
    }
    .weui-switch:checked {
        border-color: transparent!important;
        background-color: $home-color !important;
    }
    .weui-switch {
        height: .2rem !important;
        width: .4rem !important;
    }
    .weui-switch::before, .weui-switch-cp__box::before {
        height: .19rem !important;
        width: .39rem !important;
        background-color: #ddd!important;
    }
    .weui-switch:checked {
        border-color: transparent;
        background-color: $home-color !important;
    }
    .weui-switch:after, .weui-switch-cp__box:after {
        width: .16rem!important;
        height: .16rem !important;
        top: 1px!important;
        left: 1px!important;
    }
    .weui-cell_switch {
        padding: 10px 20px!important;
    }
</style>
