<template>
  <div class="container">
    <h1>Add To List</h1>
    <div class="mb-3">
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
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-3">Submit Task</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todotask: {},
      selectpro: ["high", "medium", "low"],
    };
  },
};
</script>
