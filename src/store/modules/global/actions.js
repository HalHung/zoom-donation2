/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

// import Vue from 'vue';
// import store from '@/store';
// import * as types from './mutation-types';
import API from '@/api/';
import {
  Message
} from 'element-ui';

export const useCoupon = ({
  dispatch
}, {
  code,
}) => {
  return new Promise((resolve, reject) => {
    API.checkout.useCoupon({
      code
    }).then(res => {
      if (res.data.code === '200') {
        resolve(res)

        dispatch('fetchPayList', {
          type: 'coupon'
        }).then(res => {
          console.log(res);
        })
      } else {
        Message({
          message: res.data.message,
          type: 'error',
          duration: 10 * 1000
        })
      }
    })
  });

  // store.dispatch('account/find');
};

export const resetPayList = ({
  commit,
  dispatch
}) => {
  // commit(`global/RESET_PAYLIST`, null, {
  //   root: true
  // })

  dispatch(
    'global/fetchPayList', null, {
      root: true
    }
  );
};

export const fetchPayList = ({
  commit
}) => {
  return new Promise((resolve, reject) => {
    API.checkout.fetchPayList().then(res => {
      if (res.status === 200) {
        commit(`global/SET_PAYLIST`, {
          items: res.data
        }, {
          root: true
        })
        resolve(res)
      } else {
        // Message({
        //   message: res.data.message,
        //   type: 'error',
        //   duration: 10 * 1000
        // })
      }
    })
  });

  // store.dispatch('account/find');
};
export const fetchPay = ({
  commit
}, { id }) => {
  return new Promise((resolve, reject) => {
    API.checkout.fetchPay({ id }).then(res => {
      if (res.status === 200) {
        commit(`global/SET_PAYLIST`, {
          items: [res.data]
        }, {
          root: true
        })
        resolve(res)
      } else {
        // Message({
        //   message: res.data.message,
        //   type: 'error',
        //   duration: 10 * 1000
        // })
      }
    })
  });

  // store.dispatch('account/find');
};
export default {
  fetchPayList,
  resetPayList,
  fetchPay,
  useCoupon
};
