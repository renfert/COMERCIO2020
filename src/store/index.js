import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extra: [
      {id: 2, title: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '2.jpg', cat:3},

    ],
    segundo: [
      {id: 1, title: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"', cat:2},
       
    ],
    entrada: [
      {id:3, title:'Queso', descr:'Queso blanco salado crujiente.', img:'', cat:1},
    ],
    partidos:[
      {id:'1', title: 'Accion Popular',subtitle:'',avatar: 1 },
      {id:'2', title: 'Alianza Para El Progreso',subtitle:'',avatar:2},
      {id:'3', title: 'Avanza Pais',subtitle:'',avatar:3},
      {id:'4', title: 'APRA',subtitle:'',avatar:4},
      {id:'5', title: 'Democracia Directa',subtitle:'',avatar:5},
      {id:'6', title: 'Fuerza Popular',subtitle:'',avatar:6},
      {id:'7', title: 'Frepap',subtitle:'',avatar:7},
      {id:'8', title: 'Frente Amplio',subtitle:'',avatar:8},
      {id:'9', title: 'Juntos por el Peru',subtitle:'',avatar:9},
      {id:'10', title: 'Partido Politico Contigo',subtitle:'',avatar:10},
      {id:'11', title: 'Partido Morado',subtitle:'',avatar:11},
      {id:'12', title: 'Partido Popular Cristiano -PPC',subtitle:'',avatar:12},
      {id:'13', title: 'Peru Patria Segura',subtitle:'',avatar:13},
      {id:'14', title: 'Perú Nacion',subtitle:'',avatar:14},
      {id:'15', title: 'Peru Libre',subtitle:'',avatar:15},
      {id:'16', title: 'Podemos Peru',subtitle:'',avatar:16},
      {id:'17', title: 'Renacimiento Unido Nacional',subtitle:'',avatar:17},
      {id:'18', title: 'Todos por el Peru',subtitle:'',avatar:18},
      {id:'19', title: 'Union por el Peru',subtitle:'',avatar:19},
      {id:'20', title: 'Somos Peru',subtitle:'',avatar:20},
      {id:'21', title: 'Solidaridad Nacional',subtitle:'',avatar:21},
      {id:'22', title: 'Vamos Peru',subtitle:'',avatar:22}, 
    ],
    //USERS
    user: [], 
    platosPedido: [],
    rol: '',
    userr: localStorage.getItem('u')
  },
  mutations: {
    actToken(){
      const accessToken =localStorage.getItem('token')
      if(accessToken){
        console.log("miaw")
        axios.defaults.headers.common['Authorization'] = accessToken;
      }
    },
    asig_rol(state, asig){
      state.rol=asig
    },
    asign_u(state, r){
      
      if(r==1){
        localStorage.setItem("u",2)
      }else{
        localStorage.setItem("u",3)
      }
    },
    llenar_DBextra(state,extraAction){
      state.DBextra = extraAction
    },
    
  },
  modules: {
  },
  
})
