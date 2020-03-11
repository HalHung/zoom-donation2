/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export const me = (state) => {
  return state.me
}
export const isAuth = (state) => {
  return state.isAuth
}
export const role = (state) => {
  return state.me.role
}
export default {
  me,
  isAuth,
  role

}
