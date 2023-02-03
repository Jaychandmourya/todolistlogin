<template>
  <div class="container">
    <h1>Update To Do List</h1>
    <div class="col-auto">
      <p style="float: right">
        <router-link to="/">Back To Home</router-link>
      </p>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Enter Task</label
      >
      <textarea
        v-model="items.taskName"
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <label for="exampleFormControlTextarea1" class="form-label"
      >Select Priority</label
    >
    <div class="col-sm-12">
      <select
        v-model="items.addpriority"
        class="form-select"
        aria-label="Default select example"
      >
        <option>Select Priority</option>
        <option
          v-for="prodata in selectpro"
          v-bind:key="prodata.id"
          v:value="prodata"
        >
          {{ prodata }}
        </option>
      </select>
    </div>
    <div class="col-auto pt-4">
      <button
        type="submit"
        class="btn btn-primary mb-3"
        @click.prevent="UpdateItem(items.id, items.status)"
      >
        Update Task
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// const props = defineProps(["id"]);
export default {
  props: ["id"],
  data() {
    return {
      taskName: {},
      updatask: "",
      addpriority: "",
      // id: this.$route.params.id,
      items: "",
      selectpro: ["high", "medium", "low"],
    };
  },
  methods: {
    async UpdateItem(id, status) {
      try {
        const user = await axios.put("http://localhost:3000/todos/" + id, {
          taskName: this.items.taskName,
          addpriority: this.items.addpriority,
          status: status,
        });

        console.log(user.data);
        this.$router.push("/");
        alert("User updated!");
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    // console.log(props);
    axios
      .get("http://localhost:3000/todos/" + this.id)
      .then((response) => {
        this.items = response.data;
        // console.log(this.items);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));

    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push("/signup");
    }
  },
};
</script>
