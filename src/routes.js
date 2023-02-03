import TodoHome from "./components/TodoHome.vue";
import AddToList from "./components/AddToList.vue";
import EditToList from "./components/EditToList.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";
import UserLogin from "./components/UserLogin.vue";
import SignUpPage from "./components/SignUpPage.vue";
export default [
  { path: "/", component: TodoHome },
  { path: "/Addtask", component: AddToList },
  { path: "/editask/:id", component: EditToList, props: true },
  { name: "UserLogin", path: "/login", component: UserLogin },
  { name: "UserLogin", path: "/signup", component: SignUpPage },
  { path: "*", component: NotFoundComponent },
];
