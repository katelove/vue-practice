<template>
  <div>
    <h4>{{ lovinVue }}</h4>
    <BaseCheckBox v-model="lovinVue"></BaseCheckBox>
  </div>
</template>

<script>
import BaseCheckBox from "@/views/VModel/BaseCheckBox.vue";
export default {
  name: "BaseCheckDemo",
  data() {
    return {
      lovinVue: true, 
    };
  },

  components: {
    BaseCheckBox,
  },
};
</script>
