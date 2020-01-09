<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div class="body">
		<van-nav-bar
				title="对话框"
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
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			todesc(item) {
				if (item.title === "alert") {
					this.$hesc.device.notification.alert({
						message: "亲爱的",
						title: "提示",//可传空
						buttonName: "收到",
						onSuccess : function() {
							alert("success")
							//onSuccess将在点击button之后回调
							/*回调*/
						},
						onFail : function(err) {
							alert(err)
						}
					});

				}else if(item.title === "confirm弹窗"){
					this.$hesc.device.notification.confirm({
						message: "你爱我吗",
						title: "提示",
						buttonLabels: ['爱', '不爱'],
						onSuccess : function(result) {
							alert(JSON.stringify(result))
							//onSuccess将在点击button之后回调
							/*
							{
								buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
							}
							*/
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
						}
					});

				}else if(item.title === "单选对话框"){
					this.$hesc.biz.util.select({
						title:"单选", //选择框标题
						buttonLabels: ['确定', '取消'],  //按钮文本
						array:[ '中国', '美国','加拿大', '英国'],//选项
						onSuccess : function(result) {
							alert(JSON.stringify(result))
						//onSuccess将在点击button之后回调
						/*
						{
							buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始，
						item：“中国”		//返回的值
						}
						*/

					},
					onFail : function(err) {
						alert(JSON.stringify(err))
					}
				})

				}else if(item.title === "多选对话框"){
					this.$hesc.biz.util.multiSelect({
						title:"多选", //选择框标题
						buttonLabels: ['确定', '取消'],  //按钮文本
						array:[ '中国', '美国','加拿大', '英国'], //选项
					onSuccess : function(result) {
						alert(JSON.stringify(result))
						//onSuccess将在点击button之后回调
						/*
						{
							buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始，
						items：[“中国”, “美国”]		//返回的值
						}
						*/

					},
					onFail : function(err) {
						alert(JSON.stringify(err))
					}
				})

				}else if(item.title === "toast消息"){
					this.$hesc.device.notification.toast({
						text: "这是个toast", //提示信息
						duration: 3, //Number 显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
						delay: 0, //Number 延迟显示，单位秒，默认0
						onSuccess : function() {
							alert("success")
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
						}
					})

				}else if(item.title === "actionsheet-Calendar日期选择"){
					this.$hesc.biz.util.datepicker({
						format: 'yyyy-MM-dd',//注意：format只支持android系统规范，即2015-03-31格式为yyyy-MM-dd
						value: '2015-04-17', //默认显示日期
						onSuccess : function(result) {
							alert(JSON.stringify(result))
							//onSuccess将在点击完成之后回调
							/*{
								value: "2015-02-10"
							}
							*/
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
						}
					})
				}else if(item.title === "actionsheet-Calendar 时间选择"){
					this.$hesc.biz.util.timepicker({
						format: 'HH:mm',
						value: '14:00', //默认显示时间
						onSuccess : function(result) {
							alert(JSON.stringify(result))
							//onSuccess将在点击完成之后回调
							/*{
								value: "10:00"
							}
							*/
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
						}
					})

				}else if(item.title === "actionsheet-Calendar 日期及时间选择"){
					this.$hesc.biz.util.datetimepicker({
						format: 'yyyy-MM-dd HH:mm',
						value: '', //默认显示
						onSuccess : function(result) {
							alert(JSON.stringify(result))
							//onSuccess将在点击完成之后回调
							/*{
								value: "2015-06-10 09:50"
							}
							*/
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
						}
					})

				}
			}
		},
		mounted() {
			this.list.push({title:'alert',content:'提示框，点击可以自动关闭',url:'./img/dialog.png'})
			this.list.push({title:'confirm弹窗',content:'添加确定和取消的对话框',url:'./img/dialog.png'})
			this.list.push({title:'单选对话框',content:'单选确定,选项只能为字符串，不能为对象',url:'./img/dialog.png'})
			this.list.push({title:'多选对话框',content:'多选项确定,选项只能为字符串，不能为对象',url:'./img/dialog.png'})
			this.list.push({title:'toast消息',content:'展示toast浮动消息',url:'./img/dialog.png'})
			this.list.push({title:'actionsheet-Calendar日期选择',content:'选择日期',url:'./img/dialog.png'})
			this.list.push({title:'actionsheet-Calendar 时间选择',content:'选择时间',url:'./img/dialog.png'})
			this.list.push({title:'actionsheet-Calendar 日期及时间选择',content:'选择日期及时间',url:'./img/dialog.png'})
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
