(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dae8a228"],{1276:function(t,e,i){"use strict";var a=i("d784"),s=i("44e7"),n=i("825a"),l=i("1d80"),r=i("4840"),o=i("8aa5"),c=i("50c4"),g=i("14c3"),p=i("9263"),u=i("d039"),d=[].push,h=Math.min,m=4294967295,v=!u((function(){return!RegExp(m,"y")}));a("split",2,(function(t,e,i){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var a=String(l(this)),n=void 0===i?m:i>>>0;if(0===n)return[];if(void 0===t)return[a];if(!s(t))return e.call(a,t,n);var r,o,c,g=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,u+"g");while(r=p.call(v,a)){if(o=v.lastIndex,o>h&&(g.push(a.slice(h,r.index)),r.length>1&&r.index<a.length&&d.apply(g,r.slice(1)),c=r[0].length,h=o,g.length>=n))break;v.lastIndex===r.index&&v.lastIndex++}return h===a.length?!c&&v.test("")||g.push(""):g.push(a.slice(h)),g.length>n?g.slice(0,n):g}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var s=l(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,s,i):a.call(String(s),e,i)},function(t,s){var l=i(a,t,this,s,a!==e);if(l.done)return l.value;var p=n(t),u=String(this),d=r(p,RegExp),f=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(v?"y":"g"),_=new d(v?p:"^(?:"+p.source+")",b),y=void 0===s?m:s>>>0;if(0===y)return[];if(0===u.length)return null===g(_,u)?[u]:[];var x=0,w=0,U=[];while(w<u.length){_.lastIndex=v?w:0;var C,k=g(_,v?u:u.slice(w));if(null===k||(C=h(c(_.lastIndex+(v?0:w)),u.length))===x)w=o(u,w,f);else{if(U.push(u.slice(x,w)),U.length===y)return U;for(var S=1;S<=k.length-1;S++)if(U.push(k[S]),U.length===y)return U;w=x=C}}return U.push(u.slice(x)),U}]}),!v)},2618:function(t,e,i){"use strict";var a=i("be2d"),s=i.n(a);s.a},bc0d:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("baiduAI",{attrs:{imageUrl:t.imageUrl,items:t.items,client_id:t.client_id,client_secret:t.client_secret,url:t.url,type:t.type}})],1)},s=[],n=i("c2c0"),l={components:{baiduAI:n["a"]},data:function(){return{items:["https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/stretch_restore/1.jpg","https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/stretch_restore/2.jpg","https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/stretch_restore/3.jpg","https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/stretch_restore/4.jpg","https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/stretch_restore/5.jpg"],imageUrl:"https://aip.bdstatic.com/portal-pc-node/dist/1595502949371/images/technology/imageprocess/stretch_restore/1.jpg",client_id:"",client_secret:"",url:"/api/rest/2.0/image-process/v1/dehaze",type:""}},computed:{},created:function(){},methods:{}},r=l,o=i("2877"),c=Object(o["a"])(r,a,s,!1,null,null,null);e["default"]=c.exports},be2d:function(t,e,i){},c2c0:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("h2",[t._v("功能演示")]),i("div",{staticClass:"box"},[i("div",{staticClass:"left"},[i("div",{staticClass:"img_left",staticStyle:{position:"relative"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"rgba",style:{height:t.rgbaHeight+"px"}}),i("el-slider",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticStyle:{position:"absolute",width:"800px",top:"50%","margin-top":"-36px"},attrs:{"show-tooltip":!1},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"new_img",style:{width:8*t.value1+"px"}},[i("div",{staticClass:"img_tip"},[t._v("优化后")]),i("img",{staticClass:"img_left",attrs:{src:t.imgHead+t.imageUrl1,alt:""}})]),i("img",{staticClass:"img_left",attrs:{src:t.imageUrl,alt:""}}),i("div",{staticClass:"img_left_bottom"},[i("div",{staticStyle:{padding:"20px 10px",width:"100%",height:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.imgUrl,expression:"imgUrl"}],staticClass:"input_text",attrs:{type:"text",placeholder:"输入图片url"},domProps:{value:t.imgUrl},on:{input:function(e){e.target.composing||(t.imgUrl=e.target.value)}}}),i("button",{class:t.button_text,on:{click:t.webUrl}},[t._v("检测")]),i("span",{staticStyle:{padding:"0 20px",color:"#ccc"}},[t._v("或")]),i("el-upload",{ref:"up",staticClass:"avatar-uploader",attrs:{action:"111","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,"http-request":t.upLoad}},[i("el-button",{attrs:{type:"primary"}},[t._v("本地上传")])],1),i("div",{staticClass:"text"},[t._v(" 不要传太大的图片哦，base64编码可能过长导致请求后台失败 ")])],1)])],1),i("div",{staticClass:"img_bottom"},[i("div",{staticStyle:{padding:"20px 0",height:"100%"}},[i("ul",{staticStyle:{float:"left",width:"100%",height:"100%",display:"flex"}},t._l(t.items,(function(e){return i("li",[i("img",{staticClass:"img_bottom1",attrs:{src:e,alt:""},on:{click:function(i){return t.imgBottom(e)}}})])})),0)])])]),i("div",{staticClass:"right"})])])},s=[],n=(i("ac1f"),i("1276"),{data:function(){return{imgUrl:"",value1:0,token:"",imageUrl1:"",fun:"",fun1:"",loading:!1,imgHead:"",rgbaHeight:0}},props:{items:{type:Array},client_id:{type:String},client_secret:{type:String},url:{type:String},type:{type:String,default:""},imageUrl:{type:String}},computed:{button_text:function(){return this.imgUrl?"button_text_active":"button_text"}},created:function(){this.getToken()},methods:{imgBottom:function(t){this.imageUrl=t},getToken:function(){var t=this;this.$api.post("/api/oauth/2.0/token",{grant_type:"client_credentials",client_id:this.client_id,client_secret:this.client_secret}).then((function(e){t.token=e.data.access_token}))},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,i="image/gif"===t.type,a="image/png"===t.type,s="image/bmp"===t.type,n=t.size/1024/1024<2;return e||i||a||s?n?(e||s||i||a)&&n:(this.$message.error("上传头像图片大小不能超过 2MB!"),void(this.imgType="file")):(this.$message.error("上传图片必须是JPG/GIF/PNG/BMP 格式!"),void(this.imgType="file"))},webUrl:function(){},upLoad:function(t){var e=this;this.loading=!1,this.imageUrl1="",this.value1=0;var i=t.file,a=new FileReader;a.readAsDataURL(i),a.onload=function(t){e.imageUrl=t.target.result,e.imgHead=e.imageUrl.split("base64,")[0]+"base64,",e.imgUp()}},imgUp:function(){var t=this;this.fun1=self.setInterval(this.heightAdd,15),this.$api.post(this.url,{access_token:this.token,image:this.imageUrl.split("base64,")[1],type:this.type}).then((function(e){window.clearInterval(t.fun1),t.loading=!0,t.imageUrl1=e.data.image,t.fun=self.setInterval(t.valueAdd,10)}))},valueAdd:function(){50==this.value1?window.clearInterval(this.fun):this.value1=this.value1+1},heightAdd:function(){this.rgbaHeight>=450&&(this.rgbaHeight=0),this.rgbaHeight=this.rgbaHeight+10},handleAvatarSuccess:function(){}}}),l=n,r=(i("2618"),i("2877")),o=Object(r["a"])(l,a,s,!1,null,"78a01779",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-dae8a228.1924f4b6.js.map