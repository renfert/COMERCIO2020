<template>
  <v-app>
    
    <v-content class="pa-0">
      <router-view/>
    </v-content>
    <Footer class="pa-0"></Footer>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Footer from '@/components/Footer';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
