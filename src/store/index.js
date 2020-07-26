import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extra: [
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '2.jpg', cat:3},

    ],
    segundo: [
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"', cat:2},
       
    ],
    entrada: [
      {id:3, nombre:'Queso', descr:'Queso blanco salado crujiente.', img:'', cat:1},
    ],
    //USERS
    user: [], 
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
      
      if(r=="ROLE_CLIEN"){
        localStorage.setItem("u",1)
      }else if(r=="ROLE_ADMIN"){
        localStorage.setItem("u",2)
      }else if(r=="ROLE_DELIV"){
        localStorage.setItem("u",4)
      } else if(r=="ROLE_RECEP"){
        localStorage.setItem("u",3)
      } else{
        localStorage.setItem("u",0)
      }
    },
    llenar_DBextra(state,extraAction){
      state.DBextra = extraAction
    },
    
  },
  modules: {
  },
  
})
