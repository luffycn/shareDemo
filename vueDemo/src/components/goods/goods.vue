<template>
	<div class="goods">
		<div class="menu_wrapper" ref="menuWrapper">
			<ul>
		 		<li :key=i v-for =  "(item,i) in goods" class="menu_item" :class ="{'current':currentIndex===i}" @click = "selectMenu(i,$event)">	 			
		 			<span class="text">
		 				<span v-show = "item.type>0" class="icon" :class ="classMap[item.type]"></span>{{item.name}}
		 			</span>
				</li> 
			</ul>
		</div>
		<div class="foods_wrapper"  ref="foodWrapper">
			<ul>
				<li :key="i" v-for="(item,i) in goods" class="food_list food_list_hook">
					<h1 class="food_title">{{item.name}}</h1>
					<ul>
						<li :key="i" v-for = "(food,i) in item.foods" class="food_item" @click = 'selectFood(food,$event)' >
							<div class="icon">
								<img :src="food.icon" alt="" width="57" height="57">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="food_des">{{food.description}}</p>
								<div class="extra">
									<span class="food_count">月售{{food.sellCount}}份</span><span>好评论{{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span><span class="old" v-show = "food.oldPrice">￥{{food.oldPrice}}</span>
								</div>
								<!-- v-for item in goods 这人的food指food in item.foods--> 
								<div class="cartcontrol_wrapper">
									<CartControl :food = 'food' @dropEvent = 'getEl'></CartControl>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<!-- 将购物车和食物加减联动 -->
		<Shopcart :selectFoods = "shopcart_selectfoods" :deliveryPrice = 'seller.deliveryPrice' :minPrice = 'seller.minPrice' ref = 'shopcart'></Shopcart>
		<FoodDetail :food = 'selectedFood' ref = 'detail' @dropEvent = 'getEl' ></FoodDetail>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import Shopcart from './../shopcart/shopcart.vue'
	import CartControl from './../cartcontrol/cartcontrol.vue'
	import FoodDetail from './../food/food.vue'
	export default{
		components:{
			Shopcart,CartControl,FoodDetail
		},		
		data:function(){
			return {
				goods:[],// 数据
				listHeight:[],//板块坐标Y
				scrollY:0, // 滑动尺寸
				selectedFood:{}
			};
		},
		props:{
			seller:{
				type:Object
			}
		},
		computed:{
			currentIndex:function(){
				for(let i=0;i<this.listHeight.length;i++){
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i+1];	
					//如果height2不存在 i循环最后+1 会超出		
					if( !height2 || (this.scrollY>=height1&&this.scrollY<height2)){
						//console.log(this.scrollY);
						return i;//如果该元素的scoll高度在某个区间 返回i
					}
					//console.log(this.scrollY)	
				}
				return 0;
			},
			//联动shopcart子组件 子组件点击添加或者减少 会影响购物车数据
			shopcart_selectfoods(){
				let foods = [];
				this.goods.forEach((goods) => {
					goods.foods.forEach((food) => {
						if(food.count){
							foods.push(food);
						}
					})
				})
				//console.log(foods)
				return foods;
			}
		},			
		created:function (){
			this.classMap = ['decrease','discount','special','invoice','guarantee'];
			var _this = this;			
			this.axios.get("static/data/data.json").then(function(res){
					_this.goods = res.data.goods;
					//为了数据完成后计算高度
					_this.$nextTick(() => {
						_this._initScroll();
						_this._calculateHeight();
					})
					
				});				
		},
		methods:{
			selectMenu:function(i,e){		
				if(!e._constructed){
					//插件派发的点击事件带有这个属性 浏览器没有这个属性,就会把浏览器自带点击事件默认return 掉
					return;
				}
				//不然相当于点两次 本身js一次 better插件一次
				let foodList = this.$refs.foodWrapper.getElementsByClassName('food_list_hook');
				let el = foodList[i];
				//插件的一个方法，传入el 列表板块元素 动画
				this.foodScroll.scrollToElement(el, 300)
			},
			_initScroll:function(){
				this.meunScroll = new BScroll(this.$refs.menuWrapper,{
					click:true//初始化属性 允许有点击事件
				})//ref绑定的DOM
				this.foodScroll = new BScroll(this.$refs.foodWrapper,{
					//插件参数，屏幕滚动类型
					probeType:3,
					click:true//初始化属性 允许有点击事件 方便购物车点击添加
				});
				//插件传参 监听scroll 
				//箭头函数 (sc) => 等于 function(sc) 回调
				this.foodScroll.on('scroll',(sc) => {
					//abs 正值 round四舍五入
					this.scrollY = Math.abs(Math.round(sc.y));
				})
				
			},
			//计算食物列表总高度函数
			_calculateHeight:function(){
				//获得9大食物列表板块
				let foodList = this.$refs.foodWrapper.getElementsByClassName('food_list_hook');				
				let height = 0;//临时变量记载高度
				this.listHeight.push(height);
				for(let i=0;i<foodList.length;i++){
					let item = foodList[i];//每个板块
					height += item.clientHeight;//每个大板块的高度总和		
					this.listHeight.push(height);//[[0, 1146, 1334, 1466, 1810, 2048, 2318, 2652, 3208, 3970]
				}
			},
			getEl:function(target){
				//接受cartcontrol组件的值，执行购物车组件drop方法
				this.$refs.shopcart.drop(target);
			},
			selectFood:function(food,e){
				//把浏览器默认点击事件return			
				if(!e._constructed){return;}
				this.selectedFood = food;
				this.$refs.detail.show()
			}
		}
	}
</script>

<style>
	.goods{position: absolute;width: 100%;top: 174px;bottom: 0px;display: flex;overflow: hidden;}
	/*等分 x 占位空间*/
	.goods .menu_wrapper{flex: 0 0 80px;width: 80px;background-color: #f3f5f7;}
	.goods .foods_wrapper{width: 100%;background-color: #fff}
	.menu_wrapper ul .menu_item{display: table;height: 54px;line-height: 14px;padding: 0 12px}
	.menu_wrapper ul .menu_item .icon {display: inline-block;vertical-align: top;width: 12px;height: 12px;margin-right: 2px;background-size: 12px 12px;background-repeat: no-repeat;}
	.menu_wrapper ul .menu_item .special{background-image: url(../../assets/imgs/special_3@2x.png);}
	.menu_wrapper ul .menu_item .discount{background-image: url(../../assets/imgs/discount_3@2x.png);}
	.menu_wrapper ul .menu_item .text{display: table-cell;width: 56px;vertical-align: middle;font-size: 12px;border-bottom: 1px solid rgba(7,17,27,.1)}
	.foods_wrapper{flex: 1}
	
	.menu_wrapper ul .current{position: relative;margin-top: -1px;z-index: 10;background: #fff;font-weight: 700;}
	.menu_wrapper ul .current .text{border:none;}
	.foods_wrapper .food_list .food_title{padding-left:14px;height: 26px;line-height: 26px;border-left: 2px solid #d9dde1;font-size: 12px;color: rgb(147,153,159);background-color: #f3f5f7}
	.foods_wrapper .food_list .food_item{display: flex;margin:18px;border-bottom: 1px solid rgba(7,17,27,.1);padding-bottom: 18px;}
	.foods_wrapper .food_list .food_item:last-child{boder:none;margin-bottom: 0}
	.food_item .icon{flex: 0 0 57px;margin-right: 10px}
	.food_item .content{flex: 1;position: relative;}
	.food_item .content .name{margin:2px 0 8px 0;height: 14px;line-height: 14px;font-size: 14px;color: rgb(7,17,27)}
	.food_item .content .food_des,.food_item .content .extra{line-height: 10px;;font-size: 10px;color: rgb(147,153,159)}
	.food_item .content .food_des{margin-bottom: 8px;line-height: 12px;}
	.food_item .content .extra .food_count{margin-right: 12px}
	.food_item .content .price{font-weight: 700;line-height: 24px}
	.food_item .content .price .now{margin-right: 8px;font-size: 14px;color:rgb(240,20,20);}
	.food_item .content .price .old{text-decoration: line-through;font-size: 10px;color: rgb(147,153,159) }
	.food_item .content .cartcontrol_wrapper{position: absolute;right: 0;bottom: -6px;}
</style>