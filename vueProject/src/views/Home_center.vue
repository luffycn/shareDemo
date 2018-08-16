<template>
    <div class="home_center">
        <scroller lock-x :height='bodyHeight'>
            <div>
                <!--顶部轮播图-->
                <center-top></center-top>
                <!--中间精选球展示-->
                <div class="center-content">
                    <!--滚球-->
                    <div class="center-content-g">
                        <div class="center-content-title">滚球</div>
                        <ul>
                            <li>
                                <center-content :choiceness='choiceness'></center-content>
                            </li>
                            <li>
                                <center-content :choiceness='choiceness'></center-content>
                            </li>
                        </ul>
                    </div>
                    <!--今日-->
                    <div class="center-content-j">
                        <div class="center-content-title">今日</div>
                        <ul>
                            <li>
                                <center-content :choiceness='choiceness'></center-content>
                            </li>
                            <li>
                                <center-content :choiceness='choiceness'></center-content>
                            </li>
                        </ul>
                    </div>
                    <!---->
                    <div class="info-box">
                      <div class="center-content-info">
                        <div>赛果</div>
                        <div>规则</div>
                        <div>隐私声明</div>
                        <div>博彩责任</div>
                      </div>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>

    import { Scroller } from "vux";
    import { router, CONST, tools, storages, axios, store } from "@/js/public/port";
    import centerContent from '@/components/home/centerContent'
    import centerTop from '@/components/home/centerTop'


    //精选假数据
    let datas  = [{liveTime:"下半场 13:54",hteam:"班特列",gteam:"绿色古利",hscore:1,gscore:0,a_concede_num:"0",a_concede_h:0.88, a_concede_g:1.02, a_dq_num:"1.5 / 2",a_xq_num:"1.5 / 2",a_d_num:0.81,a_x_num:1.07,morePlayNum:6},
        {liveTime:"下半场 13:54",hteam:"班特列",gteam:"绿色古利",hscore:1,gscore:0,a_concede_num:"0",a_concede_h:0.88, a_concede_g:1.02, a_dq_num:"1.5 / 2",a_xq_num:"1.5 / 2",a_d_num:0.81,a_x_num:1.07,morePlayNum:6},
      {liveTime:"下半场 13:54",hteam:"班特列",gteam:"绿色古利",hscore:1,gscore:0,a_concede_num:"0",a_concede_h:0.88, a_concede_g:1.02, a_dq_num:"1.5 / 2",a_xq_num:"1.5 / 2",a_d_num:0.81,a_x_num:1.07,morePlayNum:6}
    ];


    export default {
        components: {

            centerContent,
            centerTop,
            Scroller
        },
        name: "Home",
        data() {
            return {
                choiceness:datas
            };
        },
        computed:{
            bodyHeight(){
                //console.log("高度="+store.state.footHeight+'');
                return  store.state.footHeight+'';

            }
        },
        methods: {
            test() {
                // //get请求示例
                // let url = "";
                // let data = CONST.GETTEST;
                // let type = "get"


                //post示例
                let url = CONST.POSTTEST;
                let data = { dateType: 1, matchType: "TYLM" };
                let type = "post"

                //5个参数：1请求类型;2接口地址;3查询参数;4成功回调;5是否显示加载(默认true)
                this.$api.Axios(type, url, data, function(success, result) {
                    if (success) {
                        console.log(result);
                    }
                });
            }
        },
        mounted(){
            this.$store.commit('homeHeaderControl',{shwoback:false,type:'icon',val:'top-logo',footShow:true});
        }
    };
</script>

<style scoped lang='scss'>
    .home_center {
        font-size: 0.13rem;width: 100%;height: 100%;
    }
    /*中间精选球展示样式*/
    .center-content{
        .center-content-g,.center-content-j{
            .center-content-title{width: 100%;height: 0.4rem;line-height: 0.4rem;padding-left: 0.15rem;font-size: 0.15rem;color: #333333}
            li:nth-child(2){margin-top: 0.13rem}
        }
        .info-box{width: 100%;height: 0.48rem;
          .center-content-info{width: 100%;height: 0.38rem;background: #ffffff;display: flex;margin-top: 0.13rem;justify-content: space-around;align-items: center;  }
        }


    }


</style>
