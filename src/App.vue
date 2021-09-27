<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Register/> -->
    <!-- <PersonFather/> -->
    <!-- <Event/> -->
    <!-- <Example/> -->
    <!-- <WatchBlogPost/> -->
    <!-- <CustomDemo/> -->
    <TabDemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Register from '@/views/Register/Register.vue'
// import PersonFather from '@/views/Person/PersonFather.vue'
// import Event from '@/views/Method/Event.vue'
// import Example from '@/views/ClassStyle/Example.vue'
// import CustomDemo from '@/views/VModel/CustomDemo.vue'
// import BlogPostDemo from  "@/views/Watch/BlogPostDemo.vue";
// import AlertDemo from  "@/views/Alert/AlertDemo.vue"
// import BaseCheckDemo from  "@/views/VModel/BaseCheckDemo.vue"
import TabDemo from  "@/views/Dynamic/TabDemo.vue"
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Register
    // PersonFather,
    // Event
    // Example
    // WatchBlogPost
    // CustomDemo
    TabDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
