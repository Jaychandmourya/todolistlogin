<template>
  <div class="container">
    <section class="vh-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-12 col-xl-10">
            <div class="card mask-custom">
              <div
                class="card-body p-4 text-white"
                style="background-color: rgb(126 64 246)"
              >
                <div class="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 class="my-4">Task List</h2>
                  <button style="float: right">
                    <router-link to="/Addtask">Add To List</router-link>
                  </button>
                </div>

                <table class="table text-white mb-0">
                  <thead>
                    <tr>
                      <!-- <th scope="col">Team Member</th> -->
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="fw-normal"
                      v-for="tododata in todos"
                      :key="tododata.id"
                    >
                      <td class="align-middle">
                        <span>{{ tododata.taskName }}</span>
                      </td>
                      <td class="align-middle">
                        <h6 class="mb-0">
                          <span class="badge bg-danger">{{
                            tododata.priority
                          }}</span>
                        </h6>
                      </td>
                      <td class="align-middle">
                        <!-- <a href="#!" data-mdb-toggle="tooltip" title="Done"
                          ><i class="fas fa-check fa-lg text-success me-3"></i
                        ></a>
                        <a
                          href="#!"
                          data-mdb-toggle="tooltip"
                          title="Remove"
                          style="color: red"
                          ><i
                            class="fas fa-trash-alt fa-lg text-warning"
                            style="color: red"
                          ></i
                        ></a> -->
                        <button v-on:click="removeItem(tododata.id)">
                          Delete
                        </button>
                        <button>
                          <router-link to="/editask/">Edit</router-link>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      todos: [],
      itemName: "",
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/todos`);
      this.todos = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async addItem() {
      const res = await axios.post(`http://localhost:3000/items`, {
        name: this.itemName,
      });
      this.todos = [...this.items, res.data];
      this.itemName = "";
    },
    removeItem(id) {
      axios.delete(`http://localhost:3000/todos/${id}`);
      this.todos = this.todos.filter((tododata) => tododata.id !== id);
    },
  },
};
</script>
<style scoped>
.container {
  background: rgb(81 139 250);
}
.gradient-custom-2 {
  background: blue;
}
</style>
