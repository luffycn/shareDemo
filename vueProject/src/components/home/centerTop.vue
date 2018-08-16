/**
* 首页顶部组件
* Luffy 2018-7-27
*/
<template>
    <div class="page" ref="page">
        <!--轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in images" :key="item.id">
                    <img :src="item.src" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <!--通知-->
        <div class="notice_bar">
            <a href="#" class="iconfont icon-laba notice_icon"></a>
            <a href="#" class="notice_text">关于世界杯体育注单结算的通知</a>
            <a href="#" class="iconfont el-icon-arrow-right arrow_icon"></a>
        </div>
        <!--导航标签:选择种类-->
        <Nav-label></Nav-label>
    </div>
</template>

<script>
    import NavLabel from "./navLabel";

    export default {
        name: "centerTop",
        data() {
            return {
                images: [
                    { id: 0, src: require("../../../static/imgs/home/01.jpg") },
                    { id: 1, src: require("../../../static/imgs/home/02.jpg") },
                    { id: 2, src: require("../../../static/imgs/home/03.jpg") },
                    { id: 3, src: require("../../../static/imgs/home/04.jpg") }
                ]
            };
        },
        components: {
            NavLabel,
        },
        methods: {
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container',{
                direction: 'horizontal',
                loop: true,
                autoplay: 5000000,
                slidesPerView: 'auto',
                centeredSlides:true,
                spaceBetween: 10,
                paginationClickable:true,
                pagination:  '.swiper-pagination'
            });
        }
    };

</script>

<style lang="scss">
    .swiper-pagination-bullet {
        width: .08rem;
        height: .08rem;
        background: $home-color;
        opacity: .24;
    }
    .swiper-pagination-bullet-active {
        width: .21rem;
        height: .08rem;
        background: $home-color;
        border-radius: 4px;
        opacity: 1;
    }
</style>

<style scoped lang="scss">
    .page {
        font-size: 1rem;
        position:relative;
        .swiper-container {
            padding-top: .15rem;
            height: 1.5rem;
            margin-bottom: .3rem;
            overflow: visible!important;
            background-color: #fff;
            .swiper-wrapper {
                .swiper-slide{
                    width: 3rem;
                    height: 1.5rem;
                    border-radius: 8px;
                    img {
                        width: 100%;
                        height: 1.5rem;
                        border-radius: 8px;
                    }
                }
                .swiper-slide-prev {
                    margin-top: .1rem;
                    height: 1.3rem!important;
                    img{
                        height: 1.3rem!important;
                    }
                }
                .swiper-slide-next{
                    margin-top: .1rem;
                    height: 1.3rem!important;
                    img{
                        height: 1.3rem!important;
                    }
                }
                .swiper-slide-active{
                    width: 3rem;
                    height: 1.5rem;
                }
            }
            .swiper-pagination {
                bottom: -.45rem!important;
                z-index: -1;
                background-color: #fff;
            }
        }
        .notice_bar {
            font-size: 0.15rem;
            height: 0.45rem;
            line-height:.45rem;
            position: relative;
            z-index: 10;
            top: .18rem;
            a.notice_icon {
                position: absolute;
                top: 50%;
                left: .15rem;
                transform: translateY(-50%);
                font-size: .18rem;
                color:$home-color;
            }
            a.notice_text {
                color: #333;
                font-size: .13rem;
                display: inline-block;
                margin-left: 0.45rem;
                line-height: 0.42rem;
            }
            a.arrow_icon {
                position: absolute;
                top: 50%;
                right: 6%;
                transform: translateY(-50%);
                font-size: .17rem;
            }
        }
    }
</style>
