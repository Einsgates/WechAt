/**
 * @description 全局配置
 */
const deBug = false; // true-测试环境 false-生产环境

// const accountInfo = uni.getAccountInfoSync();
// const appid = accountInfo.miniProgram.appId;

export default{
	// appid: appid, // 当前微信小程序appid
	// version: '1.0.0', // 版本号
	Host:deBug?'http://127.0.0.1:5000':'http://xxx.xxx.xxx.xxx:xxxx'//服务器地址,可放入相关服务器地址
}