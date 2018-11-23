<template>
  <div class="askTopic">
    <!-- 主题列表 -->
    <topic-list :items="items"></topic-list>  
    <infinite-loading @infinite="infiniteHandler" class="loading"></infinite-loading>
  </div>
</template>

<script>
// 引入 取数据的模块
import {getTopicDatas} from '@/getdata/getTopic.js';
// 引入 主题列表组件
import topicList from '@/components/topic/TopicList';
// 引入滑动组件
import InfiniteLoading from 'vue-infinite-loading';

export default {
  // 组件名称
  name: 'AskTopic',
  // 组件绑定的数据
  data () {
    return {
      items:[],
      // 页码
      page:1
    }
  },
  // 钩子函数
  mounted: function () {
    // ajax 请求主题列表
    getTopicDatas({tab:'ask',limit:20}).then((response)=>{
      this.items = response.data.data;
    });
  },
  // 加载组件
  components:{
    //主题列表组件
    topicList,
    // 滑动的组件
    InfiniteLoading
  },
  // 方法
  methods: {
    infiniteHandler($state) {
      setTimeout(()=>{
        // ajax 请求主题列表
        getTopicDatas({tab:'ask',limit:50,page:++this.page}).then((response)=>{
          this.items = this.items.concat(response.data.data);
        });
        $state.loaded();
      },1000);
    },
  },
}


</script>
<style lang="scss">
  // 引入公共样式
  @import '../../assets/sass/base.scss';
  .loading{
    margin-bottom: rem(90px);
  }  

</style>