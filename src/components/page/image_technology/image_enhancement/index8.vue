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
					"https://ai.bdstatic.com/file/757770D78BB742738C0D3A0794ED1345",
					"https://ai.bdstatic.com/file/A27E45309F2C4D67804DCA25A6C0404D",
					"https://ai.bdstatic.com/file/A2AC9C2DEDBA41B9B2C383F1B280249E",
					"https://ai.bdstatic.com/file/85D4561AAA674AF98B455908975EBA02",
					"https://ai.bdstatic.com/file/DD0462BEB55E453DA910367FF65664FB",
				],
				imageUrl: "https://ai.bdstatic.com/file/757770D78BB742738C0D3A0794ED1345",
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