<template>
    <v-container fluid>
         <v-row style="height:90px;"></v-row>
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px;" class="mt-12 mb-12" 
        justify="center" align="center">Mis Pedidos
        <p></p>
        </h2>
         <!-- Tabla-->
        <v-row class="ml-12 mb-4">
            <v-col>
                <v-data-table :headers="headers" :items="pedido" class="elevation-1 ml-6 mr-6">
                    <template v-slot:item.estado="{ item }">
                        <v-chip :color="getColor(item.estado)" dark>{{ item.estadoD }}</v-chip>
                    </template>
                    <template v-slot:item.puntuacion="{ item }">
                        <v-rating v-model="item.puntuacion" color="yellow darken-3" background-color="grey darken-1"
                            empty-icon="$ratingFull" small ></v-rating>
                    </template>

                </v-data-table>
            </v-col>
        </v-row>

        <v-img src="../assets/corazon.png" height="150" contain></v-img>

    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: 'MisPedidos',
    data() {
        return {
            headers: [
            {
                text: 'Plato',
                align: 'start',
                sortable: false,
                value: 'plato',
            },
            { text: 'Estado', value: 'estado' },
            
            { text: 'Fecha', value: 'fecha' },
            { text: 'Pago', value: 'pago' },
            { text: 'Dirección', value: 'direccion' },
            { text: 'Puntuación', value: 'puntuacion' },
            ],
            pedido: [],
        }
    },
    
    methods: {
        getColor (estado) {
        if (estado == 1) return 'red'
        else if (estado  == 2) return 'orange'
        else return 'green'
      },
      async obtenerPedido(){
           try{
               const pedidosDB = await this.axios.get('v1/order/personal');
               const addressDB = await this.axios.get('v1/address');
               console.log(pedidosDB)
               await pedidosDB.data.forEach(element => {
                   let item= {}
                   item.id = element.id;
                   item.plato= element.orderDetail[0].orderDetailPlate[0].plate.name;
                   item.estado= element.statusOrder.id;
                   if(item.estado==1){item.estadoD = 'En preparación'}
                   else if(item.estado==2){item.estadoD = 'Despachado'}
                   else{item.estadoD = 'Entregado'}
                   item.unidades= element.orderDetail[0].orderDetailPlate[0].nunit;
                   item.fecha= element.dateAt;
                   if(element.payed){
                    item.pago= 'Cancelado';
                   }else{item.pago= 'No cancelado'}
                   item.repartidor= element.deliveryAt;
                   item.puntuacion = element.puntuationRating;
                   
                    let found = addressDB.data.filter(dir => dir.id == element.address.id);
                    item.direccion=found[0].description + ' - ' + found[0].section.name;
                   this.pedido.push(item)
                   
               });
           }catch(error){
               console.log(error);
           }
       },
    },
    created() {
        this.obtenerPedido()
    },
}
</script>