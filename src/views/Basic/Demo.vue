<template>
  <div id="components-demo">
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
    <ButtonCounter></ButtonCounter>
  </div>
</template>

<script>
import ButtonCounter from "@/views/Basic/ButtonCounter.vue";
export default {
  name: "Demo",
  components: {
    ButtonCounter,
  },
};
</script>
