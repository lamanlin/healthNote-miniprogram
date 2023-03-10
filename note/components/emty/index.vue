<template>
	<view class="emty-wrap">
		<img src="../../static/emty.png">
		<view class="uni-secondary-color">
			暂无数据，<text style="text-decoration: underline dotted;color:#dd6642" @click="onTap">请添加数据</text>
		</view>

	</view>
</template>

<script>
	export default {
		methods: {
			onTap() {
				this.$emit('onClick')
			}
		}
	}
</script>

<style scoped lang="scss">
	.emty-wrap {
		width: 100%;
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
