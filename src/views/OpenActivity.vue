<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div class="body">
		<van-nav-bar
				title="打开第三方APP或者页面"
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
			this.list.push({title:'打开第三方APP',content:'打开城管通APP，需要APP包名',url:'./img/app.png'})
			this.list.push({title:'打开第三方web',content:'实现新的webview加载url,进行页面跳转',url:'./img/app.png'})
			this.list.push({title:'JS主动调用原生能力',content:'页面通过JS方法直接调用原生的方法',url:'./img/app.png'})

		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			todesc(item) {
				if (item.title === "打开第三方APP") {
					this.$hesc.biz.microApp.openApp({
						agentId: 'cn.com.hesc.rtmpdemo',// iOS:应用scheme;   Android:应用包名
						appId: 'cn.com.hesc.rtmpdemo.MainActivity',// Android: APP入口activity
						onSuccess : function() {
						},
						onFail : function(err) {
							alert(err)
						}
					})

				}else if(item.title === "打开第三方web"){
					//模拟传值过程
					this.$hesc.biz.util.openLink({
						hrefurl: 'https://www.baidu.com',//打开的第三方地址
						onSuccess : function() {
							console.log("打开成功")
						},
						onFail : function(err) {
							alert(err)
						}
					})

				}else if(item.title === "JS主动调用原生能力"){
					let toNative = {
						'action':'login',
						'name':'jake',
						'password':'9998'
					}
					//模拟传值过程
					this.$hesc.biz.native.method({
						param: toNative,//打开的第三方地址
						onSuccess : function() {
							console.log("调用成功")
						},
						onFail : function(err) {
							alert(err)
						}
					})

				}
			}
		},
		props:[]

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
