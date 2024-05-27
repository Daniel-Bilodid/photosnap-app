import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../components/AppHome.vue";
import AppStories from "../components/AppStories.vue";

const routes = [
  { path: "/", component: AppHome },
  { path: "/stories", component: AppStories },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
