<template>
    <v-container fluid class="pa-0" >
            <v-navigation-drawer app v-model="drawer" color="secondary" class="overflow-hidden" 
            :expand-on-hover="expandOnHover" :mini-variant="miniVariant"
            :permanent="permanent"  dark>
                <v-list dense nav class="py-0">
                    <v-list-item two-line :class="miniVariant && 'px-0'" link>
                        <v-list-item-avatar>
                            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{nombreAdmin}}</v-list-item-title>
                            <v-list-item-subtitle>{{rol}}</v-list-item-subtitle>
                            
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link class="mb-5">
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
                { title: 'Inicio', icon: 'mdi-home', enlace:'/abienvenida' },
                { title: 'Platos', icon: 'mdi-silverware-fork-knife', enlace:'/aplatos' },
                { title: 'Carta', icon: 'mdi-view-list', enlace:'/acarta' },
                { title: 'Pedidos', icon: 'mdi-ballot', enlace:'/apedidos' },
                { title: 'Recepcionistas', icon: 'mdi-account-details', enlace:'/arecepcionistas' },
                { title: 'Repartidores', icon: 'mdi-motorbike', enlace:'/arepartidores' },
            ],
            rec:[
                { title: 'Inicio', icon: 'mdi-home', enlace:'/abienvenida' },
                { title: 'Pedidos', icon: 'mdi-ballot', enlace:'/apedidos' },
                { title: 'Repartidores', icon: 'mdi-motorbike', enlace:'/arepartidores' },
            ],
            rep:[
                { title: 'Inicio', icon: 'mdi-home', enlace:'/abienvenida' },
                { title: 'Pedidos', icon: 'mdi-ballot', enlace:'/apedidos' },
            ],

            permanent: true,
            miniVariant: true,
            expandOnHover: true,
            //Datos Usuario
            nombreAdmin: 'Nombre Admin',
            rol: '',
            nuevos: false,
        }
    },
    methods: {
        tipo(n){
            console.log(n)
            if(n==2){
                this.items = this.admin
                this.rol="Administrador"
                this.nuevos=false
            } else if(n==3){
                this.items = this.rec
                this.rol="Recepcionista"
                this.nuevos=true
            } else if(n==4){
                this.items = this.rep
                this.rol="Repartidor"
                this.nuevos=true
            }
        }
    },
    created() {
        this.tipo(this.user)
    },
}
</script>