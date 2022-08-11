const install = (Vue,vm)=>{
	//配置全局项，可更改，详情看uview官网
	uni.$u.http.setConfig((config)=>{
		config.header = {
			'Content-type': 'application/x-www-form-urlencoded'
		}
		return config;
	},config=>{
		return Promise.reject(config)
	})
	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { 
		// 可使用async await 做异步操作
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    // config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		// if(config?.custom?.auth) {
		// 	// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
		// 	config.header.token = vm.$store.state.userInfo.token
		// }
		config.header.Token = vm.vuex_token;
		// console.log('config:', config)
		// if(config.url == '/get_update'){
		// 	config.showLoading = false;
		// }
	    return config 
	}, config => { 
		// 可使用async await 做异步操作
	    return Promise.reject(config)
	})
	//响应拦截
	uni.$u.http.interceptors.response.use((res) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		// if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
		//    	return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
		// if (response.config.custom.verification) { // 演示自定义参数的作用
		//   	return response.data
		// }
		return res.data
	}, (err) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		if(err.statusCode==500){
			vm.$u.toast(err.statusCode + '-服务器出错～')
		}
		else if(err.statusCode==404){
			vm.$u.toast(err.statusCode + '-访问地址有误～', 2000)
		}
		else{
			// setTimeout(()=>{
			// 	uni.reLaunch({
			// 		url:'../pages/login/login'
			// 	})
			// },2000)
		}
		return Promise.reject(err)
	})
}
export default {
	install
}