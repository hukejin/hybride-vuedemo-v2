<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div>
		<van-nav-bar
				title="音频"
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
				voicepath:''
			}
		},
		components:{
			mainuiitem
		},
		mounted() {
			this.list.push({title:'开始录制',content:'语音录制开始',url:'./img/voice_light.png'})
			this.list.push({title:'结束录制',content:'停止录制，生成文件',url:'./img/voice_light.png'})
			this.list.push({title:'结束录制监听',content:'请置于录制开始调用前',url:'./img/voice_light.png'})
			this.list.push({title:'开始播放',content:'播放语音文件',url:'./img/voice_light.png'})
			this.list.push({title:'暂停播放',content:'暂停播放语音',url:'./img/voice_light.png'})
			this.list.push({title:'继续播放',content:'继续播放语音',url:'./img/voice_light.png'})
			this.list.push({title:'播放停止',content:'关闭播放的语音',url:'./img/voice_light.png'})
			this.list.push({title:'监听播放进度',content:'监听是否已播放完成',url:'./img/voice_light.png'})
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			todesc(item){
				if(item.title === "开始录制"){
					this.$hesc.device.audio.startRecord({
						mediaUrl:'http://220.191.224.215/file/file/uploadFiles/',//附件服务器地址
						onSuccess : function () {//默认20秒。
							alert("开始录制")
						},
						onFail : function (err) {
							alert(JSON.stringify(err))
						}
					});

				}else if(item.title === "结束录制"){
					this.$hesc.device.audio.stopRecord({
						mediaUrl:'http://220.191.224.215/file/file/uploadFiles/',//附件服务器地址
						onSuccess : function(res){
							alert(JSON.stringify(res))
							//res.mediaUrl; // 返回音频的url地址，可用于本地播放和音频下载
							//res.duration; // 返回音频的时长，单位：秒
						},
						onFail : function (err) {
							alert(err)
						}
					});
				}else if(item.title === "结束录制监听"){
					this.$hesc.device.audio.onRecordEnd({
						onSuccess : function(res){
							alert(JSON.stringify(res))
							//res.mediaUrl; // 返回音频的url地址，可用于本地播放和音频下载
							//res.duration; // 返回音频的时长，单位：秒
						},
						onFail : function (err) {
							alert(err)
						}
					});
				}
				else if(item.title === "开始播放"){
					this.$hesc.device.audio.play({
						localAudioId : "http://220.191.224.215/upload/file/2020/01/09/202001091047504503.mp3",//音频的url地址
						onSuccess : function () {
							alert("开始播放")
						},

						onFail : function (err) {
							alert(err)
						}
					});
				}else if(item.title === "播放停止"){
					this.$hesc.device.audio.stop({
						localAudioId : "http://220.191.224.215/upload/file/2020/01/09/202001091047504503.mp3",
						onSuccess : function () {
							alert("播放停止")
						},
						onFail : function (err) {
							alert(err)
						}
					});

				}else if(item.title === "暂停播放"){
					this.$hesc.device.audio.pause({
						localAudioId : "http://220.191.224.215/upload/file/2020/01/09/202001091047504503.mp3",
						onSuccess : function() {
							alert("暂停播放")
						},
						onFail : function(err) {
							alert(err)
						}
					});
				}else if(item.title === "继续播放"){
					this.$hesc.device.audio.resume({
						localAudioId : "http://220.191.224.215/upload/file/2020/01/09/202001091047504503.mp3",
						onSuccess : function() {
							alert("继续播放")
						},
						onFail : function(err) {
							alert(err)
						}
					});
				}else if(item.title === "监听播放进度"){
					this.$hesc.device.audio.onPlayEnd({
						onSuccess : function () {
							alert("播放已完成")
						},
						onFail : function (err) {
							alert(err)
						}
					});
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
