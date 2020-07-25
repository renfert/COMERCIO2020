<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Pedidos
            <v-img src="../assets/monitor.png" height="50" contain></v-img>
        </h1>
        
        <p></p>
        <v-divider></v-divider>
        <v-row class="ml-12 mb-4">
            <v-btn @click="obtenerUser">usrh</v-btn>
            <v-btn @click="obtenerCat">pers</v-btn>
            <v-btn @click="obtenerPlatos">plat</v-btn>
        </v-row>
        
    </v-container>
</template>

<script>
import {mapSate, mapMutations, mapState} from 'vuex';
import axios from "axios";
export default {
    name: 'APedidos',
    computed: {
    },
    methods: {
       // ...mapMutations(['obtenerUser'])
       async obtenerUser(){
           try{
               
               const usersDB = await this.axios.get('v1/user');
               console.log(usersDB);
           }catch(error){
               console.log(error);
           }
       },

        async obtenerCat(){
           try{
               console.info("headers",this.axios.defaults.headers)
               const usersDB = await this.axios.get('v1/personal');
               console.log(usersDB);
           }catch(error){
               console.log(error);
           }
       },

        async obtenerPlatos(){
           try{
               
               const usersDB = await this.axios.get('v1/plate');
               console.log(usersDB);
           }catch(error){
               console.log(error);
           }
       }
    },

    
    created() {
        
    },
}
</script>