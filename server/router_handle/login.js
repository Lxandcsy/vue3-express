/**
 * 逻辑实现模块
 * 登录\注册
 * 中间件: bcrypt.js, jsonwebtoken, jwt_config
 * 导出,供路由注册时调用
 */

// 导入数据库
import db from '../db/db.js'
// 导入加密中间件bcrypt.js
import bcrypt from 'bcryptjs'
// 导入jwt用于生成token
import jwt from 'jsonwebtoken'
// 导入jwt配置文件，用于加密和解密
import jwtConfig from '../jwt_config/jwt.js'

/**
 * 注册模块
 * 第一步判断前端数据是否合法
 * 第二步判断用户是否存在
 * 使用加密中间件bcrypt.js对密码进行加密
 * 第四步，将用户信息存入数据库
 */
export const register = (req, res) => {
    const reginfo = req.body
    if (!reginfo.account || !reginfo.password) {
        return res.send({
            status: 500,
            msg: '用户名或密码不能为空'
        })
    }
    const querySql = 'select * from users where account = ?'
    // 第一个参数时执行语句，第二个参数是查询条件，第三个参数是回调函数
    db.query(querySql, reginfo.account, (err, results) => {
        if (results.length > 0) {
            return res.send({
                status: 500,
                message: '账号已存在'
            })
        }
        // bcrypt.hashSync()第一个参数是要加密的密码，第二个参数是加密的长度，默认是10
        reginfo.password = bcrypt.hashSync(reginfo.password, 10)
        const insertSql = "insert into users set ?"
        // 默认参数
        const identity = '用户'
        const create_time = new Date()
        const status = 0
        db.query(insertSql, {
            account: reginfo.account,
            password: reginfo.password,
            identity,
            create_time,
            // 初始化未冻结的用户状态
            status
        }, (err, results) => {
            // 如果插入的行数不为一，则说明插入异常
            if (results.affectedRows !== 1) {
                return res.send({
                    status: 500,
                    msg: '注册失败'
                })
            } else {
                return res.send({
                    status: 200,
                    msg: '注册成功'
                })
            }
        })
    })
}


/**
 * 登录模块逻辑
 * 第一步，查看数据表中是否有该用户
 * 第二步，查询结果不为空，说明用户存在，接下来判断密码是否正确
 * 第三步，使用bcrypt.compareSync()方法进行密码比对，进行解密
 * 第四步，对帐号是否冻结做判断
 * 第五步，生成返回给前端的token
 */
export const login = (req, res) => {
    const loginInfo = req.body
    const querySql = 'select * from users where account = ?'
    db.query(querySql, loginInfo.account, (err, results) => {
        // 执行sql语句时发生错误，一般是数据库断开的情况
        if (err) return res.cc(err)
        // 查询结果为空，说明用户不存在
        if (results.length === 0) return res.cc('用户不存在')
        const compareResult = bcrypt.compareSync(loginInfo.password, results[0].password)
        if (!compareResult) return res.cc('密码错误')
        if (results[0].status === 1) return res.cc('该账号已被冻结，请联系管理员')
        // 剔除加密后的密码, 头像, 创建时间, 更新时间
        const user = {
            ...results[0],
            password: '',
            imageUrl: '',
            create_time: '',
            update_time: ''
        }
        // 设置token有效期
        const tokenStr = jwt.sign(user, jwtConfig.jwtSecretKey, {
            expiresIn: '1h'
        })
        res.send({
            results: results[0],
            status: 200,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
    })
}