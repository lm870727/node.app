import Vue from 'vue'
import Router from 'vue-router'

// 加载首页组件
import Index from '@/components/Index'

// 加载新手入门组件
import Xs from '@/components/Xs'

// 加载关于我们的组件
import Me from '@/components/Me'

// 加载登陆的组件
import Dl from '@/components/Dl'



// 加载全部主题组件
import AllTopic from '@/components/topic/AllTopic'
// 加载精华主题组件
import GoodTopic from '@/components/topic/GoodTopic'
// 加载dev主题组件
import DevTopic from '@/components/topic/DevTopic'
// 加载分享主题组件
import ShareTopic from '@/components/topic/ShareTopic'
// 加载问答主题组件
import AskTopic from '@/components/topic/AskTopic'
// 加载招聘主题组件 
import JobTopic from '@/components/topic/JobTopic'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
      	{
      	path:'/',  
    	component:AllTopic
      	},
      	{
      	path:'good',  
    	component:GoodTopic
      	},
      	{
      	path:'dev',
      	component:DevTopic
      	},
      	{
      	path:'share',
      	component:ShareTopic
      	},
      	{
      	path:'ask',
      	component:AskTopic
      	},
      	{
      	path:'job',
      	component:JobTopic
      	}
      ]
    },
    {
    	path:'/Xs',
    	name:'Xs',  
    	component:Xs
    },
    {
    	path:'/Me',
    	name:'Me',
    	component:Me
    },
    {
    	path:'/Dl',
    	name:'Dl',
    	component:Dl
    },
  
    // 路由的跳转
    {
    	path:'/*',
    	redirect:'/index'
    }
  ]
})
