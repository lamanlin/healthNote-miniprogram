'use strict';
const {
	verifyToken
} = require('../common/wx-common')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database()
	const action = event.action
	const payload = verifyToken(event.token) || null
	console.log('payload', payload)
	let res
	if (action === 'create') {
		res = await db.collection('press').add({
			user_id: payload.openid,
			high: event.high,
			low: event.low,
			create_time: event.create_time,
			comment: event.comment
		})
		await db.collection('dataList').add({
			user_id: payload.openid,
			data_type: '血常规',
			data: {
				high: event.high,
				low: event.low,
				create_time: event.create_time,
				comment: event.comment
			}
		})
		return res
	}
	//返回数据给客户端
	return res
};
