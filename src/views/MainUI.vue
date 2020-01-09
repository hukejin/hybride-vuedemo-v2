<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div>
		<van-nav-bar
				title="VUE版本混合框架V2.0演示程序"
				left-text=""
				right-text=""></van-nav-bar>
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
			this.list.push({title:'容器导航栏',content:'设置容器的标题导航栏',url:"./img/pic.png",to:'navigation'})
			this.list.push({title:'拍照',content:'拍照、选图、预览、裁剪、扫一扫',url:'./img/pic.png',to:'picture'})
			this.list.push({title:'电话',content:'展示拨号、发短信功能',url:'./img/mark.png',to:'smsmsg'})
			this.list.push({title:'音频',content:'展示录音、播放等功能',url:'./img/voice_light.png',to:'voice'})
			this.list.push({title:'位置',content:'获取当前GPS位置',url:'./img/location_light.png',to:''})
			this.list.push({title:'地图展示',content:'展示天地图,以杭州为例',url:'./img/map-bubble-hover.png',to:''})
			this.list.push({title:'当前网络',content:'获取当前网络类型:mobile/wifi',url:'./img/global.png',to:''})
			this.list.push({title:'当前软件版本',content:'获取容器软件版本',url:'./img/global.png',to:''})
			this.list.push({title:'进度条颜色',content:'设置页面加载时进度条的颜色',url:'./img/global.png',to:''})
			this.list.push({title:'UUID',content:'获取设备唯一编码',url:'./img/global.png',to:''})
			this.list.push({title:'手机信息',content:'获取手机基本信息',url:'./img/global.png',to:''})
			this.list.push({title:'下载文件',content:'下载文件并实时反馈进度',url:'./img/global.png',to:''})
			this.list.push({title:'数据缓存',content:'将web数据进行本地永久化存取',url:'./img/db.png',to:'localstorage'})
			this.list.push({title:'操作原生activity',content:'打开第三方APP或者启动原生UI',url:'./img/app.png',to:'openactivity'})
			this.list.push({title:'dialog弹窗',content:'dialog、toast、单选、多选、日期选择',url:'./img/app.png',to:'dialog'})

		},
		methods:{
			todesc(item){
				if(item.to !== undefined && item.to !== ""){
					this.$router.push({
						name: item.to
					})
				}else{
					if(item.title === "位置"){
						this.$hesc.device.geolocation.get({
							tiandi:true,
							key:'8730e769e5f114d59325884bf3b7a2e9',
							poi:true,
							onSuccess : function(result) {
								alert(JSON.stringify(result))
							},
							onFail : function(err) {
								alert("位置调用错误" + err)
							}
						});

					}else if(item.title === "地图展示"){
						this.$hesc.biz.map.locate({
							// latitude: 30.28, // 纬度，非必须
							// longitude: 120.13, // 经度，非必须
							key:'8730e769e5f114d59325884bf3b7a2e9',//申请的天地图key
							baseUrl:'http://t0.tianditu.gov.cn/vec_c/wmts', //天地图底图地址
							annotation:'https://t0.tianditu.gov.cn/cva_c/wmts',//天地图标注地址
							parturl:'',//部件地址
							mapExtent:{minX:120.02,minY:30.08,maxX:120.36,maxY:30.48},//地图初始化范围
							onSuccess: function (result) {
								alert(JSON.stringify(result))
							/* result 结构
							{
								province: 'xxx', // POI所在省会，可能为空
									provinceCode: 'xxx', // POI所在省会编码，可能为空
								city: 'xxx', // POI所在城市，可能为空
								cityCode: 'xxx', // POI所在城市，可能为空
								adName: 'xxx', // POI所在区名称，可能为空
								adCode: 'xxx', // POI所在区编码，可能为空
								distance: 'xxx', // POI与设备位置的距离
								postCode: 'xxx', // POI的邮编，可能为空
								snippet: 'xxx', // POI的街道地址，可能为空
								title: 'xxx', // POI的名称
								address: 'xxx', // 详细地址，可能为空
								latitude: 39.903578, // POI的纬度
								longitude: 116.473565, // POI的经度
							}
							*/
						},
						onFail: function (err) {
							alert(JSON.stringify(err))
						}
					});

					}else if(item.title === "当前网络"){
						this.$hesc.device.connection.getNetworkType({
							onSuccess : function(data) {
								alert(JSON.stringify(data))
								/*
								{
									result: 'wifi' // result值: wifi mobile unknown none   none表示离线
								}
								*/
							},
							onFail : function(err) {
								alert(JSON.stringify(err))
							}
						});
					}else if(item.title === "当前软件版本"){
						this.$hesc.soft.version({
							onSuccess : function(data) {
								alert(JSON.stringify(data))
								/*
								{
									versionCode:Number,versionName:String
								}
								*/
							},
							onFail : function(err) {
								alert(JSON.stringify(err))
							}
						});
					}else if(item.title === "UUID"){
						this.$hesc.device.base.getUUID({
							onSuccess : function(data) {
								alert(JSON.stringify(data))
								/*
								{
									uuid: '3udbhg98ddlljokkkl'
								}
								*/
							},
							onFail : function(err) {
								alert(JSON.stringify(err))
							}
						});
					}else if(item.title === "手机信息"){
						this.$hesc.device.base.getPhoneInfo({
							onSuccess : function(data) {
								alert(JSON.stringify(data))
								/*
								{
									uuid: '3udbhg98ddlljokkkl'
								}
								*/
							},
							onFail : function(err) {
								alert(JSON.stringify(err))
							}
						});
					}else if(item.title === "进度条颜色"){
						this.$hesc.ui.progressBar.setColors({
							colors:"#228b22",//ARGB
							onSuccess: function() {
							},
							onFail: function() {
							}
						})
					}else if(item.title === "下载文件"){
						this.$hesc.biz.util.downloadFile({
							url: 'http://static.dingtalk.com/media/lADOADTWJM0C2M0C7A_748_728.jpg_60x60q90.jpg', //要下载的文件的url
							name: 'demo.jpg', //定义下载文件名字
							onSuccess : function(result) {
								alert("下载成功,文件地址:"+result.path)
							},
							onFail : function() {}
						})
					}
				}
			}
		},
		props:[]

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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
