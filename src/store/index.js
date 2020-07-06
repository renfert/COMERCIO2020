import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extra: [
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"'},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"'},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"'},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"'},
      {id: 2, nombre: 'Rocoto Relleno', descr:'Rocoto relleno de carne con queso fresco, aderezado con comino y perejil picado.', img: '"../assets/2.jpg"'},
    ],
    segundo: [
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"'},
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"'},
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"'},
      {id: 1, nombre: 'Lomo Saltado', descr: 'Carne de res, arroz cocido, cebolla, tomate, perejil y papas fritas.', img: '"../assets/1.jpg"'}
    ],
    entrada: [
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:''},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:''},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:''},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:''},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:''},
      {id:3, nombre:'Queso frito', descr:'Queso blanco salado crujiente.', img:''},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
