import * as VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import CheckYourEmail from "../views/CheckYourEmail.vue";
import ClaimAccount from "../views/ClaimAccount.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Home,
    redirect: "/",
  },
  {
    path: "/confirm",
    name: "CheckYourEmail",
    component: CheckYourEmail,
    props: true,
  },
  {
    path: "/account/claim",
    name: "ClaimAccount",
    component: ClaimAccount,
  },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});
export default router;
