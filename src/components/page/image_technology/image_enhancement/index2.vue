<template>
	<div>
		<baiduAI :imageUrl="imageUrl" :items="items" :client_id="client_id" :client_secret="client_secret" :url="url" :type="type"></baiduAI>
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
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/contrast_enhance/1.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/contrast_enhance/2.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/contrast_enhance/3.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/contrast_enhance/4.jpg",
					"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/contrast_enhance/5.jpg",
				],
				imageUrl: "https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/contrast_enhance/1.jpg",
				client_id:"",
				client_secret:"",
				url:"/api/rest/2.0/image-process/v1/dehaze",
				type:"",
			}
		},
		computed: {
		},
		created() {
		},
		methods: {
		}
	}
</script>