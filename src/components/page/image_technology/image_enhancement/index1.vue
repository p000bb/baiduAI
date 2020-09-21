<template>
	<div>
		<baiduAI ref="baiduAi" :imageUrl="imageUrl" :items="items" :client_id="client_id" :client_secret="client_secret" :url="url" :type="type" @changeImage="changeImage"></baiduAI>
	</div>
</template>


<script>
	import baiduAI from '@/components/baiduAI/baiduAI.vue'
	export default {
		components:{
			baiduAI
		},
		data() {
			return {
				items: [
					"https://aip.bdstatic.com/portal-pc-node/dist/1594285095598/images/technology/imageprocess/dehaze/1.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1594285095598/images/technology/imageprocess/dehaze/2.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1594285095598/images/technology/imageprocess/dehaze/3.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1594285095598/images/technology/imageprocess/dehaze/4.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1594285095598/images/technology/imageprocess/dehaze/5.jpg",
				],
				imageUrl: "https://aip.bdstatic.com/portal-pc-node/dist/1594285095598/images/technology/imageprocess/dehaze/1.jpg",
				client_id:"0XY42C67scqxgEtNg9qIUCT8",
				client_secret:"HN7PPDuCPQqVMlz41uvrAaA2aSnWKrxQ",
				url:"/api/rest/2.0/image-process/v1/dehaze",
				type:"",
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
			}
		}
	}
</script>