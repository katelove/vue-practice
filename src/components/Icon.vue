<template lang="">
  <img :src="image" class="iconSize" @click="$emit('click')" />
</template>
<script>
export default {
  name: "Icon",
  props: {
    image: {
      type: String,
    },
  },
};
</script>
<style scoped>
.iconSize {
  width: 36px;
  height: 36px;
  color: white;
  background-color: rgb(56, 121, 13);
}
</style>
