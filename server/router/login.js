/**
 * 登录注册模块
 * 路由注册: express.Router()
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
import expressJoi from '@escook/express-joi'
import { accountLimit, passwordLimit } from '../limit/login.js'

// 登录路由
router.post('/login', expressJoi(accountLimit, passwordLimit), login)
// 注册路由
router.post('/register', expressJoi(accountLimit, passwordLimit), register)

export default router 