<template>
  <div id="loading">
    <div class="loading-box">
      <div class="xzbox">
        <i class="iconfont icon-loading"></i>
      </div>
      <div class="shadom"></div>
    </div>
    <div class="loadlite">
      <span>加载中</span>
      <div class="animition1"></div>
      <div class="animition1"></div>
      <div class="animition1"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'refresh',
  }
</script>

<style scoped lang='scss'>
  #loading{font-size: .13rem;position: relative;width: 100%;height: 40px;}
  .loading-box{position: absolute;left: 41%;top: 50%;transform:translate(-50%,-50%);color: $home-color;text-align: center;
    .xzbox{animation: football .7s infinite linear;position: relative;
      .icon-loading{font-size: .25rem;}
    }
    .shadom{width: .1rem;height: .04rem;background: #dddddd;display: block;position: absolute;margin: auto;top:25px;left: 0;right: 0;
      border-radius: 50%;z-index: -1;animation: shadomfra .7s infinite linear;animation-delay:.4s;}
  }
  .loadlite{position: absolute;left: 46%;top: 27%;color: $home-color;}

  @keyframes football{
    0%{transform: rotate(0deg);top:0}
    50%{transform: rotate(180deg) ;top:-12px}
    100%{transform: rotate(360deg) ;top:0}
  }

  @keyframes shadomfra {
    0%{width: .1rem}
    50%{width: .15rem}
    100%{width: .1rem}
  }


  @keyframes animi1 {
    0% {
      background: $home-color;
    }
    50% {
      background: none;
    }
    100% {
      background: $home-color;
    }
  }

  .animition1 {
    width: .03rem;
    height: .03rem;
    border-radius: 100%;
    background: $home-color;
    display: inline-block;
    overflow: hidden;
  }
  .animition1:nth-of-type(1) {
    animation: animi1 1s infinite linear;
  }
  .animition1:nth-of-type(2) {
    animation: animi1 1s 0.2s infinite linear;
  }
  .animition1:nth-of-type(3) {
    animation: animi1 1s .3s infinite linear;
  }

</style>

