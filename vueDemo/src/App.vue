<template>
  <div id="app" class="clearfix">
    <router-view></router-view>
  </div>  
    <!--<router-view name = 'hasTabbar'></router-view>-->
</template>
<script>
  export default {
    name: 'app',
    components:{
        // Sellindex
    }
     //页面刷新时回到首页
   // beforeCreate:function(){this.$router.push('/')}
  }
</script>
<style>
  
</style>
