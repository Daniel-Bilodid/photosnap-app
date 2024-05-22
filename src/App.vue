<script>
import AppNav from "./components/AppNav.vue";
import AppHome from "./components/AppHome.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppNav,
    AppHome,
    AppFooter,
  },
};
</script>

<template>
  <app-nav></app-nav>
  <app-home></app-home>
  <app-footer></app-footer>
</template>

<style></style>
