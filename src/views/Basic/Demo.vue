<template>
  <div id="components-demo">
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script>
import ButtonCounter from "@/views/Watch/custom-input.vue";
export default {
  name: "Demo",
  components: {
    ButtonCounter,
  },
};
</script>
