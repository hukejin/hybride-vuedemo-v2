<template>
	<div class="TreeMenu">
		<div class="tree-menu">
			<van-icon :name="showChildren?'close':'add-o'" :style="indent"/>
			<div :style="indent" @click="toggleChildren" class="label">{{ label }}</div>
			<van-cell :title="item.name" :value="item.phone" v-for="(item,index) in contactBookList"  :key="index" icon="user-o" @click="click(item)" :style="indent_index(index)" v-if="showChildren"/>
			<tree-menu
					v-if="showChildren"
					v-for="node in nodes"
					:nodes="node.children"
					:label="node.name"
					:depth="depth + 1"
					:key="node.id"
					:contactBookList="node.contactBookList">
			</tree-menu>
		</div>
		<van-actionsheet
				v-model="show"
				:actions="actions"
				@select="onSelect"
		/>
	</div>
</template>

<script>
	import TreeMenu from '@/components/TreeMenu'
	export default {
		name: "TreeMenu",
		data() {
			return {
				showChildren: false,
				show:false,
				actions: [
					{ name: '拨打电话' },
					{ name: '编辑' },
					{ name: '删除'}
				],
				checkitem:{},
			}
		},
		mounted() {
			this.showChildren = this.showicon();
		},
		computed: {
			indent() {
				return { transform: `translate(${this.depth * 20}px)` }
			},
			// indent_index(index){
			// 	return { transform: `translate(${this.depth * 20}px)`,backgroundColor:`${index%2 ===0?(255,255,255):(245,245,220)}` }
			// }
		},
		watch: {},
		components: {
			TreeMenu
		},
		methods: {
			toggleChildren() {
				if(this.showicon())
					return;
				this.showChildren = !this.showChildren;
			},
			click(item){
				this.show = true;
				this.checkitem = item;
			},
			onSelect(item) {
				// 点击选项时默认不会关闭菜单，可以手动关闭
				this.show = false;
				if(item.name === "拨打电话"){
					console.log("拨打电话:"+this.checkitem.phone);
				}else if(item.name === "编辑"){
					console.log("编辑资料:"+this.checkitem.name);
				}else if(item.name === "删除"){
					console.log("删除:"+this.checkitem.name);
				}
			},
			showicon(){
				return (this.nodes === undefined || this.nodes.length === 0) && (this.contactBookList === undefined || this.contactBookList.length === 0);
			},
			indent_index(index){
				return { transform: `translate(${this.depth * 20}px)`,background:`${index%2 ===0 ? "#F5F5DC": "#FFF"}!important` }
			}
		},
		props: ['label', 'nodes', 'depth','contactBookList']
	}
</script>

<style scoped>
	.label{
		display: inline-block;
		width: 70vw;
	}
	.tree-menu{
		box-sizing: border-box;
		padding: 5px;
	}
	.van-cell__value,.van-cell__title{
		text-align: left !important;
	}
</style>
