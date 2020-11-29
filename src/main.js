import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import { Icon } from 'leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuesax, {
  // options here
})
Vue.use(VueAxios, axios)
//https://littlebigbackend2020.herokuapp.com/
axios.defaults.baseURL='http://192.168.1.21:8080/';

const accessToken =localStorage.getItem('token')
if(accessToken){
  console.log("miaw")
  axios.defaults.headers.common['Authorization'] = accessToken;
}

///////////axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';

Vue.config.productionTip = false

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
