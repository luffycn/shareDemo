<template>
  <div class="text-content">
    <router-link :to="{name:'arcontent',params:textData}" >
      <div class="text-box">
        <h1>{{textData.title}}</h1>
        <div v-if="textData.imgType!='noImg'" :class="textData.imgType == 'bigImg'?'big-img pc-opacity':'sm-img pc-hover'" >
          <img :src=textData.imgUrl>
        </div>
        <p>{{textData.mes}}</p>
        <p class="messe">
          <i class="iconfont icon-yonghu01"></i>{{textData.user}}
          <i class="iconfont icon-icon"></i>{{textData.textType}}
          <i class="iconfont icon-shijian"></i>{{textData.creatTime}}
          <i class="iconfont icon-yuedu"></i>{{textData.reader}}已阅读
          <i class="iconfont icon-dianzan21"></i>{{textData.great}}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'textContent',
  data () {
    return {
    }
  },
  props:{
      textData: {
      type: Object,
    }
  },
  mounted(){
  }
}
</script>
<style lang='scss' scoped>
.text-content{font-size: .10rem;margin-top:.1rem;width: 66%;float: left;background: white;
  .text-box{padding:.08rem;overflow: hidden;padding-bottom: 20px;box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1);transition: all 0.6s ease;
    h1{font-size: .12rem;border-bottom: 1px solid #bb9860;color: #555;}
    .sm-img{float: left;width: 25%;max-height: 170px;margin-right: .1rem;margin-top:.1rem;display: block;overflow: hidden;
      img{width: 100%;height: 100%;}
    }
    .big-img{width: 100%;max-height: 170px;margin-right: .1rem;margin-top:.1rem;display: block;overflow: hidden;
      img{width: 100%;height: 100%;}
    }
    p{font-size: .07rem;color: #566573;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;display: -webkit-box;-webkit-line-clamp: 3;margin-top: .1rem;}
       .messe{font-size: .06rem}
    .iconfont{font-size: .08rem!important;margin:0 .02rem 0 .07rem;vertical-align: text-top;}
  }
}

 
</style>
