<template>
  <div class="container" border="1px">
    <div col-md-6>
      <h1>Add To List</h1>
      <div class="col-auto">
        <p style="float: right">
          <router-link to="/">Back To Home</router-link>
        </p>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Enter Task</label
          >
          <textarea
            v-model="addtask"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="col-sm-12">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Select Priority</label
          >
          <select
            v-model="addpriority"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Select Priority</option>
            <option v-for="prodata in selectpro" v-bind:key="prodata">
              {{ prodata }}
            </option>
          </select>
        </div>
        <div class="col-auto pt-4">
          <button
            type="submit"
            class="btn btn-primary mb-3"
            @click.prevent="addItem"
          >
            Submit Task
          </button>
        </div>
      </div>
      <div v-if="submitted">
        <p>Data Submitted</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      todotask: {
        addtask: "",
        addpriority: null,
        status: "undone",
      },
      todata: [],
      selectpro: ["high", "medium", "low"],
      submitted: false,
    };
  },
  methods: {
    async addItem() {
      try {
        const res = await axios.post(`http://localhost:3000/todos`, {
          taskName: this.addtask,
          addpriority: this.addpriority,
          status: "undone",
        });
        console.log(res.data);
        this.$router.push("/");
        alert("User Added!");
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push("/signup");
    }
  },
};
</script>
