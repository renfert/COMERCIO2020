<template>
  <v-container fluid style="padding:0px;">
    <!-- <Menu></Menu>
    <Inicio></Inicio>  -->
<!--PRESIDENTE 2VICR 130 CONGR
IFO ACCEDER A NOMBRE SDNI DE CANTDIDATOS, PERFIL DE ELLOS SEGMENTAR FILTRAR POR GRUPO
PROFESIONES, CARGOS, ANTECENDENTES
PROFESION
RANGOS EDADES
CARGOS PÚBLICOS
PROPUESTAS
REDES-->
        <v-dialog v-model="dialog" width="500">
                    <v-card>
                        <v-card-title>¡Ups! Credenciales incorrectas</v-card-title>
                        <v-card-text>Por favor, inténtelo de nuevo.</v-card-text>
                        <v-card-actions>
                            <v-btn @click="dialog=!dialog">Aceptar</v-btn>
                        </v-card-actions>
                    </v-card>
            </v-dialog>
           <!--  <Menu></Menu> -->
            <v-img src="../assets/bg_log2.jpg"  contain height="830" aspect-ratio="0.1" class="mt-0" style="background-position: inherit ;" id="fondo" >
            <v-row class="bg" justify="center" >
            <v-col xs="12" sm="4" md="4" lg="4">
            <v-row style="height:90px;"></v-row>
                    <v-card class="mb-3 pa-3" style="background: rgba(255, 255, 255, 0.85); border-radius: 40px;">
                        <v-form class="pa-8">
                            <!--<h2 align="center" class="mb-8" style="font-family: 'Yantramanav', sans-serif; color: #30336B"> Inicio de Sesión</h2>-->
                            <v-img src="../assets/slogan1.png" align="center" contain height="80" aspect-ratio="0.1" class="ml-16" ></v-img>
                            <v-text-field label="DNI" v-model="dni" color="#30336B" class="mt-6 pa-4"> </v-text-field>
                            <v-text-field label="Contraseña" v-model="contr" color="#30336B" type="password" class="mb-6 pa-3" @keyup.enter="inicio" > </v-text-field>
                            <v-btn block color="#E04955" dark class="mb-8 rounded-pill" @click="inicio">Iniciar</v-btn>
                            <v-btn block text color="black" class="mb-1" small>¿Olvidó su contraseña?</v-btn>
                            <v-btn block text href="/registro" color="black" small>¿Eres nuevo? Regístrate</v-btn>
                            <p>{{rol}}</p>
                        </v-form>
                        
                    </v-card>
                </v-col>
                
            </v-row>
            </v-img>
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: 'Home',
  data(){
        return{
            dni: '',
            contr: '',
            dialog: false,
        }
    },
     computed: {
        ...mapState(['rol'])
    },
     methods: {

        ...mapMutations([ 'asign_u', 'actToken']),

        
        async inicio(){
            let post= {
                dni: this.dni,
                password: this.contr,
            };
            try{
                let response = await axios.post("login", post) 
                localStorage.setItem("token",`Bearer ${response.data.jwt}`)
                console.info("rpta",response)
                
                //ACTUALIZANDO TOKEN
                this.actToken()
                if(response.data.dni==999999999){
                    this.asign_u(1)
                    this.$root.$emit('actMenu')
                    this.$router.push('/admin')
                    //this.$router.go(this.$router.currentRoute)
                    
                } else{
                    this.asign_u(2)
                    this.$root.$emit('actMenu')
                    this.$router.push('/abienvenida')
                }
                
                
            } catch(error){
                this.dialog=true
                console.log(error)
            }
        }
    },
    
}
</script>

<style>
div .v-image__image{
background-position: inherit !important;
}
</style>