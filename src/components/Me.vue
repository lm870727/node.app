<template>
  <div class="me">
  	<h1>ig!牛逼！！！</h1>
    <div class="play">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../static/images/1.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../static/images/2.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../static/images/3.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../static/images/4.jpg" alt="">
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>
	
<script>
import Swiper from 'swiper';
export default {
  name: 'Me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 钩子函数
  mounted: function () {
    var swiper = new Swiper('.swiper-container');
  },  
}
</script>

<style scoped lang="scss">
  // 引入公共样式
  @import '../assets/sass/base.scss';

  h1{
    text-align: center;
    font-size: rem(50px);
    line-height: rem(100px);
  }

  .play{
    width: rem(750px);
    height: rem(750px);
    .swiper-container{
      width: 100%;
      height:rem(750px);
    }
    img{
      width: 100%;
    }
  }

</style>
