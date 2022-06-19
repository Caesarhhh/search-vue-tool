<template>
  <div class="page">
    <img src="@/assets/imgs/logo.png" alt="" class="logo">
    <div id="searchinput">
      <a-input-search class="input"
      :value="content"
      placeholder="input search loading with enterButton"
      :loading="searchLoading"
      enter-button
    />
    </div>
    <a-button>
      语音输入
    </a-button>
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
      msg: 'Welcome to Your Vue.js App',
      content: 'input search content',
      searchLoading: false,
      data,
      columns,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#inputsearch{
  width:600px
}
.logo{
  width: 15%;
}
.page{
  margin: 0 auto;
  position: relative;
}
.input{
  width: 24%;
  left: 38%;
}
.results{
  width: 60%;
  left: 20%;
  margin-top: 10px;
  position: relative;
}
</style>
