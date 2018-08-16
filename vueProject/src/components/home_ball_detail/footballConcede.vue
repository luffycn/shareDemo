<template>
  <div class="concede">
    <div class="concede-title">让球<span class="iconfont icon-shuaxin bottom-arrow"></span></div>
    <div class="concede-name">
      <div>曼联</div>
      <div>皇家马德里</div>
    </div>
    <ul>
      <li class="concede-item" v-for="item in concedeDetail">
        <div class="concede-item-left">
          <div>{{item.m_f_g}}</div>
          <div>{{item.m_t_g}}</div>
        </div>
        <div class="concede-item-right">
          <div>{{item.m_f_l}}</div>
          <div>{{item.m_t_l}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        concedeDetail:[
          {'m_f_g':'+1','m_t_g':1.85,'m_f_l':'-1','m_t_l':2.07},
          {'m_f_g':'+1/0.5','m_t_g':1.85,'m_f_l':'-1/0.5','m_t_l':2.07},
          {'m_f_g':'+1','m_t_g':1.85,'m_f_l':'-1','m_t_l':2.07},
          {'m_f_g':'+1','m_t_g':1.85,'m_f_l':'-1','m_t_l':2.07},
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
  .concede{width: 100%;height: 2.19rem;background: #ffffff;font-size: 0.13rem;
    .concede-title{box-sizing:border-box;height: 0.36rem;text-align: center;line-height: 0.36rem;
      border-bottom: 0.01rem solid #F2F4F3;font-size: 0.14rem;color: #333333;position: relative;
      .bottom-arrow{font-size: 0.19rem;color: #999999;position: absolute;top: 50%;right: 0.14rem;transform: translate(0,-50%)}
    }
    .concede-name{box-sizing:border-box;height: 0.36rem;line-height:0.36rem;display: flex; border-bottom: 0.01rem solid #F2F4F3;font-size: 0.13rem;color: #666666;text-align: center;
      div:nth-child(1){box-sizing:border-box;width: 1.88rem;border-right: 0.01rem solid #F2F4F3}
      div:nth-child(2){box-sizing:border-box;width: 1.87rem}
    }
    .concede-item{height: 0.36rem;line-height:0.36rem;display: flex; border-bottom: 0.01rem solid #F2F4F3;
      .concede-item-left,.concede-item-right{box-sizing:border-box;width: 1.88rem;display: flex;
        div:nth-child(1){box-sizing:border-box;width: 50%;text-align: right;margin-right: 0.05rem;font-size: 0.11rem;color: #999999}
        div:nth-child(2){box-sizing:border-box;width: 50%;margin-left: 0.05rem;font-size: 0.13rem;color: #333333}
      }
      .concede-item-left{border-right: 0.01rem solid #F2F4F3;}
    }
    .concede-item:last-child{border-bottom:none}
  }
</style>
