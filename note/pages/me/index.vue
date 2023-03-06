<template>
	<view><button open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button></view>
</template>

<script setup>
	function getUserInfo() {
		uni.showModal({
			title: '温馨提示',
			content: '亲，授权微信登录后才能正常使用小程序功能',
			success(res) {
				if (res.confirm) {
					uni.getUserProfile({
						desc: "注册用户信息使用",
						lang: "zh_CN",
						success: (res) => {
							console.log('res', res)
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									console.log('loginRes.authResult', loginRes);
									uniCloud.callFunction({
											name: 'user',
											data: {
												code: loginRes.code,
												avatarUrl: res.userInfo.avatarUrl,
												gender: res.userInfo.gender,
												nickName: res.userInfo.nickName
											}
										})
										.then(res => {});
								}
							});
						}
					})
				} else {
					uni.showToast({
						title: '您取消了授权',
						duration: 2000
					});
				}
			}
		})
	}
</script>

<style>
</style>
