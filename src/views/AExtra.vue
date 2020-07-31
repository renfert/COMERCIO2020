<template>
    <v-container fluid class="pa-0">>
        <v-row>
            <v-col cols="1" class="ml-6 mt-10">
                <v-btn color="secondary" fab class="ml-16" @click="back"> 
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="10">
                <h1  class=" secondary--text mt-8 ml-8" align="center" >Carta: Platos Extra
                <v-img src="../assets/cocinero.png" height="50" contain></v-img> </h1>
            </v-col>
        </v-row> 
        <p></p>
        <v-divider></v-divider>

        <!--Card options-->
        <v-card>
         <v-row justify="center" class="ml-16 mr-8">
            <v-col xs="10" sm="4" md="3"  v-for="i of extra" :key="i.id">
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
                                    <v-btn color="green" v-if="!cambio" dark >Agregar</v-btn>
                                    <v-btn color="green" dark >Quitar</v-btn>

                                </v-col>
                            </v-row> 
                        </v-card-text>
                        <v-row>
                            <v-col cols="3"> <h5>Stock:</h5> </v-col>
                            <v-col cols="8">
                                <v-text-field label="Stock" v-model="stockU" color="blue"></v-text-field>
                                <small v-if="cambio">Debe ingresar una cantidad.</small>
                            </v-col>
                        </v-row>
                        
                        
                    </v-card>
                </v-card>
            </v-col>
          </v-row>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: 'AExtra',
    data() {
        return {
            extra: [],
            stockU: 0,
            cambio: false
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
                    if(element.category.id==1){
                        item.id = element.id;
                        item.name= element.name;
                        item.unitPrice = element.unitPrice;
                        this.extra.push(item)
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
        agregar(id){
            if(stockU==0){
                cambio=true
            }else{
                cambio= false

            }
        }
    },
    created() {
       this.getExtra()
    },
}
</script>