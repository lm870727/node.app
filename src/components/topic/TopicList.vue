<template>
  <div class="topiclist">
    <loading v-if="!items.length"></loading>
    <ul class="items">
      <li class="item" v-for="item in items">
        <img v-lazy="item.author.avatar_url" alt="">
        <div class="tab">
          <div class="top" v-if="item.top">置顶</div>
          <div class="top" v-else-if="item.good">精华</div>
          <div class="" v-else>{{tabs[item.tab]}}</div>
        </div>
        <router-link :to="'/index/show/'+item.id" tag="div" class="title">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入 取数据的模块
import {getTopicDatas} from '@/getdata/getTopic.js';
// 引入loading 组件
import loading from '@/components/Loading';


export default {
  // 组件名称
  name: 'TopicList',
  // 组件绑定的数据
  data () {
    return {
      // 主题分类的对象
      tabs:{
        dev:'dev',
        share:'分享',
        ask:'问答',
        job:'招聘'
      }
    }
  },
  // 接收 items 数据
  props:['items'],
  // 加载组件
  components:{
    //loading组件
    loading
  }
}

</script>

<style scoped lang="scss">
  // 引入公共样式
  @import '../../assets/sass/base.scss';
  // 引入主题列表的样式
  @import '../../assets/sass/topiclist.scss';

  .topiclist{
    margin-top: rem(80px);
  }

</style>
