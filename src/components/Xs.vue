<template>
  <div class="xs">
  	<h3>欢迎关注我们</h3>
  	<img src="../../static/images/xs.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Xs',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="scss">
	// 引入公共样式
  @import '../assets/sass/base.scss';

  .xs{
  	h3{
  		color:#333;
  		font-size:rem(50px);
  		text-align:center;
  		line-height:rem(300px);
  		color:green;
  	}
  	img{
  		display:block;
  		margin:rem(50px) auto;
  		width:rem(500px);
  	}
  }
</style>
