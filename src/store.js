import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin:false,
    token:"",
    baseUrl:"http://113.10.158.154:8080"
  },
  mutations: {},
  actions: {}
});
