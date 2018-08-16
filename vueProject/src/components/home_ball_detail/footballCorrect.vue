<template>
  <div class="correct">
    <div class="correct-title">让球<span class="iconfont icon-shuaxin bottom-arrow"></span></div>
    <div class="correct-content">
      <div class="correct-hometeam">
        <ul>
          <li class="hometeam-item">主队</li>
          <li class="hometeam-items" v-for="item in correctDetail">
            <div>{{item.q}}</div>
            <div>{{item.w}}</div>
          </li>
        </ul>
      </div>
      <div class="correct-drawngame">3</div>
      <div class="correct-guestteam">1</div>
    </div>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        correctDetail:[
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'1:0','w':1.85},
          {'q':'','w':null},
        ]
      };
    },
    components: {

    },

    mounted(){

    }

  };
</script>

<style scoped lang='scss'>
  .correct{width: 100%;height: 4.31rem;background: #ffffff;font-size: 0.13rem;
    .correct-title{box-sizing:border-box;height: 0.36rem;text-align: center;line-height: 0.36rem;
      border-bottom: 0.01rem solid #F2F4F3;font-size: 0.14rem;color: #333333;position: relative;
        .bottom-arrow{font-size: 0.19rem;color: #999999;position: absolute;top: 50%;right: 0.14rem;transform: translate(0,-50%)}
    }
    .correct-content{display: flex;
      .correct-hometeam{width: 1.25rem;
        .hometeam-item{box-sizing: border-box;height: 0.36rem;text-align: center;line-height: 0.36rem;
          font-size: 0.13rem;color: #666666;border-right: 0.01rem solid #F2F4F3;border-bottom: 0.01rem solid #F2F4F3;}
        .hometeam-items{box-sizing: border-box;height: 0.36rem;border-right: 0.01rem solid #F2F4F3;
          border-bottom: 0.01rem solid #F2F4F3;display: flex;justify-content: space-around;align-items: center;
          div:nth-child(1){font-size: 0.11rem;color: #999999}
          div:nth-child(2){font-size: 0.13rem;color: #333333}
        }
        .hometeam-items:last-child{border-bottom: none;height: 0.35rem}
      }
      .correct-drawngame{width: 1.24rem}
      .correct-guestteam{width: 1.25rem;background: red;}
    }
  }
</style>
