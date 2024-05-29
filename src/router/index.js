import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../components/AppHome.vue";
import AppStories from "../components/AppStories.vue";
import AppFeatures from "../components/AppFeatures.vue";
import AppPricing from "../components/AppPricing.vue";

const routes = [
  { path: "/", component: AppHome },
  { path: "/stories", component: AppStories },
  { path: "/features", component: AppFeatures },
  { path: "/pricing", component: AppPricing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
