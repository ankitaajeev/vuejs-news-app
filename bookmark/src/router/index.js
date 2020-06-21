import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RandomNewsPage from "../views/RandomNewsPage.vue";
import CategoryPage from "../views/CategoryPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/random",
    name: "Random",
    component: RandomNewsPage
  },
  {
    path: '/category/:id',
    name: 'Category',
    component: CategoryPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
