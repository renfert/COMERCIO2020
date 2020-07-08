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
        
            <v-btn icon color="primary">
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="primary">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: 'Menu',
    props: ['user'],
    data (){
        return{
            b:[],

            botones: [
                {enlace: '/', icono: 'mdi-home', texto:'Inicio'},
                {enlace: '/carta', icono: 'mdi-silverware-fork-knife', texto:'Carta'},
                {enlace: '/login', icono: 'mdi-account', texto:'Iniciar Sesión'},
                {enlace: '/registro', icono: 'mdi-account-plus', texto:'Registrarse'},
            ],
            cliente: [
                {enlace: '/', icono: 'mdi-home', texto:'Inicio'},
                {enlace: '/ccarta', icono: 'mdi-silverware-fork-knife', texto:'Carta'},
                {enlace: '/cpedidos', icono: 'mdi-account', texto:'Mis Pedidos'},
                {enlace: '/', icono: 'mdi-account-plus', texto:'Cerrar Sesión'},
            ],
        }
    },
    methods: {
        tipo(n){
            if(n==0){
                this.b = this.botones
            } else if(n==1){
                this.b = this.cliente
            }
        }
    },
    created() {
        this.tipo(this.user)
    },
}
</script>