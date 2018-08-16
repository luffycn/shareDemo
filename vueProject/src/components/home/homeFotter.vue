/**
 * 首页底部组件
 * Luffy 2018-7-27
 */
<template>
  <div id="home-fotter" ref="foot">
    <i class="iconfont" :class="[touching=='home_center'?'touches':'',touching=='home_center'?'icon-shouyexuanzhong':'icon-shouye']" @click="changeCard('home_center') "><span>首页</span></i>
    <i class="iconfont" :class="[touching=='home_pay'?'touches':'',touching=='home_pay'?'icon-yijiesuanxuanzhong':'icon-yijiesuan']" @click="changeCard('home_pay')"><span>已结算</span></i>
    <i class="iconfont" :class="[touching=='home_unpay'?'touches':'',touching=='home_unpay'?'icon-weijiesuanxuanzhong':'icon-weijiesuan']" @click="changeCard('home_unpay')"><span>未结算</span></i>
    <i class="iconfont" :class="[touching=='home_mine'?'touches':'',touching=='home_mine'?'icon-wodexuanzhong':'icon-wode']" @click="changeCard('home_mine')"><span>我的</span></i>
  </div>
</template>

<script>
import {storages} from '@/js/public/port'
export default {
  name: 'homeFotter',
  data(){
    return {
      touchVal:"home_center"
    }
  },
  computed:{
    touching(){
     return this.touchVal
    }
  },
  methods:{
    changeCard(val){
      this.touchVal = val;
      storages.setSession('touchStatus',val);
      this.$router.replace(`/home/${val}`)
    }
  },
  mounted(){
    let touchStatus = storages.getSession('touchStatus');
    if(touchStatus)
    this.touchVal = touchStatus;
    this.$store.commit('mathFootHeight',this.$refs.foot.offsetHeight);
  }
}
</script>

<style scoped lang='scss'>
#home-fotter{position: fixed;bottom: 0;left: 0;width: 100%;height: .55rem;font-size: .13rem;border-top: 1px solid #E7E9E9;display: table;text-align: center;background: white;}
#home-fotter>i{font-style: normal;color: #999999;display: table-cell;line-height: .5rem;position: relative;}
.iconfont>span{font-size: .11rem;position: absolute;top: .2rem;left: 0;right:0;margin: auto}
.touches{color:$home-color!important}
</style>

