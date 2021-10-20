<template lang="">
  <div>
    <h2>靜態傳遞</h2>
    <photo imgUrl="require('@/assets/pic/order_orange.png')"></photo>
    <h2>動態傳遞</h2>
    <photo :imgUrl="pic"></photo>
  </div>
</template>
<script>
import photo from "@/views/Props/photo.vue";

export default {
  name: "index",

  components: {
    photo,
  },
  data() {
    return {
      pic: require("@/assets/pic/order_orange.png"),
    };
  },
};
</script>
