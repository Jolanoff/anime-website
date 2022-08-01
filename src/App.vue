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
    NavBar, PageFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 600;
  font-size: 20px;
}

body {
  background-color: white;
}
</style>
