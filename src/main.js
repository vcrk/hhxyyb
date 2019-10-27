import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery';
import qs from 'qs'
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.store = store


Vue.prototype.$qs = qs
Vue.prototype.axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    if(localStorage.getItem("createtime")==null){
      localStorage.setItem("createtime",0);
    }

    var createtime = parseInt(localStorage.getItem("createtime"))
    var date = new Date().getTime();
    if(date-createtime>2*24*60*60*1000){
      localStorage.removeItem("createtime");
      localStorage.removeItem("token");
      localStorage.removeItem("isLogin");
    }else{
      this.store.state.isLogin = localStorage.getItem('isLogin');
      this.store.state.token = localStorage.getItem('token');
    }
  }
}).$mount('#app')
