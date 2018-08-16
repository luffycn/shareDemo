<template>
	<div class="cartcontrol">
		<transition name = 'move'>
			<div class="cartDecrease" v-show = "food.count>0" @click.stop.prevent= 'decreaseCart' transtion = "move">	
				<i class="inner icon-remove_circle_outline"></i>
			</div>			
		</transition>
		<div class="cartCount" v-show = "food.count>0">{{food.count}}</div>
		<div class="cartAdd icon-add_circle" @click.stop.prevent = 'addCart'></div>			
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			//购物数量增加
			addCart(e){
				if(!e._constructed){
					//插件派发的点击事件带有这个属性 浏览器没有这个属性
					return;
				}
				if(!this.food.count){
					//用vue的方法 给这个数据添加一个数据参数 count
					Vue.set(this.food,'count')
					this.food.count = 1;
				}
				else{
					this.food.count ++;
				}
				this.$emit('dropEvent',e.target);
			},
			//购物数量递减
			decreaseCart(e){
				if(!e._constructed){return;}
				if(this.food.count){
					this.food.count --;
				}
			}
		}
	}
</script>

<style>
	.cartcontrol{font-size: 0}
	.cartcontrol div{display: inline-block;}
	.cartcontrol .cartDecrease,.cartcontrol .cartAdd{padding: 6px}
	.cartcontrol .cartDecrease .inner,.cartcontrol .cartAdd{
		display: inline-block;
		line-height: 24px;
		font-size: 24px;
		color:rgb(0,160,200);
}
	.cartcontrol .cartCount{vertical-align: top;width: 12px;padding-top: 6px;line-height: 24px;text-align: center;font-size: 10px;color: rgb(147,157,159)}
	/*css3*/
	.move-enter-active,.move-leave-active{transition:all .3s linear;}
	.move-enter,.move-leave-to{opacity: 0;transform: translate3d(24px,0,0) rotate(180deg);}
</style>