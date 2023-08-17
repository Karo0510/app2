<template>
  <div id="app">
    <NavMenu v-if="shouldShowNavbar"/>
    <router-view></router-view>
  </div>
</template>

<script>

import NavMenu from '@/components/Nav/NavMenu.vue'

export default {
  name: 'App',
  components: {
    NavMenu
  },
  computed: {
    shouldShowNavbar() {
      // Sprawdzanie, czy aktualna ścieżka to strona tytułowa
      return this.$route.path !== '/';
    }
  }
};
</script>
