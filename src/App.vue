<template>
  <div id="app">
    <Search/>
  </div>
</template>

<script>
import Search from './components/search.vue'
import Search_result from './components/search_result.vue'
export default {
  name: 'App',
  components: {
    Search_result,
    Search
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
