<template>
  <div class="row">
    <h1>Login page</h1>
    <form>
      <div class="mb-6">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Enter User Name</label
        >
        <input class="form-controls" type="text" v-model="email" />
      </div>
      <div class="col-sm-12">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Enter Password</label
        >
        <input type="password" v-model="upassword" />
      </div>

      <div class="col-auto pt-4">
        <button
          type="submit"
          class="btn btn-primary mb-3"
          @click.prevent="Logindata"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      upassword: "",
    };
  },
  methods: {
    async Logindata() {
      // let result = await axios.get(
      //   `http://localhost:3000/users?email=${this.email}&password=${this.upassword}`
      // );
      let result = await axios.get(
        "http://localhost:3000/users?email=" + this.email
      );
      console.log(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push("/");
      } else {
        alert("Not Login");
        this.email = "";
        this.upassword = "";
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push("/");
    }
  },
};
</script>
