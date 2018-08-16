<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    document.addEventListener('touchmove',(e)=>{
       event.preventDefault();
    }, { passive: false });
  }
}
</script>

<style lang='scss'>

</style>
