<template>
    <v-container fluid class="pa-0">
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title align="center">¡Importante!</v-card-title>
                <v-img src="../assets/mascota.gif" height="170" contain></v-img>
                <h2 align="center" class="mt-16 mb-16 mr-12 ml-12">Recuerda que las elecciones son el 
                    próximo 11 de abril ¡Faltan tan solo {{rpta}} días!</h2>
                <v-divider></v-divider>
                <v-card-actions align="center" justify="center" class="ml-8 " >
                        <v-btn align="center" color="info" class="ml-16"  dark @click="dialog=!dialog">Ver calendario</v-btn>
                        <v-btn align="center" color="info" class="ml-10" outlined @click="dialog=!dialog">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>



        <v-img src="../assets/logoF3.png" align="center" contain height="110" aspect-ratio="0.1" class="mt-10"></v-img>
        
        
        <Mision class="ml-2"></Mision>

        <!-- Hover button-->
        <v-row class="fill-height ml-8 mb-5" align="center" justify="center" v-if="btnem" > 
            <template v-for="(item, i) in items" >
                <v-col :key="i" cols="12" md="2" id="subm">
                    <v-hover v-slot:default="{ hover }">
                        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" link :href="item.enlace">
                            <v-img :src="item.img" height="225px">
                                <v-card-title class="title white--text">
                                    <v-row justify="space-between" class="fill-height flex-column">
                                        <p class="mt-16"></p>
                                        <p></p>
                                        <p class="mt-16 subheading text-left" style="text-shadow: 2px 1px 1px black;
                                        text-align-last: center; background-color: #720d2c; font-size:14px;"> {{ item.title }} </p>
                                    </v-row>
                                </v-card-title>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </template>
        </v-row>
        <v-row style="height: 100px;"></v-row>

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
            dialog: true,
            btnem: true,
            items: [
                {
                title: 'Cdatos. a la Presidencia',
                //img: 'https://image.freepik.com/foto-gratis/ceviche-contenedor-espuma-poliestireno-sobre-mesa_58702-1223.jpg',
                img: 'https://portal.andina.pe/EDPfotografia3/Thumbnail/2020/07/28/000696682W.jpg',
                enlace:'/listaPres'
                },
                {
                title: 'Cdatos. al Congreso',
                img: 'https://www.comexperu.org.pe/upload/images/editorial-280820-051753.jpg',
                enlace:'/listaCong'
                },
                {
                title: 'Incidencias',
                img: 'https://image.freepik.com/foto-gratis/vista-frontal-repartidor-mostrando-bloc-notas-firmar-pedido_23-2148455137.jpg',
                enlace:'/incidencias'
                },
                {
                title: 'Propuestas',
                img: 'https://image.freepik.com/foto-gratis/encantada-complacida-joven-crea-plan-exitoso-banca-sostiene-documentos-papel-mira-positivamente-computadora-portatil-sienta-mesa-cocina_273609-19085.jpg',
                enlace:'/propuestas'
                },
            ],
            transparent: 'rgba(255, 255, 255, 0)',
        }
    },
    methods: {
        ver_tipo(n){
            if(n!=3){
                this.btnem=false
            }
        },
        async obtenerNombre(){
           try{
               console.log("ANTES AXIOS")
               console.log(localStorage.getItem('token'))
               const nombre_e = await this.axios.get('v1/personal');
               console.log("GAAAA AXIOS")
               this.nombreE=nombre_e.data.name+' '+nombre_e.data.lasname

           }catch(error){
               console.log(error);
           }
        },
        dias(){
            let fecha1 = new Date('2021/04/11');
            let fecha2 = new Date()

            let resta = fecha1.getTime() - fecha2.getTime();
            this.rpta= Math.round(resta/ (1000*60*60*24));
            console.log(this.rpta)
            console.log("df")

        }

    },
    created() {
        this.ver_tipo(localStorage.getItem('u')),
        this.obtenerNombre()
        this.dias()
    },
}
</script>

<style scoped>
    .v-card {
    transition: opacity .4s ease-in-out;
    }
    #subm > .v-card:not(.on-hover) {
    opacity: 0.6;
    }
    .show-btns {
    color: rgba(255, 255, 255, 1) !important;
    }
</style>