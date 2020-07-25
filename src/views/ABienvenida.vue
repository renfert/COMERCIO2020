<template>
    <v-container fluid class="pa-0">
        <v-parallax height="350" src="../assets/portada.jpg">
         <h2 style="font-family: 'Fondamento', cursive; margin-block-start: auto" class=" primary--text mb-12 ml-8" align="center">
             Bienvenido  {{nombreE}}
            </h2>
        </v-parallax>
        <Mision class="ml-2"></Mision>

        <!-- Hover button-->
        <v-row class="fill-height ml-8 mb-5" align="center" justify="center" v-if="btnem"> 
            <template v-for="(item, i) in items">
                <v-col :key="i" cols="12" md="2">
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" link :href="item.enlace">
                            <v-img :src="item.img" height="225px">
                                <v-card-title class="title white--text">
                                    <v-row justify="space-between" class="fill-height flex-column">
                                        <p class="mt-16"></p>
                                        <p></p>
                                        <p class="mt-16 subheading text-left" style="text-shadow: 2px 1px 1px black;
                                        text-align-last: center; background-color: #720d2c "> {{ item.title }} </p>
                                    </v-row>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script>
import Mision from '../components/Mision';
import axios from "axios";
export default {
    name: 'ABienvenida',
    
    components:{
        Mision
    },
    data (){
        return{
            //Datos Admin
            nombreE: '',
            btnem: true,
            items: [
                {
                title: 'Platos',
                //img: 'https://image.freepik.com/foto-gratis/ceviche-contenedor-espuma-poliestireno-sobre-mesa_58702-1223.jpg',
                img: 'https://image.freepik.com/foto-gratis/olla-irreconocible-volteando-camarones-asados-sarten-pinzas_23-2148253409.jpg',
                enlace:'/aplatos'
                },
                {
                title: 'Carta',
                //img: 'https://image.freepik.com/foto-gratis/vista-superior-plato-vacio-cubiertos_23-2148496913.jpg',
                img: 'https://image.freepik.com/foto-gratis/receta-menu-comida-hecha-casa-restaurante-recomendado_53876-14196.jpg',
                enlace:'/acarta'
                },
                {
                title: 'Pedidos',
                //img: 'https://image.freepik.com/foto-gratis/joven-afroamericano-repartidor-vistiendo-polo-rojo-gorra-portapapeles-mostrando-camara-apuntando-boligrafo-sonriendo-sobre-rosa-aislado_141793-9782.jpg',
                img: 'https://image.freepik.com/foto-gratis/vista-frontal-repartidor-mostrando-bloc-notas-firmar-pedido_23-2148455137.jpg',
                enlace:'/apedidos'
                },
                {
                title: 'Recepcionistas',
                //img: 'https://image.freepik.com/foto-gratis/retrato-hermosa-joven-asiatica-laptop_74190-10426.jpg',
                img: 'https://image.freepik.com/foto-gratis/imagen-primer-plano-mujer-feliz-auriculares_109710-2741.jpg',
                enlace:'/arecepcionistas'
                },
                {
                title: 'Repartidores',
                //img: 'https://image.freepik.com/foto-gratis/repartidor-pizza-uniforme-trabajo-recogiendo-cajas-pizza-sobre-amarillo-aislado-orgulloso-satisfecho_1368-70631.jpg',
                img: 'https://image.freepik.com/foto-gratis/repartidor-tiro-medio-caja_23-2148546030.jpg',
                enlace:'/arepartidores' 
                },
            ],
            transparent: 'rgba(255, 255, 255, 0)',
        }
    },
    methods: {
        ver_tipo(n){
            if(n!=2){
                this.btnem=false
            }
        },
        async obtenerNombre(){
           try{
               const nombre_e = await this.axios.get('v1/personal');
               this.nombreE=nombre_e.data.name+' '+nombre_e.data.lasname

           }catch(error){
               console.log(error);
           }
        },

    },
    created() {
        this.ver_tipo(localStorage.getItem('u')),
        this.obtenerNombre()
    },
}
</script>

<style scoped>
    .v-card {
    transition: opacity .4s ease-in-out;
    }
    .v-card:not(.on-hover) {
    opacity: 0.6;
    }
    .show-btns {
    color: rgba(255, 255, 255, 1) !important;
    }
</style>