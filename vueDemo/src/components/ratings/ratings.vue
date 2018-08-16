<template>
	<div class="ratings" ref='ratings'>
		<div class="ratings_content">
			<div class="overview">
				<div class="overview_left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview_right">
					<div class="score_wrapper">
						<span class="title">服务态度</span>
						<star :size='36' :score = 'seller.serviceScore'></star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score_wrapper">
						<span class="title">商品评分</span>
						<star :size='36' :score = 'seller.foodScore'></star>
						<span class="score">{{seller.foodScore}}</span>			
					</div>
					<div class="delivery_wrapper">
						<span class="title">送达时间</span>
						<span class="score">{{seller.deliveryTime}}</span>
					</div>
				</div>
			</div>
			<split></split>
			<RatingSelect :selectType ='selectType' :onlyContent ='onlyContent' :ratings = 'ratings' @theRatingtype = 'getRating' @contentToggle = 'getContent'></RatingSelect>
			<div class="rating_wrapper">
				<ul>
					<li v-show='needShow(rating.rateType,rating.text)' v-for = 'rating in ratings' class="ratingitem">
						<div class="avatar">
							<img :src="rating.avatar" width='28' height="28">
						</div>
						<div class="content">
							<h1 class="name">{{rating.username}}</h1>
							<div class="star_wrapper">
								<star :size='24' :score='rating.score'></star>
								<span class="delivery" v-show='rating.deliveryTime'>{{rating.deliveryTime}}</span>
							</div>
							<p class="text">{{rating.text}}</p>
							<div class="recommend" v-show='rating.recommend.length'>
								<span class="icon-thumb_up"></span>
								<span class="item" v-for='item in rating.recommend'>{{item}}</span>
							</div>
							<div class="time">{{rating.rateTime | formatDate}}</div>
						</div>
					</li>
				</ul>
			</div>			
		</div>
	</div>
</template>

<script>
	import star from './../star/star.vue'
	import split from './../split/split.vue'
	import RatingSelect from './../ratingselect/ratingselect.vue'
	import BScroll from 'better-scroll';
	import {formatDate} from './../../../static/js/date.js'
	const ALL = 2;
	export default{
		props:{
			seller:{
				type:Object
			}
		},
		components:{
			star,RatingSelect,split
		},
		data(){
			return{
				showFlag:false,//显示隐藏食物详情页
				selectType:ALL,//默认2
				onlyContent:true,//默认true
				ratings:[]
			}
		},
		filters:{
			//时间过滤
			formatDate(time){
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		},		
		methods:{
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
			}						
		},
		created:function(){
			var _this = this;
			this.axios.get("static/data/data.json").then(function(res){
					_this.ratings = res.data.ratings;
					//console.log(_this.ratings)
					_this.$nextTick(() => {
						_this.scroll = new BScroll(_this.$refs.ratings,{
								click:true
						});						
					})
					
			});				
		}				
	}
</script>

<style>
	.ratings{position: absolute;top: 174px;bottom: 0;width: 100%;left: 0;overflow: hidden;}
	.ratings .overview{display: flex;padding: 18px 0}
	.ratings .overview_left{flex: 0 0 137px;width: 137px;border-right: 1 px solid rgba(7,17,27.2);text-align: center;flex: 0 0 137px;padding: 6px 0}
	.ratings .overview_right{flex: 1;padding:6px 0 6px 24px;box-sizing:border-box;}
	/*左边=*/
	.ratings .overview_left .score{line-height: 28px;font-size: 24px;color: rgb(255,153,0);margin-bottom: 6px;}
	.ratings .overview_left .title{line-height: 12px;font-size: 10px;color: rgb(7,17,27);margin-bottom: 8px;}
	.ratings .overview_left .rank{line-height: 10px;font-size: 10px;color: rgb(147,153,159);}
	/*右边*/
	.ratings .overview_right .score_wrapper{margin-bottom: 8px;line-height: 18px;font-size: 0;}
	.ratings .overview_right .score_wrapper .title{font-size: 12px;color:rgb(7,17,27);;line-height: 18px;display: inline-block;vertical-align: top;}
	.ratings .overview_right .score_wrapper .star{display: inline-block;margin: 0 6px;}
	.ratings .overview_right .score_wrapper .score{display: inline-block;vertical-align: top;font-size: 12px;line-height: 18px;color: rgb(255,153,0)}
	.ratings .overview_right .delivery_wrapper .score{font-size: 12px;color: rgb(147,157,153);margin-left: 12px;}
	.ratings .overview_right .delivery_wrapper .title{font-size: 12px;color:rgb(7,17,27);line-height: 18px;}
		@media only screen and (max-width:320px ){
		.ratings .overview_left{flex: 0 0 120px;width:120px;}
	}
	.ratings .rating_wrapper{padding: 0 18px;}
	.ratings .rating_wrapper .ratingitem{display: flex;padding: 18px 0;border-bottom: 1px solid rgba(7,17,27,.1)}
	.ratings .rating_wrapper .ratingitem .avatar{flex: 0 0 28px;width: 28px}
	.ratings .rating_wrapper .ratingitem .avatar img{;border-radius: 50%}
	.ratings .rating_wrapper .ratingitem .content{position: relative;flex: 1;padding: 0 12px;box-sizing:border-box;}
	.ratings .rating_wrapper .ratingitem .content .name{line-height: 12px;margin-bottom: 4px;font-size: 10px;color: rgb(7,17,27);}
	.ratings .rating_wrapper .ratingitem .content .star_wrapper{margin-bottom: 6px;font-size: 0px;margin: 0;padding: 0;text-align: left;}
	.ratings .rating_wrapper .ratingitem .content .star_wrapper .star{margin-right: 6px;display: inline-block;vertical-align: top;}
	.ratings .rating_wrapper .ratingitem .content .star_wrapper .delivery{margin-right: 6px;display: inline-block;vertical-align: top;color: rgb(147,157,153);}
	.ratings .rating_wrapper .ratingitem .content .text{line-height: 18px;font-size: 12px;margin-bottom: 8px;color:rgb(7,17,27);}
	.ratings .rating_wrapper .ratingitem .content .recommend{line-height: 16px;font-size: 0}
	.ratings .rating_wrapper .ratingitem .content .recommend .icon-thumb_up{margin-bottom: 0 8px 4px 0;font-size: 9px;display: inline-block;color: rgb(0,160,220);}
	.ratings .rating_wrapper .ratingitem .content .recommend .item{padding: 0 6px;border:1px solid rgba(7,17,27.1);border-radius: 5px;color:rgb(147,153,159);background-color: #fff;font-size: 12px }
	.ratings .rating_wrapper .ratingitem .content .time{position: absolute;top: 0;font-size: 10px;line-height: 12px;color:rgb(147,153,159);right: 0}
</style>