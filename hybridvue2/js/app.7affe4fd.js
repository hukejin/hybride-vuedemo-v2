(function(t){function e(e){for(var i,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a={app:0},r=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4b3f61b6","chunk-2d222539":"ec046fa8","chunk-3333cbea":"3b69f837"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1,"chunk-3333cbea":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"0e991756","chunk-2d222539":"31d6cfe0","chunk-3333cbea":"67e0beea"}[t]+".css",a=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===i||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[t],p.parentNode.removeChild(p),n(r)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[t]=0})));var i=a[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=a[t]=[e,n]}));e.push(i[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",f.name="ChunkLoadError",f.type=i,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/hybridvue2/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"32bf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e930");var i=n("8f80"),o=(n("5246"),n("6b41")),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],s=(n("034f"),n("2877")),u={},l=Object(s["a"])(u,r,c,!1,null,null,null),f=l.exports,p=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"VUE版本混合框架V2.0演示程序","left-text":"","right-text":""}}),n("ul",{staticClass:"menulist"},t._l(t.list,(function(e){return n("li",{key:e.title,on:{click:function(n){return t.todesc(e)}}},[n("mainuiitem",{attrs:{item:e}})],1)})),0),n("div",{staticClass:"picgroup"},[n("p",[t._v("演示input file类型的使用，")]),n("input",{attrs:{type:"file",accept:"image/*",multiple:"multiple",capture:"camera"},on:{change:function(e){return t.change(e)}}}),n("div",{staticClass:"showpic"},t._l(t.presrc,(function(t,e){return n("img",{key:e,staticStyle:{width:"60px",height:"60px"},attrs:{src:t}})})),0)])],1)},m=[],d=(n("d81d"),n("3ca3"),n("ddb0"),n("2b3d"),n("8ce3")),g={name:"",data:function(){return{list:[],presrc:[]}},components:{mainuiitem:d["a"]},mounted:function(){this.list.push({title:"容器导航栏",content:"设置容器的标题导航栏",url:"./img/pic.png",to:"navigation"}),this.list.push({title:"拍照",content:"拍照、选图、预览、裁剪、扫一扫",url:"./img/pic.png",to:"picture"}),this.list.push({title:"电话",content:"展示拨号、发短信功能",url:"./img/mark.png",to:"smsmsg"}),this.list.push({title:"音频",content:"展示录音、播放等功能",url:"./img/voice_light.png",to:"voice"}),this.list.push({title:"位置",content:"获取当前GPS位置",url:"./img/location_light.png",to:""}),this.list.push({title:"地图展示",content:"展示天地图,以杭州为例",url:"./img/map-bubble-hover.png",to:""}),this.list.push({title:"当前网络",content:"获取当前网络类型:mobile/wifi",url:"./img/global.png",to:""}),this.list.push({title:"当前软件版本",content:"获取容器软件版本",url:"./img/global.png",to:""}),this.list.push({title:"自定义调用原生",content:"自定义原生功能",url:"./img/global.png",to:""}),this.list.push({title:"进度条颜色",content:"设置页面加载时进度条的颜色",url:"./img/global.png",to:""}),this.list.push({title:"UUID",content:"获取设备唯一编码",url:"./img/global.png",to:""}),this.list.push({title:"手机信息",content:"获取手机基本信息",url:"./img/global.png",to:""}),this.list.push({title:"下载文件",content:"下载文件并实时反馈进度",url:"./img/global.png",to:""}),this.list.push({title:"数据缓存",content:"将web数据进行本地永久化存取",url:"./img/db.png",to:"localstorage"}),this.list.push({title:"操作原生activity",content:"打开第三方APP或者启动原生UI",url:"./img/app.png",to:"openactivity"}),this.list.push({title:"dialog弹窗",content:"dialog、toast、单选、多选、日期选择",url:"./img/app.png",to:"dialog"}),this.list.push({title:"http请求例子",content:"axios基本操作",url:"./img/app.png",to:"http"})},methods:{todesc:function(t){void 0!==t.to&&""!==t.to?this.$router.push({name:t.to}):"位置"===t.title?this.$hesc.device.geolocation.get({tiandi:!0,key:"8730e769e5f114d59325884bf3b7a2e9",poi:!0,onSuccess:function(t){alert(JSON.stringify(t))},onFail:function(t){alert("位置调用错误"+t)}}):"地图展示"===t.title?this.$hesc.biz.map.locate({key:"8730e769e5f114d59325884bf3b7a2e9",baseUrl:"http://t0.tianditu.gov.cn/vec_c/wmts",annotation:"https://t0.tianditu.gov.cn/cva_c/wmts",parturl:"",mapExtent:{minX:120.02,minY:30.08,maxX:120.36,maxY:30.48},onSuccess:function(t){alert(JSON.stringify(t))},onFail:function(t){alert(JSON.stringify(t))}}):"当前网络"===t.title?this.$hesc.device.connection.getNetworkType({onSuccess:function(t){alert(JSON.stringify(t))},onFail:function(t){alert(JSON.stringify(t))}}):"当前软件版本"===t.title?this.$hesc.soft.version({onSuccess:function(t){alert(JSON.stringify(t))},onFail:function(t){alert(JSON.stringify(t))}}):"UUID"===t.title?this.$hesc.device.base.getUUID({onSuccess:function(t){alert(JSON.stringify(t))},onFail:function(t){alert(JSON.stringify(t))}}):"手机信息"===t.title?this.$hesc.device.base.getPhoneInfo({onSuccess:function(t){alert(JSON.stringify(t))},onFail:function(t){alert(JSON.stringify(t))}}):"进度条颜色"===t.title?this.$hesc.ui.progressBar.setColors({colors:"#228b22",onSuccess:function(){},onFail:function(){}}):"下载文件"===t.title?this.$hesc.biz.util.downloadFile({url:"http://static.dingtalk.com/media/lADOADTWJM0C2M0C7A_748_728.jpg_60x60q90.jpg",name:"demo.jpg",onSuccess:function(t){alert("下载成功,文件地址:"+t.path)},onFail:function(){}}):"自定义调用原生"===t.title&&this.$hesc.biz.native.method({url:"http://xxx.jpg",onSuccess:function(){alert("原生方法返回:")},onFail:function(){}})},change:function(t){for(var e=t.target.files,n=0;n<e.length;n++){var i=URL.createObjectURL(e[n]);alert(i),this.presrc.push(i)}}},props:[]},b=g,v=(n("80b5"),Object(s["a"])(b,h,m,!1,null,"382069f0",null)),y=v.exports;a["a"].use(p["a"]);var w=[{path:"/",name:"home",component:y},{path:"/picture",name:"picture",meta:{title:"拍照"},component:function(){return n.e("about").then(n.bind(null,"ae50"))}},{path:"/navigation",name:"navigation",meta:{title:"导航栏"},component:function(){return n.e("about").then(n.bind(null,"74ae"))}},{path:"/smsmsg",name:"smsmsg",component:function(){return n.e("about").then(n.bind(null,"77fc"))},meta:{title:"电话"}},{path:"/voice",name:"voice",component:function(){return n.e("about").then(n.bind(null,"64fc"))},meta:{title:"音频"}},{path:"/localstorage",name:"localstorage",component:function(){return n.e("about").then(n.bind(null,"738c"))},meta:{title:"数据缓存"}},{path:"/openactivity",name:"openactivity",component:function(){return n.e("about").then(n.bind(null,"95b4"))},meta:{title:"打开第三方应用"}},{path:"/dialog",name:"dialog",component:function(){return n.e("chunk-3333cbea").then(n.bind(null,"a20a"))},meta:{title:"弹窗示范"}},{path:"/http",name:"http",component:function(){return n.e("chunk-2d222539").then(n.bind(null,"cdac"))},meta:{title:"axios示范"}}],O=new p["a"]({mode:"history",base:"/hybridvue2/",routes:w}),S=O,P=n("2f62");a["a"].use(P["a"]);var _=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),j=n("2930"),x=n("bc3a"),k=n.n(x),C=n("4328"),F=n.n(C);function N(t,e,n){var i=k.a.create();if(i.defaults.timeout=3e3,n)for(var o in n)if(Object.hasOwnProperty.call(n,o)){var a=n[o];i.defaults.headers.common[o]=a}return i.defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",new Promise((function(n,o){i.post(t,F.a.stringify(e)).then((function(t){n(t)}),(function(t){o(t)})).catch((function(t){o(t)}))}))}function T(t,e,n){var i=k.a.create();if(i.defaults.timeout=3e3,n)for(var o in n)if(Object.hasOwnProperty.call(n,o)){var a=n[o];i.defaults.headers.common[o]=a}return i.defaults.headers["Content-Type"]="application/json;charset=UTF-8",new Promise((function(n,o){i.post(t,JSON.stringify(e)).then((function(t){n(t)}),(function(t){o(t)})).catch((function(t){o(t)}))}))}function U(t,e,n){var i=k.a.create();if(i.defaults.timeout=3e3,n)for(var o in n)if(Object.hasOwnProperty.call(n,o)){var a=n[o];i.defaults.headers.common[o]=a}return new Promise((function(n,o){i.get(t,{params:e}).then((function(t){n(t)}),(function(t){o(t)})).catch((function(t){o(t)}))}))}function $(t,e,n){var i=k.a.create();if(i.timeout=3e4*e.length,n)for(var o in n)if(Object.hasOwnProperty.call(n,o)){var a=n[o];i.defaults.headers.common[o]=a}for(var r=new FormData,c=0;c<e.length;c++)r.append("file",e[c]);return i.defaults.headers["Content-Type"]="multipart/form-data",new Promise((function(e,n){i.post(t,r).then((function(t){e(t)}),(function(t){n(t)})).catch((function(t){n(t)}))}))}function J(t,e,n){var i=k.a.create();if(i.timeout=3e4,n)for(var o in n)if(Object.hasOwnProperty.call(n,o)){var a=n[o];i.defaults.headers.common[o]=a}var r=new FormData;return r.append("file",e),i.defaults.headers["Content-Type"]="multipart/form-data",new Promise((function(e,n){i.post(t,r).then((function(t){e(t)}),(function(t){n(t)})).catch((function(t){n(t)}))}))}function E(t,e,n,i){var o=k.a.create();if(o.timeout=3e4,i)for(var a in i)if(Object.hasOwnProperty.call(i,a)){var r=i[a];o.defaults.headers.common[a]=r}var c=new FormData;return c.append("file",e,n),o.defaults.headers["Content-Type"]="multipart/form-data",new Promise((function(e,n){o.post(k.a.defaults.mediaURL+t,c).then((function(t){e(t)}),(function(t){n(t)})).catch((function(t){n(t)}))}))}k.a.defaults.baseURL="http://10.0.0.100:8231/",k.a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),k.a.interceptors.response.use((function(t){return t.data.success?t:Promise.resolve(t)}),(function(t){return Promise.reject(t)}));var A={fetchPost_formdata:N,fetchPost_json:T,fetchGet:U,postFile:J,postFiles:$,postBlobFile:E};a["a"].config.productionTip=!1,a["a"].use(o["a"]),a["a"].prototype.$hesc=j["hesc"],a["a"].prototype.$httputils=A,a["a"].use(i["a"]),new a["a"]({router:S,store:_,render:function(t){return t(f)}}).$mount("#app")},"80b5":function(t,e,n){"use strict";var i=n("32bf"),o=n.n(i);o.a},"85ec":function(t,e,n){},"8ce3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"containlayout"},[n("img",{staticClass:"icon",attrs:{src:t.data.url}}),n("p",{staticClass:"title"},[t._v(t._s(t.data.title))]),n("p",{staticClass:"content",domProps:{innerHTML:t._s(t.data.content)}},[t._v(t._s(t.data.content))])])},o=[],a={name:"",data:function(){return{data:this.item}},mounted:function(){},computed:{},components:{},methods:{},props:{item:{}}},r=a,c=(n("b9c7"),n("2877")),s=Object(c["a"])(r,i,o,!1,null,"4e21be5b",null);e["a"]=s.exports},b9c7:function(t,e,n){"use strict";var i=n("c093"),o=n.n(i);o.a},c093:function(t,e,n){}});
//# sourceMappingURL=app.7affe4fd.js.map