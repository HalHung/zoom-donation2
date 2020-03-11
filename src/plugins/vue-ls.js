/* ============
 * Vue Ls
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://github.com/RobinCK/vue-ls
 */

import Vue from 'vue'
import Storage from 'vue-ls'

Vue.use(Storage, {
  namespace: 'starmusic__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
});
