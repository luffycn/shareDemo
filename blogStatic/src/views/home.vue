<template>
  <div class="home" v-if="isReady">
    <div class="pc-box">
      <div class="carbox">
        <el-carousel height="100%">
          <el-carousel-item v-for="(item,index) in carimges" :key="index">
            <router-link :to="{name:'arcontent',params:item}" >
              <img class="carimges" :src=item.img>
            </router-link>
             <p>{{item.title}}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="adpic pc-opacity">
        <img :src="adpics.img[0]" >
        <p>{{adpics.mes[0]}}</p>
      </div>
      <div class="adpic pc-opacity">
        <img :src="adpics.img[1]" >
        <p>{{adpics.mes[1]}}</p>
      </div>
    </div>
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
  name: 'home',
  data () {
    return {
      carimges:[
      ],
      adpics:{},
      textContentData:[],
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
.el-carousel{height: 100%;}
.home{font-size: .10rem;height: 100%;padding-top:.1rem;
  .pc-box{height:44%!important;}
  .carbox{display: inline-block;width:66%;height: 100%;overflow: hidden;float:left;
    .carimges{width: 100%;height: 100%;position: relative;}
     p{position: absolute;bottom: .25rem;left: 0;text-align: center;width: 100%;background: rgba(0, 0, 0, 0.536);color: white;font-size: .14rem;padding: 
    .03rem 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  }
  .adpic{width: 32%;float: right;height: 48%;margin-bottom:1.2%;
    img{width: 100%;height: 100%;}
    p{position: absolute;bottom: 0;left: 0;text-align: center;width: 100%;background: rgba(0, 0, 0, 0.536);color: white;font-size: .1rem;padding: 
    .03rem 0;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
  }
  .comtent-box{display: block;width: 100%;overflow: hidden;}
  .right-box{margin-top:.1rem;width: 26%;float: right;background: white;padding: 2% 3%;box-shadow:0 2px 5px 0 rgba(146, 146, 146, .1);}
}

.lk{height:150px;width: 66%;float: left;}

 
</style>
