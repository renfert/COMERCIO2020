<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Platos</h1>
        <v-divider></v-divider>
        <v-row class="ml-16">
            <v-col md="5" class="ml-12">
                <v-card class="mb-3" v-for="(item, index) in platos" :key="index">
                    <v-card-text>
                        <v-chip
                            class="ma-2 ml-0"
                            color="blue"
                            label
                            text-color="white"
                            
                        >
                            <v-icon left>mdi-label</v-icon>
                            {{item.nombre}}
                        </v-chip>
                        <p>{{item.descr}}</p>
                        <!--Sección imagen -->
                         <v-img height="170" :src="getImgUrl(item.id)">
                          </v-img>
                        <v-btn color="warning" class="ml-0" >Editar</v-btn>
                        <v-btn color="error" class="ml-0" >Eliminar</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'APlatos',
    data(){
        return{
             platos: [{id:'', nombre: '', descr: '', img: '', cat:''}],
        }
    },
    computed: {
        ...mapState(['extra', 'segundo', 'entrada'])
    },
    methods:{
        listaComidas(){
            this.platos=this.entrada.concat(this.segundo).concat(this.extra)
            
        },
        getImgUrl(pic) {
            return require('../assets/'+pic+'.jpg')
        }
    },
    created(){
        this.listaComidas()
    }
}
</script>