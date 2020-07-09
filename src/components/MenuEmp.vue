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
                            <v-list-item-subtitle>Administrador</v-list-item-subtitle>
                            
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
                        <v-list-item-icon>
                            <v-icon>{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                    
                </v-list>
            </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    name: 'MenuEmp',
    data (){
        return{
            //Menu
            drawer: true,
            items: [
            { title: 'Inicio', icon: 'mdi-home', enlace:'/abienvenida' },
            { title: 'Platos', icon: 'mdi-silverware-fork-knife', enlace:'/' },
            { title: 'Carta', icon: 'mdi-view-list', enlace:'/' },
            { title: 'Pedidos', icon: 'mdi-ballot', enlace:'/' },
            { title: 'Recepcionistas', icon: 'mdi-account-details', enlace:'/' },
            { title: 'Repartidores', icon: 'mdi-motorbike', enlace:'/' },
            
            ],
            permanent: true,
            miniVariant: true,
            expandOnHover: true,
            //Datos Admin
            nombreAdmin: 'Nombre Admin'
        }
    },
}
</script>