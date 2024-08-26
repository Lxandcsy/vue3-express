// 注册模块逻辑
export const register = (req, res) => {
    res.send('注册成功')
}

// 登录模块逻辑
export const login = (req, res) => {
    // res.send('登录成功')
    // 第一步判断前端数据是否合法
    const reginfo = req.body
    if (!reginfo.account || !reginfo.password) {
        return res.send({
            status: 500,
            msg: '用户名或密码不能为空'
        })
    } else {
        res.send({
            status: 200,
            msg: '登录成功'
        })
    }
}