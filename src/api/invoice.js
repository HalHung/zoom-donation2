import request from '@/utils/request'

function fetchInvoiceList (params) {
  return request({
    url: '/invoice?expand=plan&expand=memberProfile&sort=dateCreated&order=desc&max=100',
    method: 'get',
    data: params
  })
}

function fetchInvoice (params) {
  return request({
    url: `/invoice/${params.no}?expand=plan`,
    method: 'get',
    data: params
  })
}
export default {
    fetchInvoiceList,
    fetchInvoice
}
