<template>
    <div class="msg_detail">
        <header class="msg_date">2018-7-30</header>
        <article class="msg_abbr_content" ref="msg_content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi delectus deserunt explicabo facere, fugiat, impedit incidunt,
            ipsam nam nemo obcaecati perferendis quas quia quidem
            quis recusandae sit veniam voluptatem voluptatibus.
        </article>
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
            this.$store.commit('homeHeaderControl',{shwoback:true,type:'string',val:'游戏公告',footShow:false})
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/my/msg_notice_detail";
</style>
