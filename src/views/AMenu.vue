<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col cols="1" class="ml-6 mt-10">
                <v-btn color="secondary" fab class="ml-16" @click="back"> 
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="10">
                <h1  class=" secondary--text mt-8 ml-8" align="center" >Carta: Menú del Día
                <v-img src="../assets/cocinero.png" height="50" contain></v-img> </h1>
            </v-col>
        </v-row> 
        <p></p>
        <v-divider></v-divider>

        <!--Card options-->
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px;" class="mt-12 ml-16" justify="center" align="center">Opciones: Entradas</h2>

        <v-card>
         <v-row justify="center" class="ml-16 mr-8">
            <v-col xs="10" sm="4" md="3"  v-for="i of entrada" :key="i.id">
                <v-card  flat >
                    <v-card >
                        <!--Sección imagen -->
                        <v-img height="170" :src="getImgUrl(i.id)">
                        </v-img>
                        <!-- Sección título-->
                        <v-card-title >
                        <h4 >{{i.name}}</h4>
                        </v-card-title>
                        <!-- Sección texto-->
                        <v-card-text>
                            <v-row>
                                <v-col cols="6">
                                    <p>Precio: S/.{{i.unitPrice}}.00</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn color="green" dark @click="agregar(i.id,2)" >{{boton}}</v-btn>

                                </v-col>
                            </v-row> 
                        </v-card-text>
                        
                        
                    </v-card>
                </v-card>
            </v-col>
          </v-row>
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px;" class="mt-12 ml-16" justify="center" align="center">Opciones: Segundos</h2>

          <v-row justify="center" class="ml-16 mr-8">
            <v-col xs="10" sm="4" md="3"  v-for="i of segundo" :key="i.id">
                <v-card  flat >
                    <v-card >
                        <!--Sección imagen -->
                        <v-img height="170" :src="getImgUrl(i.id)">
                        </v-img>
                        <!-- Sección título-->
                        <v-card-title >
                        <h4 >{{i.name}}</h4>
                        </v-card-title>
                        <!-- Sección texto-->
                        <v-card-text>
                            <v-row>
                                <v-col cols="6">
                                    <p>Precio: S/.{{i.unitPrice}}.00</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-btn color="green" dark @click="agregar(i.id, 3)" >{{boton}}</v-btn>

                                </v-col>
                            </v-row> 
                        </v-card-text>
                        
                        
                    </v-card>
                </v-card>
            </v-col>
          </v-row>

        <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px;" class="mt-12 ml-16" justify="center" align="center">Carta - Menú del Día</h2>
        <p></p>
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 24px;" class="mt-12 ml-16" justify="center" align="center">Entradas</h2>
        
        <v-card>
            <v-row >
                <v-col xs="10" sm="6" md="5"  v-for="i of entrada_menu" :key="i.id" class="ml-16">
                    <v-row>
                        <v-col cols="1">

                        </v-col>
                        <v-col cols="4">
                            <v-img width="150" :src="getImgUrl(i.plato)" style="border-radius: 999px; border: 10px solid #f1f1f1"></v-img>
                        </v-col>
                        <v-col cols="7">
                            <v-row>
                                <v-col cols="7">
                                    <h4 style="font-family: 'Roboto Slab', serif; font-size: 22px;">{{i.platoName}}</h4>
                                </v-col>
                                <v-divider dark></v-divider>
                                <v-col cols="5">
                                    <h4 style="font-family: 'Roboto Slab', serif; font-size: 20px;" class="secondary--text">S/.{{i.unitPrice}}.00</h4>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="11">
                            <h4 style="font-family: 'Open Sans Condensed', sans-serif;font-family: 'Roboto Slab', serif; font-size: 14px;">Stock: {{i.stock}} platos</h4>
                        </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 24px;" class="mt-12 ml-16" justify="center" align="center">Segundos</h2>

            <v-row >
                <v-col xs="10" sm="6" md="5"  v-for="i of segundo_menu" :key="i.id" class="ml-16">
                    <v-row>
                        <v-col cols="1">

                        </v-col>
                        <v-col cols="4">
                            <v-img width="150" :src="getImgUrl(i.plato)" style="border-radius: 999px; border: 10px solid #f1f1f1"></v-img>
                        </v-col>
                        <v-col cols="7">
                            <v-row>
                                <v-col cols="7">
                                    <h4 style="font-family: 'Roboto Slab', serif; font-size: 22px;">{{i.platoName}}</h4>
                                </v-col>
                                <v-divider dark></v-divider>
                                <v-col cols="5">
                                    <h4 style="font-family: 'Roboto Slab', serif; font-size: 20px;" class="secondary--text">S/.{{i.unitPrice}}.00</h4>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="11">
                            <h4 style="font-family: 'Open Sans Condensed', sans-serif;font-family: 'Roboto Slab', serif; font-size: 14px;">Stock: {{i.stock}} platos</h4>
                        </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>
        
        
        </v-card>
          

          <!--Dialog-->
        <v-dialog v-model="dialog" width="500" >
            <v-card>
                <v-card-title>Stock</v-card-title>
                <v-text-field label="Stock" v-model="stockU" color="blue" class="ml-12"></v-text-field>
                <small v-if="cambio" class="error--text ml-12">Debe ingresar una cantidad.</small>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn @click="agregarMenu()">Agregar</v-btn>
                </v-card-actions>
            </v-card>


        </v-dialog>
        </v-card>

    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: 'AMenu',
    data() {
        return {
             entrada: [],
             segundo:[],
             postre: [],
           platosTodos: [],
            stockU: 0,
            cambio: false,
            entrada_menu: [],
            segundo_menu: [],
            postre_menu: [],
            boton: 'Agregar',
            dialog: false,
            auxID: 0,
            auxCat: 0,
            obtFechaDB: '',
            fecha2: new Date().toISOString().substr(0,10)
        }
    },
    methods:{
        back(){
            this.$router.push('/acarta')
        },
        async getExtra(){
            try{
                const extraDB = await this.axios.get('v1/plate');
                await extraDB.data.forEach(element => {
                    let item= {}
                    
                    if(element.category.id==2){
                        item.id = element.id;
                        item.name= element.name;
                        item.unitPrice = element.unitPrice;
                        this.entrada.push(item)
                    } else if(element.category.id==3){
                        item.id = element.id;
                        item.name= element.name;
                        item.unitPrice = element.unitPrice;
                        this.segundo.push(item)
                    } else if(element.category.id==4){
                        this.postre.push(item)
                    } 
                    
                });
            }catch(error){
                console.log(error)
            }
        },
        getImgUrl(pic) {
           // return require('../assets/'+pic+'.jpg')
           return 'https://restaurant-backend-01.herokuapp.com/v1/plate/image/'+pic
        },
        agregar(pid, c){
            this.dialog=true;
            this.auxID=pid;
            this.auxCat=c
        },
        async agregarMenu(){
            if(this.stockU==0){
                this.cambio=true
            }else{
                this.dialog=false
                this.cambio= false
                try{
                  if(this.obtFechaDB.data==""){
                        const fechaE = {
                            createAt: this.fecha2
                        }
                        this.obtFechaDB = await this.axios.post('v1/menu', fechaE)
                        const platoE = {
                            stock: 60,
                            plate : {id: 241},
                        }
                        const salidaDB = await this.axios.patch(`v1/menu/${this.obtFechaDB.data.id}`,platoE)
                   } 
                   const platoE = {
                        stock: this.stockU,
                        plate : {id: this.auxID},
                    }
                  const salidaDB = await this.axios.patch(`v1/menu/${this.obtFechaDB.data.id}`,platoE)
                    let item = {}
                   // item.id = salidaDB.data.plateMenuDaily[0].plate.id;
                    item.plato = salidaDB.data.plateMenuDaily[0].plate.id;
                    item.stock = this.stockU;
                    item.platoName=this.filtrarNombrePlato(item.plato)
                    item.unitPrice=4
                    if(this.auxCat==2){
                        
                        this.entrada_menu.push(item) 
                    } else if(this.auxCat==3){
                        this.segundo_menu.push(item)
                    } /* else if(this.auxCat==4){
                        this.postre_menu.push(item)
                    } */
                    
                    this.stockU= 0 
                }catch(error){
                    console.log(error)
                }
            }
        },
        async mostrarMenu(){
            try{
                this.obtFechaDB = await this.axios.get(`v1/menu/day/${this.fecha2}`)
                
                const segundosDB = await this.axios.get(`v1/menu/${this.obtFechaDB.data.id}`)
                console.log(segundosDB)
                await segundosDB.data.plateMenuDaily.forEach(element => {
                   
                    let found = this.entrada.filter(plato => plato.id == element.plate.id)
                    console.log(found)
                    if(found.length !=0){
                        let item = {}
                       // item.id = element.plate.id;
                        item.plato = element.plate.id;
                        item.stock = element.stock;
                        item.platoName= this.filtrarNombrePlato(item.plato)
                        item.unitPrice = this.filtrarPrecioPlato(item.plato)
                        this.entrada_menu.push(item)
                    } else{
                        let found2 = this.segundo.filter(plato2 => plato2.id == element.plate.id)
                        if(found2.length !=0){
                            let n= this.segundo_menu.filter(plato => plato.plato == element.plate.id)
                            if (n !=0){
                                 console.log("")
                            } else{let item = {}
                                item.plato = element.plate.id;
                                item.stock = element.stock;
                                item.platoName= this.filtrarNombrePlato(item.plato)
                                item.unitPrice = this.filtrarPrecioPlato(item.plato)
                                this.segundo_menu.push(item)}
                        }else{
                            
                            console.log("next")
                            
                        } 
                    }
                    console.log(this.segundo_menu)
                    
                });
            }catch(error){
                console.log("No existe menú")
                console.log(error)
            }
        },
        filtrarNombrePlato(id){
            let found = this.entrada.filter(plato => plato.id == id)
            if(found.length !=0){
                return found[0].name
            } else{
                let found2 = this.segundo.filter(plato => plato.id == id)
                if(found2.length !=0){
                    return found2[0].name
                } else{
                    
                        console.log()
                    
                }
                
            }
            
        },
        filtrarPrecioPlato(id){
            let found = this.entrada.filter(plato => plato.id == id)
            if(found.length !=0){
                return found[0].unitPrice
            } else{
                let found2 = this.segundo.filter(plato => plato.id == id)
                if(found2.length !=0){
                    return found2[0].unitPrice
                }else{
                    console.log()
                }
            }
        },
        
    },
    created() {
      this.getExtra()
     this.mostrarMenu()
    },
}
</script>