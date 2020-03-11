import request from '@/utils/request'

// privacy_policy
// http://starmusic.greattimemusic.com/gtm/api/clauses/privacy_policy.jsp
// request parameter name: requestData
// format: string(json format)
// privacy_policy
// http://starmusic.greattimemusic.com/gtm/api/clauses/terms_of_service.jsp
// request parameter name: requestData
// format: string(json format)
// privacy_policy
// http://starmusic.greattimemusic.com/gtm/api/clauses/upgrade_method.jsp
// request parameter name: requestData
// format: string(json format)

function getPage (params) {
  return request({
    url: `/clauses/${params.slug}.jsp`,
    method: 'get',
    params
  })
}

export default {
  getPage,

}
