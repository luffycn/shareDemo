<template>
    <div class="paid_item_box">
        <scroller lock-x :height="bodyHeight" :scrollbar-y="false" :scroll-bottom-offset="200">
            <div class="single_item" v-for="item in gameInfo" >
                <div class="result_line">
                    <span>{{item.team_first_name}}</span>
                    <span class="team_score">{{item.team_score}}</span>
                    <span class="team_vs">VS</span>
                    <span >{{item.team_second_name}}</span>
                </div>
                <p class="game_name">{{item.game_name}}</p>
                <p class="settle_status">
                <span class="game_kind">
                    {{item.game_kind}}
                    <span>（{{item.game_rs}})</span>
                </span>
                    <span class="settle_rs">{{item.settle_rs}}</span>
                </p>
                <p class="team_params">
                    <span class="team_first_name">{{item.team_first_name}}@</span>
                    <span class="bet_rate">{{item.bet_rate}}</span>
                </p>
                <div class="forecast_result">
                    <div class="bet_content">
                        <span class="txt_style">投注额: </span>
                        <span class="bet_num">{{item.bet_num}}</span>
                    </div>
                    <div class="result_content">
                        <span class="txt_style">赢:</span>
                        <span class="win_num">+{{item.win_num}}&nbsp;</span>
                        <span class="txt_style">输:</span>
                        <span class="lose_num">-{{item.lose_num}}&nbsp;</span>
                        <span class="txt_style">平:</span>
                        <span class="tie_num">{{item.tie_num}}</span>
                    </div>
                </div>
                <div class="other_info">
                    <span>{{item.order_num}}</span>
                    <div>
                        <span>{{item.order_time}}</span>
                        <span>（{{item.order_type}}）</span>
                    </div>
                </div>
            </div>
        </scroller>

    </div>
</template>

<script>
    import { Scroller } from 'vux'
    import { store } from "@/js/public/port";

    export default {
        name: '',
        data() {
            return {
                gameInfo: [
                    {id:0, team_first_name:'西部悉尼流浪者',team_score:'0/0.5', team_second_name:'墨尔本城', game_name:'澳洲维多利亚国家超级联赛',game_kind:'足球-滚球-让球',game_rs:'1：0',settle_rs:'已结算',bet_rate:'0.92',bet_num:'100.00',win_num:'220.00',lose_num:'100.00',tie_num:'0.00',order_num:'VQEB100000000051643',order_time:'07-04 11:08',order_type:'香港盘'},
                    {id:1, team_first_name:'西部悉尼流浪者',team_score:'0/0.5', team_second_name:'墨尔本城', game_name:'澳洲维多利亚国家超级联赛',game_kind:'足球-滚球-让球',game_rs:'1：0',settle_rs:'已结算',bet_rate:'0.92',bet_num:'100.00',win_num:'220.00',lose_num:'100.00',tie_num:'0.00',order_num:'VQEB100000000051643',order_time:'07-04 11:08',order_type:'香港盘'},
                    {id:2, team_first_name:'西部悉尼流浪者',team_score:'0/0.5', team_second_name:'墨尔本城', game_name:'澳洲维多利亚国家超级联赛',game_kind:'足球-滚球-让球',game_rs:'1：0',settle_rs:'已结算',bet_rate:'0.92',bet_num:'100.00',win_num:'220.00',lose_num:'100.00',tie_num:'0.00',order_num:'VQEB100000000051643',order_time:'07-04 11:08',order_type:'香港盘'},
                    {id:3, team_first_name:'西部悉尼流浪者',team_score:'0/0.5', team_second_name:'墨尔本城', game_name:'澳洲维多利亚国家超级联赛',game_kind:'足球-滚球-让球',game_rs:'1：0',settle_rs:'已结算',bet_rate:'0.92',bet_num:'100.00',win_num:'220.00',lose_num:'100.00',tie_num:'0.00',order_num:'VQEB100000000051643',order_time:'07-04 11:08',order_type:'香港盘'},
                    {id:4, team_first_name:'西部悉尼流浪者',team_score:'0/0.5', team_second_name:'墨尔本城', game_name:'澳洲维多利亚国家超级联赛',game_kind:'足球-滚球-让球',game_rs:'1：0',settle_rs:'已结算',bet_rate:'0.92',bet_num:'100.00',win_num:'220.00',lose_num:'100.00',tie_num:'0.00',order_num:'VQEB100000000051643',order_time:'07-04 11:08',order_type:'香港盘'},
                ]
            }
        },
        components: {Scroller},
        computed: {
            bodyHeight(){
                console.log("高度="+store.state.footHeight+'');

                return  store.state.footHeight - 55 + '';
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .paid_item_box {
        font-size: 1rem;
        margin: .15rem;
        .single_item {
            margin-bottom: .15rem;
            background-color: #fff;
            padding: .15rem;
            border-radius: 5px;
            .result_line {
                font-size: .14rem;
                color: #333333;
                border-bottom: 1px solid #F1F3F3;
                padding-bottom: .15rem;
                .team_score {
                    color: $home-color;
                    display: inline-block;
                    margin-right: .1rem;
                }
                .team_vs {
                    display: inline-block;
                    margin-right: .1rem;
                }
            }
            .game_name {
                font-size: .12rem;
                color: #333333;
                padding: .10rem 0;
            }
            .settle_status {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: .12rem;
                padding-bottom: .1rem;
                .game_kind {
                    color: #999999;
                }
                .settle_rs {
                    color: #333333;
                }
            }
            .team_params {
                font-size: .12rem;
                padding-bottom: .1rem;
                .team_first_name {
                    color: $home-color;
                }
                .bet_rate {
                    display: inline-block;
                    background-color: $home-color;
                    color: #ffffff;
                    width: .33rem;
                    height: .16rem;
                    line-height: .16rem;
                    text-align: center;
                    border-radius: 10px;
                    margin-left: .1rem;
                }
            }
            .forecast_result {
                font-size: .12rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding-bottom: .1rem;
                .bet_content {
                    .txt_style {
                        color: #999999;
                    }
                    .bet_num {
                        color: #333333;
                    }
                }
                .result_content {
                    .win_num {
                        color: #14C85C;
                    }
                    .lose_num {
                        color: #B1192B;
                    }
                    .tie_num {
                        color: $home-color;
                    }
                }
            }
            .other_info {
                font-size: .12rem;
                color: #999999;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
</style>

<style lang="scss">
    .el-tab-pane {
        background-color: transparent;
    }
</style>