<template>
	<view class="uni-container">
		<uni-forms ref="ruleFormRef" :rules="rules" :value="formData" border :label-width="80">
			<uni-forms-item name="platelets" label="血小板" required>
				<uni-easyinput placeholder="输入血小板总数量" type="digit" trim="all" v-model="formData.platelets"
					:maxlength="8" />
			</uni-forms-item>
			<uni-forms-item name="leukocyte" label="白细胞" required>
				<uni-easyinput placeholder="输入白细胞计数" type="digit" trim="all" v-model="formData.leukocyte"
					:maxlength="8" />
			</uni-forms-item>
			<uni-forms-item name="cea" label="CEA(癌胚抗原)" required>
				<uni-easyinput placeholder="输入癌胚抗原" type="digit" trim="all" v-model="formData.cea" :maxlength="8" />
			</uni-forms-item>
			<uni-forms-item name="ca199" label="CA199" required>
				<uni-easyinput placeholder="输入糖类抗原" type="digit" trim="all" v-model="formData.ca199" :maxlength="8" />
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
		platelets: '',
		leukocyte: '',
		cea: '',
		ca199: '',
		datetimesingle: Date.parse(new Date()),
		comment: ''
	})

	const rules = {
		platelets: {
			rules: [{
				required: true,
				errorMessage: "输入血小板"
			}]
		},
		leukocyte: {
			rules: [{
				required: true,
				errorMessage: "输入白细胞"
			}]
		},
		cea: {
			rules: [{
				required: true,
				errorMessage: "输入cea"
			}]
		},
		ca199: {
			rules: [{
				required: true,
				errorMessage: "输入ca199"
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
