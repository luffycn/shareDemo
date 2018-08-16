<template>
  <div class="arcontent">
    <h1>{{pageData.title}}</h1>
    <article v-html="pageData.mes"></article>
    <div class="lk"></div>
  </div>
</template>

<script>
export default {
  name: 'arcontent',
  data () {
    return {
    }
  },
  computed:{
    pageData(){
      return this.$route.params;
    }
  },
  mounted(){
    if(!this.$route.params.mes){
        this.$router.replace('/index/home')
    }
  }
}
</script>

<style lang='scss' scoped>
.arcontent{font-size: .10rem;height: 100%;
  h1{text-align: center;margin-top: .1rem}
  article{margin-top: .2rem;text-indent:2em;}
  code{user-select:text;word-break: break-all;display: block;font-size: .08rem;line-height: 22px;overflow-x: auto;white-space: pre;word-wrap: normal;border-radius: 4px;padding: 8px;background: #f3dcb3a8}
}
.lk{height:150px;width: 66%;float: left;}

// .lk{height:150px;width: 66%;float: left;}

 
</style>
