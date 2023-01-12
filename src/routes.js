import TodoHome from "./components/TodoHome.vue";
import AddToList from "./components/AddToList.vue";
import EditToList from "./components/EditToList.vue";
export default [
  { path: "/", component: TodoHome },
  { path: "/Addtask", component: AddToList },
  { path: "/editask", component: EditToList },
];
