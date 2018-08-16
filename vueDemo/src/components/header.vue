<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar" alt="">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="des">
					{{seller.description}}/{{seller.delivertTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="support">
					<span class="icon decrease" :class="classMap[seller.supports[0].type]"></span>
					<span class="text">{{seller.supports[0].description}}</span>
				</div>				
			</div>
			<div class="support-count" v-if="seller.supports" @click = 'showDetail'>
				<span class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrapper" @click = 'showDetail'>
			<span class="bulletin_title"></span><span class="bulletin_text">{{seller.bulletin}}</span><i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" alt="" width="100%" height="100%">
		</div>

		<transition name='fade'>
			<div class="detail" v-show="detailShow">
				<div class="detail_wrapper clearfix">
					<div class="detail_main">
						<h1 class="name">{{seller.name}}</h1>
						<div class="star_wrapper">
							<star :size = "48" :score = "seller.score"></star>
						</div>
						<div class="d_title">
							<div class="line"></div>
							<div class="text">优惠信息</div>
							<div class="line"></div>
						</div>
						<ul v-if = 'seller.supports'>
							<li class="support_item" v-for = "(item,$index) in seller.supports">
								<span class="icon" :class = "classMap[seller.supports[$index].type]"></span>
								<span class="text">{{seller.supports[$index].description}}</span>
							</li>
						</ul>
						<div class="d_title">
							<div class="line"></div>
							<div class="text">商家公告</div>
							<div class="line"></div>
						</div>
						<div class="bulletin">
							<p class="content">{{seller.bulletin}}</p>
						</div>								
					</div>
				</div>
				<div class="detail_close">
					<i class="icon-close" @click="hideDetail"></i>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import star from '../components/star/star.vue'

export default {
	props:{
		seller:{
			type:Object
		}
	},
	data:function(){
		return {
			detailShow:false			
		}
	},
	methods:{
		showDetail:function(){
			this.detailShow = true;
		},
		hideDetail:function(){
			this.detailShow = false;
		}
	},
	created() {
		this.classMap = ['decrease','discount','special','invoice','guarantee']
	},
	components:{
		star
	}
}
</script>

<style>
	i{font-style: normal;}
	.decrease{background-image: url(../assets/imgs/decrease_1@2x.png);}
	.discount{background-image: url(../assets/imgs/discount_1@2x.png);}
	.special{background-image: url(../assets/imgs/special_1@2x.png);}
	.invoice{background-image: url(../assets/imgs/invoice_1@2x.png);}
	.guarantee{background-image: url(../assets/imgs/guarantee_1@2x.png);}
	.header{color: #fff;position: relative;background: rgba(7,17,27,0.5);overflow: hidden;}
	.header .content-wrapper{padding: 24px 12px 18px 24px;font-size: 0;position: relative;}
	.header .content-wrapper .avatar{display: inline-block;vertical-align: top}
	.avatar img{border-radius: 2px}
	.header .content-wrapper .content{display: inline-block;}
	.header .content-wrapper .content{font-size: 14px;padding-left: 16px}
	.content .title{margin: 2px 0 8px 0}
	.content .title span{display: inline-block;}
	.content .title .brand{
		width:30px;height: 18px;vertical-align: top;
		background-image:url(../assets/imgs/brand@2x.png);
		background-repeat: no-repeat;
		background-size: cover 
	}
	.content .title .name {margin-left: 6px;font-size: 16px;line-height: 18px;font-weight: bold;}
	.content .des{margin-bottom: 10px;line-height: 12px;font-size: 12px}
	.content .support .icon{display: inline-block;width: 12px;height: 12px;background-size: 12px 12px;background-repeat: no-repeat; vertical-align: top;}
	.content .decrease{background-image: url(../assets/imgs/decrease_1@2x.png);}
	.support-count{position: absolute;right: 12px;bottom: 18px;padding: 0 8px;height: 24px;line-height: 24px;border-radius: 14px;background-color: rgba(0,0,0,.2);text-align: center;}
	.support-count .count{font-size: 10px;vertical-align: top;}
	.support-count .icon-keyboard_arrow_right{font-size: 10px;margin-left: 2px;line-height: 24px}
	.bulletin-wrapper{height: 28px;line-height: 28px;padding: 0 22px 0 12px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 0;position: relative;background-color: rgba(7,17,27,0.2);}
	.bulletin-wrapper .bulletin_title{display: inline-block;width: 22px;height: 12px;background-image: url(../assets/imgs/bulletin@2x.png);background-size: 22px 12px;background-repeat: no-repeat;vertical-align: top;margin-top: 8px;font-size: 10px}
	.bulletin-wrapper .bulletin_text {font-size: 10px;margin: 0 4px;vertical-align: top;}
	.bulletin-wrapper .icon-keyboard_arrow_right{position: absolute;font-size: 10px;right: 12px;top: 0px;line-height: 28px}
	.background{position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: -1;filter:blur(10px);}
	.detail{transition:all .5s;position: fixed;z-index: 100;width: 100%;height: 100%;overflow: auto;top: 0;left: 0;backdrop-filter:blur(10px);background-color: rgba(7,17,27,0.8)}
	.fade-enter-active,.fade-leave-active{transition:all .3s linear;}
	.fade-enter,.fade-leave-to{background-color: rgba(7,17,27,0)}

	.detail_wrapper{min-height: 100%;display: inline-block;width:100%;}
	.detail_main{margin-top: 64px;padding-bottom:64px }
	.detail_close{position: relative;width: 32px;height: 32px;margin: -64px auto 0 auto;clear: both;font-size: 32px}
	.detail_main .name{line-height: 16px;text-align: center;font-size: 16px;font-weight: 700;}
	.star_wrapper{margin-top: 18px;padding: 2px 0;text-align: center;}
	.detail_wrapper .d_title{width: 80%;margin: 30px auto 24px auto;display: flex;}
	.detail_wrapper .d_title .line{flex: 1;position: relative;top: -6px;border-bottom: 1px solid rgba(255,255,255,.2)}
	.detail_wrapper .d_title .text{font-size: 14px;padding: 0 12px;font-weight: 700}
	.detail_main ul{width: 80%;margin: 0 auto}
	.detail_main ul li{padding: 0 12px;margin-bottom:12px;font-size: 0 }
	.detail_main ul:last-child{margin-bottom: 0}
	.detail_main ul li .icon{display: inline-block;width: 16px;height: 16px;vertical-align: top;margin-right: 6px;background-size: 16px 16px;background-repeat: no-repeat;}
	.detail_main ul li .text{line-height: 16px;font-size: 12px}
	.detail_wrapper .bulletin{width: 80%;margin: 0 auto;}
	.detail_wrapper .content{padding: 0 12px;line-height: 24px;font-size: 12px;}

	@media only screen and (min-width: 500px) and (max-width: 750px) {
		.content .title .brand{background-image:url(../assets/imgs/brand@3x.png); }	
		.content .decrease{background-image: url(../assets/imgs/decrease_1@3x.png);}
	}	
</style>