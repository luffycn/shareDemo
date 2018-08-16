<template>
  <div id="app">
    <div :class=changeImg></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      changeImg:''
    }
  },
  watch:{
  $route(to,from){
    switch(to.path){
      case '/index/home':
      this.changeImg ='';
      this.$store.commit('changeHeadStatus',1)
      break;
      case '/index/study':
      this.changeImg ='header-img'
      this.$store.commit('changeHeadStatus',2)
      break;
      case '/index/arcontent':
      this.changeImg ='header-img1'
      this.$store.commit('changeHeadStatus',2)
      break;
      default:
      this.$store.commit('changeHeadStatus',1)
      break;
    }
  }
},
}
</script>

<style>
@import './scss/pcsubject.scss'; /*引入公共样式*/
 #app{height: 100%;}
 .header-img{height: .9rem;background: url(../static/imges/head.jpg) no-repeat;background-size: cover;background-position: top center;}
 .header-img1{height: .9rem;background: url(../static/imges/page_time.jpg) no-repeat;background-size: cover;background-position: top center;}

 
</style>
