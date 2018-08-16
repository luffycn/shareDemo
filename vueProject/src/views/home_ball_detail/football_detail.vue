<template>
  <div class="football-detail">
    <div class="detail-top"></div>
    <el-tabs stretch>
      <el-tab-pane label="所有盘口">
        全部
      </el-tab-pane>
      <el-tab-pane label="全场让球">今日</el-tab-pane>
      <el-tab-pane label="全场大小">昨日</el-tab-pane>
      <el-tab-pane label="上半场">其他</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

  export default {

    data() {
      return {

      };
    },
    components: {

    },

    mounted(){

    }

  };
</script>

<style scoped lang='scss'>
  .football-detail{width: 100%;height: 100%;font-size: 0.13rem;
    .detail-top{width: 100%;height: 1.84rem;margin-bottom: 0.15rem}
  }
</style>
