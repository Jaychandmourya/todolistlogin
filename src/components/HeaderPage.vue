<template>
  <div class="container" v-if="user != ''">
    <button @click="logout" class="btn btn-danger">Logout</button>
  </div>
</template>
<script>
export default {
  name: "HeaderPage",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/signup");
    },
  },
  mounted() {
    console.log(this.user);
    this.user = localStorage.getItem("user-info");
  },
};
</script>
