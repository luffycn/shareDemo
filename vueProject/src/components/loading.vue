<template>
  <div id="loading">
    <div class="loading-box">
      <div class="xzbox">
       <i class="iconfont icon-loading"></i>
      </div>
      <div class="shadom"></div>
      <div class="loadlite">
        <span>加载中</span>
        <div class="animition1"></div>
        <div class="animition1"></div>
        <div class="animition1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
}
</script>

<style scoped lang='scss'>
#loading{font-size: .13rem;position: fixed;width: 100%;height: 100%;background: #bbbbbb4b;top: 0;left: 0;}
// animation: football .5s infinite linear;
.loading-box{position: fixed;margin: auto;left: 0;right: 0;top: 0;bottom: 0;width: .9rem;height: .9rem;overflow: inherit;color: $home-color;text-align: center;
background:rgba(255, 255, 255, 0.85);border-radius: 10px;
  .xzbox{animation: football .7s infinite linear;position: relative;top:0;margin-top:.17rem;
    .icon-loading{font-size: .36rem;}
  }
  .shadom{width: .12rem;height: .05rem;background: #dddddd;display: block;position: absolute;margin: auto;left: 0;right: 0;top: .48rem;
  border-radius: 50%;z-index: -1;animation: shadomfra .7s infinite linear;animation-delay:.4s;}
  .loadlite{text-align: center;margin-top: .03rem}
}  

@keyframes football{
  0%{transform: rotate(0deg);top:0}
  50%{transform: rotate(180deg) ;top:-12px}
  100%{transform: rotate(360deg) ;top:0}
}

@keyframes shadomfra {
  0%{width: .15rem}
  50%{width: .25rem}
  100%{width: .15rem}
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
 
