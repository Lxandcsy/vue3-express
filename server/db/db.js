// 导入mysql数据库
const mysql = require('mysql')
// 创建与数据库的连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vue3_express'
})
// 导入db
module.exports = db