/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import API from '@/api/';
import { Message } from 'element-ui'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
export const reqResetPassword = ({ commit }, { email }) => {
  /*
  return firebase.auth().sendPasswordResetEmail(email).then(function () {
    Message({
      message: '重設密碼連結已經寄出，請檢察你的EMAIL並按指示操作。',
      type: 'success'
    })
  }).catch(function (reason) {
    Message({
      message: reason.message,
      type: 'error'
    })
  })
  */
}
export const resetPassword = ({ commit }, { pw, token }) => {
  return new Promise((resolve, reject) => {
    API.account.resetPassword({ pw, token }).then(res => {
      if (res.status) {
        Message({
          message: '重新設定成功',
          type: 'error'
        })
        resolve(res)
      } else {
        Message({
          message: res.data.message,
          type: 'error'
        })
      }
    })
  })
}
export const update = ({ commit }, { id, nickname, password }) => {
  return new Promise((resolve, reject) => {
    API.account.update({ id, nickname, password, phone: '' }).then(res => {
      console.log(res);
      if (res.status === 200) {
        Message({
          message: '重新設定成功',
          type: 'success'
        })
        resolve(res)
      } else {
        Message({
          message: res.data.message,
          type: 'error'
        })
      }
    })
  })
}

export const find = ({ commit }) => {
  /*
   * Normally you would use a proxy to fetch the account:
   *
   * new Proxy()
   *  .find()
   *  .then((response) => {
   *    commit(types.FIND, Transformer.fetch(response));
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  // const account = {
  //   first_name: 'John',
  //   last_name: 'Doe',
  //   email: 'jonh@doe.com',
  // };

  // commit(types.FIND, Transformer.fetch(account));
};

export default {
  find,
  update,
  reqResetPassword,
  resetPassword
};
