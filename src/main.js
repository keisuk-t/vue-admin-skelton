import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mock from '../mocks/$mock.js'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja' // lang i18n

import '@/styles/index.scss' // global css
import '@/icons' // icon

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate/dist/vee-validate.full.esm';
import { required } from 'vee-validate/dist/rules';

mock()

Vue.use(ElementUI, { locale });
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('contains', {
  validate(value, values) {
    return values.indexOf(value) !== -1;
  },
  message: "Not found in namespaces"
});

extend('notContains', {
  validate(value, values) {
    return values.indexOf(value) === -1;
  },
  message: "Already exists"
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
