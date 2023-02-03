<template>
  <div class="row">
    <h1>SignUp page</h1>
    <form>
      <div class="mb-6">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Enter User Name</label
        >
        <input class="form-controls" type="text" v-model="name" />
      </div>
      <div class="mb-6">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Enter User Email</label
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
          @click.prevent="Adddata"
        >
          SignUp
        </button>
        <p>
          <router-link to="/login">Login</router-link>
        </p>
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
      name: "",
      email: "",
      upassword: "",
    };
  },
  methods: {
    async Adddata() {
      try {
        const res = await axios.post(`http://localhost:3000/users`, {
          name: this.name,
          email: this.email,
          password: this.upassword,
          ustatus: true,
        });
        console.log(res);
        if (res.status == 201) {
          localStorage.setItem("user-info", JSON.stringify(res.data));
          this.$router.push("/");
        }
      } catch (e) {
        console.log(e);
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
