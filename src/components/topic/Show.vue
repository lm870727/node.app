<template>
  <div class="show">
    内容页
  </div>
</template>

<script>

// 引入 取数据的模块
import {getTopicShow} from '@/getdata/getTopic.js';

export default {
  name: 'Show',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 钩子函数
  mounted: function () {
    // 接收id
    var id = this.$route.params.id;
    // 获取主题详情内容
    getTopicShow(id).then((data)=>{
      console.log(data);
    })
  },
}
</script>

<style scoped lang="scss">
  // 引入公共样式
  @import '../../assets/sass/base.scss';

  .show{
    margin-top: rem(80px);
  }

</style>
