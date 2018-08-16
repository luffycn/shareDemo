<template>
  <div class="right-content">
    <div class="zhuanti pc-border-hover">
      <h2 class="hometitle">特别推荐</h2>
      <ul>
        <li v-for="(arr,index) in spc" :key="index">
          <i class="pc-opacity">
            <img :src='arr.imgUrl' >
          </i>
          <p>
            {{arr.title}}
            <span class="shaling" ><a :href=arr.url>阅读</a></span>
          </p>
        </li>
      </ul>
    </div>

    <div class="zhuanti pc-border-hover">
      <h2 class="hometitle">点击排行</h2>
      <ul>
        <li>
          <i class="pc-hover">
            <img :src='spccli.first.imgUrl'>
          </i>
           <h3 class="first-title">{{spccli.first.title}}</h3>
        </li>
      </ul>
      <ul class="sidenews">
        <li v-for="(arr,index) in spccli.othe" :key="index">
          <i class="pc-hover">
            <img :src="arr.imgUrl">
          </i>
          <h4>
            <a href="">{{arr.title}}</a>
          </h4>
          <span>{{arr.time}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightContent',
  data () {
    return {
      spc:[
        {imgUrl:'./static/imges/banner01.jpg',title:'VUE资源集合',url:''},
        {imgUrl:'./static/imges/text01.jpg',title:'动画特效demo',url:''},
        {imgUrl:'./static/imges/b07.jpg',title:'cavas绘画',url:''}
      ],
      spccli:{
        first:{imgUrl:'./static/imges/text01.jpg',title:'移动web开放注意事项',url:''},
        othe:[
          {imgUrl:'./static/imges/11.jpg',title:'formitable中文API',time:'2017-06-13',url:''},
          {imgUrl:'./static/imges/b06.jpg',title:'vue脚手架正确流程',time:'2017-11-22',url:''},
          {imgUrl:'./static/imges/text02.jpg',title:'动画特效demo',time:'2018-05-07',url:''},
        ]
      }
    }
  },
  mounted(){
  }
}
</script>
<style lang='scss' scoped>
.right-content{font-size: .10rem;
  .zhuanti{margin-bottom: 20px;overflow: hidden;
    .hometitle{font-size: 18px;color: #282828;font-weight: 600;margin: 0;text-transform: uppercase;padding-bottom: 15px;margin-bottom: 25px;position: relative;
      &::after{content: "";background-color: #282828;left: 0;width: 50px;height: 2px;bottom: 0;position: absolute;transition: 0.5s;}
    }
    ul{width: 100%;overflow: hidden;display: block;clear: both;
      li{margin: 0 0 20px 0;overflow: hidden;position: relative;
        i{display: block;
          img{display: block;height:100%;width: 100%;transition: all .5s ease;}
        }
        p{pointer-events:none;position: absolute;top: 30%;left: 0;right: 0;color: #FFF;text-align: center;font-size: 15px;overflow: hidden;margin-top: 5px;padding: 0 40px;
          span{width: 80px;margin: 10px auto;background: transparent;font-size: 12px;border: 1px solid #FFF;border-radius: 40px;padding: 4px 0;color: #FFF;display: block;
          clear: both;transition: all .3s ease;
            a{color: #fff}
          }
        }
      }
    }
  }
  .pc-opacity::after{height: 100%;}
  .shaling{pointer-events: auto}
  .shaling:hover{background: white;}
  .shaling:hover>a{color: black}

  
  .first-title{pointer-events: none;position:absolute;font-style: normal;background:rgba(0,0,0,0.7);padding: 6px 0!important;color: white;text-align: center;font-size: .08rem;font-weight: normal;width: 100%;bottom: 0;}
  
  .sidenews{
    li{margin: 0 0 20px 0;overflow: hidden;
      i{width: 100px;height: 75px;overflow: hidden;display: block;border: #efefef 1px solid;float: left;margin-right: 10px;
        img{height: 100%;max-height: 75px;margin: auto;transition: all .5s ease;}
      }
      h4{line-height: 24px;color: #888;font-size: 15px;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical;display: -webkit-box;-webkit-line-clamp: 2;
        a{color: #48494d}
      }
      span{font-size: 12px;color: #9A9A9A;margin-top: 10px;display: block;}
    }
  }
}

 
</style>
