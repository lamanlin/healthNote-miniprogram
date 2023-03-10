'use strict';
const {
	verifyToken
} = require('../common/wx-common')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	const dbCmd = db.command
	const action = event.action
	const payload = verifyToken(event.token) || null
	let res
	if (action === 'get') {
		res = await db.collection('dataList').get()
	}
	//返回数据给客户端
	return res.data
};
