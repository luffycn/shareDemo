<template>
  <div class="index">
    <home-header></home-header>
    <router-view/>
  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
      homeHeader
  }
}
</script>

<style lang='scss' scoped>
.index{height: 100%;}
</style>
