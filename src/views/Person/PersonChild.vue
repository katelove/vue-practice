<template>
  <div>
    <h3>父component 傳入username: {{ username }}</h3>
    <h3>父component 傳入name: {{ name }}</h3>
    <button @click="updateName">$emit 子傳父</button>
  </div>
</template>

<script>
export default {
  name: "PersonChild",
  props: ["username", "name"],
  methods:{
      updateName(){
          this.$emit('update',this.firstName)
      }
  }
};
</script>
