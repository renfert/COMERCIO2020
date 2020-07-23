import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extra: [
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '2.jpg', cat:3},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"', cat:3},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"', cat:3},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"', cat:3},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"', cat:3},
    ],
    segundo: [
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"', cat:2},
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"', cat:2},
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"', cat:2},
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"', cat:2}
    ],
    entrada: [
      {id:3, nombre:'Queso', descr:'Queso blanco salado crujiente.', img:'', cat:1},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:'', cat:1},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:'', cat:1},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:'', cat:1},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:'', cat:1},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:'', cat:1},
    ],

    //USERS
    user: [], 
    rol: '',
    u: 0
  },
  mutations: {
    asig_rol(state, asig){
      state.rol=asig
    },
    asign_u(state, r){
      if(r=="ROLE_CLIEN"){
        state.u=1
      }else{
        state.u=2
      }
      
    }
  },
  actions: {
    
   
  },
  modules: {
  }
})
