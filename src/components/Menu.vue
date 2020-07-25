<template>
    
    <v-container >
        <v-app-bar app class="secondary" height="90">
            <!--Logo-->
            
            <v-img src="../assets/logo_r.png"  contain height="86" aspect-ratio="0.1" ></v-img>
            
            <v-spacer></v-spacer>
            <!--Botones-->
            <v-col v-for="(item) of b" :key="item.id" class="pa-4" style="flex-grow:0">
                <v-btn text :href="item.enlace" color="primary" class="pa-0">
                    <v-icon class="mr-2">{{item.icono}}</v-icon>
                    {{item.texto}}
                </v-btn>
            </v-col>
            <v-btn icon color="primary" v-if="logout" class="mr-16" @click="cerrar_sesion">
                <v-icon>mdi-power</v-icon>
            </v-btn>

            
        </v-app-bar>
    </v-container>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
export default {
    name: 'Menu',
    props: ['user'],
    data (){
        return{
            b:[],
            logout: false,

            botones: [
                {enlace: '/', icono: 'mdi-home', texto:'Inicio'},
                {enlace: '/carta', icono: 'mdi-silverware-fork-knife', texto:'Carta'},
                {enlace: '/login', icono: 'mdi-account', texto:'Iniciar Sesión'},
                {enlace: '/registro', icono: 'mdi-account-plus', texto:'Registrarse'},
            ],
            cliente: [
                {enlace: '/', icono: 'mdi-home', texto:'Inicio'},
                {enlace: '/ccarta', icono: 'mdi-silverware-fork-knife', texto:'Carta'},
                {enlace: '/cpedidos', icono: 'mdi-cart', texto:'Mis Pedidos'},
            ],
        }
    },
    computed: {
      ...mapState(['userr'])
    },
    methods: {
        tipo(n){
            if(n==0){
                this.logout = false
                this.b = this.botones
            } else if(n==1){
                this.logout = true
                this.b = this.cliente
            }
        },
        cerrar_sesion(){
            localStorage.setItem("token",null)
            localStorage.setItem("u",0)
            this.$router.push('/')
            
        }
    },
    created() {
        this.tipo(this.user)
    },
}
</script>