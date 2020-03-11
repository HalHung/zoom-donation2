import Vue from 'vue'
import store from './store'
// import firebase from 'firebase'
// import {
//   default as Vuedals
// } from 'vuedals-submit';
const whiteList = [] // 不重定向白名单
console.log(Vue.$options);
Vue.router.beforeEach((to, from, next) => {
  // NProgress.start()
  // 假設有token
  // console.log(Vuedals);
  if (store.state.auth.isAuth) {
    // 而且目標是遊客葉面 就跳回首頁
    if (to.matched.some(m => m.meta.guest)) {
      next({
        name: 'home.index'
      })
    } else {
      // 否則檢查 現在有沒有用登入過
      if (!store.state.auth.isAuth) {
        // 沒有的話 就重新驗證
        store.dispatch('auth/status').then(res => {
          next()
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      if (to.matched.some(m => m.meta.auth)) {
        next({
          name: 'home.index'
        })
      } else {
        next()
      }
    }
  }
})
