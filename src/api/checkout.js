import request from '@/utils/request'

function useCoupon (params) {
  return request({
    url: '/user/enterCouponCode.jsp',
    method: 'post',
    params
  })
}

function fetchPayList (params) {
  return request({
    url: '/plan?expand=memberType',
    method: 'get'
  })
}
function fetchPay (params) {
  return request({
    url: '/plan/' + params.id + '?expand=memberType',
    method: 'get'
  })
}
function subscription (params) {
  return request({
    url: '/subscription',
    method: 'post',
    data: params
  })
}
function unionpay (params) {
  return request({
    url: '/subscription/unionpay',
    method: 'post',
    data: params
  })
}
function pay (params) {
  return request({
    url: '/subscription/pay',
    method: 'post',
    data: params
  })
}
export default {
  useCoupon,
  fetchPayList,
  fetchPay,
  pay,
  subscription,
  unionpay
}
