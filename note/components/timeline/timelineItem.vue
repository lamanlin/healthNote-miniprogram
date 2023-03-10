<template>
	<view class="timelineItem">
		<view class="timeItem">
			<view class="leftTime">
				{{leftTime}}
			</view>
			<view class="line">
				<view class="out" :style="{background: color == '' ? '' : color}">
					<view class="inner" :style="{background: color == '' ? '' : color}"></view>
				</view>
			</view>
			<view class="rightContent">
				<slot></slot>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			leftTime: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped lang="scss">
	.timelineItem {
		.timeItem {
			display: flex;

			.leftTime {
				width: 135rpx;
				padding: 0 10rpx;
				font-size: 22rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: $uni-main-color;
				margin-right: 10rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}

			.line {
				width: 1px;
				background: $uni-border-4;
				position: relative;

				.out {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					justify-content: center;
					align-items: center;
					width: 28rpx;
					height: 28rpx;
					background: rgba(24,188,55, 0.6);
					border-radius: 50%;

					.inner {
						width: 18rpx;
						height: 18rpx;
						background: rgba(24,188,55, 1);
						border-radius: 50%;
					}
				}
			}

			.rightContent {
				flex: 1;
				padding: 0 10rpx 40rpx;
				margin-left: 20rpx;
				min-height: 50rpx;
			}
		}
	}
</style>
