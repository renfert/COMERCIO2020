<template>
     <v-container fluid>
        <v-row style="height:90px;"></v-row>
        <v-card>
            <v-tabs centered dark icons-and-text v-model="tab" background-color="primary">
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#tab-1" class="secondary--text" @click="listaComidas(1)" >
                    Menú del día
                    <v-icon color="secondary">mdi-silverware </v-icon>
                </v-tab>

                <v-tab href="#tab-2" class="secondary--text" @click="listaComidas(2)">
                    Especiales
                    <v-icon color="secondary"> mdi-cupcake</v-icon>
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab" >
                <v-tab-item
                    v-for="i in 2"
                    :key="i"
                    :value="'tab-' + i"
                >
                <h1 style="font-family: 'Charm', cursive;" class="secondary--text" align="center">{{entradas}}</h1>
                <v-row justify="center">
                    <v-col xs="10" sm="4" md="3"  v-for="item of platos" :key="item.id">
                         <v-card  flat >
                                    <v-card >
                                        <!--Sección imagen -->
                                        <v-img height="170" :src="getImgUrl(item.id)">
                                        </v-img>
                                        <!-- Sección título-->
                                        <v-card-title >
                                            <h3 >{{item.name}}</h3>
                                        </v-card-title>
                                        <!-- Sección texto-->
                                        <v-card-text>
                                            <p>{{item.descr}}</p>
                                        </v-card-text>
                                    </v-card>
                        </v-card>
                    </v-col>
                </v-row>
                <h1 style="font-family: 'Charm', cursive;" class="secondary--text" align="center">{{segundos}}</h1>
                   
                    <v-row justify="center">
                    <v-col xs="10" sm="4" md="3"  v-for="i of menu_segundos" :key="i.id">
                         <v-card  flat >
                                    <v-card >
                                        <!--Sección imagen -->
                                        <v-img height="170" :src="getImgUrl(i.id)">
                                        </v-img>
                                        <!-- Sección título-->
                                        <v-card-title >
                                            <h3 >{{i.nombre}}</h3>
                                        </v-card-title>
                                        <!-- Sección texto-->
                                        <v-card-text>
                                            <p>{{i.descr}}</p>
                                        </v-card-text>
                                    </v-card>
                        </v-card>
                    </v-col>
                </v-row>


                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import axios from "axios";
export default {
    name: 'CCarta',
    data () {
      return {
        tab: null,
        text: '',
        platos: [],
        menu_segundos: [],
        entradas: '',
        segundos: ''
      }
    },
    computed: {
        ...mapState(['extra', 'segundo', 'entrada'])
    },
    methods:{
        
        listaComidas(i){
            if(i==1){
                this.entradas='Entradas',
                this.segundos='Segundos',
                this.platos=this.entrada,
                this.menu_segundos=this.segundo
            } else{
                this.entradas=' ',
                this.segundos=' ',
                
                this.platos = this.extra,
                this.menu_segundos=''
            }
        },
        getImgUrl(pic) {
            return require('../assets/'+pic+'.jpg')
        },
        async obtenerExtra(){
           try{
               const extraDB = await this.axios.get('v1/plate');
               console.log(extraDB);
           }catch(error){
               console.log(error);
           }
       },
    },
    created(){
        this.listaComidas(1)
        this.obtenerExtra()
    }
}

</script>