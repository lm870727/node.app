<template>
  <div class="index">
  	<nav class="top">
  		<ul>
  			<router-link to="/index" tag="li">全部</router-link>
  			<router-link to="/index/good" tag="li">精华</router-link>
  			<router-link to="/index/dev" tag="li">客户端测试</router-link>
  			<router-link to="/index/share" tag="li">分享</router-link>
  			<router-link to="/index/ask" tag="li">问答</router-link>
  			<router-link to="/index/job" tag="li">招聘</router-link>		
  		</ul>
  	</nav>
  	<router-view/>
  </div>
</template>

<script>


export default {
  name: 'Index',

}
</script>

<style scoped lang="scss">

	// 引入公共样式
  @import '../assets/sass/base.scss';
	
	nav.top{
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:rem(80px);
		background:#f6f6f6;
		color:#519031;
		font-size:rem(30px);
		ul{
			display:flex;
			align-items:center;
			justify-content:space-around;
			height:rem(90px);
			li{
				padding:rem(10px) rem(15px);
				border-radius:rem(8px);
				/* &.mo{
					background:#509030;
					color:#fff;
				} */
			}
		} 
	} 


		nav.top .router-link-exact-active{
			background:#509030;
			color:#fff;
		}
</style>
