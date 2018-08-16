<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class = "itemClass" track-by="$index" class="star_item"></span>
	</div>
</template>

<script>
	const LENGTH = 5;
	const CLS_ON = 'on';
	const CLS_HALF = 'half';
	const CLS_OFF = 'off';

	export default{
		props:{
			size:{
				type:Number
			},
			score:{
				type:Number
			}
		},
		computed:{
			starType:function(){
				return 'star_' +this.size;	//图片尺寸	
			},
			itemClasses:function(){
				let result = [];//空数组
				let score = Math.floor(this.score*2)/2;//计算星		
				let hasDecimal = score % 1 !==0;//非小数
				let integer = Math.floor(score);//有几颗完整的星星
				for(let i=0;i<integer;i++){
					result.push(CLS_ON);
				}
				//if have 小数点
				if(hasDecimal){
					result.push(CLS_HALF)//添加半星
				}
				while (result.length < LENGTH){
					result.push(CLS_OFF)//如果数组长度小于规定长度，添加空星星
				}
				return result;
			}
		}
	};
</script>

<style>
	.star{font-size: 0}
	.star .star_item{display: inline-block;background-repeat: no-repeat;}
	.star_48 .star_item{width: 20px;height: 20px;margin-right: 20px;background-size: 20px 20px;}
	.star_36 .star_item{width: 15px;height: 15px;margin-right: 10px;background-size: 15px 15px;}
	.star_24 .star_item{width: 10px;height: 10px;margin-right: 3px;background-size: 10px 10px;}

	.star_48 .star_item:last-child{margin-right: 0}
	.star_36 .star_item:last-child{margin-right: 0}
	.star_24 .star_item:last-child{margin-right: 0}

	.star_48 .on{background-image: url(star48_on@2x.png);}
	.star_48 .half{background-image: url(star48_half@2x.png);}
	.star_48 .off{background-image: url(star48_off@2x.png);}

	.star_36 .on{background-image: url(star36_on@2x.png);}
	.star_36 .half{background-image: url(star36_half@2x.png);}
	.star_36 .off{background-image: url(star36_off@2x.png);}

	.star_24 .on{background-image: url(star24_on@2x.png);}
	.star_24 .half{background-image: url(star24_half@2x.png);}
	.star_24 .off{background-image: url(star24_off@2x.png);}

</style>