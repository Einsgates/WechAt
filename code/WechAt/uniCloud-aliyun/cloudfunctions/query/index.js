'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '34.170.230.181',
  user: 'root',
  password: 'sAcM1SUsDg[{-E',
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
		console.log(error)
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}

exports.main = async (event, context) => {
	// connect to the database
	connection.connect();

	// execute a query on the database
	let res = await query(event.sentence, event.arguments); 

	// close the connection
	connection.end();

	// return the result of the query to the caller of the function
	return res;
};
