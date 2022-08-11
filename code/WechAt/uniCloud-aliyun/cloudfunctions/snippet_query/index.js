'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '34.172.29.192',
  user: 'root',
  password: 'kC1\JG0>%wey,k.Q@5-dy<q|>Ygk,q',
  database: 'wechat',
  port: 3306
});
/**
 * 封装mysql执行操作为Promise
 * 
 * @param {Object} sql
 * @param {Object} values
 */
const query = function(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results, fields) => {
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

exports.main = async (event, context) => {
	
	//连接数据库
	connection.connect()

	// switch (event.action) {
	// 	case 'get':
	// 		return get(event.id)
	// 	case 'add':
	// 		return add(event.data)
	// 	case 'update':
	// 		return update(event.id, event.data)
	// 	case 'delete':
	// 		return delete(event.id)
	// }

	// event.sqlsentence


	// // 新增记录
	// let addRes = await query('insert into users set ?', {
	//   name: '丁元英',
	//   age: 40
	// })
	// console.log("新增记录：", addRes)

	// // 删除记录
	// let delRes = await query('delete from users where name=? ', ['韩楚风'])
	// console.log("删除记录：", delRes)

	// //修改记录
	// let updateRes = await query('update users set age=? where name=? ', [50, '丁元英'])
	// console.log("修改记录：", updateRes)

	//查询记录
	let queryRes = 1
	console.log("查询记录：", queryRes)
	
	

	//关闭连接 
	connection.end();

	//返回数据给客户端 
	return event
};
