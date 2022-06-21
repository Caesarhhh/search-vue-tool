<template>
  <div class="Welcome" @click="toSearch">
    <h1>{{ msg }}</h1>
    <div class="logo" >
    <img src="../assets/imgs/logo.png" class="logoimg">
  </div>
  </div>
 
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: '智能信息查询'
    }
  },
  methods:{
    toSearch(e){
      this.$router.push("/Search")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: '微软雅黑';
  font-size: 400%;
  position: absolute;
  left: 50%;
  top:34%;
}

.logoimg{
    width:450px;
    height:250px;
}
.logo{
    position: absolute;
    left:20%;
    top: 30%
}
</style>