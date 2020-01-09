<template>
	<!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
	<div class="body">
		<van-nav-bar
				title="数据永久化存储"
				left-text=""
				right-text=""
				left-arrow
				@click-left="onClickLeft"></van-nav-bar>
		<p>数据存储采用Map数据结构方式（key-value）进行存储，注意key如果相同的话，会覆盖前面已保存的value值，续保证key的唯一性</p>
		<p>这里展示一个person对象，有name和age2个属性值</p>
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
			this.list.push({title:'数据存储',content:'保存数据',url:'./img/db.png'})
			this.list.push({title:'数据读取',content:'读取数据',url:'./img/db.png'})
			this.list.push({title:'数据删除',content:'删除数据',url:'./img/db.png'})

		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			todesc(item){
				if(item.title === "数据存储"){
					let person = {'name':'张三','age':18};
					this.$hesc.util.domainStorage.setItem({
						name:'person' , // 存储信息的key值，必须唯一 String
						value:JSON.stringify(person), //String 存储信息的Value值
						onSuccess : function(info) {
							alert(JSON.stringify(info))
							/*{
						        result:true
					        }*/
						},
						onFail : function(err) {
							alert(err);
						}
					});

				}else if(item.title === "数据读取"){
					this.$hesc.util.domainStorage.getItem({
						name:'person' , // 存储信息的key值
						onSuccess : function(info) {
							alert(JSON.stringify(info))
							/*{
								 value: 'value' // 获取存储的信息
							 }*/
						},
						onFail : function(err) {
							alert(err);
						}
					});

				}else if(item.title === "数据删除"){
					this.$hesc.util.domainStorage.removeItem({
						name:'person' , // 存储信息的key值
						onSuccess : function(info) {
							alert(JSON.stringify(info))
							/*{
						        result:true
					        }*/
						},
						onFail : function(err) {
							alert(err);
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
