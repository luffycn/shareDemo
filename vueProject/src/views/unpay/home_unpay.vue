<template>
  <div id="My_index">
  </div>
</template>

<script>
export default {
  name: 'My_index',
  data(){
    return {
    }
  },
  methods:{
  },
   mounted(){
    this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'未结算',footShow:true});
  }
}
</script>

<style scoped lang='scss'>
    #My_index{font-size: .13rem;}
</style>

