<template>
    <div id="My_paid_index">
        <span class="paid_sum">￥0.00</span>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="nav_label" stretch>
            <el-tab-pane label="24小时" name="24hours">
                <paid-item></paid-item>
            </el-tab-pane>
            <el-tab-pane label="48小时" name="48hours">
                <div>bbbbbbbbbbbbb</div>
            </el-tab-pane>
            <el-tab-pane label="本周" name="thisWeek">
                <div>ccccccccccccccccccccc</div>
            </el-tab-pane>
            <el-tab-pane label="本月" name="thisMonth">
                <div>ddddddddddddddddddddd</div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import paidItem from '../../components/home/paidItem.vue'

    export default {
        name: 'My_paid_index',
        data(){
            return {
                activeName: '24hours'
            }
        },
        components: {paidItem},
        methods:{
            handleClick(tab,event) {

            }
        },
        mounted(){
            this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'已结算注单',footShow:true});
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
                font-size: .13rem;
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
</style>

<style scoped lang='scss'>
    #My_paid_index {
        font-size: 1rem;
        .paid_sum {
            color: #ffffff;
            font-size: .16rem;
            position:fixed;
            right: .15rem;
            top: .09rem;
        }
        .nav_label {
            font-size: .14rem;
            color: #999;
            overflow: hidden;
            /*background-color: #fff;*/
            padding-bottom: .08rem;
            position:relative;
            .paid_item {
                width: 90%;
                margin: .2rem;
                border-radius: 5px;
                padding: .15rem;
                background-color: lightgrey;
                box-sizing: border-box;
            }
        }
    }
</style>

