/* ============
 * Vue Emement ui
 * ============
 *
 * UI plugin of Vue.js.
 *
 * https://github.com/ElemeFE/element
 */

import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';
import {
  Table,
  TableColumn,
  Loading,
  MessageBox,
  Message,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  Input,
  InputNumber,
  Form,
  FormItem,
  Col,
  Alert
  // Dialog

} from 'element-ui';
Vue.use(InputNumber);
Vue.use(Alert);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading.directive);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
// Vue.use(Checkbox);
// Vue.use(CheckboxButton);
// Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Col);
// Vue.use(Dialog);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.prototype.$message = Message;
