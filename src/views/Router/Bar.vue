<template
  ><div>
    <h1>Hello Bar!</h1>
    <h6>username:{{ username }}</h6>
    <button @click="goBack">goBack</button>
    <!-- ?username=Jimmy -->
  </div>
</template>

<script>
export default {
  name: "Bar",
  computed: {
    username() {
      console.log("this.$route", this.$route);
      return this.$route.query.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$route.go(-1) : this.$route.push("/");
    }
  }
};
</script>
