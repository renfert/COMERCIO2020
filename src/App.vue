<template>
  <v-app>
    <Menu v-if="nav1" :user="userr" ></Menu> 
    <MenuEmp v-if="!nav1" :user="userr"></MenuEmp>
    <v-content class="pa-0">
      <router-view/>
    </v-content>
    <Footer class="pa-0" ></Footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import MenuEmp from '@/components/MenuEmp';
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Footer,
    Menu,
    MenuEmp
  },

  data: () => ({
    mostrar: true,
    nav1:true,
    userr: localStorage.getItem('u')
  }),
  methods: {

    mostrar_menu(user){

      if(user!=0 && user!=1){
        this.nav1=false;
      } else{
        this.nav1=true;
      }
    },

  },
  beforeCreate() {
    const us= localStorage.getItem('u')
    if(us==null){
      localStorage.setItem("u",0)
    } else{
      this.userr=localStorage.getItem('u')
    }
  },
  created() {
    const us= localStorage.getItem('u')
    if(us==null){
      localStorage.setItem("u",0)
      this.mostrar_menu(us)
    }else{
      this.mostrar_menu(us)
    }
    
  },
};
</script>
