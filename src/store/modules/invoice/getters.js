/* ============
 * Getters for the global module
 * ============
 *
 * The getters that are available on the
 * global module.
 */
export const invoiceList = (state) => {
  return state.invoiceList
}
export const invoice = (state) => {
  return state.invoice
}
export default {
  invoiceList,
  invoice
}
