<template>
  <div id="app">
    <app-header></app-header>
    <PaginatePage></PaginatePage>
    <!-- <h1>{{ title }}</h1>
    <li v-for="data in arraytitle" :key="data">
      {{ data }}
    </li> -->
    <!-- <ChildComponent v-on:ChangeTitle="Updatetitle($event)" /> -->
    <!-- <to-do-home></to-do-home> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderPage from "./components/HeaderPage.vue";
import PaginatePage from "./components/PaginatePage.vue";

// import ChildComponent from "./components/ChildComponent.vue";
export default {
  name: "App",
  components: {
    "app-header": HeaderPage,
    PaginatePage,
    // ChildComponent,
    // "to-do-home": TodoHome,
  },
  data() {
    return {
      title: "Send Data Child To Parent",
      arraytitle: [],
    };
  },
  methods: {
    Updatetitle(title) {
      this.arraytitle = title;
    },
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
ul {
  list-style-type: none;
}
</style>
