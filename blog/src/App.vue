<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  
  <!-- <HOME :message="msg" /> -->
  <router-link to="/home">Home</router-link>
    <router-link to="/asd/ambapika">ASD</router-link>
    <!-- <a href="./components/Asd.vue">hjh</a> -->
  <router-view></router-view>
  <span>app.vue page</span>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import HOME from './components/home.vue'
export default {
  name: 'App',
  // components: {
  //  // HelloWorld,
  //   HOME
  // },
  data(){
    return{
      msg:"ghdasghds"
    }
  }
}
</script>

<style lang="scss">
// @import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
