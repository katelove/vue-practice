<template>
  <div>
    <p>{{ searchText }}</p>
    <CustomInput v-model="searchText"></CustomInput>
  </div>
</template>

<script>
import CustomInput from "@/views/VModel/CustomInput.vue";
export default {
  name: "CustomDemo",
  props: ["value"],
  data() {
    return {
      searchText: 0,
    };
  },
  components: {
    CustomInput,
  },
};
</script>
