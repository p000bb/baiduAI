<template>
	<div>
		<baiduAI ref="baiduAi" :imageUrl="imageUrl" :items="items" :client_id="client_id" :client_secret="client_secret" :url="url"  @changeImage="changeImage">
			<div slot="right">
				 <el-radio-group v-model="radio">
				    <el-radio :label="item.type" v-for="item in group" class="radio" v-model="radio" @change="changeRadio">{{item.name}}</el-radio>
				  </el-radio-group>
			</div>
		</baiduAI>
	</div>
</template>

<script>
	// 图像风格转换
	import baiduAI from '@/components/baiduAI/baiduAI.vue'
	export default {
		components:{
			baiduAI
		},
		data() {
			return {
				items: [
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/style_trans/1.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/style_trans/2.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/style_trans/3.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/style_trans/4.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/style_trans/5.jpg",
				],
				imageUrl: "https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/style_trans/1.jpg",
				client_id:"0XY42C67scqxgEtNg9qIUCT8",
				client_secret:"HN7PPDuCPQqVMlz41uvrAaA2aSnWKrxQ",
				url:"/api/rest/2.0/image-process/v1/style_trans",
				radio:"cartoon",
				group:[
					{type:"cartoon",name:"卡通画风格"},
					{type:"pencil",name:"铅笔风格"},
					{type:"color_pencil",name:"彩色铅笔画风格"},
					{type:"warm",name:"彩色糖块油画风格"},
					{type:"wave",name:"神奈川冲浪里油画风格"},
					{type:"lavender",name:"薰衣草油画风格"},
					{type:"mononoke",name:"奇异油画风格"},
					{type:"scream",name:"呐喊油画风格"},
					{type:"gothic",name:"哥特油画风格"},
				],
			}
		},
		computed: {
		},
		created() {
		},
		methods: {
			changeImage(option){
				let options = {};
				options = {option:this.radio}
				this.imageUrl = option
				this.$refs.baiduAi.imgHead = this.imageUrl.split("base64,")[0] + 'base64,'
				this.$refs.baiduAi.imgUp(option,options);
			},
			changeRadio(){
				let option = {};
				option = {option:this.radio}
				this.$refs.baiduAi.loading = false;
				this.$refs.baiduAi.imageUrl1 = "";
				this.$refs.baiduAi.value1 = 0;
				this.$refs.baiduAi.imgUp(this.imageUrl,option);
			},
		}
	}
</script>
<style scoped>
	.right .el-radio{
		margin: 10px;
		font-size:16px
	}
</style>