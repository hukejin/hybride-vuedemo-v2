# H5混合开发框架2.0版

### 文档地址   
https://hukejin.github.io/hescjsapi-master/#/

### 使用说明

1.使用npm安装   
`npm install hesc-jsapi --save`   
2.在main.js文件里进行全局引入，并注册为全局变量   
`import {hesc} from 'hesc-jsapi'`   
`Vue.prototype.$hesc = hesc`   
3.在单页面的 index.html 文件中引入 CDN 链接。    
```
https://cdn.jsdelivr.net/npm/hesc-hybrid-master@1.0.4/index.min.js
或者
https://unpkg.com/hesc-hybrid-master/index.js
```
---
#### 接口约定

* 所有接口都为异步
* 接受一个object类型的参数
* 成功回调 onSuccess(某些异步接口的成功回调，将在事件触发时被调用，具体详情请查看相关onSuccess回调时机)
* 失败回调 onFail

```
this.$hesc.命名空间.功能.方法({
    参数1: '',
    参数2: '',
    onSuccess: function(result) {
    //成功回调
    /*
    {
        //所有返回信息都输出在这里
    }*/
    },
    onFail: function(){
    //失败回调
    }
})    
```

---
### JSAPI总览
<table style="width: 100vw">
<tr style="width: 100vw">
    <th>分类</th>
    <th>接口说明</th>
    <th>JSAPI名称</th>
</tr>
<tr>
    <td>容器</td>
    <td>获取容器版本号</td>
    <td>soft.version</td>
</tr>
<tr>
    <td rowspan="5">弹窗</td>
    <td>alert</td>
    <td>device.notification.alert</td>
</tr>
<tr>
    <td>confirm</td>
    <td>device.notification.confirm</td>
</tr>
<tr>
    <td>toast</td>
    <td>device.notification.toast</td>
</tr>
<tr>
    <td>单选</td>
    <td>biz.util.select</td>
</tr>
<tr>
    <td>多选</td>
    <td>biz.util.multiSelect</td>
</tr>
<tr>
    <td rowspan="3">设备</td>
    <td>获取网络类型</td>
    <td>device.connection.getNetworkType</td>
</tr>
<tr>
    <td>获取uuid</td>
    <td>device.base.getUUID</td>
</tr>
<tr>
    <td>获取手机基础信息</td>
    <td>device.base.getPhoneInfo</td>
</tr>
<tr>
  <td rowspan="3">日期&月历</td>
  <td>日期选择器</td>
  <td>biz.util.datepicker</td>
</tr>
<tr>
  <td>时间选择器</td>
  <td>biz.util.timepicker</td>
</tr>
<tr>
  <td>日期及时间选择器</td>
  <td>biz.util.datetimepicker</td>
</tr>
<tr>
    <td rowspan="7">导航栏</td>
    <td>设置导航栏颜色</td>
    <td>biz.navigation.setbg</td>
</tr>
<tr>
    <td>设置左侧导航按钮</td>
    <td>biz.navigation.setLeft</td>
</tr>
<tr>
    <td>设置导航栏右侧单个按钮</td>
    <td>biz.navigation.setRight</td>
</tr>
<tr>
      <td>替换页面</td>
      <td>biz.navigation.replace</td>
</tr>
<tr>
  <td>设置导航栏标题</td>
  <td>biz.navigation.setTitle</td>
</tr>
<tr>
  <td>关闭当前页面</td>
  <td>biz.navigation.close</td>
</tr>
<tr>
     <td>返回上一级页面</td>
     <td>biz.navigation.goBack</td>
</tr>
<tr>
 <td>UI控件</td>
 <td>设置顶部进度条颜色</td>
 <td>ui.progressBar.setColors</td>
</tr>
<tr>
 <td>扫码</td>
 <td>扫二维码</td>
 <td>biz.util.scan</td>
</tr>
<tr>
<td rowspan="3">存储</td>
<td>设置存储信息</td>
<td>util.domainStorage.setItem</td>
</tr>
<tr>
<td>获取存储信息</td>
<td>util.domainStorage.getItem</td>
</tr>
<tr>
<td>删除存储信息</td>
<td>util.domainStorage.removeItem</td>
</tr>
<tr>
<td rowspan="2">地图</td>
<td>获取当前GPS坐标</td>
<td>device.geolocation.get</td>
</tr>
<tr>
<td>打开地图并定位</td>
<td>biz.map.locate</td>
</tr>
<tr>
<td>业务</td>
<td>打开APP应用</td>
<td>biz.microApp.openApp</td>
</tr>
<tr>
<td>文件</td>
<td>下载文件</td>
<td>biz.util.downloadFile</td>
</tr>
<tr>
<td rowspan="3">图片</td>
<td>拍照</td>
<td>device.media.capture</td>
</tr>
<tr>
<td>选择图片</td>
<td>biz.media.select</td>
</tr>
<tr>
<td>图片预览</td>
<td>biz.util.previewImage</td>
</tr>
<tr>
<td rowspan="2">电话</td>
<td>拨打电话</td>
<td>biz.telephone.call</td>
</tr>
<tr>
<td>发送短信</td>
<td>biz.telephone.smg</td>
</tr>
<tr>
<td rowspan="8">音频接口</td>
<td>开始录音</td>
<td>device.audio.startRecord</td>
</tr>
<tr>
<td>停止录音</td>
<td>device.audio.stopRecord</td>
</tr>
<tr>
<td>监听录音自动停止</td>
<td>device.audio.onRecordEnd</td>
</tr>
<tr>
<td>播放语音</td>
<td>device.audio.play</td>
</tr>
<tr>
<td>暂停播放语音</td>
<td>device.audio.pause</td>
</tr>
<tr>
<td>恢复暂停播放的语音</td>
<td>device.audio.resume</td>
</tr>
<tr>
<td>停止播放音频</td>
<td>device.audio.stop</td>
</tr>
<tr>
<td>监听播放自动停止</td>
<td>device.audio.onPlayEnd</td>
</tr>
<tr>
<td>打开新页面</td>
<td>在新窗口上打开链接</td>
<td>biz.util.openLink</td>
</tr>
</table>

---
### JSAPI用法
### 1容器   
##### 获取容器版本号   
```
this.$hesc.soft.version({
	onSuccess: function(result) {
         /*
         {versionCode:Number,versionName:String}	
        */  
    },
    onFail: function(){}
})
```
### 2弹窗   
#### 2.1 alert
```
    this.$hesc.device.notification.alert({
        message: "亲爱的",
        title: "提示",//可传空
        buttonName: "收到",
        onSuccess : function() {
            //onSuccess将在点击button之后回调
            /*回调*/
        },
        onFail : function(err) {}
    });
```
#### 2.2 confirm
```
    this.$hesc.device.notification.confirm({
        message: "你爱我吗",
        title: "提示",
        buttonLabels: ['爱', '不爱'],
        onSuccess : function(result) {
            //onSuccess将在点击button之后回调
            /*
            {
                buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
            }
            */
        },
        onFail : function(err) {}
    });
```
#### 2.3 toast
```
this.$hesc.device.notification.toast({
    text: String, //提示信息
    duration: Number, //显示持续时间，单位秒，默认按系统规范[android只有两种(<=2s >2s)]
    delay: Number, //延迟显示，单位秒，默认0
    onSuccess : function(result) {
        /*{}*/
    },
    onFail : function(err) {}
})
```
#### 2.4 单选
```
this.$hesc.biz.util.select({
    title: “单选”, //选择框标题
buttonLabels: ['确定', '取消'],  //按钮文本
array:[ '中国', '美国','加拿大', '英国'],  //选项
onSuccess : function(result) {
        //onSuccess将在点击button之后回调
        /*
        {
            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始，
		item：“中国”		//返回的值
        }
        */

    },
    onFail : function(err) {}
})
```
#### 2.5 多选
```
this.$hesc.biz.util.multiSelect({
    title: “多选, //选择框标题
buttonLabels: ['确定', '取消'],  //按钮文本
array:[ '中国', '美国','加拿大', '英国'],  //选项
onSuccess : function(result) {
        //onSuccess将在点击button之后回调
        /*
        {
            buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始，
		items：[“中国”, “美国”]		//返回的值
        }
        */

    },
    onFail : function(err) {}
})
```
### 3设备
#### 3.1获取网络类型
```
this.$hesc.device.connection.getNetworkType({
    onSuccess : function(data) {
        /*
        {
            result: 'wifi' // result值: wifi mobile unknown none   none表示离线
        }
        */
    },
    onFail : function(err) {}
});
```
#### 3.2获取uuid
```
this.$hesc.device.base.getUUID({
    onSuccess : function(data) {
        /*
        {
            uuid: '3udbhg98ddlljokkkl' //
        }
        */
    },
    onFail : function(err) {}
});
```
#### 3.3获取手机基础信息
```
this.$hesc.device.base.getPhoneInfo({
    onSuccess : function(data) {
        /*
        {
            screenWidth: 1080, // 手机屏幕宽度
            screenHeight: 1920, // 手机屏幕高度
            brand:'Mi'， // 手机品牌
            model:'Note4', // 手机型号
            version:'7.0'. // 版本
            netInfo:'wifi' , // 网络类型 wifi／4g／3g 
            operatorType :'xx' // 运营商信息
        }
        */
    },
    onFail : function(err) {}
});
```
### 4日历   
#### 4.1日期选择器   
```
this.$hesc.biz.util.datepicker({
    format: 'yyyy-MM-dd',//注意：format只支持android系统规范，即2015-03-31格式为yyyy-MM-dd
    value: '2015-04-17', //默认显示日期
    onSuccess : function(result) {
        //onSuccess将在点击完成之后回调
        /*{
            value: "2015-02-10"
        }
        */
    },
    onFail : function(err) {}
})
```
#### 4.2时间选择器
```
this.$hesc.biz.util.timepicker({
    format: 'HH:mm',
    value: '14:00', //默认显示时间
    onSuccess : function(result) {
        //onSuccess将在点击完成之后回调
        /*{
            value: "10:00"
        }
        */
    },
    onFail : function(err) {}
})
```
#### 4.3日期及时间选择器
```
this.$hesc.biz.util.datetimepicker({
    format: 'yyyy-MM-dd HH:mm',
    value: '2015-04-17 08:00', //默认显示
    onSuccess : function(result) {
        //onSuccess将在点击完成之后回调
        /*{
            value: "2015-06-10 09:50"
        }
        */
    },
    onFail : function(err) {}
})
```
### 5导航栏
#### 5.1 设置导航栏颜色
```
this.$hesc.biz.navigation.setbg({
    bgcolor: '#CCF5F5F5',//ARGB格式 --- 透明度，红色，绿色，蓝色
       onSuccess : function() {
        //onSuccess将在点击完成之后回调
    },
    onFail : function(err) {}
})
```
#### 5.2设置导航栏标题
```
this.$hesc.biz.navigation.setTitle({
    title : '邮箱正文',//控制标题文本，空字符串表示显示默认文本
    onSuccess : function() {
       //onSuccess将在点击完成之后回调
    },
    onFail : function(err) {}
});
```
#### 5.3设置左侧导航按钮文本
```
this.$hesc.biz.navigation.setLeft({
    control: true,//是否控制点击事件，true 控制，false 不控制
    text: '',//控制显示文本，空字符串表示显示默认文本
    onSuccess : function() {
        //如果control为true，则onSuccess将在发生按钮点击事件被回调
    },
    onFail : function(err) {}
});
```
#### 5.4关闭当前页面
使用说明   
调用此接口可以关闭当前浏览器窗口   
```
this.$hesc.biz.navigation.close({
    onSuccess : function() {
    },
    onFail : function(err) {}
})
```
#### 5.5设置导航栏右侧单个按钮
```
this.$hesc.biz.navigation.setRight({
    show: false,//控制按钮显示， true 显示， false 隐藏
    control: true,//是否控制点击事件，true 控制，false 不控制
    text: '发送',//控制显示文本，空字符串表示显示默认文本
    onSuccess : function() {
        //如果control为true，则onSuccess将在发生按钮点击事件被回调
    },
    onFail : function(err) {}
});
```
#### 5.6返回上一级页面
使用说明
调用此接口会返回前端页面的上级浏览页面，如果是H5的根页面，调用此接口会关闭当前浏览窗口。
```
this.$hesc.biz.navigation.goBack({
    onSuccess : function(result) {
        /*result结构
        {}
        */
    },
    onFail : function(err) {}
})
```
#### 5.7替换页面
使用说明
使用新的页面替换当前页面，当前页面会被立即销毁，展示新页面，无动画。
```
this.$hesc.biz.navigation.replace({
    url: 'https://xxx.com',// 新的页面链接
    onSuccess : function(result) {
        /*
        {}
        */
    },
    onFail : function(err) {}
});
```
### 6UI控件
#### 6.1设置顶部进度条颜色
```
this.$hesc.ui.progressBar.setColors({
    colors:"#CCFFFFFF" //ARGB
    onSuccess: function(data) {
        
    },
    onFail: function() {
    }
})
```
### 7扫码
#### 7.1扫二维码
```
this.$hesc.biz.util.scan({
    type: "qrCode" , //String type 为 qrCode
    onSuccess: function(data) {
    //onSuccess将在扫码成功之后回调
      /* data结构
         { 'text': String}
      */
    },
   onFail : function(err) {
   }
})
```
### 8存储
#### 8.1设置存储信息
```
this.$hesc.util.domainStorage.setItem({
     name:'key' , //String 存储信息的key值，必须唯一  
     value:'value', //String 存储信息的Value值  
     onSuccess : function(info) {
          /*{
                result:true
          }*/
     },
     onFail : function(err) {
          alert(err);
     }
 });
```
#### 8.2获取存储信息
```
this.$hesc.util.domainStorage.getItem({
     name:'key' , // 存储信息的key值
     onSuccess : function(info) {
        /*{
             value: 'value' // 获取存储的信息
         }*/
     },
     onFail : function(err) {
          alert(err);
     }
 });
```
#### 8.3删除存储信息
```
this.$hesc.util.domainStorage.removeItem({
     name:'key' , // 存储信息的key值
     onSuccess : function(info) {
          /*{
		        result:true
          }*/
     },
     onFail : function(err) {
          alert(err);
     }
 });
```
### 9地图
#### 9.1获取当前GPS坐标
```
this.$hesc.device.geolocation.get({
    tiandi:true,//是否采用天地图 true天地图  false其它地图平台
    key:'',//天地图的开发者key，请申请服务端应用的key
    poi:true,// 是否获取该GPS位置的地理信息 true获取  false不获取 -- 只有天地图模式会返回地理信息
    onSuccess : function(result) {
        /* 坐标 result 结构
        {
            longitude : Number,//经度
            latitude : Number,//纬度
            /* 如采用了天地图，会返回天地图的地理信息
            province: 'xxx', // POI所在省会，可能为空
            provinceCode: 'xxx', // POI所在省会编码，可能为空
            city: 'xxx', // POI所在城市，可能为空
            cityCode: 'xxx', // POI所在城市，可能为空
            adName: 'xxx', // POI所在区名称，可能为空
            adCode: 'xxx', // POI所在区编码，可能为空
            title: 'xxx', // POI的名称
            address: 'xxx', // 详细地址，可能为空
            formatted_address:'xxx', // 格式化地址
            */
        }
        */
    },
    onFail : function(err) {}
});
```
#### 9.2打开地图并定位
使用说明
默认采用天地图形式
```
this.$hesc.biz.map.locate({
    latitude: 39.903578, // 纬度，非必须
    longitude: 116.473565, // 经度，非必须
    baseUrl:String， //天地图底图地址
    annotation：String， //天地图标注地址 
    parturl：String,//部件地址
    key:'xxx',//申请的天地图key
    mapExtent:{minX:116.46,minY:31.72,maxX:116.71,maxY:31.87},//地图初始化范围
    onSuccess: function (result) {
        /* result 结构 */
 	{
            province: 'xxx', // POI所在省会，可能为空
            provinceCode: 'xxx', // POI所在省会编码，可能为空
            city: 'xxx', // POI所在城市，可能为空
            cityCode: 'xxx', // POI所在城市，可能为空
            adName: 'xxx', // POI所在区名称，可能为空
            adCode: 'xxx', // POI所在区编码，可能为空
            distance: 'xxx', // POI与设备位置的距离
            postCode: 'xxx', // POI的邮编，可能为空
            snippet: 'xxx', // POI的街道地址，可能为空
            title: 'xxx', // POI的名称
	        address: 'xxx', // 详细地址，可能为空
            latitude: 39.903578, // POI的纬度
            longitude: 116.473565, // POI的经度
        }
    },
    onFail: function (err) {}
});
```
### 10业务
#### 10.1 打开应用
使用说明
打开手机上其它APP应用
```
this.$hesc.biz.microApp.openApp({
    agentId: '123',// iOS:应用scheme;   Android:应用包名
    appId: '234',// Android: APP入口activity  cn.com.hesc.xxxActivity
    onSuccess : function() {},
    onFail : function(err) {}
})
```
### 11	文件
#### 11.1 下载文件
```
this.$hesc.biz.util.downloadFile({
    url: 'http://static.dingtalk.com/media/lADOADTWJM0C2M0C7A_748_728.jpg_60x60q90.jpg', //要下载的文件的url
    name: '一个图片.jpg', //定义下载文件名字
    onSuccess : function() {
        /*下载完成
            {path:'xxxxx'}
        */
    },
    onFail : function() {}
})
```
### 12	图片
#### 12.1 拍照
```
this.$hesc.device.media.capture({
	custome:true， //true 自定义相机  false 系统相机
compress:true,//true 进行压缩
thumbnail:false,//true 优先返回缩略图base64，后台上传图片，false不需要缩略图，直接后台上传图片
mediaUrl:’’,//附件服务器地址
onThumbnail : function(result) {
         /*拍摄图片后返回100*100的缩略图base64编码的字符串
          {
                thumbnails：['./9XXXXXXXXXXXXXXXXXX’,''}]
          }
        */

},
onSuccess : function(result) {
        /*图片上传成功后返回url地址
          {  
		pics:[
                {path : http://yf.hesc.com.cn/hesc-fileservice/upload/file/2018/04/04/20180404160840998550.jpg}
        ]
	}
        */
    },
    onFail : function() {}

})
```
#### 12.2 选择图片
```
this.$hesc.device.media.select({
   image:{multiple:true,compress:false,max:9},//multiple true进行多选 compress true进行压缩，max最多选9张，如果multiple设置为false，max默认赋值1
thumbnail:false,//true 优先返回缩略图base64，后台上传图片，false不需要缩略图，直接后台上传图片
mediaUrl:’’,//附件服务器地址
onThumbnail : function(result) {
         /*拍摄图片后返回100*100的缩略图base64编码的字符串
          {
             thumbnails：['./9XXXXXXXXXXXXXXXXXX’,''}]
          }
        */

},
onSuccess : function(result) {
        /*图片上传成功后返回url地址
          {  
            pics:[
                    {path : http://yf.hesc.com.cn/hesc-fileservice/upload/file/2018/04/04/20180404160840998550.jpg}
            ]
          }
        */
    },
    onFail : function(err) {}
})
```
#### 12.3 图片预览
```
this.$hesc.biz.util.previewImage({
    urls: [String],//图片地址列表
    current: String,//当前显示的图片链接 可不填
    onSuccess : function(result) {
        /**/
    },
    onFail : function(err) {}
})
```
### 13电话
#### 13.1 拨打电话
```
this.$hesc.biz.telephone.call({
    phone: ‘’, //电话号码
    onSuccess : function() {},
    onFail : function() {}
})
```
#### 13.2 发送短信
```
this.$hesc.biz.telephone.smg({
phone: ‘’, //电话号码
msg:’发送的信息’,//要发送的信息
    onSuccess : function() {},
    onFail : function() {}
})
```
### 14音频
#### 14.1 开始录音
```
this.$hesc.device.audio.startRecord({
    mediaUrl:’’,//附件服务器地址
    onSuccess : function () {//默认20秒。
    },
    onFail : function (err) {
    }
});
```
#### 14.2 停止录音
```
this.$hesc.device.audio.stopRecord({
    mediaUrl:’’,//附件服务器地址
    onSuccess : function(res){
        res.mediaUrl; // 返回音频的url地址，可用于本地播放和音频下载
        res.duration; // 返回音频的时长，单位：秒
    },
    onFail : function (err) {
    }
});
```
#### 14.3 监听录音自动停止
使用说明
当语音录制时间超过20秒时，自动停止语音录制，同时将录制的语音上传到服务端，返回音频资源的url。
推荐在调用 device.audio.startRecord 前设置监听录音自动停止的回调。
```
this.$hesc.device.audio.onRecordEnd({
    onSuccess : function(res) {
        res.mediaUrl; // 停止播放音频url地址
        res.duration; // 返回音频的时长，单位：秒
    },
    onFail : function (err) {
 
    }
});
```
#### 14.4 播放语音
```
this.$hesc.device.audio.play({
    localAudioId : "mediaUrl",//音频的url地址
    onSuccess : function () {
 
    },
 
    onFail : function (err) {
    }
});
```
#### 14.5 暂停播放
```
this.$hesc.device.audio.pause({
    localAudioId : "mediaUrl",
    onSuccess : function() {
    },
    onFail : function(err) {
    }
});
```
#### 14.6 恢复暂停播放的语音
```
this.$hesc.device.audio.resume({
    localAudioId : "mediaUrl",
    onSuccess : function() {
    },
    onFail : function(err) {
    }
});
```
#### 14.7 停止播放语音
```
this.$hesc.device.audio.stop({
    localAudioId : "mediaUrl",
    onSuccess : function () {
    },
    onFail : function (err) {
    }
});
```
#### 14.8监听播放自动停止
```
this.$hesc.device.audio.onPlayEnd({
    onSuccess : function () {
    },
    onFail : function (err) {
    }
});
```
### 15打开新页面
#### 15.1在新窗口上打开链接
```
this.$hesc.biz.util.openLink({
    url:"http://www.dingtalk.com",//要打开链接的地址
    onSuccess : function() {
        /**/
    },
    onFail : function(err) {}
})
```
### vue单页面应用调优，使得页面渲染速度加快
1. 开启GZIP压缩能力
#### nginx配置
```
http {
  gzip on;
  gzip_static on;
  gzip_min_length 1024;
  gzip_buffers 4 16k;
  gzip_comp_level 2;
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;
  gzip_vary off;
  gzip_disable "MSIE [1-6]\.";
}
```
#### tomcat配置
修改tomcat里/conf/server.xml
```
<Connector port="8080"
   protocol="HTTP/1.1"
   connectionTimeout="20000"
   redirectPort="8443"    
   compression="on" 
   compressionMinSize="2048" 
   noCompressionUserAgents="gozilla, traviata"   
   useSendfile="false" 
   compressableMimeType="text/html,text/xml,text/javascript,
 application/javascript,text/css,text/plain,text/json"/>
```
```
参数说明：
　　1、compression="on" 开启压缩。可选值："on"开启，"off"关闭，"force"任何情况都开启。
　　2、compressionMinSize="2048"大于2KB的文件才进行压缩。用于指定压缩的最小数据大小，单位B，默认2048B。注意此值的大小，如果配置不合理，产生的后果是小文件压缩后反而变大了，达不到预想的效果。
　　3、noCompressionUserAgents="gozilla, traviata"，对于这两种浏览器，不进行压缩，其值为正则表达式，匹配的UA将不会被压缩，默认空。
　　4、compressableMimeType="text/html,text/xml,application/javascript,text/css,text/plain,text/json"会被压缩的MIME类型列表，多个逗号隔，表明支持html、xml、js、css、json等文件格式的压缩
    5、useSendfile="false" tomcat默认设置是当数据大小达到48kb时，将启用文件传输
```
#### 配置完上述服务器，再来加载客户端压缩--配合nginx使用，tomcat好像无效
```
npm install compression-webpack-plugin --save-dev
```
#### vue.config.js配置Gzip压缩--配合nginx使用，如果是tomcat就不用设置了
```
// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']
module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
```
2.引入cdn的方式，减小打包js体积，可以优先将路由、vuex等等其它JS文件进行CDN引入
```
路由
https://unpkg.com/vue-router/dist/vue-router.js

vuex
https://unpkg.com/vuex

axios
https://unpkg.com/axios/dist/axios.min.js
```
### vue单页面应用路由改为history模式后，web部署服务器需要做的改动：
Apache服务器
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
nginx
```
location / {
  try_files $uri $uri/ /index.html;
}
```
tomcat   
在项目的发布路径下创建文件夹 WEB-INF并创建文件web.xml，写入以下内容
```
<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
                      http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
  version="3.1"
  metadata-complete="true">
	<display-name>XXXX</display-name>
	<error-page>
	  <error-code>404</error-code>
	  <location>/index.html</location>
	</error-page>
</web-app>
```







