/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export default {
  packs: [{
    id: 'zoom',
    product: 'zoom',
    dateCreated: '2020-03-05T17:42:44Z',
    price: 0,
    lastUpdated: '2020-03-05T17:42:44Z',
    continuePrice: 0,
    active: true,
    isPublic: false,
    autoRenewing: false,
    intervalCount: 1,
    name: '贊助澈見線上教室',
    interval: 'min',
    // memberType: {id: 2, startDate: '2020-03-05T00:00:00Z', seq: 2, lookupType: {type: 'MEMBER'}, name: '白金會員'},
    // description: '單筆捐款贊助澈見線上教室，<br>協助廣大學員持續學習。'
    // priceInfo: 'NT90 元/月'
    }
  ],
  payment: ['credit'],
  monthPayList: [],
  yearPayList: [],
  couponPayList: [],
  totalPayList: []
};
