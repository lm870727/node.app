<template>
  <div class="loading">
    <img src="../../static/images/loading.gif" alt="">
  </div>
</template>

<script>



export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

}
</script>

<style scoped lang="scss">
  // 引入公共样式
  @import '../assets/sass/base.scss';

  .loading img{
    display: block;
    width: rem(300px);
    height: rem(300px);
    margin: rem(300px) auto;
  }

</style>
