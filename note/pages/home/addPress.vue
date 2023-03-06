<template>
	<view class="uni-container">
		<uni-forms ref="ruleFormRef" :rules="rules" :value="formData" border :label-width="80">
			<uni-forms-item name="high" label="高压值" required>
				<uni-easyinput placeholder="收缩压(高压)" type="digit" trim="all" v-model="formData.high" :maxlength="8" />
			</uni-forms-item>
			<uni-forms-item name="low" label="低压值" required>
				<uni-easyinput placeholder="舒张压(低压)" type="digit" trim="all" v-model="formData.low" :maxlength="8" />
			</uni-forms-item>
			<uni-forms-item name="date" label="日期时间">
				<uni-datetime-picker type="datetime" return-type="timestamp" v-model="formData.datetimesingle"
					:clear-icon="false" />
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
		high: '',
		low: '',
		datetimesingle: Date.parse(new Date()),
		comment: ''
	})

	const rules = {
		high: {
			rules: [{
				required: true,
				errorMessage: "输入高压值"
			}]
		},
		low: {
			rules: [{
				required: true,
				errorMessage: "输入低压值"
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
