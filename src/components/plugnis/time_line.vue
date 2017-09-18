<template>
	<div class="time_line">
		<div v-for="(item,index) in data" :key="index" class="time">
			<div class="line">

			</div>
			<div class="content">
				<div>{{item.key}}{{item.value}}</div>

			</div>

		</div>
		<div v-for="(item,key,index) in id">{{key}}
			<input type="" name=""  v-model="index" />
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
				id: {
					name: '1',
					list: '2',
					value: '3'
				},
				array: [],
				array1: [],
				array2: []
			}
		},
		mounted() {
			this.array = Object.keys(this.id)
			this.array2 = Object.values(this.id)
			this.array1 = this.array.map(res => {
				return {}
			}).map((res, index) => {
				return res = {
					key: this.array[index],
					value: this.array2[index]
				}
			})
			console.log(this.array1)
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