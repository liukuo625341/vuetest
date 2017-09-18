<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/plugins/timeLine">to plugins</router-link>
    <br />
    <router-link to="/es6/number">to es6</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'welcome to vuetest'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
