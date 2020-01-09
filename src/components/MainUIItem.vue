<template>
     <!-- 所有内容包含到下面的div里，不能多层，必须包含到一个div里-->
     <div class="containlayout">
          <img :src="data.url" class="icon"/>
          <p class="title">{{data.title}}</p>
          <p class="content" v-html="data.content">{{data.content}}</p>
     </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        data:this.item,
      }
    },
  mounted(){
  },
  computed:{
  },
    components:{

    },
    methods:{

    },
    props:{item:{}}

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .icon{
         display: inline-block;
         float: left;
         line-height: 3rem;
         max-width: 3rem;
         height: 3rem;
         margin-right: .3rem;
    }
     p{
          position: relative;
          text-align: left;
          padding-left: 10px;
          display: grid;
     }
     .title{
          font-size: 1rem;
     }
     .content{
          margin-top: -0.6rem;
          font-size: .8rem;
     }
</style>
