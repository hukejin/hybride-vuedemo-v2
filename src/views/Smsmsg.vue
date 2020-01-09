<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div class="body">
		<van-nav-bar
				title="电话"
				left-text=""
				right-text=""
				left-arrow
				@click-left="onClickLeft"></van-nav-bar>
		<ul class="menulist">
			<li v-for="item in list" @click="todesc(item)" :key="item.title">
				<mainuiitem :item="item"></mainuiitem>
			</li>
		</ul>
	</div>
</template>

<script>
	import mainuiitem from '../components/MainUIItem.vue'
	export default {
		name: '',
		data () {
			return {
				list: [],
			}
		},
		components:{
			mainuiitem
		},
		mounted() {
			this.list.push({title:'电话',content:'拨打电话',url:'./img/mark.png'})
			this.list.push({title:'短信',content:'打开发送短信界面',url:'./img/mark.png'})
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			todesc(item){
				if(item.title === "电话"){
					this.$hesc.biz.telephone.call({
						phone:"13999997895", //电话号码
					onSuccess : function() {},
					onFail : function() {}
				})

				}else if(item.title === "短信"){
					this.$hesc.biz.telephone.smg({
						phone:"13999997895", //电话号码
					msg:"发送的信息",//要发送的信息
					onSuccess : function() {},
					onFail : function() {}
				})

				}
			}
		},
		props:[]

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
	.body{
		width: 100%;
		height: 100%;
		position: relative;
	}
	li{
		position: relative;
		width: 100%;
		box-sizing: border-box;
		padding: 3px;
	}
	li:after{
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		background-color: #c8c7cc;
		content: '';
		transform: scaleY(.5);
	}
</style>
