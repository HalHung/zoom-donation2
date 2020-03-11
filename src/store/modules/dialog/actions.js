/* ============
 * Actions for the dialog module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import * as types from './mutation-types';

export const open = ({ commit }, { comp, data, props }) => {
  commit(types.OPEN, { comp, data, props })
}

export const close = ({ commit }, { comp, data, props }) => {
  commit(types.CLOSE, { comp: {}, data: {}, props })
}

export default {
  open,
  close
}
