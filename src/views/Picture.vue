/* eslint-disable */
<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div class="body">
		<van-nav-bar
				title="拍照"
				left-text=""
				right-text=""
				left-arrow
				@click-left="onClickLeft"></van-nav-bar>
		<ul class="menulist">
			<li v-for="item in list" @click="todesc(item)" :key="item.title">
				<mainuiitem :item="item"></mainuiitem>
			</li>
		</ul>
		<div>
			<img :src="item" v-for="(item,index) in bsrcs" :key="index" style="margin: 10px 10px">
			<!--<img :src="bsrc" style="width: 100px;height: 100px">-->
			<!--<img src="data:image/png;base64,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" style="width: 100px;height: 100px">-->
		</div>
	</div>
</template>

<script>
	import mainuiitem from '../components/MainUIItem.vue'
	export default {
		name: '',
		data () {
			return {
				list: [],
				bsrcs:[]
			}
		},
		components:{
			mainuiitem
		},
		mounted() {
			this.list.push({title:'拍照',content:'调用相机',url:'./img/pic.png'})
			this.list.push({title:'选择图片',content:'进行图片选择操作',url:'./img/pic.png'})
			this.list.push({title:'预览图片',content:'预览图片',url:'./img/pic.png'})
			this.list.push({title:'扫一扫',content:'打开扫一扫，返回扫描结果',url:'./img/pic.png'})

		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			todesc(item){
				let self = this
				if(item.title === "拍照"){
					this.$hesc.device.media.capture({
						custome:true, //true 自定义相机  false 系统相机
						compress:true,//true 进行压缩
						thumbnail:true,//true 优先返回缩略图base64，后台上传图片，false不需要缩略图，直接后台上传图片
						mediaUrl:"http://220.191.224.215/file/file/uploadFiles/",//附件服务器地址
						onThumbnail : function(result) {
							for (let item in result.thumbnails) {
								let hearder = "data:image/png;base64,";
								let arrNew = new Array()
								arrNew.push(hearder)
								arrNew.push(result.thumbnails[item])
								self.bsrcs.push(arrNew.join(''))
							}
							/*拍摄图片后返回100*100的缩略图base64编码的字符串
							 {
						            thumbnails：['./9XXXXXXXXXXXXXXXXXX’,'./9xxxxxxx'}]
				             }
						   */

						},
					onSuccess : function(result) {
						alert(JSON.stringify(result))
						/*图片上传成功后返回url地址
						  {
								pics:[
									{path : http://yf.hesc.com.cn/hesc-fileservice/upload/file/2018/04/04/20180404160840998550.jpg}
								]
						  }
						*/
					},
					onFail : function() {}
				})

				}else if(item.title === "选择图片"){
					this.$hesc.device.media.select({
						image:{multiple:true,compress:false,max:9},//multiple true进行多选compress true进行压缩，max最多选9张，如果multiple设置为false，max默认赋值1
						thumbnail:false,//true 优先返回缩略图base64，后台上传图片，false不需要缩略图，直接后台上传图片
						mediaUrl:"http://220.191.224.215/file/file/uploadFiles/",//附件服务器地址
						onThumbnail : function(result) {
							for (let item in result.thumbnails) {
								let hearder = "data:image/png;base64,";
								let arrNew = new Array()
								arrNew.push(hearder)
								arrNew.push(result.thumbnails[item])
								self.bsrcs.push(arrNew.join(''))
							}
							/*拍摄图片后返回100*100的缩略图base64编码的字符串
							 {
						        thumbnails：[{src:’./9XXXXXXXXXXXXXXXXXX’}]
					          }
						   */
						},
					onSuccess : function(result) {
						alert(JSON.stringify(result))
						/*图片上传成功后返回url地址
						  {
							pics:[
								{path : http://yf.hesc.com.cn/hesc-fileservice/upload/file/2018/04/04/20180404160840998550.jpg}
							]
						  }
						*/
					},
					onFail : function(err) {
						alert(JSON.stringify(err))
					}
				})

				}else if(item.title === "预览图片"){
					this.$hesc.biz.util.previewImage({
						urls: ['http://220.191.224.215/upload/file/2020/01/09/20200109093516192499.jpg','http://220.191.224.215/upload/file/2020/01/09/20200109093516261849.jpg','http://220.191.224.215/upload/file/2020/01/09/20200109093516354206.jpg'],//图片地址列表
						current: String,//当前显示的图片链接 可不填
						onSuccess : function(result) {
							alert(JSON.stringify(result))
							/**/
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
						}
					})
				}else if(item.title === "扫一扫"){
					this.$hesc.biz.util.scan({
						type: "qrCode" , // qrCode 二维码 barCode 条形码
						onSuccess: function(data) {
							alert(JSON.stringify(data))
							//onSuccess将在扫码成功之后回调
							/* data结构
							   { 'text': String}
							*/
						},
						onFail : function(err) {
							alert(JSON.stringify(err))
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
