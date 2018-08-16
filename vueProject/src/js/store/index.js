import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    shwoback: false,
    homeHeaderConfig:{footShow:true},
    footHeight:'',
    headHeight:'',
    footSpcheight:'',
    showLoading:false
  },
  mutations: {
    showBack(state, isshow) {
      state.shwoback = isshow;
    },
    homeHeaderControl(state,data) {
      state.homeHeaderConfig = data;
    },
    mathFootHeight(state,param){
      let headHeight = param/1.375;
      state.headHeight = headHeight;
      state.footHeight = -param-headHeight;
    },
    mathSpcFootHeight(state,param){
      state.footSpcheight = state.headHeight+param;
    },
    showLoading(state,status){
      state.showLoading = status;
    }
  }
})
