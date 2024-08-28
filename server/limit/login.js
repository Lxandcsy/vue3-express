/**
 * @escook/express-joi
 * 用于验证表单数据
 * 安装：npm install @escook/express-joi
 * 安装：npm install joi@17.4.0
 * 使用：在路由处理函数之前，通过中间件函数来对数据进行验证
 * 定义验证规则对象, 注册到路由中
 */

// string() ： 字符串类型
// alphanum() ： 字母数字类型 a-z A-Z 0-9
// pattern() ： 正则表达式
// min() ： 最小长度
// max() ： 最大长度
// required() ： 必填项

import joi from 'joi'
// 对账号进行验证
export const accountLimit = joi.string().alphanum().min(2).max(10).required()
// 对密码进行验证
export const passwordLimit = joi.string().pattern(/^(?![0-9]+$)[a-z0-9]{1,50}$/).min(3).max(12).required()




