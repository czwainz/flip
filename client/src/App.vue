<template>
  <div id="app">
    <navBar></navBar>
    <router-view />
  </div>
</template>

<script>
  import navBar from "@/components/nav.vue"

  export default {
    name: 'app',
    components: {
      navBar
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    color: white;
  }

  #nav a {
    font-weight: bold;
    color: var(--warning);
  }

  #nav a.router-link-exact-active {
    color: var(--secondary);
    text-decoration: none;
  }

  a {
    color: white;
  }

  a:hover {
    color: white;
  }
</style>