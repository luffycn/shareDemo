<template>
	<transition name = 'detailmove'>
		<div v-show = 'showFlag' class="food_detail" ref = 'detailfood'>
			<div class="food_content">
				<div class="image_header">
					<img :src="food.image" alt="">
					<div class="back" @click = 'hide'>
						<i class="icon-arrow_lift"></i>
					</div>			
				</div>
				<div class="content">
					<h1 class="title">{{food.name}}</h1>
					<div class="detail_des">
						<span class="sell_count">月售{{food.sellCount}}份</span>
						<span class="sell_rating">好评率{{food.rating}}%</span>
					</div>
					<div class="price">
						<span class="now">￥{{food.price}}</span><span class="old" v-show = "food.oldPrice">￥{{food.oldPrice}}</span>
					</div>
					<div class="cartcontrol_wrpapper">
						<cartcontrol :food = 'food' @dropEvent = 'getEl'></cartcontrol>
					</div>
					<transition name = 'cartfade'>
						<div @click.stop.prevent = 'addFirst($event)' class="buy" v-show = '!food.count || food.count===0'>加入购物车</div>
					</transition>					
				</div>
				<split v-show='food.info'></split>
				<div class="info" v-show='food.info'>
					<h1 class="title">商品信息</h1>
					<p class="text">{{food.info}}</p>
				</div>
				<split></split>
				<div class="rating">
					<h1 class="title">商品评价</h1>
					<RatingSelect :selectType ='selectType' :onlyContent ='onlyContent' :desc ='desc' :ratings = 'food.ratings' @theRatingtype = 'getRating' @contentToggle = 'getContent'></RatingSelect>
					<div class="rating_wrapper">
						<ul v-show = 'food.ratings && food.ratings.length'>
							<li :key="index" v-for = '(rating,index) in food.ratings' class="rating_item" v-show = 'needShow(rating.rateType,rating.text)'>
								<div class="user">
									<span class="username">{{rating.username}}</span>
									<img class="avatar" :src="rating.avatar" alt="" width="12" height="12">
								</div>
								<div class="time">{{rating.rateTime | formatDate}}</div>
								<p class="text">
									<span :class = '{"icon-thumb_up":rating.rateType===0,"icon-thumb_down":rating.rateType===1}'></span>{{rating.text}}
								</p>
							</li>
						</ul>
						<div class="no_rating" v-show='!food.ratings || !food.ratings.length'>暂无评价</div>
					</div>
				</div>
			</div>
		</div>
	</transition>	
</template>

<script>
	import Vue from 'vue'
	import BScroll from 'better-scroll';
	import cartcontrol from './../cartcontrol/cartcontrol.vue'
	import split from './../split/split.vue'
	import RatingSelect from './../ratingselect/ratingselect.vue'
	import {formatDate} from './../../../static/js/date.js'
	const ALL = 2;
	export default {
		components:{
			cartcontrol,split,RatingSelect
		},
		props:{
			food:{
				type:Object
			}
		},
		filters:{
			//时间过滤
			formatDate(time){
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		},
		data(){
			return{
				showFlag:false,//显示隐藏食物详情页
				selectType:ALL,//默认0
				onlyContent:true,//默认true
				desc:{
					all:'全部',
					positive:'推荐',
					negative:'吐槽'					
				}
			}
		},
		methods:{
			show(){
				this.showFlag = true;//详情页显示
				this.selectType = ALL;//初始化
				this.onlyContent = true;//初始化
				this.$nextTick(() => {
					if(!this.scroll){
						this.scroll = new BScroll(this.$refs.detailfood,{
							click:true
						});
					}
					else{
						this.scroll.refresh();
					}					
				})

			},
			hide(){
				//详情页倒退首页
				this.showFlag = false;
			},
			addFirst(e){
				//浏览器点击事件清除
				if(!e._constructed){return};
				//详情页点击购物车按钮默认添加1个
				Vue.set(this.food,'count',1)
			},
			getEl:function(target){
				//接收按钮组件传值，再传入父级,抛物线效果
				this.$emit('dropEvent',target);
			},
			needShow(type,text){
				//如果只看内容并且内容为空
				if(this.onlyContent && !text){
					return false;
				}
				//评论类型
				if(this.selectType===ALL){
					return true;
				}else{
					return type === this.selectType;
				}
			},
			getRating(type){
				this.selectType = type;
				//重新计算
				this.$nextTick(() => {
					this.scroll.refresh();
				})		
			},
			getContent(cot){
				this.onlyContent = cot;
				//重新计算
				this.$nextTick(() => {
					this.scroll.refresh();
				})
			}

		}

	}
</script>

<style>
	.food_detail{
		position: fixed;
		left: 0;
		top: 0;
		bottom: 48px;
		z-index: 30;
		width: 100%;
		background-color: #fff;
		transform: translate3d(0,0,0)
	}
	/*左滑动*/
	.detailmove-enter-active,.detailmove-leave-active{transition:all .3s linear;}
	.detailmove-enter,.detailmove-leave-to{transform: translate3d(100%,0,0)}
	/*图片特殊用法,宽高相等*/	

	.food_detail .food_content .image_header{position: relative;width: 100%;height: 0;padding-top: 100%;}
	/*图片*/
	.food_detail .food_content .image_header img{position: absolute;top: 0;left: 0;width: 100%;height: 100%;}
	/*返回首页*/
	.food_detail .food_content .back{position: absolute;top: 10px;left:0;}
	.food_detail .food_content .back .icon-arrow_lift{display: block;padding: 10px;font-size: 20px;color: #fff}

	.food_detail .food_content .content{padding: 18px;position: relative;} 
	.food_detail .food_content .content .title{line-height: 14px;margin-bottom: 8px;font-size: 14px;font-weight: 700;color:rgb(7,17,27);} 
	.food_detail .food_content .content .detail_des{margin-bottom: 18px;line-height: 10px;font-size: 0;height: 10px} 
	.food_detail .food_content .content .detail_des .sell_count,
	.food_detail .food_content .content .detail_des .sell_rating
	{font-size: 10px;color: rgb(147,153,159);} 
	.food_detail .food_content .content .detail_des .sell_count{margin-right: 12px;}
	.food_detail .food_content .content .price .now{margin-right: 8px;font-size: 14px;color: rgb(240,20,20);} 
	.food_detail .food_content .content .price .old{text-decoration: line-through;font-size: 10px;color:rgb(147,153,159);}
	/*按钮组件*/
	.food_detail .food_content .cartcontrol_wrpapper{position: absolute;right: 12px;bottom: 12px;}
	.food_detail .food_content .buy{position: absolute;bottom: 18px;right: 18px;z-index: 10;height: 24px;line-height: 24px;padding: 0 12px;box-sizing:border-box;font-size: 10px;color: #fff;background-color: rgb(0,160,220);border-radius: 10px;text-align: center;}
	/*点击加入购物车动画*/
	.cartfade-enter-active,.cartfade-leave-active{transition:all .2s linear;}
	.cartfade-enter,.cartfade-leave-to{opacity: 0}

	.info{padding: 18px;}
	.info .title{line-height: 14px;margin-bottom: 6px;font-size: 14px;color: rgb(7,17,27);}
	.info .text{line-height: 24px;padding: 0 8px;font-size: 12px;color: rgb(77,85,93);}

	.rating{padding-top: 18px;}
	.rating .title{line-height: 14px;margin-left: 18px;font-size: 14px;color: rgb(7,17,27);}
	.rating .rating_wrapper{padding: 0 18px;}
	.rating .rating_wrapper .rating_item{position: relative;padding: 16px 0;border-bottom:solid 1px rgba(7,17,27,.2);}
	.rating .rating_wrapper .user{position: absolute;right: 0;top: 16px;line-height: 12px;font-size: 0}
	.rating .rating_wrapper .username{display: inline-block;vertical-align: top;font-size: 10px;color:rgb(147,153,159);margin-right: 6px}
	.rating .rating_wrapper .avatar{border-radius: 50%;}
	.rating .rating_wrapper .time{line-height: 12px;margin-bottom: 6px;font-size: 10px;color:rgb(147,153,159);}
	.rating .rating_wrapper .text{line-height: 16px;font-size: 12px;color:rgb(7,17,27); }
	/*顶和踩*/
	.rating .rating_wrapper .text .icon-thumb_up,
	.rating .rating_wrapper .text .icon-thumb_down{line-height: 16px;line-height: 24px;font-size: 12px;margin-right: 6px}
	.rating .rating_wrapper .text .icon-thumb_up{color: rgb(0,160,220);}
	.rating .rating_wrapper .text .icon-thumb_down{color: rgb(147,153,159);}
	.rating .no_rating{padding: 16px 0;font-size: 12px;color:rgb(147,153,159);  }
</style>