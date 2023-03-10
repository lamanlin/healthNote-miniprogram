<template>
	<view class="page home-page">
		<template v-if="state.dataList.length>0">
			<timelineItem v-for="item in state.dataList" :key="item._id" :index="item._id"
				:leftTime='formatTime(item.data.create_time)'>
				<view class="tripItem">
					<view class="left">
						<view class="title uni-radius">{{item.data_type}}</view>
						<view class="tips text-two-ellipsis"><text
								class="uni-base-color">备注：</text>{{item.data.comment}}
						</view>
					</view>
					<view class="right">
						<text class="number-box uni-radius">
							{{item.data.high}}
						</text>
						<uni-icons class="uni-ml-2" type="forward" color="#18bc37"></uni-icons>
					</view>
				</view>
			</timelineItem>
		</template>
		<template v-else>
			<emty @onClick="goPage()"></emty>
		</template>
	</view>
</template>
<script setup>
	import request from '../../common/request.js'
	import {
		formatTime
	} from '../../common/util.js'
	import {
		reactive,
		onMounted,
		toRaw
	} from 'vue'
	import {
		onShow
	} from "@dcloudio/uni-app";
	import emty from '../../components/emty/index.vue'
	import timelineItem from '../../components/timeline/timelineItem.vue'
	const state = reactive({
		dataList: []
	})
	onShow(() => {
		request({
			name: 'dataList',
			data: {
				action: 'get'
			},
			success: (res) => {
				console.log(res.result)
				res.result.forEach(item => {
					item.data.create_time = formatTime(item?.data?.create_time)
				})
				state.dataList.push(...res.result)
			}
		})
	})

	function goPage() {
		uni.redirectTo({
			url: '/pages/add/index'
		})
	}
</script>

<style scoped lang="scss">
	.tripItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 180rpx;
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		background: #fff;
		box-shadow: $uni-shadow-base;
		border-radius: 10px;
		margin-bottom: 10rpx;

		.left {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			min-width: 55%;
		}

		.right {
			display: flex;
			align-items: center;

			.number-box {
				box-sizing: border-box;
				padding: 0 10rpx;
				min-width: 100rpx;
				max-width: 180rpx;
				height: 100rpx;
				display: flex;
				align-items: center;
				text-align: center;
				font-size: 36rpx;
				font-weight: 500;
				background: $uni-success;
				color: #fff;
			}

		}

		.title {
			width: 130rpx;
			font-size: 28rpx;
			font-weight: 500;
			display: inline-block;
			box-sizing: border-box;
			padding: 5rpx 20rpx;
			background: $uni-success;
			color: #fff;
		}

		.text-two-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box; //作为弹性伸缩盒子模型显示。
			-webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
			-webkit-line-clamp: 2; //显示的行
		}

		.tips {
			font-size: 22rpx;
			height: 68rpx;
			font-weight: 400;
			color: $uni-extra-color;
			margin-top: 20rpx;
		}
	}

	.home-page {
		box-sizing: border-box;
		padding: 0 10px;
		margin-top: 10px;
	}

	.box-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: $uni-shadow-lg;
		height: 116px;
		font-size: 32px;
		color: #fff;
	}
</style>
