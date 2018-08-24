<template>
	<div>
		<h3>number 的方法</h3>
		<h4>1.Number.isFinite()和Number.isNaN() </h4>
		<div id="">
			Number.isFinite()检查一个数值是否为有限的   Number.isNaN()检查一个数值是否为NaN
			<br />
			<input  v-model="numberFinite" />  <button @click="handleNumberFinite">检测numberFinite</button><br />
			<input  v-model="numberNaN" />
			<button @click="handleNumberNaN">检测numberNaN</button>(数据暂时不知道怎么转换  v-model默认为了字符串)
			<div>{{isTrue}}</div>
		
		</div>
	</div>
</template>

<script>
export default {
  name: "nnnn",
  data() {
    return {
      numberFinite: 0,
      numberNaN: NaN,
      isTrue: ""
    };
  },
  methods: {
    handleNumberFinite() {
      this.isTrue = Number.isFinite(Number(this.numberFinite));
    },
    handleNumberNaN() {
      console.log(typeof Number(this.numberFinite));
      this.isTrue = isNaN(this.numberFinite);
    }
  }
};
</script>

<style>

</style>