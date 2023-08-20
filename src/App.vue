<template>
  <div id="app">
    <NavMenu v-if="shouldShowNavbar"/>
    <br/>
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
      
      if ((this.$route.path !== '/') && !(this.$route.path.startsWith('/Error')))
      {
        return true;
      }

      return false;
    }
  }
};
</script>
