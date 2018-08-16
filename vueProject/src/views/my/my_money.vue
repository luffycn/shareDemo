/**
 * 首页底部选项卡:钱包记录
 * Luffy 2018-7-28
 */
<template>
  <div id="My_money">
    <el-tabs stretch v-model="activeName">
      <refresh class="test" :style="{top:top+'px'}" ref="refresh"></refresh>
      <el-tab-pane label="24小时" name="min-hour">
        <scroller lock-x :height='bodyHeight'>
          <div>
            <ul class="my_money_content" @touchstart="handTouch($event)" @touchmove="handMove($event)" @touchend="handEnd()">
              <li class="content-list" v-for="item in liItem">
                <div class="content-left">
                  <div>
                    <span class="content-time">{{item.liTime}}</span>
                  </div>
                  <div style="margin-left: 0.3rem">
                    <div class="content-name">{{item.liType}}</div>
                    <div class="content-money"><span style="font-size: 0.12rem">¥</span> {{item.liMoney}}</div>
                  </div>
                </div>
                <div class="content-right" style="color: #09D577" v-if="item.liState === 0">成功</div>
                <div class="content-right" style="color: #D50926" v-else-if="item.liState === 1">失败</div>
                <div class="content-right" style="color: #999999" v-else="item.liState === 2">取消</div>
              </li>
            </ul>
          </div>
        </scroller>
      </el-tab-pane>
      <el-tab-pane label="48小时" name="max-hour">今日</el-tab-pane>
      <el-tab-pane label="本周" name="week">昨日</el-tab-pane>
      <el-tab-pane label="本月" name="month">其他</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { Scroller } from "vux";
  import { router, CONST, tools, storages, axios, store } from "@/js/public/port";
  import refresh from '@/components/refresh'
export default {
  name: 'My_money',
  components:{Scroller,refresh},
  data(){
    return {
      liItem:[
        {liId:0,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:0},
        {liId:1,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:1},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2},
        {liId:2,liTime:'02-01 12:20',liType:'注单派彩',liMoney:'600.00',liState:2}
      ],
      activeName:'min-hour',
      top: -40,
      startY: 0,          // 保存 y轴点的位置
      touching: false,    //下拉刷新状态
    }
  },

  methods:{
    //手指触碰事件
    handTouch(e){
      this.startY = e.targetTouches[0].pageY;//记录y轴点位置
      this.touching = true;   // 开启下拉刷新状态
      //console.log(this.startY);
    },

    //手指移动事件
    handMove(e) {
      if(!this.touching) return;
      //拿到transform的translateY的值，判断不让在页面中间刷新
      let el = getComputedStyle(document.getElementsByClassName('xs-container')[0]).transform;
      let translateY = el.replace(/[^0-9\-,]/g,'').split(',')[5];
      //console.log(translateY);
      if(translateY > 0){
        let diff = e.targetTouches[0].pageY - this.startY; 　// 获取移动的距离
        //判断是向上拉还是向下拉
        if(diff >0) {
          e.preventDefault();
          this.$refs.refresh.$el.style.display = "block"; //显示下拉组件
          this.top = this.top+Math.floor(diff*0.35);  //改变top
          //让top最多为5
          if(this.top >=5 ){
            this.top = 5;
          }else{
            this.$refs.refresh.$el.style.display = "none";
            this.top = -40;
            return;
          }
        } else {
          return;
        }
      }else{
        return;
      }
    },

    //结束事件
    handEnd() {
      this.touching = false;
      // 判断this.top的值
      if(this.top >= 5) {
        console.log('刷新成功');
//        this.top = -40;
//        this.$refs.refresh.$el.style.display = "none";
//        setTimeout(function(){
//          console.log('刷新成功');
//          this.top = -40;
//          this.$refs.refresh.$el.style.display = "none";
//        },3000)
      } else {
//        this.top = -40;
//        this.$refs.refresh.$el.style.display = "none";

      }
    },


  },
  mounted(){
    this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'钱包记录',footShow:false});
    //DOM更新完成后调用传入高度
    this.$nextTick(function () {
      let height = document.getElementsByClassName('el-tabs__item')[0].clientHeight;
      this.$store.commit('mathSpcFootHeight',height)
    })
  },
  computed:{
    bodyHeight(){
     return -this.$store.state.footSpcheight+'';
    }
  },
}
</script>


<style scoped lang='scss'>
  @import '../../scss/my/my_money';
</style>

<style lang='scss'>
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
    /*.el-tabs__item.is-top.is-active*/
  }
</style>
