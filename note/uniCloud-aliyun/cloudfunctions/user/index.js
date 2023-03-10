'use strict';
// const appid = 'wx4c58ef3cea054e5c'
// const secret = 'fe1f8988c222b94c51a2c3833e044a8c'
const {
	appId,
	appSecret,
	getToken
} = require('../common/wx-common')
const db = uniCloud.database();
// 创建user数据表实例
const user = db.collection('user');
exports.main = async (event, context) => {
	console.log(event);
	const {
		code,
		avatarUrl,
		gender,
		nickName
	} = event
	const URL =
		`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
	const requestOptions = {
		method: 'GET',
		dataType: 'json'
	}
	const res = await uniCloud.httpclient.request(URL, requestOptions)
	const {
		data: {
			openid
		}
	} = res
	const countRes = await user.where({
		openid
	}).count()
	const token = getToken(openid);
	console.log(token);
	if (countRes.total !== 1) {
		// 往user数据表里面添加数据,添加完数据之后,云数据库的user表里面就有相关的数据了
		user.add({
			avatarUrl,
			gender,
			nickName
		})
	}
	//返回数据给客户端
	return {
		avatarUrl,
		gender,
		nickName,
		token
	}
};
