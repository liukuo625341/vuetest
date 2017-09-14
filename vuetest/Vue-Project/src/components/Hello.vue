<template>
  <div class="hello">
  <div v-for="(item,index) in 10" :key="item" class="step"><div class="line1">{{index}}{{item}}</div></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.step{
		color: #5e5f5d;
	}
	 .line1:after {
      content: '';
      position: absolute;
      top: 30%;
      left: 24%;
      background: #eff2f7;
      width: 49px;
      height: 2px;
    }

</style>
