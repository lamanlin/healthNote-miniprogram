<template>
	<view class="uni-container">
		<uni-forms ref="ruleFormRef" :rules="rules" :value="formData" border :label-width="80">
			<uni-forms-item name="suger" label="血糖值" required>
				<uni-easyinput placeholder="输入血糖值" type="digit" trim="all" v-model="formData.suger" :maxlength="8" />
			</uni-forms-item>
			<uni-forms-item name="date" label="日期时间">
				<uni-datetime-picker type="datetime" return-type="timestamp" v-model="formData.datetimesingle"
					:clear-icon="false" />
			</uni-forms-item>
			<uni-forms-item name="timeRange" label="检测时段">
				<uni-data-select v-model="formData.timeRange" :localdata="range"></uni-data-select>
			</uni-forms-item>
			<uni-forms-item name="comment" label="备注">
				<uni-easyinput type="textarea" autoHeight v-model="formData.comment" placeholder="请输入内容">
				</uni-easyinput>
			</uni-forms-item>
			<view class="uni-button-group">
				<button type="primary" class="uni-button" @click="submit">提交</button>
			</view>
		</uni-forms>
	</view>
</template>

<script setup>
	import {
		reactive,
		onMounted,
		ref
	} from 'vue'
	const ruleFormRef = ref(null)
	const formData = reactive({
		suger: '',
		low: '',
		datetimesingle: Date.parse(new Date()),
		timeRange: '',
		comment: ''
	})

	const range = [{
			value: 0,
			text: "午餐前"
		},
		{
			value: 1,
			text: "午餐后"
		},
		{
			value: 2,
			text: "晚餐前"
		},
		{
			value: 3,
			text: "晚餐前"
		},
	]

	const rules = {
		suger: {
			rules: [{
				required: true,
				errorMessage: "输入血糖值"
			}]
		}
	}

	onMounted(() => {
		// getDate()
	})

	function submit(ref) {
		ruleFormRef.value.validate(valid => {
			if (valid) {
				console.log(1);
			} else {
				console.log(2);
			}
		})
	}
</script>

<style lang="scss" scoped>
	.uni-container {
		padding: 15px;
		height: 100vh;
	}

	.uni-button-group {
		margin-top: 50px;
		display: flex;
		justify-content: center;
	}

	.uni-button {
		width: 100%;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
		line-height: 1;
		margin: 0;
	}
</style>
