<template>
  <div>
    <router-link to="/about">about</router-link>
    <span>hello welcome to asd page</span>
    <router-view></router-view>
  </div>
</template>
<script>
// import {useRouter}from 'vue-router'
export default {
  name: "ASD",
  mounted() {
    // const route=useRouter();
    console.log(this.$route);
  },
};
</script>
