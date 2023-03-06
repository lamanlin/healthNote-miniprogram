<template>
	<view class="page home-page">
		<template v-if="dataList.length===0">
			<timelineItem v-for="item in dataList" :index="item.id" :leftTime='item.date'>
				<view class="tripItem">
					<view class="left">
						<view class="title uni-radius">{{item.text}}</view>
						<view class="tips text-two-ellipsis"><text class="uni-base-color">备注：</text>{{item.remark}}</view>
					</view>
					<view class="right">
						<text class="number-box uni-radius">
							{{item.data}}
						</text>
						<uni-icons class="uni-ml-2" type="forward" color="#18bc37"></uni-icons>
					</view>
				</view>
			</timelineItem>
		</template>
		<template v-else>
			<emty></emty>
		</template>
		<uni-fab :pattern="pattern" :content="addBtnContent" horizontal="right" vertical="bottom" @trigger="trigger">
		</uni-fab>
	</view>
</template>

<script setup>
	import emty from '../../components/emty/index.vue'
	import timeline from '../../components/chenbin-timeline/timeLine.vue'
	import timelineItem from '../../components/chenbin-timeline/timelineItem.vue'
	const pattern = {
		color: '#3a3a3a',
		backgroundColor: '#fff',
		selectedColor: '#18bc37',
		buttonColor: '#18bc37',
		iconColor: '#fff'
	}
	const addBtnContent = [{
			iconPath: '../../static/blood.png',
			selectedIconPath: '../../static/blood1.png',
			text: '血常规',
			active: false
		},
		{
			iconPath: '../../static/press.png',
			selectedIconPath: '../../static/press.png',
			text: '血压',
			active: false
		},
		{
			iconPath: '../../static/suger.png',
			selectedIconPath: '../../static/suger.png',
			text: '血糖',
			active: false
		},
	]
	const list = [{
			text: '血压',
			color: 'uni-success-disable-bg'
		},
		{
			text: '血糖',
			color: 'uni-error-disable-bg'
		},
		{
			text: '血常规',
			color: 'uni-info-disable-bg'
		},
	]
	const dataList = [{
		id: 0,
		type: 0,
		text: '血常规',
		date: '2023-03-05 10:22',
		remark: 'fg地方好地dfhdfhdffh三个复旦复华方好',
		data: '133333333823.55'
	}]

	function trigger(val) {
		console.log(val);
		let url = ''
		switch (val.index) {
			case 1:
				url = './addPress'
				break;
			case 2:
				url = './addSuger'
				break;
			case 0:
				url = './addBlood'
				break;
			default:
				break;
		}
		uni.navigateTo({
			url
		})
	}

	function goPage(text) {
		let url = ''
		switch (text) {
			case '血压':
				url = './addPress'
				break;
			case '血糖':
				url = './addSuger'
				break;
			case '血常规':
				url = './addBlood'
				break;
			default:
				break;
		}
		uni.navigateTo({
			url
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
