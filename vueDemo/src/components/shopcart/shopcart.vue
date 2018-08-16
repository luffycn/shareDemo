<template>
	<div class="thisIsShopCart">
		<div class="shopcart">
			<div class="shopcart_content" @click = 'togglelist()'>
				<div class="content_left">
					<div class="logo_wrapper">
						<div class="logo" :class = "{'lightHigh':totalCount>0}">
							<i class="icon-shopping_cart" :class = "{'lightHigh':totalCount>0}"></i>
						</div>
						<div class="num" v-show = "totalCount>0">{{totalCount}}</div>
					</div>
					<div class="price" :class = "{'lightHigh':totalPrice>0}">￥{{totalPrice}}</div>
					<div class="desc">另需配送费￥{{deliveryPrice}}元</div>
				</div>
				<div class="content_right" @click.stop.prevent = 'pay'>
					<div class="pay" :class = "payClass">{{payDesc}}</div>	
				</div>
			</div>
			<div class="ball_container">
				<div class="ball" v-for = "ball in balls">
					<transition name = 'drop' @before-enter="beforeEnter" @enter="enter" @after-enter="leave">
						<div class="balls" v-show = 'ball.show'>
							<div class="ballinner inner-hook" ></div>
						</div>
					</transition>		
				</div>
			</div>
			<transition name = 'cartfold'>
				<div class="shopcart-list" v-show = 'listShow'  >
					<div class="list-header">
						<h1 class="title">购物车</h1>
						<span class="empty"  @click="empty">清空</span>
					</div>
					<div class="list-content" ref = 'listContent'>
						<ul>
							<li class="food" v-for = 'food in selectFoods'>
								<span class="name">{{food.name}}</span>
								<div class="price">
									<span>￥{{food.price*food.count}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<cartcontrol :food='food'></cartcontrol>
								</div>
							</li>
						</ul>
					</div>
				</div>			
			</transition>
		</div>

		<transition name = 'modelfade'>
			<div class="list_mask" v-show = 'listShow' @click = 'hidelist'></div>
		</transition>
		
	</div>	
</template>

<script>
import cartcontrol from './../cartcontrol/cartcontrol.vue'
import BScroll from 'better-scroll';
	export default {
		data(){
			return {
				balls:
				[
					{show:false},
					{show:false},
					{show:false}
				],
				dropBall:[],
				fold:true
			}
		},
		components:{cartcontrol},
		props:{
			selectFoods:{
				type:Array,
				default(){
					return [
						//{price:10,count:2}
					];
				}
			},
			deliveryPrice:{
				type:Number,
				default:0
			},
			minPrice:{
				type:Number,
				default:0
			}	
		},
		computed:{
			//总价格
			totalPrice(){
				let total = 0;
				this.selectFoods.forEach((food) => {
					total += food.price * food.count
				});
				return total;
			},
			//总数
			totalCount(){
				let count = 0;
				//food为对象集合中每个对象
				this.selectFoods.forEach((food) => {
					count += food.count;
				});
				return count;
			},
			//差价配送
			payDesc(){
				if(this.totalPrice === 0){
					//es6字符串拼接写法
					return `还差￥${this.minPrice}元起送`;
				}else if(this.totalPrice<this.minPrice){
					let diff = this.minPrice - this.totalPrice;
					return `还差￥${diff}元起送`;
				}
				else{
					return '去结算';
				}
			},
			//改变购物情况样式
			payClass(){
				if(this.totalPrice < this.minPrice){
					return 'notEnough'
				}
				else{
					return 'enough'
				}
			},		
			listShow(){
				//购物车空 购物车详情页隐藏
				if(!this.totalCount){
					this.fold = true;
					return false
				}
				//不为空，购物车详情页显示
				let show = !this.fold;
				if(show){
					this.$nextTick(() => {
						if(!this.scroll){
							this.scroll = new BScroll(this.$refs.listContent,{
								click:true
							})
						}
						else{
							this.scroll.refresh()
						}	
					})
				}
				return show;
			}

		},
		methods:{
			drop(el){
				//console.log(el);
				for(let i=0;i<this.balls.length;i++){
					let ball = this.balls[i];
					if(!ball.show){
						ball.show = true;
						ball.el = el;//将点击按钮DOM对象传入数组
						this.dropBall.push(ball);
						return
					}
				}
			},
			beforeEnter:function(el){
				let count = this.balls.length;
				while (count--) {
					let ball = this.balls[count];
					if(ball.show){
						//获取当前点击按钮坐标
						let rect = ball.el.getBoundingClientRect();
						let x = rect.left - 32;
						let y = -(window.innerHeight - rect.top - 22 );
						el.style.display = ' ';
						el.style.webKitTransform = `translate3d(0,${y}px,0)`;
						el.style.transform = `translate3d(0,${y}px,0)`;
						let inner = el.getElementsByClassName('inner-hook')[0];
						inner.style.webKitTransform = `translate3d(${x}px,0,0)`;
						inner.style.transform = `translate3d(${x}px,0,0)`;
						
					}					
				}
			},
			enter:function(el){	
				let rf = el.offsetHeight;
				el.style.webKitTransform = 'translate3d(0,0,0)';
				el.style.transform = 'translate3d(0,0,0)';
				let inner = el.getElementsByClassName('inner-hook')[0];
				inner.style.webKitTransform = 'translate3d(0,0,0)';
				inner.style.transform = 'translate3d(0,0,0)';			
			},
			leave:function(el){
				let ball = this.dropBall.shift();
				if(ball){
					ball.show = false;
					el.style.display = 'none';
				}			
			},
			//购物车详情页点击
			togglelist:function(){
				//如果购物车空，不执行
				if(!this.totalCount){return}
				this.fold = !this.fold;
			},
			empty(){
				this.selectFoods.forEach((food) => {
					food.count = 0;//让购物数清0
				})
			},
			hidelist(){
				//让listShow数组重新计算
				this.fold = true;
			},
			pay(){
				if(this.totalPrice<this.minPrice){
					return
				}
				else{
					window.alert(`支付${this.totalPrice}元`)
				}
			}
		},

	}
</script>

<style>
	.shopcart{position: fixed;left: 0;bottom: 0;z-index: 88;width: 100%;height: 48px;}
	.shopcart .shopcart_content{font-size: 0;display: flex;background-color: #141d27;color:rgba(255,255,255,.4) }
	.shopcart_content .content_left{flex: 1}
	.shopcart_content .content_right{flex: 0 0 105px;width: 105px}
	.content_left .logo_wrapper{display: inline-block;position: relative;top: -10px;margin: 0 12px;padding: 6px;width: 56px;height: 56px;box-sizing:border-box;vertical-align: top;border-radius: 50%;background-color: #141d27}
	.content_left .logo_wrapper .logo{width: 100%;height: 100%;border-radius: 50%;background-color: #2b343c;text-align: center;}
	.content_left .logo_wrapper .logo .icon-shopping_cart{font-size: 24px;color: #80858a;line-height: 44px}
	.logo_wrapper .num{position: absolute;right: 0;top: 0;width: 24px;height: 16px;line-height: 16px;text-align: center;border-radius: 16px;font-size: 9px;font-weight: 700;color: #FFF;background-color: rgb(240,20,20);box-shadow: 0 4px 8px 0 rgba(0,0,0,.4)}
	.content_left .price{display: inline-block;vertical-align: top;line-height: 24px;padding-top: 12px;box-sizing:border-box;padding-right:12px;border-right: 1px solid rgba(255,255,255,.1);font-size: 14px;font-weight: 700;color: rgba(255,255,255,.4); }
	.content_left .desc{display: inline-block;line-height: 24px;vertical-align: top;padding: 12px 0 0 12px;font-size: 10px;color:rgba(255,255,255,.4); box-sizing:border-box;}
	/*高亮css*/	
	.content_right .pay{font-size: 12px;height: 48px;line-height: 48px;text-align: center;}
	.content_right .notEnough{background-color: #2b333b}
	.content_right .enough{background-color: #00b43c;color: #fff}
	/*抛物线*/
	.ball_container .balls{position: fixed;left: 32px;bottom:22px;z-index: 188;transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); /*贝塞尔曲线*/}
	.ball_container .ball .ballinner{width: 16px;height: 16px;border-radius: 50%;background-color: rgb(0,160,220);transition: all 0.4s linear;}
	/*购物车列表*/
	.shopcart-list{position: absolute;top: 0;left: 0;z-index: -1;width: 100%;transform: translate3d(0,-100%,0)}
	.shopcart-list .list-header{height: 40px;line-height: 40px;padding:0 18px;background-color: #f3f5f7;border-bottom: 1px solid rgba(7,17,27,.1)}
	.shopcart-list .list-header .title{float: left;font-size: 14px;color: rgb(7,17,27)}
	.shopcart-list .list-header .empty{float: right;font-size: 12px;color: rgb(0,160,220)}
	/*购物车详情页*/
	.shopcart-list .list-content{padding: 0 18px;max-height: 217px;background-color: #fff;overflow: hidden;}
	.shopcart-list .list-content .food{position: relative;padding: 12px 0;box-sizing:boder-box;border-bottom: 1px solid rgba(7,17,27,.1)}
	.shopcart-list .list-content .name{line-height: 24px;font-size: 14px;color:rgb(7,17,27);}
	.shopcart-list .list-content .price{position: absolute;right: 90px;bottom: 12px;line-height: 24px;font-size: 14px;font-weight: 700;color: rgb(240,20,20)}
	.cartcontrol-wrapper{position: absolute;right: 0;bottom: 6px;}
	/*购物车列表CSS3*/
	.cartfold-enter-active,.cartfold-leave-active{transition:all .4s linear;}
	.cartfold-enter,.cartfold-leave-to{transform: translate3d(0,0,0)}	
	/*模态*/
	.list_mask{position: fixed;top: 0;left: 0;z-index: 40;width: 100%;height: 100%;background-color: rgba(7,17,27,.6);backdrop-filter:blur(10px);}
	.modelfade-enter-active,.modelfade-leave-active{transition:all .4s linear;}
	.modelfade-enter,.modelfade-leave-to{background-color: rgba(7,17,27,0);}		
</style>