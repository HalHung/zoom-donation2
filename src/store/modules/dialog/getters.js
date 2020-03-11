/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export const show = (state) => {
  return state.show
}
export const comp = (state) => {
  return state.comp
}
export const data = (state) => {
  return state.data
}
export const props = (state) => {
  return state.props
}
export default {
  show,
  comp,
  data,
  props

}
