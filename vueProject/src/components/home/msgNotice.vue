<template>
    <div class="msg_item">
        <header class="msg_date">2018-7-30</header>
        <article class="msg_abbr_content" ref="msg_content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Animi delectus deserunt explicabo facere, fugiat, impedit incidunt,
            ipsam nam nemo obcaecati perferendis quas quia quidem
            quis recusandae sit veniam voluptatem voluptatibus.
        </article>
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
    .msg_item {
        font-size: 1rem;
        margin-top: .12rem;
        background-color: #fff;
        height: 1.1rem;
        .msg_date {
            font-size: .14rem;
            color: #999999;
            padding:.15rem 0 .1rem .15rem;
        }
        .msg_abbr_content {
            font-size: .14rem;
            color: #333333;
            padding:0 .25rem .2rem .15rem;
            height: .34rem;

            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>    