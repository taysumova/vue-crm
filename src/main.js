import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// filters
import dateFilter from "@/filters/date.filter";

import 'materialize-css/dist/js/materialize.min';

Vue.filter('date', dateFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
