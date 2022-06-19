// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'ant-design-vue/dist/antd.css';
import { Modal,Form,Button,Input,Icon,Upload,Select,Switch,InputNumber } from 'ant-design-vue'
Vue.use(Icon)
Vue.use(Upload)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(Modal)
Vue.use(Switch)
Vue.use(InputNumber)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
