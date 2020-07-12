<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Platos</h1>
        <v-divider></v-divider>

        <v-row class="ml-16">
            <v-col cols="6">
                <v-toolbar dense floating class="ml-12">
                    <v-text-field hide-details  single-line label="Buscar plato" v-model="nombrePlato" @click="hidden = !hidden" @keyup.enter="buscarPlato(nombrePlato)">
                    </v-text-field>
                    <v-btn icon v-show="hidden" @click="clear">
                        <v-icon>mdi-file-excel-box</v-icon>
                    </v-btn>
                    <v-btn icon @click="buscarPlato(nombrePlato)">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col>
            
        </v-row>

        <v-row class="ml-16">
            <v-col cols="4">
            <v-select v-model="val"  :items="categ"  attach chips label="Categorías" multiple class="ml-12" item-color="secondary" color="secondary"></v-select>
            </v-col>
        </v-row>
        

        <v-row class="ml-16">
            <v-col md="4" class="ml-12">
                <v-card class="mb-3" v-for="(item, index) in platos" :key="index">
                    <v-card-text>
                        <v-row>
                            <v-col cols="8">
                                <v-chip
                                    class="ma-2 ml-0"
                                    color="secondary"
                                    label
                                    outlined
                                    
                                >
                                    <v-icon left>mdi-silverware-fork</v-icon>
                                    {{item.nombre}}
                                </v-chip>
                            </v-col>
                            <v-col cols="4" >
                                <v-btn color="blue" class="white--text mr-2" fab small>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn color="error" class="white--text" fab small>
                                    <v-icon>mdi-trash-can</v-icon>
                                </v-btn>
                            </v-col>
                            
                        </v-row>    
                        <p>{{item.descr}}</p>
                        <!--Sección imagen -->
                         <v-img height="170" :src="getImgUrl(item.id)"></v-img>

                        
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
             categ: ['Entradas', 'Segundos', 'Extras'],
            val: ['Entradas', 'Segundos', 'Extras'],
            found: [],
            nombrePlato: ''
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
        },
        buscarPlato(nombrePlato){
            if(this.nombrePlato.length==0){
                this.listaComidas()
            } else{
                this.found = this.platos.filter(plato => plato.nombre.toUpperCase()== nombrePlato.toUpperCase()),
                this.platos=this.found
            }
            
        },
        clear(){
            this.nombrePlato = '',
            this.listaComidas()
        }
    },
    created(){
        this.listaComidas()
    }
}
</script>