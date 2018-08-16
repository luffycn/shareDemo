
<template>
  <div class="sports_event">
    <!--顶部-->
    <el-radio-group v-model="nav_label">
      <el-radio-button label="bowls">滚球</el-radio-button>
      <el-radio-button label="today">今日</el-radio-button>
      <el-radio-button label="morningSession">早盘</el-radio-button>
    </el-radio-group>
    <!--球类-->
    <scroller lock-y :scrollbar-x="false">
      <div class="globule">
        <div class="globule-item" v-for="(item,index) in ballKinds" @click="chooseBall(item.name)">
          <span :class="item.ballClass" :style="{color: ballName === item.name ? '#11A7DE' : '#999'}"></span>
          <div class="ball-font" :style="{color: ballName === item.name  ? '#11A7DE' : '#999'}">{{item.name}}</div>
          <div class="line"></div>
        </div>
      </div>
    </scroller>
    <!--滚球(足球)-->
    <div class="football-info">
      <div class="info-name">
        <span class="iconfont icon-shuaxin icon-style"></span>
        <span class="name-font">滚球(足球)</span>
      </div>
      <div class="info-detail">
        <scroller lock-y :scrollbar-x="false">
          <div class="info-box">
            <div>全场独赢</div>
            <div>全场让球</div>
            <div>全场大小</div>
            <div>半场独赢</div>
            <div>半场让球</div>
            <div>半场大小</div>
          </div>
        </scroller>
      </div>
      <div class="info-other"><span class="other">其他</span></div>
    </div>
  </div>
</template>

<script>
  import { Scroller } from "vux";
  export default {
    components: {
      Scroller
    },
    data() {
      return {
        nav_label:this.$route.params.tabType,
        ballName:this.$route.params.ballName,
        ballKinds: [
          {id:0, name:'足球',ballClass:'iconfont icon-zuqiu ball-style'},
          {id:1, name:'篮球', ballClass:'iconfont icon-lanqiu ball-style'},
          {id:2, name:'排球', ballClass:'iconfont icon-paiqiu ball-style'},
          {id:3, name:'网球', ballClass:'iconfont icon-wangqiu ball-style'},
          {id:5, name:'乒乓球',  ballClass:'iconfont icon-pingpangqiu ball-style'},
          {id:4, name:'羽毛球',  ballClass:'iconfont icon-yumaoqiu ball-style'}
        ]
      }
    },
    methods: {
      //球类点击事件
      chooseBall(name) {
        this.ballName = name;
      }
    },
    mounted() {
      this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'',footShow:false});
      //如果传过来的值为undefined,让其显示滚球(bowls)
      if(this.nav_label === undefined){
        this.nav_label = 'bowls'
      }
      //如果传过来的值为undefined,让其显示足球(足球)
      if(this.ballName === undefined){
        this.ballName = '足球'
      }
    }
  }
</script>

<style scoped lang="scss">
  .sports_event{width: 100%;height: 100%;font-size: 0.13rem;
    //球类
    .globule{height: 0.61rem;width:4.14rem;
      .globule-item{box-sizing: border-box;width: 0.69rem;height:100%;display: inline-block;
        float: left;padding: 0.1rem 0.15rem;text-align: center;position: relative;
        .ball-style{font-size: 0.25rem;color: #999999}
        .ball-font{font-size: 0.13rem;color: #999999}
        .line{width: 0.01rem;height: 0.33rem;position: absolute;background: #DCDCDC;top: 0.14rem;right: 0;}
      }
      .globule-item:last-child>.line{display: none}
    }
    //足球
    .football-info{width: 100%;height: 0.38rem;background: #ffffff;display: flex;line-height: 0.38rem;
      .info-name{box-sizing:border-box;width: 1.76rem;display: flex;border-right: 0.01rem solid #F2F4F3;box-shadow: 0 0 0.06rem 0.01rem #F1F1F1;
        .icon-style{font-size: 0.18rem;color: $home-color;margin-left: 0.15rem}
        .name-font{font-size: 0.15rem;color: #333333;margin-left: 0.05rem}
      }
      .info-detail{box-sizing:border-box;width: 1.54rem;border-right: 0.01rem solid #F2F4F3;box-shadow: 0 0 0.08rem 0.02rem #F1F1F1 inset;
        .info-box{box-sizing:border-box;width: 4.48rem;display: flex;justify-content: space-around;font-size: 0.12rem;color: #333333}
      }
      .info-other{width: 0.45rem;.other{font-size: 0.12rem;color: #333333;margin-left: 0.06rem}}
    }
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
</style>
