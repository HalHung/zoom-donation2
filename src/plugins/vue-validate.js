/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js.
 *
 * https://kazupon.github.io/vue-i18n/
 */

import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('zh_TW', zhTW);

const config = {

  locale: 'zh_TW',

  // errorBagName: 'errors', // change if property conflicts
  // fieldsBagName: 'fields',
  // delay: 0,
  // locale: 'en',
  // dictionary: null,
  // strict: true,
  // classes: false,
  // classNames: {
  //   touched: 'touched', // the control has been blurred
  //   untouched: 'untouched', // the control hasn't been blurred
  //   valid: 'valid', // model is valid
  //   invalid: 'invalid', // model is invalid
  //   pristine: 'pristine', // control has not been interacted with
  //   dirty: 'dirty' // control has been interacted with
  // },
  // events: 'input',
  inject: false,
  // validity: false,
  // aria: true,
  // i18n: null, // the vue-i18n plugin instance
  // i18nRootKey: 'validations' // the nested key under which the validation messsages will be located
};

Vue.use(VeeValidate, config);
// VeeValidate.localize(tw);
