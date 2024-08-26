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
// 设置默认端口
const port = 3000
// 监听端口
app.listen(port, () => {
    console.log(`running on port http://localhost:${port}`);
})

// 导入路由
import loginRouter from './router/login.js'
app.use('/api', loginRouter)

