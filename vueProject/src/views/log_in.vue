<template>
    <div id="log_in">
        <div class="game_logo">
            <i class="iconfont icon-zuqiu icon_logo"></i>
        </div>
        <div class="input_box">
            <el-input type="text" placeholder="请输入账号"  v-model="userName" class="input_account"></el-input>
            <i class="iconfont icon-yonghuming user_icon"></i>
            <el-input type="password" placeholder="请输入密码" v-model="userPwd" class="input_pwd"></el-input>
            <i class="iconfont icon-mima pwd_icon"></i>
            <i class="iconfont icon-yincang hide_pwd" v-if="showPwd" @click="pwdState"></i>
            <i class="iconfont icon-xianshi show_pwd" v-else @click="pwdState"></i>

            <el-button type="primary">登录</el-button>
            <div class="register_box">
                <span class="forget_pwd">忘记密码</span>
                <span class="register">免费注册</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                userName: '',
                userPwd: '',
                showPwd: true
            }
        },
        components: {},
        methods: {
            pwdState() {
                this.showPwd = !this.showPwd;
            }
        }
    }
</script>

<style scoped lang="scss">
    #log_in {
        font-size: 1rem;
        position:absolute;
        width: 100%;
        height: 100%;
        /*background-color: #fff;*/
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        .game_logo {
            width: 100%;
            height: 40%;
            text-align: center;
            position:relative;
            .icon_logo {
                font-size: .7rem;
                color: $home-color;
                position:absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        }
        .input_box {
            flex-grow: 1;
            position: relative;
            .input_account {
                position:relative;
                top: -.6rem;
            }
            .user_icon {
                color: #999999;
                font-size: .21rem;
                position:absolute;
                left:  .3rem;
                top: .16rem;
            }
            .input_pwd {
                position:relative;
                top: -1rem;
            }
            .pwd_icon {
                color: #999999;
                font-size: .21rem;
                position:absolute;
                left:  .3rem;
                top: .9rem;
            }
            .hide_pwd,.show_pwd {
                color: #999999;
                font-size: .21rem;
                position: absolute;
                left: 3.2rem;
                top: .9rem;
            }
            .register_box {
                display: flex;
                flex-direction: row;
                justify-content:space-between;
                padding:0 5%;
                margin-top: -1.1rem;
                .forget_pwd,.register {
                    color: #333333;
                    font-size: .15rem;
                }
            }
        }
    }
</style>

<style lang="scss">
    .el-input__inner {
        width: 90%;
        height: .5rem;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        color: #333333;
        padding-left: .4rem;
        outline:0;
        border: 0;
    }
    .el-button {
        width: 90%;
        height: .5rem;
        position: relative;
        left: 50%;
        top: -1.2rem;
        transform: translateX(-50%);
    }
</style>