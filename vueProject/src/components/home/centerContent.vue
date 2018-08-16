<template>
  <div class="center-content">
    <ul>
      <li class="center-content-li-first">
        <div class="center-content-left">
          <span class="iconfont icon-lanqiu center-content-img"></span>
          <span class="center-content-span">足球</span>
        </div>
        <div class="center-content-center">
          <span>全场让球</span>
          <span>全场大小</span>
        </div>
        <div style="width: 0.45rem"></div>
      </li>
      <!--第一场-->
      <li class="center-content-li-two" v-for="(item,index) in dataInfo" :key="index">
        <!--中左1-->
        <div class="center-content-two-left">
          <div class="center-content-left-first">
            <!--{{item.liveTime}}-->
            <div>
              <span class="first-time-top">下半场</span>
              <span class="first-name-top">{{item.hteam}}</span>
            </div>
            <div class="first-score">{{item.hscore}}</div>
          </div>
          <div class="center-content-left-two">
            <div>
              <span class="first-time-top">63:25</span>
              <span class="first-name-top">{{item.gteam}}</span>
            </div>
            <div class="first-score">{{item.gscore}}</div>
          </div>
          <div class="center-content-left-three">
            <img src="../../../static/imgs/home/football-field2@2x.png" alt="">
            <span>和局</span>
          </div>
        </div>
        <!--中左2-->
        <!--<div class="center-content-two-left">-->
          <!--<div class="center-content-left-first">-->
            <!--<div><span class="first-name-top">{{item.hteam}}</span></div>-->
            <!--<div class="first-score">{{item.hscore}}</div>-->
          <!--</div>-->
          <!--<div class="center-content-left-two">-->
            <!--<div><span class="first-name-top">{{item.gteam}}</span></div>-->
            <!--<div class="first-score">{{item.gscore}}</div>-->
          <!--</div>-->
          <!--<div class="center-content-left-three2">-->
            <!--<span>第一节</span><span style="margin-left: 0.05rem">10:30</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--中中-->
        <div class="center-content-two-center">
          <!--全场让球-->
          <div class="center-first-concede">
            <div>
              <span class="concede-first">{{item.a_concede_num}}</span>
              <span class="concede-two">{{item.a_concede_h}}</span>
            </div>
            <div>
              <span class="size-first">{{item.a_dq_num}}</span>
              <span class="concede-two">{{item.a_d_num}}</span>
            </div>
          </div>
          <!--全场大小-->
          <div class="conter-two-concede">
            <div>
              <span class="concede-first">{{item.a_concede_num}}</span>
              <span class="concede-two">{{item.a_concede_g}}</span>
            </div>
            <div>
              <span class="size-first">{{item.a_xq_num}}</span>
              <span class="concede-two">{{item.a_x_num}}</span>
            </div>
          </div>
        </div>
        <!--中右-->
        <div class="center-content-three-right">
          <div>
            <span>+{{item.morePlayNum}}</span>
          </div>
        </div>
      </li>
      <li class="center-content-li-three">
        <div>
          <span>所有足球滚球</span><span style="color: #999999;margin-left: 5px">(2场)</span>
          <span class="iconfont icon-youjiantou center-content-li-three-img"></span>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    props:['choiceness'],
    data() {
      return {
        dataInfo:this.choiceness,
      }
    },
  };
</script>

<style scoped lang='scss'>
  @import '../../scss/centerContent/centerContent';
</style>
