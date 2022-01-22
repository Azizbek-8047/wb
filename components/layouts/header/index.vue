<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-logo">
          <nuxt-link to="/" target="_blanck">
            <img
              :src="
                $route.path != '/' && $route.path != `/${$i18n.locale}`
                  ? require('~/assets/images/logos/logo-page-1.svg')
                  : require('~/assets/images/logos/logo-1.svg')
              "
              alt="Not Found"
            />
          </nuxt-link>
          <a href="#!" target="_blanck">
            <img
              :src="
                $route.path != '/' && $route.path != `/${$i18n.locale}`
                  ? require('~/assets/images/logos/logo-page-2.svg')
                  : require('~/assets/images/logos/logo-2.svg')
              "
              alt="Not Found"
            />
          </a>
          <a href="#!" target="_blanck">
            <img
              :src="
                $route.path != '/' && $route.path != `/${$i18n.locale}`
                  ? require('~/assets/images/logos/logo-page-3.svg')
                  : require('~/assets/images/logos/logo-3.svg')
              "
              alt="Not Found"
            />
          </a>
        </div>
        <div class="header-search">
          <button>
            <i class="icon-search"></i>
            <span>
              {{ $t("Search") }}
            </span>
          </button>
        </div>
        <div class="header-functions">
          <ul>
            <li>
              <i class="icon-smartphone"></i>
            </li>
            <li>
              <i class="icon-sunglasses"></i>
            </li>
          </ul>
        </div>
        <div class="header-lang">
          <LayoutsHeaderLang/>
        </div>
        <div class="header-log">
          <a href="#!" class="btn" target="_blank">
            {{ $t("LogInProgramm") }}
          </a>
        </div>
        <div class="header-nav">
          <i @click="openNavbar"  class="icon-navbar"></i>
        </div>
      </div>
    </div>
    <LayoutsHeaderMenu />
  </header>
</template>

<script>
export default {
  methods: {
    openNavbar(){
       this.$store.commit("auth/setNavbar", true);
    }
  }
};
</script>

<style>
</style>