(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39dbcd71"],{2087:function(t,e,n){},"45fc":function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").some,l=n("a640"),a=n("ae40"),o=l("some"),c=a("some");i({target:"Array",proto:!0,forced:!o||!c},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"66ae":function(t,e,n){},7159:function(t,e,n){t.exports=n.p+"img/img.146655c9.jpg"},9195:function(t,e,n){"use strict";var i=n("66ae"),s=n.n(i);s.a},9843:function(t,e,n){"use strict";var i=n("af04"),s=n.n(i);s.a},a434:function(t,e,n){"use strict";var i=n("23e7"),s=n("23cb"),l=n("a691"),a=n("50c4"),o=n("7b0b"),c=n("65f0"),r=n("8418"),u=n("1dde"),d=n("ae40"),m=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,p=9007199254740991,_="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!m||!h},{splice:function(t,e){var n,i,u,d,m,h,v=o(this),x=a(v.length),b=s(t,x),C=arguments.length;if(0===C?n=i=0:1===C?(n=0,i=x-b):(n=C-2,i=g(f(l(e),0),x-b)),x+n-i>p)throw TypeError(_);for(u=c(v,i),d=0;d<i;d++)m=b+d,m in v&&r(u,d,v[m]);if(u.length=i,n<i){for(d=b;d<x-i;d++)m=d+i,h=d+n,m in v?v[h]=v[m]:delete v[h];for(d=x;d>x-i+n;d--)delete v[d-1]}else if(n>i)for(d=x-i;d>b;d--)m=d+i-1,h=d+n-1,m in v?v[h]=v[m]:delete v[h];for(d=0;d<n;d++)v[d+b]=arguments[d+2];return v.length=x-i+n,u}})},af04:function(t,e,n){},b0c0:function(t,e,n){var i=n("83ab"),s=n("9bf2").f,l=Function.prototype,a=l.toString,o=/^\s*function ([^ (]*)/,c="name";i&&!(c in l)&&s(l,c,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})},bfe9:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("v-head"),n("v-sidebar"),n("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[n("v-tags"),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"move",mode:"out-in"}},[n("keep-alive",{attrs:{include:t.tagsList}},[n("router-view")],1)],1),n("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},s=[],l=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapse?n("i",{staticClass:"el-icon-s-unfold"}):n("i",{staticClass:"el-icon-s-fold"})]),n("div",{staticClass:"logo"},[t._v("百度AI体验")]),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"el-icon-rank"})])],1),t._m(0),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.username)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("a",{attrs:{href:"https://github.com/lin-xin/vue-manage-system",target:"_blank"}},[n("el-dropdown-item",[t._v("项目仓库")])],1),n("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])}),a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-avator"},[i("img",{attrs:{src:n("7159")}})])}],o=n("2b0e"),c=new o["default"],r=c,u={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,r.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},d=u,m=(n("9195"),n("2877")),h=Object(m["a"])(d,l,a,!1,null,"21acf66c",null),f=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,(function(e){return[e.subs?[n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,(function(e){return[e.subs?n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,(function(e,i){return n("el-menu-item",{key:i,attrs:{index:e.index}},[t._v(t._s(e.title))])}))],2):n("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]}))],2)]:[n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]}))],2)],1)},p=[],_=(n("ac1f"),n("5319"),{data:function(){return{collapse:!1,items:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{icon:"el-icon-picture-outline",index:"1",title:"图像技术",subs:[{index:"1-1",title:"图片效果增强",subs:[{index:"image_technology_image_enhancement_index1",title:"图像去雾",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index2",title:"图像对比度增强",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index3",title:"图像无损放大",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index4",title:"黑白图像上色",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index5",title:"拉升图像恢复",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index6",title:"图像风格转换",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index7",title:"图像清晰度增强",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index8",title:"人像动漫画",icon:"el-icon-picture-outline"},{index:"image_technology_image_enhancement_index9",title:"图片修复",icon:"el-icon-picture-outline"}]}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;r.$on("collapse",(function(e){t.collapse=e,r.$emit("collapse-content",e)}))}}),v=_,x=(n("9843"),Object(m["a"])(v,g,p,!1,null,"6acb760e",null)),b=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showTags?n("div",{staticClass:"tags"},[n("ul",t._l(t.tagsList,(function(e,i){return n("li",{key:i,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[n("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v(" "+t._s(e.title)+" ")]),n("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(i)}}},[n("i",{staticClass:"el-icon-close"})])],1)})),0),n("div",{staticClass:"tags-close-box"},[n("el-dropdown",{on:{command:t.handleTags}},[n("el-button",{attrs:{size:"mini",type:"primary"}},[t._v(" 标签选项"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),n("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},w=[],k=(n("4de4"),n("45fc"),n("a434"),{data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],n=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];n?e.path===this.$route.fullPath&&this.$router.push(n.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),r.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),r.$on("close_current_tags",(function(){for(var e=0,n=t.tagsList.length;e<n;e++){var i=t.tagsList[e];if(i.path===t.$route.fullPath){e<n-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}}))}}),$=k,y=(n("c5f3"),Object(m["a"])($,C,w,!1,null,null,null)),L=y.exports,F={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:f,vSidebar:b,vTags:L},created:function(){var t=this;r.$on("collapse-content",(function(e){t.collapse=e})),r.$on("tags",(function(e){for(var n=[],i=0,s=e.length;i<s;i++)e[i].name&&n.push(e[i].name);t.tagsList=n}))}},S=F,T=Object(m["a"])(S,i,s,!1,null,null,null);e["default"]=T.exports},c5f3:function(t,e,n){"use strict";var i=n("2087"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-39dbcd71.7c3ed783.js.map