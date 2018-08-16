/**
 * 首页头部组件
 * Luffy 2018-7-28
 */
<template>
  <div id="home-header">
    <div class="left" v-if="leftOptions" @click="backRouter"><i class="iconfont icon-fanhui"></i></div>
    <slot></slot>
  </div>
</template>

<script>
import {storages} from '@/js/public/port'
export default {
  name: 'homeFotter',
  data(){
    return {
    }
  },
  computed:{
   
  },
  methods:{
    backRouter(){
      this.$router.go(-1)
    }
  },
  props:{
    leftOptions:Boolean
  },
  mounted(){
    
  }
}
</script>

<style scoped lang='scss'>
#home-header{position: relative;width: 100%;height: .4rem;font-size: .13rem;text-align: center;background: $home-top-color;
line-height: .4rem;color: #FFFFFF}
.left{position: absolute;left: .06rem;top: .01rem;}
 

</style>
 
