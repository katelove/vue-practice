<template>
  <!-- <BlogPost title="Hello Vue!"></BlogPost> -->
  <div>
    <BlogPost
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    >
    </BlogPost>
  </div>
</template>

<script>
import BlogPost from "@/views/Basic/BlogPost.vue";
export default {
  name: "PropView",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "My journey with Vue",
        },
        {
          id: 2,
          title: "Blogging with Vue",
        },
        {
          id: 3,
          title: "Why Vue is so fun",
        },
      ],
    };
  },
  components: {
    BlogPost,
  },
};
</script>
