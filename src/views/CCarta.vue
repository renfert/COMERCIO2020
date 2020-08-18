<template>
     <v-container fluid>
        <v-row style="height:90px;"></v-row>

        <v-row>
            <v-col cols="9">

            
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
                                            <h4 >{{item.platoName}}</h4>
                                        </v-card-title>
                                        <!-- Sección texto-->
                                        <v-card-text>
                                            <h4 style="font-family: 'Roboto Slab', serif; font-size: 20px;" class="secondary--text">S/.{{item.unitPrice}}.00</h4>
                                            
                                        </v-card-text>
                                         <v-row>
                                        <v-col cols="2">
                                        </v-col>
                                        <v-col cols="6">
                                            <v-btn color="green" dark @click="agregarCarrito(item.id)">Agregar</v-btn>

                                        </v-col>
                                    </v-row> 
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
                                            <h4 >{{i.platoName}}</h4>
                                        </v-card-title>
                                        <!-- Sección texto-->
                                        <v-card-text>
                                            <h4 style="font-family: 'Roboto Slab', serif; font-size: 20px;" class="secondary--text">S/.{{i.unitPrice}}.00</h4>

                                   </v-card-text>
                                   <v-row>
                                        <v-col cols="2">
                                        </v-col>
                                        <v-col cols="6">
                                            <v-btn color="green" dark @click="agregarCarrito(i.id)">Agregar</v-btn>

                                        </v-col>
                                    </v-row> 
                                    </v-card>
                        </v-card>
                    </v-col>
                </v-row>


                </v-tab-item>
            </v-tabs-items>
        </v-card>
        </v-col>
        <!--CARRITO-->
        <v-col cols="3">
             <h2 style="font-family: 'Oswald', sans-serif; font-size: 24px;" class="mt-10" justify="center" align="center">Carrito
                 <v-img src="../assets/anadir.png" height="50" contain></v-img>
             </h2>
             <p></p>
             <v-divider></v-divider>
        <v-card>
            <v-row >
                <v-col cols="12" v-for="(i, index) of pedido" :key="i.id" >
                    <v-row>
                        <v-col cols="4">
                            <v-img width="150" :src="getImgUrl(i.plato)" style="border-radius: 999px; border: 10px solid #f1f1f1"></v-img>

                        </v-col>
                        <v-col cols="8">
                            <v-row>
                                <v-col cols="7">
                                    <h4 style="font-family: 'Roboto Slab', serif; font-size: 14px;">{{i.platoName}}</h4>
                                </v-col>
                                <v-divider dark></v-divider>
                                <v-col cols="5">
                                    <h4 style="font-family: 'Roboto Slab', serif; font-size: 14px;" class="secondary--text">S/.{{i.unitPrice}}.00</h4>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <small>Cantidad :  </small>
                                    <span> {{i.cantidad}}</span>
                                
                                    <v-btn icon @click="restar(index)"> <v-icon>mdi-minus</v-icon> </v-btn>
                                    <v-btn icon @click="aumentar(index)"> <v-icon>mdi-plus</v-icon> </v-btn>

                                    <v-btn icon color="error" @click="eliminar(i.plato)"> <v-icon>mdi-delete</v-icon> </v-btn>
                                </v-col>
                                    
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
        <v-row>
            <p></p>
            <v-col cols="1"></v-col>
            <v-col cols="10">
                <v-btn color="orange" block @click="continuar">Continuar</v-btn>
            </v-col>
        </v-row>
        
        </v-col>
        
        </v-row>
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
        segundos: '',
        fecha2: new Date().toISOString().substr(0,10),


        listaEntradas: [],
        listaSegundos: [],
        listaExtras: [],
        todosPlatos: [],

        pedido: [],
      }
    },
    computed: {
        ...mapState(['platosPedido'])
    },
    methods:{
        
        listaComidas(i){
            if(i==1){
                this.entradas='Entradas',
                this.segundos='Segundos',

                this.platos=this.listaEntradas,
                this.menu_segundos=this.listaSegundos
            } else{
                this.entradas=' ',
                this.segundos=' ',
                
                this.platos = this.listaExtras,
                this.menu_segundos=''
            }
        },
        getImgUrl(pic) {
           return 'https://restaurant-backend-01.herokuapp.com/v1/plate/image/'+pic
        },
        async obtenerPlatos(){
           try{
            const obtFechaDB = await this.axios.get(`v1/menu/day/${this.fecha2}`)
            const platosDB = await this.axios.get('v1/plate')
            await platosDB.data.forEach(element => {
                   let ite = {}
                   ite.id = element.id;
                   ite.name= element.name;
                   ite.unitPrice = element.unitPrice;
                   ite.categoryID = element.category.id;
                   this.todosPlatos.push(ite)
            });
            const menuDB = await this.axios.get(`v1/menu/${obtFechaDB.data.id}`)
            console.log(this.menuDB)
           await menuDB.data.plateMenuDaily.forEach(element => {
                let item = {}
                item.id = element.plate.id;
                item.stock = element.stock;
                // let found = addressDB.data.filter(dir => dir.id == element.address.id);
                let found = platosDB.data.filter(plat => plat.id == element.plate.id);
                item.platoName= found[0].name;
                item.unitPrice = found[0].unitPrice;
                item.category = found[0].category.id;
                if(item.category == 1){this.listaExtras.push(item)} 
                else if(item.category == 2){this.listaEntradas.push(item)} 
                else if(item.category == 3){this.listaSegundos.push(item)} 
                else {console.log()}
                this.listaComidas(1)
            });
           }catch(error){
               console.log(error);
           }
       },
       agregarCarrito(ide){
           let found = this.todosPlatos.filter(plat => plat.id == ide);
           
           let item = {}
           item.plato= found[0].id
           item.platoName=found[0].name
           item.unitPrice= found[0].unitPrice
           item.cantidad=1
           this.pedido.push(item)
       },
       eliminar(ide){
           console.log(ide)
            this.pedido = this.pedido.filter(e => e.plato !=ide)
        },
       continuar(){
           console.log(this.pedido)
           localStorage.setItem("pedido",JSON.stringify(this.pedido))
           this.platosPedido=this.pedido
            this.$router.push('/datospedido')
        },
        aumentar(ine){
            this.pedido[ine].cantidad++
        },
        restar(ine){
            if(this.pedido[ine].cantidad>1)
            this.pedido[ine].cantidad--
        },
    },
    created(){
        this.obtenerPlatos()

    }
}

</script>