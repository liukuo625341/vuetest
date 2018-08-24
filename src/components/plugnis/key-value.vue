<template>
	<div id="laji">
		<div>原对象:{{id}}</div>
		<div class="key-value">拆分对象后数组:{{array1}}</div>
		<div class="value">
			<div v-for="item in array1" :key="item.key" >
			<div class="div_inline">{{item.key }}:</div><el-input v-model="item.value" class="input"></el-input>
			</div>
		</div>
	<div class="key-value">修改后的数组:{{array1}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
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
		mounted(){
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
		
		}
	}
</script>

<style lang="less">
	#laji {
		.key-value {
			color: blue;
		}
		.value{
			width: 220px;
			display: inline-block;
		}
		.div_inline{
			display: inline-block;
		}
		.input{
			display: inline-block;
		}
		
	}
</style>