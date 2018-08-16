<template>
	<div class="sell_index">
		<sellHeader :seller = "seller"></sellHeader>
		<div class="tab">
			<div class='tab-item'  @click = 'nav_bol = 1'><router-link to = './goods'>商品</router-link></div>
			<div class='tab-item'  @click = 'nav_bol = 2'><router-link to = './ratings' >评论</router-link></div>
			<div class='tab-item'  @click = 'nav_bol = 3'><router-link to = './seller'>商家</router-link></div>
		</div>
		<div class="theSell_contents">
			<keep-alive>
				<router-view :seller = "seller"></router-view>	
			</keep-alive>
		</div>			
	</div>
</template>

<script type = "ecmascript-6">
	import sellHeader from './../../components/header.vue'
	
	import {urlParse} from '../../../static/js/id.js'
	var ERR_OK = 0;
	export default {
	    components:{
	    	sellHeader
	        // Sidebar
	    },
		data:function(){
			return {
				nav_bol:1,
				seller:{},
				id:(() => {
					let queryParam = urlParse();
					console.log(queryParam)
					return queryParam.id
				})()
			};
		},
		created:function(){
		 	/*
			this.$http.get('../../../data.json').then((res) => {
				res = res.body;
				if(res.errno === ERR_OK){
					this.seller == res.data
				}
			})*/
			var _this = this;
			this.axios.get("static/data/data.json?id="+this.id).then(function(res){
					_this.seller = res.data.seller;
					//_this.seller = Object.assign({},_this.seller.id)
				});				
		}	    
	     //页面刷新时回到首页
	    //beforeCreate:function(){this.$router.push('/')}
	  }	

</script>
<style>
	.tab{display: flex;width: 100%;line-height: 40px;height: 40px}
	.tab .tab-item{flex: 1;border-bottom: 1px solid rgba(7,17,27,.1);text-align: center;}
	.tab .tab-item a{font-size: 14px;color: rgb(77,85,93);}
	.tab .tab-item .active{color: rgb(240,20,20);}
</style>