import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

axios.defaults.baseURL='https://restaurant-backend-01.herokuapp.com/';

const accessToken =localStorage.getItem('token')
if(accessToken){
  axios.defaults.headers.common['Authorization'] = accessToken;
}

///////////axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
