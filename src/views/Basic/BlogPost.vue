<template>
  <!-- <h3>{{ title }}</h3>
<hr>
<h1>新增按鈕放大字</h1> -->
  <div class="blog-post">
    <h3>{{ post}}</h3>
    <button v-on:click="$emit('enlarge-text',0.1)">Enlarge Text</button>
    <!-- <div v-html="posts.content"></div> -->
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ["post"],
};
</script>
