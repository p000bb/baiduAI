<template>
	<div class="app-container">
		<h2>功能演示</h2>
		<div class="box">
			<div class="left">
				<div class="img_left" style="position: relative;">
					<div v-show="!loading" class="rgba" :style="{height:rgbaHeight+'px'}">
					</div>
					<el-slider v-model="value1" v-show="loading" :show-tooltip="false" style="position: absolute;width: 800px;top:50%;margin-top:-36px"></el-slider>
					<div :style="{width:value1*8+'px'}" class="new_img" v-show="loading">
						<div class="img_tip">优化后</div>
						<img class="img_left" :src="imgHead+imageUrl1" alt="">
					</div>
					<img class="img_left" :src="imageUrl" alt="">
					<div class="img_left_bottom">
						<div style="padding:20px 10px;width: 100%;height:100%">
							<input type="text" class="input_text" placeholder="输入图片url" v-model="imgUrl">
							<button :class="button_text" @click="webUrl">检测</button>
							<span style="padding:0 20px;color:#ccc">或</span>
							<el-upload class="avatar-uploader" ref="up" action="111" :show-file-list="false" :on-success="handleAvatarSuccess"
							 :before-upload="beforeAvatarUpload" :http-request="upLoad">
								<el-button type="primary">本地上传</el-button>
							</el-upload>
							<div class="text">
								不要传太大的图片哦，base64编码可能过长导致请求后台失败
							</div>
						</div>
					</div>
				</div>
				<div class="img_bottom">
					<div style="padding:20px 0;height:100%">
						<ul style="float: left;width: 100%;height:100%;display: flex;">
							<li v-for="item in items"><img class="img_bottom1" :src="item" alt="" @click="imgBottom(item)"></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="right">

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: "",
				value1: 0,
				token: "",
				imageUrl1: "",
				fun: "",
				fun1: "",
				loading: false,
				imgHead: "",
				rgbaHeight:0,
			}
		},
		props:{
			//	默认展示的图片
			items: {
				type: Array
			},
			//	百度ai参数
			client_id:{
				type:String
			},
			//	百度ai参数
			client_secret:{
				type:String
			},
			//	百度ai url
			url:{
				type:String
			},
			//	百度ai 种类
			type:{
				type:String,
				default:"",
			},
			imageUrl:{
				type:String
			}
		},
		computed: {
			button_text() {
				if (this.imgUrl) {
					return "button_text_active"
				} else {
					return "button_text"
				}
			}
		},
		created() {
			this.getToken()
		},
		methods: {
			imgBottom(item) {
				this.imageUrl = item
			},
			getToken() {
				this.$api.post("/api/oauth/2.0/token", {
					grant_type: "client_credentials",
					client_id: this.client_id,
					client_secret: this.client_secret
				}).then(resp => {
					this.token = resp.data.access_token
				})
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isGIF = file.type === 'image/gif';
				const isPNG = file.type === 'image/png';
				const isBMP = file.type === 'image/bmp';
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isJPG && !isGIF && !isPNG && !isBMP) {
					this.$message.error('上传图片必须是JPG/GIF/PNG/BMP 格式!');
					this.imgType = "file"
					return
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
					this.imgType = "file"
					return
				}
				return (isJPG || isBMP || isGIF || isPNG) && isLt2M;
			},
			webUrl() {
				// window.URL = window.URL || window.webkitURL;
				// var xhr = new XMLHttpRequest();
				// xhr.open("get", this.imgUrl, true);
				// // 至关重要
				// xhr.responseType = "blob";
				// xhr.onload = function() {
				// 	if (this.status == 200) {
				// 		//得到一个blob对象
				// 		var blob = this.response;
				// 		// 至关重要
				// 		let reader = new FileReader();
				// 		reader.onloadend = (e) => {
				// 			// 此处拿到的已经是 base64的图片了
				// 			this.imageUrl = e.target.result;
				// 			console.log(this.imageUrl)
				// 		};
				// 		reader.readAsDataURL(blob);
				// 	}
				// }
				// xhr.send();
			},
			upLoad(file) {
				this.loading = false;
				this.imageUrl1 = "";
				this.value1 = 0;
				let fileList = file.file;
				let reader = new FileReader(); //html5读文件
				reader.readAsDataURL(fileList);
				reader.onload = (e) => {
					this.imageUrl = e.target.result
					this.imgHead = this.imageUrl.split("base64,")[0] + 'base64,'
					this.imgUp()
				}
			},
			imgUp() {
				this.fun1 = self.setInterval(this.heightAdd, 15);
				this.$api.post(this.url, {
					access_token: this.token,
					image: this.imageUrl.split("base64,")[1],
					type: this.type,
					// mask_id:0
				}).then(resp => {
					window.clearInterval(this.fun1)
					this.loading = true;
					this.imageUrl1 = resp.data.image
					this.fun = self.setInterval(this.valueAdd, 10);
				})
			},
			valueAdd() {
				if (this.value1 == 50) {
					window.clearInterval(this.fun)
				} else {
					this.value1 = this.value1 + 1
				}
			},
			heightAdd(){
				if(this.rgbaHeight >= 450){
					this.rgbaHeight = 0
				}
				this.rgbaHeight = this.rgbaHeight + 10
			},
			handleAvatarSuccess() {

			},
		}
	}
</script>
<style scoped>
	.app-container {
		padding: 20px
	}

	.box {
		width: 1000px;
		height: 600px;
		display: flex;
	}

	.img_left {
		width: 800px;
		height: 450px;
	}

	.img_bottom {
		width: 800px;
		height: 150px;
		background-color: #ebebeb;
	}

	.img_bottom1 {
		width: 140px;
		height: 100%;
		cursor: pointer;
	}

	.left {
		display: inline-block;
	}

	.right {
		display: inline-block;
		width: 300px;
		height: 100%;
	}

	li {
		list-style: none;
		width: 160px;
		height: 100%;
		padding: 0 10px
	}

	ul {
		padding: 0;
		margin: 0;
	}
	
	.rgba{
		width: 800px;
		position: absolute;
		background:rgba(0, 174, 255, 0.1)
	}
	
	.img_left_bottom {
		position: relative;
		bottom: 106px;
		left: 0;
		height: 100px;
		width: 800px;
		background: rgba(0, 0, 0, .5);
		z-index: 99
	}

	.input_text {
		width: 450px;
		font-size: 14px;
		line-height: 38px;
		outline: none;
		text-indent: 11px;
		border-right: 0;
		background: rgba(0, 0, 0, .45);
		border: 1px solid #666;
		caret-color: #ffffff;
		color: #ccc;
	}

	.button_text {
		color: #ccc;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		min-width: 116px;
		font-size: 14px;
		line-height: 38px;
		border: 1px solid #666;
		outline: none;
		background-color: rgba(0, 0, 0, .45);
		cursor: pointer;
	}

	.button_text_active {
		background-color: #0073eb;
		color: #fff;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		min-width: 116px;
		font-size: 14px;
		line-height: 38px;
		border: 1px solid #0073eb;
		outline: none;
		cursor: pointer;
	}

	.text {
		margin-top: 10px;
		color: #ccc;
		font-size: 12px;
	}

	.avatar-uploader {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
	}

	.new_img {
		position: absolute;
		height: 450px;
		overflow: hidden;
		border-right: 2px solid #0073eb;
	}

	.img_tip {
		position: absolute;
		width: 75px;
		height: 30px;
		line-height: 30px;
		color: #fff;
		font-size: 18px;
		text-align: center;
		background: rgba(0, 0, 0, .6);
	}

	.img_tip1 {
		position: absolute;
		width: 75px;
		height: 30px;
		top: 0;
		left: 450px;
		line-height: 30px;
		color: #fff;
		font-size: 18px;
		text-align: center;
		background: rgba(0, 0, 0, .6);
	}

	/* 更改输入框 placeholder的样式 */
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: #ccc;
	}

	::-moz-placeholder {
		/* Firefox 19+ */
		color: #ccc;
	}

	:-ms-input-placeholder {
		/* IE 10+ */
		color: #ccc;
	}

	:-moz-placeholder {
		/* Firefox 18- */
		color: #ccc;
	}
</style>
