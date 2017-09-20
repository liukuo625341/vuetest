<template>
	<div class="time_line">
		<div v-for="(item,index) in data" :key="index" class="time">
			<div class="line">

			</div>
			<div class="content">
				<div>{{item.key}}{{item.value}}</div>

			</div>

		</div>
		
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				data: [{
						key: 'EZ',
						value: '伊泽瑞尔'
					},
					{
						key: 'GreeFos',
						value: '格雷福斯'
					}, {
						key: 'LeeSin',
						value: '李青'
					}, {
						key: 'sona',
						value: '娑娜'
					}
				],
				
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="less">
	.time_line {
		overflow: hidden;
		.time {
			position: relative;
			.line {
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background-color: #ccc;
				display: inline-block;
				z-index: 1;
				&::after {
					width: 1px;
					content: ' ';
					position: absolute;
					left: 5px;
					right: 10px;
					top: 35px;
					height: 35px;
					background-color: #ccc;
				}
			}
			.line:last-child {
				&::after {
					content: none;
				}
			}
			.content {
				margin-top: 20px;
				display: inline-block;
			}
		}
	}
</style>