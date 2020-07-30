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
                <v-card  class="mb-3 ml-12" v-for="(item, index) in platos" :key="index">

                    <v-card-text>
                        <v-row>
                            <v-col cols="9">
                                <v-chip class="ma-2 ml-0" color="secondary"  label>
                                    <v-icon left>mdi-label</v-icon>
                                    {{item.category}} {{item.id}} {{index}}
                                </v-chip>
                                <v-chip class="ma-2 ml-0" color="secondary"  label outlined >
                                    <v-icon left>mdi-silverware-fork</v-icon>
                                    {{item.name}}
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
                        <p>Precio: S/.{{item.unitPrice}}</p>
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
                        <v-text-field label="Precio" v-model="descripcion" color="blue"></v-text-field>
                        <v-select :items="select_cat" v-model="val_select_cat"  label="Categoría" dense outlined color="blue"></v-select>
                        <p>{{val_select_cat}}</p>
                        <input type="file" @change="selectFile" >
                        <p>{{message}}</p>
                        <v-btn class="success" block type="submit">Agregar</v-btn>
                    </v-form>
                    
                </v-card>
            </v-col>

            <!--FORM PARA EDITAR-->
            <v-col md="4" v-if="!formAgregar">
                <v-card class="mb-3 pa-3">
                    
                    <v-form @submit.prevent="guardarCambios">
                        <v-text-field label="Nombre del plato" v-model="nombre" color="blue"> </v-text-field> 
                        <v-text-field label="Precio" v-model="descripcion" color="blue"></v-text-field>
                        <v-select :items="select_cat" v-model="val_select_cat" label="Categoría" dense outlined color="blue"></v-select>
                       <v-file-input label="Imagen" filled prepend-icon="mdi-camera" color="pink" v-model="imagen"></v-file-input>
                        <v-btn class="warning" block type="submit" >Guardar Cambios</v-btn>
                        
                    </v-form>
                    
                </v-card>
            </v-col>
        </v-row>

        <!--SNACKBAR-->
         <v-snackbar  v-model="snackbar">
            {{ mensaje}}
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" >
                Cerrar
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from "axios";
import UploadService from "../services/UploadFilesService";
import {mapState} from 'vuex';
export default {
    name: 'APlatos',
    data(){
        return{
             platos: [],
             categ: ['Entradas', 'Segundos', 'Extras', 'Postre'],
            val: ['Entradas', 'Segundos', 'Extras', 'Postre'],
            found: [],
            nombrePlato: '',
            formAgregar: true,
            select_cat: ['Entrada', 'Segundo', 'Plato extra', 'Postre'],
            indexAux: '',
            nombre: '',
            descripcion: '',
            val_select_cat: null,
            imagen: '',
            categoria: 0,
            //SNACKBAR
            snackbar: false,
            mensaje:'',

            //To image
            file: undefined,
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",

            aux_id_p: 0,

            fileInfos: []
        }
    },
    computed: {
        ...mapState(['extra', 'segundo', 'entrada'])
    },
    methods:{
        async listaComidas(){
           // this.platos=this.entrada.concat(this.segundo).concat(this.extra)
           try{
               const platosDB = await this.axios.get('v1/plate');
               await platosDB.data.forEach(element => {
                   let item = {}
                   item.id = element.id;
                   item.name= element.name;
                   item.unitPrice = element.unitPrice;
                   item.categoryID = element.category.id;
                   if(item.categoryID ==1){
                       item.category = 'Plato extra'
                   } else if(item.categoryID ==2){
                     item.category =  'Entrada'
                   }else if(item.categoryID ==3){
                       item.category =  'Segundo'
                   } else{
                       item.category =  'Postre'
                   }
                   item.image = element.image;
                   this.platos.push(item)
               });
           }catch(error){
               console.log(error)
           }
            
        },
        getImgUrl(pic) {
           // return require('../assets/'+pic+'.jpg')
           return 'https://restaurant-backend-01.herokuapp.com/v1/plate/image/'+pic
        },
        buscarPlato(nombrePlato){
            if(this.nombrePlato.length==0){
                this.listaComidas()
            } else{
                this.found = this.platos.filter(plato => plato.name.toUpperCase()== nombrePlato.toUpperCase()),
                this.platos=this.found
            }
        },
        async eliminar(id){
            const index = this.platos.indexOf(id)
            const rpta = confirm('¿Seguro que desea eliminar este plato?') && this.platos.splice(index, 1)
            if(rpta){
            await this.axios.delete(`v1/plate/${id}`)
            }
            
        },
        editar(index){
            this.formAgregar=false
            this.indexAux=index
            this.nombre=this.platos[index].name
            this.descripcion=this.platos[index].unitPrice
            if(this.platos[index].categoryID==1){
                this.val_select_cat='Plato extra'
            }else if(this.platos[index].categoryID==2){
               this.val_select_cat='Entrada'
            } else if(this.platos[index].categoryID==3){
                this.val_select_cat='Segundo'
            } else{
                this.val_select_cat='Postre'
            }
            //this.image=this.platos[index].image
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
        },

        //TO IMAAAAAAAAAAAAAAAAGE
        selectFile(event) {
            this.file = event.target.files[0];
        },
        async upload(id_p) {
            this.progress = 0;
            this.aux_id_p=id_p;
            try{
                this.currentFile = this.file;
                const res = await UploadService.upload(id_p,this.currentFile, event => {
                        this.progress = Math.round((100 * event.loaded) / event.total);
                    })
                this.message = res.data.message;
                console.log(this.message)
                
                const imagen = await UploadService.getFiles(id_p);

                
                this.fileInfos = imagen.data;
            }
            catch{
                this.progress = 0;
                this.message = "Could not upload the file!";
                console.log(this.message)

                this.currentFile = undefined;
            }

            this.selectedFiles = undefined;
        },
        async agregar(){
            if(this.nombre === '' || this.descripcion === ''){
                console.log('CAMPOS VACÍOOOOOOS')
            } else{
                
                try{
                    if(this.val_select_cat=='Plato extra'){
                        this.categoria=1
                    }else if(this.val_select_cat=='Entrada'){
                        this.categoria=2
                    } else if(this.val_select_cat=='Segundo'){
                        this.categoria=3
                     } else{
                        this.categoria=4
                    }
                    const plato = {
                        name: this.nombre,
                        unitPrice: this.descripcion,
                        category: {id: this.categoria}
                    }
                    const pDB = await this.axios.post('v1/plate', plato);
                    console.log(pDB.data);

                    //Para mostrar imagen
                    await this.upload(pDB.data.id)
                    this.fileInfos ? console.log("existe imagen"):null

                    let item={}
                    item.id=pDB.data.id;
                    item.name=plato.name;
                    item.unitPrice=plato.unitPrice;
                    item.category=this.val_select_cat;
                    
                    this.platos.push(item)
                    //Limpia campos
                    this.nombre='',
                    this.unitPrice=''
                    this.categoria=null
                    //SNACKBAR
                    this.snackbar= true
                    this.mensaje='Plato agregado.'

                }catch(error){
                    console.log(error)
                }

            }
        },
    },
    created(){
        this.listaComidas()
    },
     mounted() {
        UploadService.getFiles(this.aux_id_p).then(response => {
            this.fileInfos = response.data;
        });
    }
}
</script>