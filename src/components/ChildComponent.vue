<template>
  <div class="row">
    <button @click="Updatetitle">Change Title</button>
  </div>
</template>
<script>
export default {
  name: "ChildComponent",
  data() {
    return {
      arraydata: ["jaychand", "Raj", "Bhawik"],
    };
  },
  methods: {
    Updatetitle() {
      this.$emit("ChangeTitle", this.arraydata);
    },
  },
};
</script>
