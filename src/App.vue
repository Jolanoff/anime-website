<template>
  <NavBar />
  <router-view />
  <PageFooter />
</template>

<script>

import NavBar from './components/Items/nav-bar.vue'
import PageFooter from './components/Items/PageFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,PageFooter
  }
}
</script>

<style>
</style>
