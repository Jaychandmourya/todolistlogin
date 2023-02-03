import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
// import Paginate from "vuejs-paginate";
import store from "./store";

Vue.use(VueRouter);
// Vue.component("paginate", Paginate);
const router = new VueRouter({
  routes: Routes,
  mode: "history",
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router: router,
}).$mount("#app");
