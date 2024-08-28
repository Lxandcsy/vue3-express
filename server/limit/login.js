/**
 * @escook/express-joi
 * 用于验证表单数据
 * 安装：npm i @escook/express-joi
 * 使用：在路由处理函数之前，通过中间件函数来对数据进行验证
 * 1. 导入验证规则对象
 * 2. 定义路由处理函数
 * 3. 将路由处理函数注册到路由规则中
 * 4. 在路由处理函数之前，使用中间件函数来对数据进行验证
 * 5. 在路由处理函数中，通过 req.body 获取用户提交的表单数据
 * 6. 在路由处理函数中，通过 req.app.get('xxx') 获取配置信息
 */

// string() ： 字符串类型
// alphanum() ： 字母数字类型 a-z A-Z 0-9
// pattern() ： 正则表达式
// min() ： 最小长度
// max() ： 最大长度
// required() ： 必填项

import joi from 'joi'
// 对账号进行验证
export const accountLimit = joi.string().alphanum().min(3).max(10).required()
// 对密码进行验证
export const passwordLimit = joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(6).max(12).required()




