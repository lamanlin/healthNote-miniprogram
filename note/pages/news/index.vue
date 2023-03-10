<template>
	<uni-list>
		<!-- 水平排列，左图右文 -->
		<uni-list-item v-for="item in list" :key="item.id" :title="item.title" :note="item.ctime" showArrow>
			<template v-slot:header>
				<view class="uni-thumb">
					<image
						src="http://cms-bucket.ws.126.net/2021/0203/665e3bf5p00qnyb26007jc000dw008cc.png?imageView&thumbnail=150y100"
						mode="aspectFit"></image>
				</view>
			</template>
		</uni-list-item>
	</uni-list>
</template>

<script setup>
	const list = [{
			"id": "bd47e875582d22929e7272a1f0e0014e",
			"ctime": "2021-02-04 05:00",
			"title": "别大意！这些症状可能是癌症信号",
			"description": "又到水痘高发季。这是一种由水痘-带状疱疹病毒初次感染引起的急性传染病，任何年龄人群均可感染水痘-带状疱疹病毒，以婴幼儿、学龄前和学龄期儿童发病较多，6个月以下的婴儿较少见。",
			"source": "网易健康",
			"picUrl": "http://cms-bucket.ws.126.net/2021/0203/665e3bf5p00qnyb26007jc000dw008cc.png?imageView&thumbnail=150y100",
			"url": "https://jiankang.163.com/21/0204/04/G1VDBEO60038804U.html"
		},
		{
			"id": "2b96db130795d6692d71766fa82291b2",
			"ctime": "2021-02-03 08:00",
			"title": "多种食品涉疫，“物传人”会存在吗？",
			"description": "网易健康",
			"source": "网易健康",
			"picUrl": "http://cms-bucket.ws.126.net/2021/0203/909043b6p00qnxe2b003lc0009c0070c.png?imageView&thumbnail=150y100",
			"url": "https://jiankang.163.com/21/0203/07/G1T6NMC50038804U.html"
		},
		{
			"id": "d5941edbde8e489f2533500a49ffd5e8",
			"ctime": "2021-02-02 16:00",
			"title": "新冠疫苗到底安不安全？有副作用么？",
			"description": "网易健康",
			"source": "网易健康",
			"picUrl": "http://cms-bucket.ws.126.net/2021/0202/cff6a66dp00qnw4dj00e4c0009c0070c.png?imageView&thumbnail=150y100",
			"url": "https://jiankang.163.com/21/0201/19/G1P91K7H00388AD5.html"
		}
	]
</script>

<style scoped lang="scss">
	.uni-thumb {
		width: 150rpx;
		height: 100rpx;

		image {
			width: 100%;
			height: 100%;
		}
	}

	@import '@/common/uni-ui.scss';

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	.content {
		width: 100%;
		display: flex;
	}

	.list-picture {
		width: 100%;
		height: 145px;
	}

	.thumb-image {
		width: 100%;
		height: 100%;
	}

	.ellipsis {
		display: flex;
		overflow: hidden;
	}

	.uni-ellipsis-1 {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.uni-ellipsis-2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
