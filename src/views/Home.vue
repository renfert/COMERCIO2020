<template>
  <v-container fluid>
    <!-- <Menu></Menu> -->
    <Inicio></Inicio>
    
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '../components/Menu';
import Inicio from '../components/Inicio';

export default {
  name: 'Home',
  components:{
        Menu,
        Inicio
    },
    
}
</script>
