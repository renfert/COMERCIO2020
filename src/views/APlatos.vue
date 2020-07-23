<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Platos
            <v-img src="../assets/plato.png" height="50" contain></v-img>
        </h1>
        <p></p>
        <v-divider></v-divider>

        <v-row class="ml-12 mb-4">
            <v-col cols="4">
                <v-toolbar dense  class="ml-12">
                    <v-text-field hide-details  single-line label="Buscar plato" v-model="nombrePlato" 
                     @keyup.enter="buscarPlato(nombrePlato)">
                    </v-text-field>
                    <v-btn icon v-if="nombrePlato.length>0" @click="clear">
                        <v-icon>mdi-file-excel-box</v-icon>
                    </v-btn>
                    <v-btn icon @click="buscarPlato(nombrePlato)">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col>
            
        </v-row>

        <v-row class="ml-16">
            <v-col cols="5" class="pa-0">
                <v-row>
                    <v-col cols="9">
                        <v-select v-model="val"  :items="categ"  attach chips label="Categorías" multiple 
                        class="ml-12 pa-0" item-color="secondary" color="secondary">
                        </v-select>
                    </v-col>
                    <v-col cols="3" class="mt-3 pa-0">
                        <v-btn icon @click="buscarCat(val)">
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>

                <v-card class="mb-3 ml-12" v-for="(item, index) in platos" :key="index">
                    <v-card-text>
                        <v-row>
                            <v-col cols="9">
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
                            <v-col cols="3" >
                                <v-btn color="blue" class="white--text" fab small @click="editar(index)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn color="error" class="white--text ml-1" fab small @click="eliminar(item.id)">
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
            <v-col md="2"></v-col>
            <!--FORM-->
            <v-col md="4" v-if="formAgregar">
                <h3  class=" secondary--text mb-4" align="center" >Agregar nuevo plato</h3>
                <v-card class="mb-3 pa-3">
                    
                    <v-form @submit.prevent="agregar">
                        <v-text-field label="Nombre del plato" v-model="nombre" color="blue"> </v-text-field> 
                        <v-textarea label="Descripción" v-model="descripcion" color="blue"></v-textarea>
                        <v-select :items="select_cat" v-model="val_select_cat"  label="Categoría" dense outlined color="blue"></v-select>
                        <v-file-input label="Imagen" filled prepend-icon="mdi-camera" color="pink" v-model="imagen"></v-file-input>
                        
                        <v-btn class="success" block type="submit">Agregar</v-btn>
                    </v-form>
                    
                </v-card>
            </v-col>

            <!--FORM PARA EDITAR-->
            <v-col md="4" v-if="!formAgregar">
                <v-card class="mb-3 pa-3">
                    
                    <v-form @submit.prevent="guardarCambios">
                        <v-text-field label="Nombre del plato" v-model="nombre" color="blue"> </v-text-field> 
                        <v-textarea label="Descripción" v-model="descripcion" color="blue"></v-textarea>
                        <v-select :items="select_cat" v-model="val_select_cat" label="Categoría" dense outlined color="blue"></v-select>
                       <v-file-input label="Imagen" filled prepend-icon="mdi-camera" color="pink" v-model="imagen"></v-file-input>
                        <v-btn class="warning" block type="submit" >Guardar Cambios</v-btn>
                        
                    </v-form>
                    
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
            nombrePlato: '',
            formAgregar: true,
            select_cat: ['Entrada', 'Segundo', 'Plato extra'],
            indexAux: '',
            nombre: '',
            descripcion: '',
            val_select_cat: null,
            imagen: ''
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
            this.listaComidas()
            if(this.nombrePlato.length==0){
                this.listaComidas()
            } else{
                this.found = this.platos.filter(plato => plato.nombre.toUpperCase()== nombrePlato.toUpperCase()),
                this.platos=this.found
            }
        },
        eliminar(id){
            this.platos = this.platos.filter(e => e.id !=id)
        },
        editar(index){
            this.formAgregar=false
            this.indexAux=index
            this.nombre=this.platos[index].nombre
            this.descripcion=this.platos[index].descr
            if(this.platos[index].cat==1){
                this.val_select_cat='Entrada'
            }else if(this.platos[index].cat==2){
               this.val_select_cat='Segundo'
            } else{
                this.val_select_cat='Plato extra'
            }
            this.imagen=this.platos[index].img
           //this.val_select_cat=this.platos[index].cat
        },
        guardarCambios(){
            this.platos[this.indexAux].nombre= this.nombre
            this.platos[this.indexAux].descripcion= this.descripcion
            this.formAgregar=true
            this.titulo ='',
            this.descripcion = ''
        },
        buscarCat(catPlato){
            console.log(catPlato)
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