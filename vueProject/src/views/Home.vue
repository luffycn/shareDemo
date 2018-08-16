<template>
  <div class="home">
      <home-header v-if="homeHeaderConfig.type == 'icon'" :left-options="homeHeaderConfig.shwoback"><i :class="homeHeaderConfig.val"></i></home-header>
      <home-header v-else-if="homeHeaderConfig.type == 'string'" :left-options="homeHeaderConfig.shwoback">{{homeHeaderConfig.val}}</home-header>
      <router-view/>
      <home-fotter v-show="footShow"></home-fotter>
      <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import { XHeader } from "vux";
import homeFotter from '@/components/home/homeFotter';
import homeHeader from '@/components/home/homeHeader';
import loading from '@/components/loading';
export default {
  name: "Home",
  data() {
    return {

    };
  },
  components: {
    XHeader,homeFotter,homeHeader,loading
  },
  computed:{
    homeHeaderConfig(){
      let headcon = this.$store.state.homeHeaderConfig;
      if(headcon)
      return headcon;
      return {
        shwoback: false,
        type: "icon",
        val: "top-logo"
      };
    },
    showLoading(){
      return this.$store.state.showLoading
    },
    footShow(){
      return this.$store.state.homeHeaderConfig.footShow
    }
  },
  mounted(){
  }

};
</script>

<style scoped lang='scss'>

.top-logo {
  width: 1.15rem;
  height: 0.25rem;
  display: block;
  margin: auto;
  background: url(../../static/imgs/home/LOGO@2x.png) 0 0/100% 100% no-repeat;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
</style>
