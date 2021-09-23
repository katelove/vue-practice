<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Register/> -->
    <!-- <PersonFather/> -->
    <!-- <Event/> -->
    <!-- <Example/> -->
    <BlogPostDemo/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Register from '@/views/Register/Register.vue'
// import PersonFather from '@/views/Person/PersonFather.vue'
// import Event from '@/views/Method/Event.vue'
// import Example from '@/views/ClassStyle/Example.vue'
import BlogPostDemo from '@/views/Basic/BlogPostDemo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    // Register
    // PersonFather,
    // Event
    // Example
    BlogPostDemo
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
