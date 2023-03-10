let jwt = require('jsonwebtoken');

const appId = 'wx4c58ef3cea054e5c'
const appSecret = 'fe1f8988c222b94c51a2c3833e044a8c'

function getToken(openid) {
	return jwt.sign({
		openid: openid
	}, appSecret);
}

function verifyToken(token) {
	console.log(token);
	return jwt.verify(token, appSecret);
}


module.exports = {
	getToken: getToken,
	appId: appId,
	appSecret: appSecret,
	verifyToken: verifyToken,
}
