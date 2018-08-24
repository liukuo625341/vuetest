<template>
  <div id="app">
	<keep-alive include="hello"><router-view v-if="$route.meta.keepAlive"></router-view></keep-alive>
	<router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    console.log(this.$options.name);
  },
  activated() {
    console.log(3);
  },
  deactivated() {
    console.log(4);
  }
};
</script>

<style>
@import "./assets/index.less";
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  height: 100%;
}
</style>
