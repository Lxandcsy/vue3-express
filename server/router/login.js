/**
 * 登录注册模块
 * 路由注册
 * 方法：post,get,put,delete......
 * 路由：'/api'
 * 请求参数：**
 */


// 导入express框架
import express from 'express'
// 使用express框架创建路由对象
const router = express.Router()
// 导入login的路由处理模块
import { login, register } from '../router_handle/login.js'
// 登录路由
router.post('/login', login)
// 注册路由
router.post('/register', register)

export default router 