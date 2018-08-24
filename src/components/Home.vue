<template>
  <div class="hello">
	  <div class="heh">nihao </div>
    <h1>{{ msg }}</h1>
    <div class=" container">
      <div class="container_menu">
      <div v-for="item in routeMap.options.routes" :key="item.name">
   
        <div class="blue" @click="handleMenu(item)">{{item.name}}</div>
             <div v-if="item.menu">
        <div class="blue" v-for="menu in item.children" :key="menu.name" @click="handleGoTo(item,menu)" >{{menu.name}}</div>
        </div>
      </div>
      </div>
  <div>
    <router-view></router-view>
     </div>
     </div>
  </div>
</template>
<script>
import routeMap from "@/router";
export default {
  name: "hello",
  data() {
    return {
      msg: "welcome to vuetest",
      routeMap: routeMap
    };
  },
  activated() {
    console.log(123762318786312);
  },
  methods: {
    handleGoTo(item, menu) {
      this.$router.push({ path: item.path + "/" + menu.path });
    },
    handleMenu(item) {
      item.menu = item.menu == false ? true : false;
      console.log(item.isShow);
    }
    // handleAddSwitch (){
    //   this.routeMap.options.routes.map(item=>{
    //     item.isShow=true
    //     return item
    //   })

    //   console.log(this.routeMap.options.routes)
    // }
  },
  created() {
    // this.handleAddSwitch()
  },
  mounted() {
    console.log(this.routeMap.options.routes);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  .heh {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: black;
  }
  height: 100%;
  .blue {
    color: #20a0ff;
    cursor: pointer;
  }
  .container_menu {
    background: yellow;
    height: 100%;
  }
  h2 {
    font-weight: normal;
  }
  a {
    color: #42b983;
  }
  .container {
    height: 100%;
    display: flex;
  }
}
</style>
