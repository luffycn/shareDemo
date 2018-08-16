<template>
  <div class="study" v-if="isReady">
    <div class="comtent-box">
      <div class="right-box">
        <right-content></right-content>
      </div>
      <text-content v-for="(arr,index) in textContentData" :key="index" :textData=arr></text-content>
      <div class="lk"></div>
    </div>
  </div>
</template>

<script>
import textContent from '@/components/textContent'
import rightContent from '@/components/rightContent'
import Axios from '@/js/public/api'
export default {
  name: 'study',
  data () {
    return {
      carimges:[],
      adpics:{},
      textContentData: [],
      isReady:false
    }
  },
  components:{
    textContent,rightContent
  },
  mounted(){
    let that = this;
    Axios('get','/home/getPageData','',function(data){
      that.carimges=data.carData;
      that.adpics=data.spcData;
      that.textContentData = data.listData;
      that.isReady=true;
    })
  }
}
</script>

<style lang='scss' scoped>
.study{font-size: .10rem;height: 100%;
  .comtent-box{display: block;width: 100%;overflow: hidden;}
  .right-box{margin-top:.1rem;width: 26%;float: right;background: white;padding: 2% 3%;box-shadow:0 2px 5px 0 rgba(146, 146, 146, .1);}
}



.lk{height:150px;width: 66%;float: left;}

 
</style>
