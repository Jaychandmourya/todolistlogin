<template>
  <div id="app">
    <!-- <to-do-home></to-do-home> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TodoHome from "./components/TodoHome.vue";
export default {
  name: "App",
  components: {
    // "to-do-home": TodoHome,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
