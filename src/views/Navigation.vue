<template>
	<div class="navigation">
		<div>{{msg}}</div>
		<ul class="menulist">
			<li v-for="item in list" @click="todesc(item)" :key="item.index">
				<mainuiitem :item="item"></mainuiitem>
			</li>
		</ul>
	</div>
</template>
<script>
	import mainuiitem from '../components/MainUIItem.vue'
	export default {
		name: "navigation",
		data() {
			return {
				msg: '设置原生导航栏',
				list:[],
			}
		},
		mounted() {
			this.list.push({title:'标题栏颜色',content:'设置标题栏颜色',url:'./img/pic.png',"index":0})
			this.list.push({title:'左侧按钮',content:'设置左侧按钮',url:'./img/pic.png',"index":1})
			this.list.push({title:'导航栏标题',content:'设置导航栏标题',url:'./img/pic.png',"index":2})
			this.list.push({title:'右侧按钮',content:'设置右侧按钮',url:'./img/pic.png',"index":3})
			this.list.push({title:'关闭当前页面',content:'关闭当前浏览器窗口',url:'./img/pic.png',"index":4})
			this.list.push({title:'返回上级页面',content:'返回上级页面，如是根目录则关闭浏览器',url:'./img/pic.png',"index":5})
			this.list.push({title:'替换页面',content:'直接替换当前页面',url:'./img/pic.png',"index":6})
		},
		computed: {},
		watch: {},
		components: {
			mainuiitem
		},
		created() {
		},
		methods: {
			todesc(res){
				if(res.index === 0){
					this.$hesc.biz.navigation.setbg({
						bgcolor: '#CCdeb887',//ARGB格式 --- 透明度，红色，绿色，蓝色
						onSuccess : function() {
							alert("设置成功")
							//onSuccess将在点击完成之后回调
						},
						onFail : function(err) {
							alert(err)
						}
					})

				}else if(res.index === 1){
					this.$hesc.biz.navigation.setLeft({
						control: true,//是否控制点击事件，true 控制，false 不控制
						text: '返回',//控制显示文本，空字符串表示显示默认文本
						onSuccess : function() {
							//如果control为true，则onSuccess将在发生按钮点击事件被回调
							alert("返回按钮被点击")
						},
						onFail : function(err) {
							alert(err)
						}
					});

				}else if(res.index === 2){
					this.$hesc.biz.navigation.setTitle({
						title : '邮箱正文',//控制标题文本，空字符串表示显示默认文本
						onSuccess : function() {
							alert("设置成功")
							//onSuccess将在点击完成之后回调
						},
						onFail : function(err) {
							alert(err)
						}
					});

				}else if(res.index === 3){
					this.$hesc.biz.navigation.setRight({
						show: true,//控制按钮显示， true 显示， false 隐藏， 默认true
						control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
						text: '发送',//控制显示文本，空字符串表示显示默认文本
						onSuccess : function() {
							//如果control为true，则onSuccess将在发生按钮点击事件被回调
							alert("右边按钮被点击")
						},
						onFail : function(err) {
							alert(err)
						}
					});

				}else if(res.index === 4){
					this.$hesc.biz.navigation.close({
						onSuccess : function() {
						},
						onFail : function(err) {
							alert(err)
						}
					})
				}else if(res.index === 5){
					this.$hesc.biz.navigation.goBack({
						onSuccess : function() {

						},
						onFail : function(err) {
							alert(err)
						}
					})
				}else if(res.index === 6){
					this.$hesc.biz.navigation.replace({
						url: 'https://www.baidu.com',// 新的页面链接
						onSuccess : function() {

						},
						onFail : function(err) {
							alert(err)
						}
					});
				}

			}
		}
	}
</script>

<style scoped>
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
