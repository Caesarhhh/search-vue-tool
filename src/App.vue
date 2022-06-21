<template>
  <div id="app">
    <router-view></router-view>
    

  </div>
</template>
<script>
import Search from './components/search.vue'
import Search_result from './components/Search_result.vue'
import Login from './components/login.vue'
import Search_summary from './components/Search_summary.vue'
export default {
  name: 'App',
  components: {
    Search_summary,
    Search_result,
    Search,
    Login,
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
