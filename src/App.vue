<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./views/main/index.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
