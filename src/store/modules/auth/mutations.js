/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import Vue from 'vue';
import {

  SET_AUTH,
  REMOVE_AUTH,
  SET_AUTH_CHECKING,
  SET_AUTH_CHECKED
} from './mutation-types';

export default {

  [SET_AUTH] (state, {
    token,
    me
  }) {
    state.isAuth = true;
    Vue.ls.set('token', token, 60 * 60 * 1000);
    state.me = me
    state.token = token
    // Vue.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  [SET_AUTH_CHECKING] (state) {
    state.isChecking = true;
  },
  [SET_AUTH_CHECKED] (state) {
    state.isChecking = false;
  },

  [REMOVE_AUTH] (state) {
    state.isAuth = false;
    // state.me['role'] = null;
    for (var key in state.me) state.me[key] = null;
    Vue.ls.remove('token');
    // Vue.$http.defaults.headers.common.Authorization = '';
  },
};
