<template>
    <div class="ball_container">
        <el-badge class="single_ball" v-for="(item,index) in ballKinds" :key="item.id" :value="item.msgNum" :max="9">
            <div class="inner_box" @click="goTo({tabType},item.name)"><!--获取父组件传过来的值:bowls//滚球-->
                <i :class="item.ballClass"></i>
                <span class="ball_text">{{item.name}}</span>
            </div>
        </el-badge>
    </div>
</template>

<script>
    export default {
        props: ['tabType'],
        name: '',
        data() {
            return {
                ballKinds: [
                    {id: 0, name: '足球', ballClass: 'iconfont icon-zuqiu ball_icon', msgNum: '6'},
                    {id: 1, name: '篮球', ballClass: 'iconfont icon-lanqiu ball_icon', msgNum: '3'},
                    {id: 2, name: '排球', ballClass: 'iconfont icon-paiqiu ball_icon', msgNum: '8'},
                    {id: 3, name: '网球', ballClass: 'iconfont icon-wangqiu ball_icon', msgNum: '9'},
                    {id: 4, name: '羽毛球', ballClass: 'iconfont icon-yumaoqiu ball_icon', msgNum: '8'},
                    {id: 5, name: '乒乓球', ballClass: 'iconfont icon-pingpangqiu ball_icon', msgNum: '5'},
                ]
            }
        },
        methods: {
            goTo(type,name) {
              //console.log(type.tabType);
              //console.log(index);
                this.$router.push({name:'tabType',params:{'tabType':type.tabType,'ballName':name}})
            }
        }
    }
</script>

<style lang="scss">
    .el-badge__content {
        background-color: $home-color;
        border-radius: .15rem;
        font-size: .11rem;
        border: none;
    }
    .el-badge__content.is-fixed {
        top: .03rem;
        right: .14rem;
    }
</style>

<style scoped lang="scss">
    .ball_container{
        height: $single-box-height;
        position: relative;
        width: 6 * $single-box-width + 7 * $single-box-margin;
        white-space: nowrap;
        margin-bottom: .2rem;
        background-color: #fff;
        .single_ball {
            float: left;
            margin-right: $single-box-margin;
            margin-top: .15rem;
            border-radius: .1rem;
            width: $single-box-width;
            height: $single-box-height;
            text-align: center;
            background: linear-gradient(#D1D1D1,#EFEEEE,#F6F6F6);
            position:relative;
            display:table;
            .inner_box {
                display:table-cell;
                vertical-align: middle;
            }
            .ball_icon {
                font-size: .4rem;
            }
            .ball_text {
                display: block;
            }
        }
        .single_ball:first-child {
            margin-left: $single-box-margin;
        }
        .badge_style {
            margin-top: .1rem;
            margin-right: .4rem;
        }
    }

</style>
