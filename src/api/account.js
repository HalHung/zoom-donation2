
import request from '@/utils/request'

function resetPassword (params) {
  return request({
    url: '/validation/changePassword.jsp',
    method: 'post',
    params
  })
}
// https://starmusic.greattimemusic.com/gtm/api/user/sendChangePasswordMail.jsp
function reqResetPassword (params) {
  return request({
    url: '/memberProfile/sendChangePasswordMail',
    method: 'post',
    params
  })
}
function getProfile (params) {
  return request({
    url: '/memberProfile/webget?expand=memberType',
    method: 'get',
    params
  })
}
function update (params) {
  return request({
    url: '/memberProfile/' + params.id,
    method: 'patch',
    data: params
  })
}
export default {
  resetPassword,
  reqResetPassword,
  update,
  getProfile,
}
