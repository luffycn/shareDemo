import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    shwoback: false,
    showLoading:false,
    headStatus:1,
  },
  mutations: {
    showBack(state, isshow) {
      state.shwoback = isshow;
    },
    showLoading(state,status){
      state.showLoading = status;
    },
    changeHeadStatus(state,status){
      state.headStatus = status;
    }
  }
})