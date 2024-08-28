/**
 * npm install mysql
 * 创建数据库连接
 * host: 数据库地址
 * user: 数据库用户名
 * password: 数据库密码
 * database: 数据库名称
 */

// 导入mysql数据库
import mysql from 'mysql2'
// 创建与数据库的连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vue_express'
})

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database successfully!');
    // 释放连接回连接池
    connection.release();
});

export default db