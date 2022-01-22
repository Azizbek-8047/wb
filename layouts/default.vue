<template>
  <div
    :class="{
      navbar_active: getNavbar,
      pages_active: $route.path != '/' && $route.path != `/${$i18n.locale}`
    }"
    class="wrapper"
  >
    <LayoutsHeader />
    <Nuxt />
    <LayoutsFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
       ...mapGetters('auth', ["getNavbar"])
  },
};
</script>

<style>
</style>