<template>
	<div class="app-container">
		<h2>功能演示</h2>
		<div class="box">
			<div class="left">
				<div class="img_left" style="position: relative;background: #343434;">
					<div v-show="!loading" class="rgba" :style="{height:rgbaHeight+'px'}">
					</div>
					<el-slider v-model="value1" v-show="loading" :show-tooltip="false" style="position: absolute;width: 800px;top:50%;margin-top:-36px"></el-slider>
					<div :style="{width:value1*8+'px'}" class="new_img" v-show="loading">
						<div>
						<div class="img_tip">优化后</div>
						<img class="img_left1" :src="imgHead+imageUrl1" alt="">
						</div>
					</div>
					<!-- <canvas id="canvas" style="width: 800px;height:350px;position: absolute;"
					 @mousedown="mouseDown" @mouseup="mouseUp" @mousemove="mouseMove"></canvas> -->
					 <div class="img_left" style="text-align: center;display: table;">
						 <div style="display: table-cell; vertical-align: middle; ">
						 <img class="img_left1" :src="imageUrl" alt="">
						 </div>
					 </div>
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
				<slot name="right"></slot>
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
				x:0,
				y:0,
				sx:0,
				sy:0,
				clickdown:false,
				ctx:"",
				urlLoading:false,//	判断是否在请求 防止重复点击 浪费接口次数
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
		mounted() {
				// var canvas = document.getElementById('canvas');
				// this.ctx = canvas.getContext('2d');
		},
		methods: {
			mouseDown(e){
				if(!this.clickdown){
					this.clickdown = true
					this.sx = e.layerX
					this.sy = e.layerY
				}
			},
			mouseUp(e){
				this.clickdown = false
			},
			mouseMove(e){
				if(this.clickdown){
					this.x = e.x;
					this.y = e.y;
					this.ctx.fillStyle = "green";
					this.ctx.fillRect(0,0,this.x,this.y)
					// this.ctx.fillRect(this.sx,this.sy,this.x-this.sx,this.y-this.sy)
				}
			},
			imgBottom(item) {
				if(this.urlLoading) return  this.$message({message: '正在获取图片数据,请勿重复点击',type: 'warning',showClose: true});
				this.getBase64(item)
			},
			
			getToken(callback) {
				this.$api.post("/api/oauth/2.0/token", {
					grant_type: "client_credentials",
					client_id: this.client_id,
					client_secret: this.client_secret
				}).then(resp => {
					this.token = resp.data.access_token
					this.getBase64(this.items[0])
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
				if(this.urlLoading) return  this.$message({message: '正在获取图片数据,请勿重复点击',type: 'warning',showClose: true});
				this.getBase64(this.imgUrl)
			},
			//	图片url转base64编码
			getBase64(item){
				this.loading = false;
				this.imageUrl1 = "";
				this.value1 = 0;
				let that = this;
				window.URL = window.URL || window.webkitURL;
				var xhr = new XMLHttpRequest();
				xhr.open("get", item, true);
				// 至关重要
				xhr.responseType = "blob";
				xhr.send();
				xhr.onload = function() {
					if (this.status == 200) {
						//得到一个blob对象
						var blob = this.response;
						// 至关重要
						//	进行文件格式和大小验证
						const isJPG = blob.type === 'image/jpeg';
						const isGIF = blob.type === 'image/gif';
						const isPNG = blob.type === 'image/png';
						const isBMP = blob.type === 'image/bmp';
						const isLt2M = blob.size / 1024 / 1024 < 2;
						if(blob.type === 'text/html'){
							that.$message.error('请输入正确的图片链接地址!');
							return
						}
						if (!isJPG && !isGIF && !isPNG && !isBMP) {
							that.$message.error('图片链接必须是JPG/GIF/PNG/BMP 格式!');
							return
						}
						if (!isLt2M) {
							that.$message.error('图片链接大小不能超过 2MB!');
							return
						}
						let reader = new FileReader();
						reader.readAsDataURL(blob);
						reader.onload = (e) => {
							// 此处拿到的已经是 base64的图片了
							that.$emit('changeImage',e.target.result)
							// that.imgHead = that.imageUrl.split("base64,")[0] + 'base64,'
						};
					}else{
						that.$message.error('请输入正确的图片地址');
					}
				}
			},
			upLoad(file) {
				if(this.urlLoading) return  this.$message({message: '正在获取图片数据,请勿重复点击',type: 'warning',showClose: true});
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
			imgUp(val,type) {
				if(this.urlLoading) return  this.$message({message: '正在获取图片数据,请勿重复点击',type: 'warning',showClose: true});
				this.urlLoading = true
				let img = val==undefined?this.imageUrl:val
				let option = type==undefined?{}:type
				this.fun1 = self.setInterval(this.heightAdd, 15);
				this.$api.post(this.url, {
					access_token: this.token,
					image: img.split("base64,")[1],
					...option,
				}).then(resp => {
					window.clearInterval(this.fun1)
					this.loading = true;
					this.imageUrl1 = resp.data.image
					this.fun = self.setInterval(this.valueAdd, 10);
					this.urlLoading = false
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
	.img_left1 {
		max-width: 800px;
		max-height: 450px;
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
		bottom: 100px;
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
