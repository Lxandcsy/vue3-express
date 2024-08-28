// 导入express，全局挂载
import express from 'express'
const app = express()
// 导入cors，解决跨域问题，全局挂载
import cors from 'cors'
app.use(cors())
// 导入bodyParser，解析请求体，全局挂载
import bodyParser from 'body-parser'
// application/josn
app.use(bodyParser.json())
// application/x-www-form-urlencoded
// 当extended为false时，只会解析字符串或数组，true时，可以解析任意类型
app.use(bodyParser.urlencoded({ extended: false }))

// 进行错误捕捉
app.use((req, res, next) => {
    // status: 500 表示错误，200表示成功
    res.cc = (err, status = 500) => {
        res.send({
            status,
            // 判断err是否为Error对象，如果是，返回err.message，否则返回err
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 导入jwt
import jwtConfig from './jwt_config/jwt.js'
import { expressjwt as jwt } from 'express-jwt'
app.use(jwt({
    secret: jwtConfig.jwtSecretKey,
    // 加密算法
    algorithms: ['HS256']
}).unless({
    // 排除登录之前的接口
    path: [/^\/api\//]
}))

// 设置默认端口
const port = 3000
// 监听端口
app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`);
})

// 导入路由
import loginRouter from './router/login.js'
app.use('/api', loginRouter)

