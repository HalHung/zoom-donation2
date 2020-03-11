/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  OPEN,
  CLOSE,
} from './mutation-types';

export default {

  [OPEN] (state, { comp, data, props }) {
    state.show = true;
    state.comp = comp;
    state.data = data;
    state.props = props;
  },
  [CLOSE] (state) {
    state.show = false;
    state.comp = {};
    state.data = {};
    state.props = {};
  },

};
