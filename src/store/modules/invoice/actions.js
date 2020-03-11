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
export const fetchInvoiceList = ({
  commit
}) => {
  return new Promise((resolve, reject) => {
    API.invoice.fetchInvoiceList().then(res => {
      if (res.status === 200) {
        commit(`invoice/SET_INVOICELIST`, {
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
};
export const fetchInvoice = ({
  commit
}, { no }) => {
  return new Promise((resolve, reject) => {
    API.invoice.fetchInvoice({ no }).then(res => {
      if (res.status === 200) {
        commit(`invoice/SET_INVOICE`, {
          item: res.data
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
};
export default {
  fetchInvoiceList,
  fetchInvoice
};
