import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Vuelidate from 'vuelidate';
// filters
import dateFilter from '@/filters/date.filter';
//plugins
import messagePlugin from '@/utils/message.plugin';

import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
