<template>
  <div>
      <h3>props in, emit out</h3>
    <input type="text" placeholder="firstName" v-model="firstName" />
    <input type="text" placeholder="lastName" v-model="lastName" />
    <h5>子component</h5>
    <PersonChild :username="firstName" :name="lastName" @update="selfUpdate"/>
  </div>
</template>

<script>
import PersonChild from "@/views/Person/PersonChild.vue";
export default {
  name: "PersonFather",
  data() {
    return {
      firstName: "Mary",
      lastName: "Liu",
    };
  },
  methods: {
    selfUpdate() {
      this.firstName = "Kate";
    },
  },
  components: {
    PersonChild,
  },
};
</script>
