import {
  SET_INVOICELIST,
  RESET_INVOICELIST,
  SET_INVOICE
} from './mutation-types';

export default {
  [RESET_INVOICELIST] (state) {
    // state.couponPayList.length.splice(0)
    // state.monthPayList.splice(1)
    // state.yearPayList.length.splice(1)
  },
  [SET_INVOICELIST] (state, {
    items
  }) {
    state['invoiceList'] = [
      ...items
    ]
  },
  [SET_INVOICE] (state, {
    item
  }) {
    state['invoice'] = item;
  }
};
