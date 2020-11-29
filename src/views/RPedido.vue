<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Pedidos
            <v-img src="../assets/monitor.png" height="50" contain></v-img>
        </h1>
        
        <p></p>
        <v-divider></v-divider>
        <!-- Tabla-->
        <v-row class="ml-12 mb-4">
            <v-col>
                <v-data-table :headers="headers" :items="pedidos" class="elevation-1 ml-6 mr-6">
                    

                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: 'RPedido',
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
            ],
            pedidos: [],
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
               const pedidosDB = await this.axios.get('v1/order');
               const addressDB = await this.axios.get('v1/address');
               
               await pedidosDB.data.forEach(element => {
                   if(element.statusOrder.id==1){
                        let item= {}
                        item.id = element.id;
                        item.plato= element.orderDetail[0].orderDetailPlate[0].plate.name;
                        item.estado= element.statusOrder.id;
                        item.estadoD = 'En preparación'
                        item.unidades= element.orderDetail[0].orderDetailPlate[0].nunit;
                        item.fecha= element.dateAt;
                        if(element.payed){
                            item.pago= 'Cancelado';
                        }else{item.pago= 'No cancelado'}
                        let found = addressDB.data.filter(dir => dir.id == element.address.id);
                        item.direccion=found[0].description + ' - ' + found[0].section.name;
                        this.pedidos.push(item) 
                   } else{
                       console.log()
                   }
                   
               });
           }catch(error){
               console.log(error);
           }
       },
       async cambiar(ide){
           this.pedidos[ide].estado=2
           this.pedidos[ide].estadoD='Despachado'
           try{
               const statusOrder= {
               id: ide,
                }
            const salidaDB = await this.axios.update(`v1/order/${ide}`,statusOrder)
            
          }catch(error){
            this.correo_error=true
          }
         

       }
    },
    created() {
        this.obtenerPedido()
    },
}
</script>