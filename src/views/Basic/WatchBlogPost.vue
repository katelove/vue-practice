<template>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post.title"
       v-on:enlarge-text="onEnlargeText"
    >
    </BlogPost>
  </div>


</template>

<script>
import BlogPost from "@/views/Basic/BlogPost.vue";
export default {
  name: "WatchBlogPost",
  data() {
    return {
      postFontSize: 2,
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
  methods: {
    onEnlargeText: function(enlargeAmount) {
      console.log("enlargeAmount:" + enlargeAmount);
      this.postFontSize += enlargeAmount;
    },
  },
  components: {
    BlogPost,
  },
};
</script>
