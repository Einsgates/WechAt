import config from '../config.js';

/*
	api接口管理
	样例说明：
	如：config里有HOST：127.0.0.1，他作为主机地址，用于拼接路径
	如：
	const HOST=config.HOST
	let testApi=HOST+'test/test'
	const install=(Vue,vm)=>{
		//可以post还是get看需求
		let getTestApi=(params={})=>vm.$u.http.post(testApi,param);
		vm.$u.api={
			getTestApi
		}
	}
*/
// ---- 相关访问域名地址 ----


// ---- api地址 ----
let oneApi='https://api.xygeng.cn/one'

// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	let getOneApi = (params = {}) => vm.$u.http.get(oneApi,params);
	vm.$u.api = {
		getOneApi
	};
}

export default {
	install
}