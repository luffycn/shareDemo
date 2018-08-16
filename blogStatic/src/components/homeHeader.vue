<template>
  <div class="home-index">
    <div class="home-header pc-box">
      <i class="iconfont icon-boke"></i>
      <div class="pc-header">
          <li>
            <router-link to='/index/home'>
              <a><i class="iconfont icon-weibiaoti1" :class="topChose==1?'com-chose-font-color':'com-hover-font-white'"></i></a>
            </router-link>
          </li>
          <li>
            <router-link to='/index/study'>
             <a><i class="iconfont icon-xuexi" :class="topChose==2?'com-chose-font-color':'com-hover-font-white'"></i></a>
            </router-link>
          </li>
          <li>
            <a><i class="iconfont icon-xiuxian" :class="topChose==3?'com-chose-font-color':'com-hover-font-white'"></i></a>
          </li>
          <li>
            <a><i class="iconfont icon-liuyan" :class="topChose==4?'com-chose-font-color':'com-hover-font-white'"></i></a>
          </li>
          <li>
            <a><i class="iconfont icon-jianli" :class="topChose==5?'com-chose-font-color':'com-hover-font-white'"></i></a>
          </li>
        </div>
    </div>
  </div>
  
</template>

<script>
import {storages} from '@/js/public/port'
export default {
  name: "homeHeader",
  data() {
    return {
    };
  },
  computed:{
    topChose(){
      return this.$store.state.headStatus;
    }
  }
};
</script>

<style lang='scss' scoped>
$proColor:#bb9860;
.pc-box{width: 80%;max-width: 1140px;margin: 0 auto;}
.home-index{width: 100%;background: #000;position: fixed;top: 0;left: 0;z-index:10;}
.home-header::after{content: '';background:url(../../static/imges/log.jpg) 0 3px/100% 100% no-repeat;width: .4rem;height: .4rem;display: block;position: absolute;left: .0rem;top: 0;bottom: 0;margin: auto}
.home-header::before{font-size: .12rem;content: 'Luffy';color: $proColor;position: absolute;left: .4rem;top: 0;bottom: 0;margin: auto;width: 1.5rem;height: .1rem;}
.icon-boke{position: absolute;top:.16rem;left: .72rem;color: $proColor}



</style>
