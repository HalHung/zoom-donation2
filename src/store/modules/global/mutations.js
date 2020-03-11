import {

  SET_PAYLIST,
  RESET_PAYLIST

} from './mutation-types';

export default {
  [RESET_PAYLIST] (state) {
    // state.couponPayList.length.splice(0)
    // state.monthPayList.splice(1)
    // state.yearPayList.length.splice(1)
  },
  [SET_PAYLIST] (state, {
    items
  }) {
    items.map((x) => {
      x.priceInfo = `NT${x.price} 元${x.autoRenewing ? x.interval.startsWith('m') ? '/月' : x.interval.startsWith('y') ? '/年' : '' : ''}`
    })
    state['totalPayList'] = [
      ...items
    ]
  }
};
