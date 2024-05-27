<script>
import AppNav from "./components/AppNav.vue";

import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppNav,

    AppFooter,
  },
};
</script>

<template>
  <app-nav></app-nav>
  <router-view></router-view>

  <app-footer></app-footer>
</template>

<style></style>
