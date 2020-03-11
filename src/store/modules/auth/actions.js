/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

// import Vue from 'vue';
// import store from '@/store';
import * as types from './mutation-types';
import API from '@/api/';
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import {
  Message
} from 'element-ui'

export const status = ({
  commit,
  dispatch
}) => {
  commit(types.SET_AUTH_CHECKING);
  /*
  if (firebase.auth().currentUser) {
    return new Promise((resolve, reject) => {
      API.auth.status().then(res => {
        console.log(res);
        if (res.status === 200) {
          commit(types.SET_AUTH, {
            token: '',
            me: res.data
          });
          commit(types.SET_AUTH_CHECKED);
          resolve(res)
        } else {
          commit(types.REMOVE_AUTH);
        }
      })
    })
  } else {
    commit(types.SET_AUTH_CHECKED);
    console.log('no token');
  }
  */
  // commit(types.status);
};

export const register = ({
  dispatch
}, {
  email,
  nickname,
  password,
  phone
}) => {
  return new Promise((resolve, reject) => {
    API.auth.register({
      email,
      nickname,
      phone,
      password
    }).then(userCredential => {
      if (!userCredential.user.emailVerified) {
        Message({
          message: '請查看您的信箱,並按指示開通帳號',
          type: 'success',
          duration: 10 * 1000
        })
      }
      resolve(userCredential)
    }).catch(reason => {
      Message({
        message: reason.message,
        type: 'error',
        duration: 3 * 1000
      })
      resolve(reason)
    })
  })
};

export const login = ({
  dispatch
}, {
  email,
  password
}) => {
  return new Promise((resolve, reject) => {
    /*
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (userCredential) {
      if (userCredential.user.emailVerified) {
        Message({
          message: '成功登入',
          type: 'success',
          duration: 3 * 1000
        })
        dispatch('status').then(res => {
          resolve(res)
        })
      } else {
        Message({
          message: '尚末完成信箱驗證，請查看您的信箱,並按指示開通帳號',
          type: 'warning',
          duration: 5 * 1000
        })
        reject(new Error('請查看您的信箱,並按指示開通帳號'));
      }
    }).catch(function (reason) {
      Message({
        message: reason.message,
        type: 'error',
        duration: 3 * 1000
      })
      reject(reason);
    });
    */
  });
  /*
  return new Promise((resolve, reject) => {
    API.auth.login({
      email,
      password
    }).then(res => {
      if (res.data.code === '200') {
        Message({
          message: '成功登入',
          type: 'success',
          duration: 3 * 1000
        })
        dispatch('status', res.data.token).then(res => {
          resolve(res)
        })
      } else {
        Message({
          message: res.data.message,
          type: 'error',
          duration: 3 * 1000
        })
      }
    })
  })
  */
  // store.dispatch('account/find');
};
export const fbLogin = ({
  dispatch
}, {
  email,
  fbid
}) => {
  return new Promise((resolve, reject) => {
    API.auth.fbLogin({
      email,
      fbid
    }).then(res => {
      if (res.data.code === '200') {
        Message({
          message: '成功登入',
          type: 'success',
          duration: 3 * 1000
        })
        dispatch('status', res.data.token).then(res => {
          resolve(res)
        })
      } else {
        Message({
          message: res.data.message,
          type: 'error',
          duration: 3 * 1000
        })
      }
    })
  })

  // store.dispatch('account/find');
};

export const validationMail = ({
  commit
}, {
  token,
}) => {
  return new Promise((resolve, reject) => {
    API.auth.validationMail({
      token,

    }).then(res => {
      resolve(res)
    })
  })

  // store.dispatch('account/find');
};

export const logout = ({
  commit,
  dispatch
}) => {
  /*
  firebase.auth().signOut().then(() => {
    Message({
      message: '成功登出',
      type: 'success',
      duration: 3 * 1000
    })
    commit(types.REMOVE_AUTH);
  });
  */
  /*
  API.auth.logout({
    email: store.state.auth.me.email
  }).then(res => {
    if (res.data.code === '200') {
      Message({
        message: '成功登出',
        type: 'success',
        duration: 3 * 1000
      })
      commit(types.REMOVE_AUTH);
      // dispatch('global/resetPayList', null, {
      //   root: true
      // })

      // setTimeout(() => {
      //   window.location.replace(`http://${window.location.host}`);
      // }, 1000);
    } else {
      Message({
        message: res.data.message,
        type: 'error',
        duration: 3 * 1000
      })
    }
  })
  */
  // Vue.router.push({
  //   name: 'login.index',
  // });
};

export default {
  status,
  register,
  login,
  fbLogin,
  logout,
  validationMail
};
