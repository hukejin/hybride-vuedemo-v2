<template>
  <div class="httpdemo">
    <van-nav-bar
        title="web请求"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft">
    </van-nav-bar>
    <ul class="menulist">
        <li v-for="item in list" @click="todesc(item)" :key="item.title">
            <mainuiitem :item="item"></mainuiitem>
        </li>
    </ul>
    <van-uploader :after-read="afterRead" />
  </div>
</template>

<script>
import mainuiitem from '../components/MainUIItem.vue'
export default {
  name: 'httpdemo',
  data() { 
    return {
        list: [],
        bsrcs:[]
    }
  },
  components:{mainuiitem},
  created:function(){},
  mounted() {
    this.list.push({title:'get',content:'get请求',url:'./img/pic.png'})
    this.list.push({title:'post1',content:'application/x-www-form-urlencoded数据请求',url:'./img/pic.png'})
    this.list.push({title:'post2',content:'application/json数据请求',url:'./img/pic.png'})
    this.list.push({title:'附件上传',content:'上传文件',url:'./img/pic.png'})
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    todesc(item){
        if(item.title === "get"){
            let params = {'name':'qabdc'}
            this.$httputils.fetchGet('/api/hello',params,{'accessToken':'123456'}).then(res => {
                console.log("data",res.data);
            }).catch(err => console.log("err",err))
        }else if(item.title === "post1"){
            let params = {'name':'123'}
            this.$httputils.fetchPost_formdata('/api/jake',params,{'accessToken':'123456'}).then(res => {
                console.log("data",res.data);
            }).catch(err => console.log("err",err))
        }else if(item.title === "post2"){
            let params = {name:"who are you",age:100}
            this.$httputils.fetchPost_json('/api/user',params,{'accessToken':'123456'}).then(res => {
                console.log("data",res.data);
            }).catch(err => console.log("err",err))
        }
    }
  },
 }
</script>

<style lang="" scoped>
</style>