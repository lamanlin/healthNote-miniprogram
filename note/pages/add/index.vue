<template>
	<view class="uni-container add-box">
		<view v-for="item in itemList" :key="item._id" class="uni-radius add-item" :class="item.bgColor"
			@click="goPage(item.pageLink)">
			<image :src="item.imgSrc"></image>
			{{item.title}}
		</view>
		<view class="uni-radius add-item add uni-success-light-bg">
			<image src="../../static/add.png"></image>
			新增自定义项目
		</view>
	</view>
</template>

<script setup>
	import request from '../../common/request.js'
	import {
		reactive,
		onMounted,
		ref,
	} from 'vue'

	const itemList = reactive([{
			_id: 0,
			title: '新增血压',
			imgSrc: '../../static/press.png',
			bgColor: 'uni-primary-disable-bg',
			pageLink: './addPress'
		},
		{
			_id: 1,
			title: '新增血糖',
			imgSrc: '../../static/suger.png',
			bgColor: 'uni-error-disable-bg',
			pageLink: './addPress'
		}
	])

	onMounted(() => {

	})

	function goPage(link) {
		uni.navigateTo({
			url: link
		})
	}
</script>

<style lang="scss" scoped>
	.uni-container {
		padding: 15px;
		height: 100vh;
		color: #fff;
	}

	.add-box {
		display: flex;
		flex-direction: column;

		.add-item {
			width: 100%;
			height: 160rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 40rpx;
			font-weight: bold;
			margin-bottom: 20rpx;

			image {
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>
