<template>
    <v-container fluid class="pa-0" >
            <v-navigation-drawer app v-model="drawer" color="secondary" class="overflow-hidden" 
            :expand-on-hover="expandOnHover" :mini-variant="miniVariant"
            :permanent="permanent"  dark>
                <v-list dense nav class="py-0">
                    <v-list-item two-line :class="miniVariant && 'px-0'" link>
                        <v-list-item-avatar>
                            <img :src="foto" alt="">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{nombreEmp}}</v-list-item-title>
                            <v-list-item-subtitle>{{rol}}</v-list-item-subtitle>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link class="mb-5" @click="cerrar_sesion">
                        <v-list-item-icon>
                            <v-icon>mdi-power</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Cerrar Sesión</v-list-item-title>
                        </v-list-item-content>
                        
                    </v-list-item>

                    <v-divider></v-divider>

                    <v-list-item  v-for="item in items" :key="item.title" link :href="item.enlace">
                        <v-list-item-icon >
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item link v-if="nuevos">
                        <v-list-item-icon small >
                            <v-badge color="green" content="2" >
                                 <v-icon small>mdi-account-clock</v-icon>
                            </v-badge>
                            
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Pedidos nuevos</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                    
                </v-list>
            </v-navigation-drawer>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: 'MenuEmp',
    
    props: ['user'],
    data (){
        return{
            //Menu
            drawer: true,
            items: [
            
            ],
            admin:[
                { title: 'Inicio', icon: 'mdi-home', enlace:'/admin' },
                { title: 'Candidatos', icon: 'mdi-account-tie', enlace:'/candidatos' },
                { title: 'Incidencias en campaña', icon: 'mdi-message-bulleted', enlace:'/incidencias' },
                { title: 'Reportes de propuestas', icon: 'mdi-chart-bar', enlace:'/propuestas' },
                { title: 'Estadísticas generales', icon: 'mdi-ballot', enlace:'/' },
            ],
            rec:[
                { title: 'Inicio', icon: 'mdi-home', enlace:'/abienvenida' },
                { title: 'Candidatos', icon: 'mdi-account-tie', enlace:'/candidatos' },
                { title: 'Incidencias en campaña', icon: 'mdi-message-bulleted', enlace:'/incidencias' },
                { title: 'Propuestas clasificadas', icon: 'mdi-chart-bar', enlace:'/propuestas' },

            ],

            permanent: true,
            miniVariant: true,
            expandOnHover: true,
            //Datos Usuario
            nombreEmp: '',
            rol: '',
            nuevos: false,
            foto: ''
        }
    },
    methods: {
        tipo(n){
            console.log(n)
            if(n==2){
                this.items = this.admin
                this.rol="Administrador"
                this.nuevos=false
                this.foto="https://randomuser.me/api/portraits/men/81.jpg"
            } else if(n==3){
                this.items = this.rec
                this.rol="Recepcionista"
                this.nuevos=true
                this.foto="https://randomuser.me/api/portraits/women/17.jpg"
            } else if(n==4){
                this.items = this.rep
                this.rol="Repartidor"
                this.nuevos=true
                this.foto="https://randomuser.me/api/portraits/men/22.jpg"
            }
        },
        async obtenerNombre(){
           try{
               const nombre_e = await this.axios.get('v1/personal');
               this.nombreEmp=nombre_e.data.name+' '+nombre_e.data.lasname

           }catch(error){
               console.log(error);
           }
        },
        cerrar_sesion(){
            localStorage.setItem("token",null)
            localStorage.setItem("u",0)
            this.$root.$emit('actMenu')
            this.$router.push('/')
            
        }
    },
    created() {
        this.tipo(this.user),
        this.obtenerNombre()
    },
}
</script>