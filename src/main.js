import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/style.css'
import Vuelidate from 'vuelidate'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSadTear, faHome, faChevronLeft, faFilePdf, faFileExcel, faSignInAlt, faListAlt, faUser, faUserPlus, faUserMinus, faUserEdit, faUserLock, faUserSlash, faListOl, faUserCircle, faInfo, faPencilAlt, faTimes, faQuestion, faSearch, faTrashAlt, faEdit, faSave, faPlusCircle, faTimesCircle, faAngleRight, faSearchPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@mdi/font/css/materialdesignicons.css'

import Layout1 from './layouts/Layout1.vue';
import LayoutDefault from './layouts/LayoutDefault.vue';
import LayoutLogin from './layouts/LayoutLogin.vue';
import ServicioWS from './plugins/serviceWS'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import './registerServiceWorker'

Vue.use(bootstrap)
Vue.use(Vuelidate)

//axios
Vue.use(ServicioWS)

library.add(faSadTear, faHome, faChevronLeft, faFilePdf, faFileExcel, faSignInAlt, faListAlt, faUser, faUserPlus, faUserMinus, faUserEdit, faUserLock, faUserSlash, faListOl, faUserCircle, faInfo, faPencilAlt, faTimes, faQuestion, faSearch, faTrashAlt, faEdit, faSave, faPlusCircle, faTimesCircle, faAngleRight, faSearchPlus, faInfoCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
window.jQuery = $;

Vue.mixin( {
  methods: {

  }
})

Vue.component('Layout1', Layout1);
Vue.component('LayoutDefault', LayoutDefault);
Vue.component('LayoutLogin', LayoutLogin);

new Vue({
  router,
  store,
  render: h => h(App),
  // vuetify: new Vuetify({})
}).$mount('#app')
