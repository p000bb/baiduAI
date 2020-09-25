<template>
	<div>
		<baiduAI ref="baiduAi" :imageUrl="imageUrl" :items="items" :client_id="client_id" :client_secret="client_secret" :url="url" @changeImage="changeImage">
			<div slot="right">
				<h5 class="title">是否生成口罩卡通人物</h5>
				<div class="title-div">
					<el-select v-model="value" placeholder="请选择" @change="changeSelect">
					    <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
					  </el-select>
				</div>
				<div class="title-div" v-if="value=='anime_mask'">
					<h5 class="title">请选择口罩类型</h5>
					<el-select v-model="value2" placeholder="请选择" @change="changeSelect">
					    <el-option  v-for="item in option2" :key="item.value" :label="item.label" :value="item.value"></el-option>
					  </el-select>
				</div>
			</div>
		</baiduAI>
	</div>
</template>


<script>
	//	人像动漫化
	import baiduAI from '@/components/baiduAI/baiduAI.vue'
	export default {
		components:{
			baiduAI
		},
		data() {
			return {
				items: [
					"https://ai.bdstatic.com/file/757770D78BB742738C0D3A0794ED1345",
					"https://ai.bdstatic.com/file/A27E45309F2C4D67804DCA25A6C0404D",
					"https://ai.bdstatic.com/file/A2AC9C2DEDBA41B9B2C383F1B280249E",
					"https://ai.bdstatic.com/file/85D4561AAA674AF98B455908975EBA02",
					"https://ai.bdstatic.com/file/DD0462BEB55E453DA910367FF65664FB",
				],
				imageUrl: "https://ai.bdstatic.com/file/757770D78BB742738C0D3A0794ED1345",
				client_id:"0XY42C67scqxgEtNg9qIUCT8",
				client_secret:"HN7PPDuCPQqVMlz41uvrAaA2aSnWKrxQ",
				url:"/api/rest/2.0/image-process/v1/selfie_anime",
				options:[{label:"是",value:"anime_mask"},{label:"否",value:"anime"}],
				option2:[{
					label:"类型1",value:1
				},{
					label:"类型2",value:2
				},{
					label:"类型3",value:3
				},{
					label:"类型4",value:4
				},{
					label:"类型5",value:5
				},{
					label:"类型6",value:6
				},{
					label:"类型7",value:7
				},{
					label:"类型8",value:8
				},{
					label:"类型9",value:9
				}],
				value:"anime",
				value2:1,
			}
		},
		computed: {
		},
		created() {
		},
		methods: {
			changeImage(option){
				this.imageUrl = option
				this.$refs.baiduAi.imgHead = this.imageUrl.split("base64,")[0] + 'base64,'
				this.$refs.baiduAi.imgUp(option);
			},
			changeSelect(){
				let option = {}
				if(this.value == "anime_mask"){
					option = {type:this.value,mask_id:this.value2}
				}else{
					option = {type:this.value}
				}
				this.$refs.baiduAi.loading = false;
				this.$refs.baiduAi.imageUrl1 = "";
				this.$refs.baiduAi.value1 = 0;
				this.$refs.baiduAi.imgUp(this.imageUrl,option);
			},
		}
	}
</script>
<style scoped>
	.title{
		text-align: center;
		margin:10px 0;
	}
	.title-div{
		width: 80%;
		margin: 0 auto;
	}
</style>