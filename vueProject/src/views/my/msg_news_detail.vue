<template>
    <div class="news_detail">
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

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        components: {},
        methods: {},
        mounted() {
            this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'站点消息',footShow:false})
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/my/msg_news_detail";
</style>
