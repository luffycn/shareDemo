<template>
    <div class="news_item">
        <header class="news_header_line">
            <span class="news_title">消息标题</span>
            <span class="news_date">2018-7-30</span>
        </header>
        <article class="msg_abbr_content" ref="msg_content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi delectus deserunt explicabo facere, fugiat, impedit incidunt,
            ipsam nam nemo obcaecati perferendis quas quia quidem
            quis recusandae sit veniam voluptatem voluptatibus.
        </article>
        <div class="news_sender">
            发件人：管理员
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: '',
        data() {
            return {

            }
        },
        mounted() {
            let content = this.$refs.msg_content.innerText;
//            console.log('content: ',content)
        }
    }
</script>

<style scoped lang="scss">
    .news_item {
        font-size: 1rem;
        margin-top: .12rem;
        background-color: #fff;
        height: 1.2rem;
        .news_header_line {
            display: flex;
            flex-direction:row;
            justify-content:space-between;
            padding: .15rem .2rem ;
            .news_title {
                font-size: .14rem;
                color: #333333;
            }
            .news_date {
                font-size: .14rem;
                color: #999999;
            }
        }
        .msg_abbr_content {
            font-size: .14rem;
            color: #333333;
            padding:0 .25rem .2rem .2rem;
            height: .34rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .news_sender {
            font-size: .13rem;
            color: #999999;
            float:right;
            position: relative;
            bottom: .2rem;
            right: .2rem;
        }
    }
</style>    