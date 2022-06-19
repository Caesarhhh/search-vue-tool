<template>
  <div id="app">
    <Login/>
  </div>
</template>

<script>
import Welcome from './welcome.vue'
import Login from './login.vue'
export default {
  name: 'App',
  components: {
    Welcome,
    Login
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
  margin-top: 60px;
}
</style>
