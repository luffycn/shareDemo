<template>
	<div class="rating_select">
		<div class="rating_type">
			<span @click='tab(2,$event)' class="block positive" :class = '{"active1":selectType===2}'>{{desc.all}}<span class="count">{{ratings.length}}</span></span>
			<span @click='tab(0,$event)' class="block positive" :class = '{"active2":selectType===0}'>{{desc.positive}}<span class="count">{{positives.length}}</span></span></span>
			<span @click='tab(1,$event)' class="block negative" :class = '{"active3":selectType===1}'>{{desc.negative}}<span class="count">{{negatives.length}}</span></span>{{negatives.length}}</span>
		</div>
		<div @click = 'toggleContent($event)' class="switch" :class = '{"on":onlyContent}'>
			<span class="icon-check_circle" ></span>
			<span class="text">只看内容的评价</span>
		</div>
	</div>
</template>

<script>
	const POSITIVE = 0;
	const NEGATIVE = 1;
	const ALL = 2;
	export default {
		data(){
			return {
				myselectType:ALL,
				myonlyContent:true
			}
		},
		watch:{
			selectType(val){
				this.myselectType = val
			},
			onlyContent(val){
				this.myonlyContent = val
			}
		},
		props:{
			ratings:{
				type:Array,
				default(){
					return [];
				}
			},
			selectType:{
				type:Number,
				default:ALL
			},
			onlyContent:{
				type:Boolean,
				default:false
			},
			desc:{
				type:Object,
				default(){
					return {
						all:'全部',
						positive:'满意',
						negative:'不满意'
					}
				}
			}
		},
		methods:{
			tab(type,event){
				//把浏览器默认点击事件return			
				if(!event._constructed){return;}
				this.myselectType = type;
				this.$emit('theRatingtype',this.myselectType);
			},
			toggleContent(event){
				if(!event._constructed){return;}
				this.myonlyContent = !this.myonlyContent;
				this.$emit('contentToggle',this.myonlyContent)
			}		
		},
		computed:{
			positives(){
				return this.ratings.filter((rating) => {
					return rating.rateType === POSITIVE;
				})
			},
			negatives(){
				return this.ratings.filter((rating) => {
					return rating.rateType === NEGATIVE;
				})				
			}
		}
	}
</script>

<style>
	.rating_select .rating_type{padding:18px 0;margin:0 18px;border-top:1px solid  rgba(7,17,27,0.1);font-size: 0}
	.rating_select .block{display: inline-block;padding:8px 12px;margin-right: 8px;border-radius: 1px;color: rgb(77,85,93);font-size: 12px;}
	.rating_select .positive{background-color: rgba(0,160,220,.2);}
	.rating_select .negative{background-color: rgba(77,85,93,.2);}
	.rating_select .active1{color: #fff;}
	.rating_select .active2{color: #fff;background-color: rgb(0,160,220);}
	.rating_select .active3{color: #fff;background-color: rgb(77,85,93);}
	.rating_select .count{font-size: 8px;margin-left: 2px}
	.rating_select .switch{padding: 12px 18px;line-height: 24px;border-bottom:1px solid rgba(7,17,27,0.1);color: rgb(147,153,159);font-size: 0}
	.rating_select .icon-check_circle{margin-right: 4px;font-size: 24px;display: inline-block;vertical-align: top;}
	.rating_select .text{font-size: 12px;display: inline-block;vertical-align: top;}
	.rating_select .on .icon-check_circle{color: #00c850}
</style>