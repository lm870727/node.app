<template>
  <div id="app">
    <router-view/>
    <!-- 底部导航 -->
      <nav class="footer">
        <ul>
          <router-link to="/index" tag="li" :class="resPath=='index'?'mo':''">
            <span class="iconfont icon-logo1 "></span>
            <p>首页</p>
          </router-link>
          <router-link to="/xs" tag="li" :class="resPath=='xs'?'mo':''">
            <span class="iconfont icon-nodejs"></span>
            <p>新手入门</p>
          </router-link>
          <router-link to="/me" tag="li" :class="resPath=='me'?'mo':''">
            <span class="iconfont icon-xnode"></span>
            <p>关于我们</p>
          </router-link>
          <router-link to="/dl" tag="li" :class="resPath=='dl'?'mo':''">
            <span class="iconfont icon-gzl-node-n"></span>
            <p>登陆</p>
          </router-link>
        </ul> 
      </nav>
  <!-- 底部导航 end -->


  </div>
</template>

<script>
export default {  
  name: 'App',
  // 计算属性
  computed:{
    resPath:function(){
      // 用'/' 把 path 分割成数组
      var array = this.$route.path.split('/');
      return array[1];
    }
  }
}
</script>

<style lang="scss">
 
  // 引入公共样式
  @import './assets/sass/base.scss';
  
  // 底部导航
  nav.footer{
    width:100%;
    height: rem(90px);
    background: #444444;
    position: fixed;
    left:0;
    bottom: 0;
    border-top:1px solid #b3b3b3;
    ul{
      display: flex;
      justify-content: space-around;
      li{
        width: 25%;
        height: rem(90px);
        color:#cccccc;
        //background:red;
        span{
          display: block;
          text-align: center;
          font-size: rem(40px);
          line-height: rem(52px);
          &.mo{
            color:#fff;
          }
        }
        p{
          font-size: rem(25px);
          line-height: rem(25px);
          text-align: center;
        }
        &.mo{ 
          background:#519031;
        }
      }
        // .router-link-exact-active{
        // background:pink;
        //  }
    }
  }
  


</style> 
