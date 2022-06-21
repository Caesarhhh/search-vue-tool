<template>
  <div class="page">
    <img src="@/assets/imgs/logo.png" alt="" class="logo">
    <div id="searchinput">
      <a-input-search class="input"
      :value="content"
      placeholder="输入查找内容"
      :loading="searchLoading"
      enter-button
      @pressEnter="onSearch"
      
    />
    </div>

    <div>
      <img src="@/assets/imgs/voice.png" class="voice">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  data () {
    return {
      msg: '',
      content: '',
      searchLoading: false,

    }
  },
  methods:{
    onSearch(e){
      this.$router.push("/Search_summary")
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
   width:320px;
    height:200px;
}
.page{
    position: absolute;
    left:35%;
    top: 15%
}
.input{

  width: 600px;

}
.results{
  width: 60%;
  left: 20%;
  margin-top: 10px;
  position: relative;
}
.button{
  position: relative;
  top:20px

}
.voice{
  width: 80px;
  height: 80px;
  position: relative;
  top:10px
}
</style>
