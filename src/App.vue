<template>
  <v-app>
    <Menu v-if="nav1" :user="u" ></Menu> 
    <MenuEmp v-if="!nav1" :user="u"></MenuEmp>
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
  computed: {
        ...mapState(['u'])
    },

  data: () => ({
    mostrar: true,
    nav1:true,
  }),
  methods: {

    mostrar_menu(user){

      if(user!=0 && user!=1){
        this.nav1=false;
      } else{
        this.nav1=true;
      }
    }
  },
  created() {
    this.mostrar_menu(this.u)
  },
  updated() {
    this.mostrar_menu(this.u)
  },
};
</script>
