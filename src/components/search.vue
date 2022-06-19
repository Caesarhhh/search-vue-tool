<template>
  <div class="page">
    <img src="@/assets/imgs/logo.png" alt="" class="logo">
    <div id="searchinput">
      <a-input-search class="input"
      :value="content"
      placeholder="输入查找内容"
      :loading="searchLoading"
      enter-button
    />
    </div>
    <div>
      <img src="@/assets/imgs/voice.png" class="voice">
    </div>
  </div>
</template>

<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  name: 'Search',
  data () {
    return {
      msg: '',
      content: '',
      searchLoading: false,
      data,
      columns,
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
