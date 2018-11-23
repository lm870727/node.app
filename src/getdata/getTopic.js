// 取 topic 相关的数据

// 引入 axios 模块 （axios 是封装的ajax）;
import axios from 'axios';

var $http = axios.create({
	// 基本url
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 取主题列表
function getTopicDatas(options){
	// 配置默认参数
	var newOptions = Object.assign({
		tab:'all',
		limit:10,
		page:1
	},options)

	// 返回 ajax 对象
	return $http({
		// 请求的地址
		url:'/topics',
		// 默认是 get
		method: 'get',  
		// 参数
		params:newOptions
	});
}

// 获取主题详情
function getTopicShow(id){
	return $http.get('/topic/'+id);
}

// 暴露 取主题列表 方法
export {getTopicDatas,getTopicShow}