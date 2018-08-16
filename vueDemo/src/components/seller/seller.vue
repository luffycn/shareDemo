<template>
	<div class="seller" ref='seller' @click='isScroll'>
		<div class="seller_content">
			<div class="overview">
				<h1 class="title">{{seller.name}}</h1>
				<div class="desc">
					<star :size='36' :score="seller.score"></star>
					<span class="text">{{seller.ratingCount}}</span>
					<span class="text">月售{{seller.sellCount}}单</span>
				</div>
				<ul class="remark">
					<li class="block">
						<h2>起送价</h2>
						<div class="content">
							<span class="stress">{{seller.minPrice}}元</span>
						</div>
					</li>
					<li class="block">
						<h2>商家配送</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryPrice}}元</span>
						</div>
					</li>					
					<li class="block">
						<h2>平均配送时间</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryTime}}分钟</span>
						</div>
					</li>					
				</ul>
				<div class="favorite" @click='togglefav'>
					<span class="icon-favorite" :class='{"active":favorite}'></span>
					<span class="text">{{favoriteText}}</span>
				</div>	
			</div>
			<split></split>
			<div class="bulletin">
				<h1 class="title">公告与活动</h1>
				<div class="content_wrapper">
					<p class="content">{{seller.bulletin}}</p>
				</div>
				<ul v-if = 'seller.supports' class="supports">
					<li class="support_item" v-for = "(item,$index) in seller.supports">
						<span class="icon" :class = "classMap[seller.supports[$index].type]"></span>
						<span class="text">{{seller.supports[$index].description}}</span>
					</li>
				</ul>				
			</div>
			<split></split>
			<div class="pics">
				<h1 class="title">商家实景</h1>
				<div class="pic_wrapper" ref='picWrap'>
					<ul class="pic_list" ref='piclist'>
						<li class="picItem" v-for='pic in seller.pics'>
							<img :src="pic" width='120' height='90'>
						</li>
					</ul>
				</div>
			</div>
			<split></split>
			<div class="info">
				<h1 class="title">商家信息</h1>
				<ul>
					<li class="info_item" v-for='info in seller.infos'>{{info}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import star from '../star/star.vue'
	import split from '../split/split.vue'
	import BScroll from 'better-scroll'
	import {saveToLocal,loadFromLocal} from '../../../static/js/savelocal.js'
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		created() {
			this.classMap = ['decrease','discount','special','invoice','guarantee']
		},
		data(){
			return {
				//本地收藏此数据没
				favorite:(() => {
					return loadFromLocal(this.seller.id,'favorite',false)
				})()
			}
		},
		computed:{
			favoriteText(){
				return this.favorite? '已收藏':'收藏'
			}
		},
		/*
		watch:{
			'seller'(){
				this.initScroll(),
				this.initPIcs()
			}
		},*/
		mounted(){
			//使用 mounted 并不能保证钩子函数中的 this.$el 在 document 中。
			this.$nextTick(() => {
				this.initScroll();
				this.initPIcs();				
			})

		},
		methods:{
			togglefav(e){
				if(e.constructed){return};
				this.favorite=!this.favorite;
				saveToLocal(this.seller.id,'favorite',this.favorite)
				//localStorage.favorite = this.favorite
			},
			isScroll(){
				//console.log(this.scroll)
			},						
			initScroll(){
				if(!this.scroll){
					this.scroll = new BScroll(this.$refs.seller,{
						click:true
					});	
				}else{
					this.scroll.refresh()
				}		
			},
			initPIcs(){		
				if(this.seller.pics){
					let picW = 120;
					let margin = 6;
					let width = (picW+margin)*this.seller.pics.length;
					this.$refs.piclist.style.width=width + 'px';
					if(!this.picScroll){
						this.picScroll = new BScroll(this.$refs.picWrap,{
							scrollX:true,
							eventPassthrough:'vertical'
						})							
					}else{
						this.picScroll.refresh()
					}
				}
			}
		},	
		components:{
			star,split
		}
	}
</script>

<style>
.seller{position: absolute;top: 174px;bottom: 0;left: 0;width: 100%;overflow: hidden;}
.seller .seller_content{}
.seller .seller_content .overview{padding: 18px;position: relative;}
.seller .seller_content .overview .title{margin-bottom: 8px;line-height: 14px;color: rgb(7,17,27);font-size: 14px}
.seller .seller_content .overview .desc{padding-bottom: 18px;border-top:1px solid rgba(7,17,27,.1);font-size: 0}
.seller .seller_content .overview .desc .star{display: inline-block;margin-right: 8px;vertical-align: top;}
.seller .seller_content .overview .desc .text{display: inline-block;margin-right: 12px;vertical-align: top;font-size: 14px;line-height: 18px;color: rgb(77185,93)}
.seller .seller_content .overview .remark{display: flex;padding-top: 18px;}
.seller .seller_content .overview .remark .block{flex: 1;text-align: center;border-right: 1px solid rgba(7,17,27,.1)}
.seller .seller_content .overview .remark:last-child{border:none;}

.seller .seller_content .overview .remark .block h2{margin-bottom: 4px;color: rgb(153,157,159);line-height: 10px;font-size: 10px;}
.seller .seller_content .overview .remark .block .content{line-height: 24px;color: rgb(7,17,27);font-size: 10px;}
.seller .seller_content .overview .remark .block .content .stress{font-size: 24px}

.seller .seller_content .overview .favorite{position: absolute;right:11px;top: 18px;text-align: left;width: 50px;}
.seller .seller_content .overview .favorite .icon-favorite{display: block;color: #d4d6d9;font-size: 24px;line-height: 24px;margin-bottom: 4px;}
.seller .seller_content .overview .favorite .active{color: rgb(240,20,20)}
.seller .seller_content .overview .favorite .text{color: rgb(77,85,93);font-size: 10px;line-height: 10px;}

.seller .seller_content .bulletin{padding:18px 18px 0 18px;}
.seller .seller_content .bulletin .title{margin-bottom: 8px;line-height: 14px;}
.seller .seller_content .bulletin .content_wrapper{padding: 0 12px 16px 12px;border-top:1px solid rgba(7,17,27,.1) }
.seller .seller_content .bulletin .content_wrapper .content{line-height: 24px;font-size: 12px;color: rgb(240,20,20);}
.seller .seller_content .bulletin .supports{}
.seller .seller_content .bulletin .supports .support_item{padding: 16px 12px;font-size: 0;border-bottom: 1px soild rgba(7,17,27,.1)}
.seller .seller_content .bulletin .supports .support_item:last-child{border:none;}
.seller .seller_content .bulletin .supports .support_item .icon{display: inline-block;vertical-align: top;margin-right: 6px;background-repeat: no-repeat;background-size: 16px 16px;width:16px;height: 16px;}
.seller .seller_content .bulletin .supports .support_item .text{line-height: 16px;font-size: 12px;color: rgb(7,17,27);}

.seller .seller_content .bulletin .supports .support_item .decrease{background-image: url(../../assets/imgs/decrease_4@2x.png);}
.seller .seller_content .bulletin .supports .support_item .discount{background-image: url(../../assets/imgs/discount_4@2x.png);}
.seller .seller_content .bulletin .supports .support_item .special{background-image: url(../../assets/imgs/special_4@2x.png);}
.seller .seller_content .bulletin .supports .support_item .invoice{background-image: url(../../assets/imgs/invoice_4@2x.png);}
.seller .seller_content .bulletin .supports .support_item .guarantee{background-image: url(../../assets/imgs/guarantee_4@2x.png);}

.seller .seller_content .pics{padding: 18px;}
.seller .seller_content .pics .title{margin-bottom: 12px;line-height: 14px;color: rgb(7,17,27);font-size: 14px;}
.seller .seller_content .pics .pic_wrapper{width: 100%;overflow: hidden;white-space: nowrap;}
.seller .seller_content .pics .pic_wrapper .pic_list{font-size: 0}
.seller .seller_content .pics .pic_wrapper .pic_list .picItem{display: inline-block;vertical-align: top;margin-right: 6px;width: 120px;height: 90px;}
.seller .seller_content .pics .pic_wrapper .pic_list :last-child{margin: 0}

.seller .seller_content .info{padding:18px 18px 0 18px;color:rgb(7,17,27)}
.seller .seller_content .info .title{padding-bottom: 12px;line-height: 14px;font-size: 14px;border-bottom: 1px solid rgba(7,17,27,.1);}
.seller .seller_content .info .info_item{padding: 16px 12px;line-height: 16px;font-size:12px ;border-bottom: 1px solid rgba(7,17,27,.1); }
.seller .seller_content .info .info_item:last-child{border:none;}
</style>