<template>
        <v-container fluid >

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
            <v-row style="height:90px;"></v-row>
            <v-img src="../assets/bg_login.jpg"  contain height="550" aspect-ratio="0.1" >
            <v-row class="bg" justify="center" style="height:550px;">
                <v-col xs="12" sm="4" md="4" lg="4">
                    <v-card class="mb-3 pa-3">
                        <v-form class="pa-6">
                            <h2 align="center" class="mb-8" style="font-family: 'Yantramanav', sans-serif; color: #720d2c"> Inicio de Sesión</h2>
                            <v-img src="../assets/users.png"  contain height="80" aspect-ratio="0.1" ></v-img>
                            <v-text-field label="Correo" v-model="correo" color="pink" class="mt-6"> </v-text-field>
                            <v-text-field label="Contraseña" v-model="contr" color="pink" type="password" class="mb-6" @keyup.enter="inicio" > </v-text-field>
                            <v-btn block color="#9D2C4E" dark class="mb-8" @click="inicio">Iniciar</v-btn>
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
import Menu from '../components/Menu';
import axios from "axios";
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
    name: 'Login',
    data(){
        return{
            correo: '',
            contr: '',
            dialog: false,
        }
    },
    
    components:{
        Menu,
    },
    computed: {
        ...mapState(['rol'])
    },
    methods: {

        ...mapMutations(['asig_rol', 'asign_u']),

        
        async inicio(){
            let post= {
                email: this.correo,
                password: this.contr,
            };
            try{
                let response = await axios.post("login", post) 
                localStorage.setItem("token",`Bearer ${response.data.jwt}`)
                console.info("rpta",response)
                this.asign_u(response.data.roles[0].authority)
                this.asig_rol(response.data.roles[0].authority)
                
                if(response.data.roles[0].authority=="ROLE_CLIEN"){
                    this.$router.push('/')
                    //this.$router.go(this.$router.currentRoute)
                    
                } else{
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