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

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyBbXPKrT4K9QOOZDmXqCDEM4_w4jSptERw",
  authDomain: "vue-crm-b1861.firebaseapp.com",
  projectId: "vue-crm-b1861",
  storageBucket: "vue-crm-b1861.appspot.com",
  messagingSenderId: "317474252831",
  appId: "1:317474252831:web:6d69403dc727447e554d2a",
  measurementId: "G-W28J98T5PC"
});


Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
