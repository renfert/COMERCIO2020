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
        <!-- Estadísticas-->
        <v-row class="ml-16 mr-12 pa-4" justify="center">
            <v-col cols="7" sm="12" md="7">
                <h3 class="secondary--text mb-6">Número de platos vendidos</h3>
                <template>
                    <div>
                        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
                    </div>
                </template>
            </v-col>
            <v-col cols="3" sm="12" md="5">
                <h3 class="secondary--text mb-6">Puntuación de repartidores</h3>
               <apexchart width="350" type="donut" :options="chartOptions" :series="chartSeries"></apexchart>
            </v-col>
        </v-row>
        <v-row class="ml-16 mr-12 pa-4">
            <v-col cols="7" sm="12" md="12">
                <h3 class="secondary--text mb-6">Número de pedidos por cliente (Global)</h3>
                <template>
                    <div>
                        <apexchart type="bar" height="350" :options="chartOptions3" :series="series3"></apexchart>
                    </div>
                </template>
            </v-col>
        </v-row>

        
        
    </v-container>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import axios from "axios";
import VueApexCharts from 'vue-apexcharts';
//import ApexCharts from 'apexcharts';
export default {
    name: 'APedidos',
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
            { text: 'Repartidor', value: 'repartidor', sortable: false, },
            { text: 'Dirección', value: 'direccion' },
            { text: 'Puntuación', value: 'puntuacion' },
            ],
            pedidos: [],

            //Estadísticas
            
            options: {
                chart: {
                id: 'vuechart'
                },
                xaxis: {
                categories: []
                }
            },
            series: [{
                name: 'Unidades vendidas',
                data: []
            }],

            un: [],
            categ: [],
            ordenes: [],
            clientes: [],
            repartidores: [],
            puntuacion: [],
            //Donut
            chartSeries: [],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: [],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
            //Bar
             series3: [{
            data: []
          }],
          chartOptions3: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: [],
            }
          },
          //Line
        }
    },
    computed: {
    },
    methods: {
       // ...mapMutations(['obtenerUser'])
       updateChart() {
            const newData2 = this.un
            // In the same way, update the series option
            this.series = [{
                data: newData2
            }]
            const newDataCat = this.categ

            for(let i=0; i<this.un.length; i++){
                this.options.xaxis.categories[i]=[
                    newDataCat[i]
                ]
            }
        },
        updateChart2() {
            const newData2 = this.repartidores
                this.chartSeries=[5,5,3,4]
            const newDataCat = this.puntuacion
            console.log(this.chartSeries)
            for(let i=0; i<this.puntuacion.length; i++){
                this.chartOptions.labels[i]=[
                    newDataCat[i]
                ]
            }
        },
        updateChart3() {
            const newData2 = this.ordenes
            // In the same way, update the series option
            this.series3 = [{
                data: newData2
            }]
            const newDataCat = this.clientes

            for(let i=0; i<this.un.length; i++){
                this.chartOptions3.xaxis.categories[i]=[
                    newDataCat[i]
                ]
            }
        },
       async obtenerPedido(){
           try{
               const pedidosDB = await this.axios.get('v1/order');
               const addressDB = await this.axios.get('v1/address');
                const repDB = await this.axios.get('v1/report/delivery');
               const clieDB = await this.axios.get('v1/report/client');
               
               await pedidosDB.data.forEach(element => {
                   let item= {}
                   item.id = element.id;
                   item.plato= element.orderDetail[0].orderDetailPlate[0].plate.name;
                   item.estado= element.statusOrder.id;
                   if(item.estado==1){item.estadoD = 'En preparación'}
                   else if(item.estado==2){item.estadoD = 'Enviado'}
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
                   this.un.push(item.unidades)
                   this.pedidos.push(item)
                    this.categ.push(item.plato)
                   this.updateChart()
                   
               });
               await repDB.data.forEach(element => {
                   this.repartidores.push(element.rating)
                   this.puntuacion.push(element.name + '  ' + element.lasname)
                   
                   this.updateChart2()
               });
               await clieDB.data.forEach(element => {
                   this.ordenes.push(element.nOrder)
                   this.clientes.push(element.name + '  ' + element.lasname)
                   this.updateChart3()
               });
           }catch(error){
               console.log(error);
           }
       },
       getColor (estado) {
        if (estado == 1) return 'red'
        else if (estado  == 2) return 'orange'
        else return 'green'
      },
      

    },
    components: {
        apexchart: VueApexCharts,
    },
    
    
    created() {
        this.obtenerPedido()
        //this.options.xaxis.categories.push([1991, 1992, 1993, 1994, 1995, 1996])
        //this.series[0].data.push(30, 40, 45, 50, 49, 60)
        //console.log(this.options)
        
    },
    mounted() {
    },
}
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>