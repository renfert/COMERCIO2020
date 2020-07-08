<template>
    <v-container fluid class="pa-1">
            <v-navigation-drawer app v-model="drawer" color="secondary" class="overflow-hidden" 
            :expand-on-hover="expandOnHover" :mini-variant="miniVariant"
            :permanent="permanent"  dark>
                <v-list dense nav class="py-0">
                    <v-list-item two-line :class="miniVariant && 'px-0'">
                        <v-list-item-avatar>
                            <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Titulo</v-list-item-title>
                            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item  v-for="item in items" :key="item.title" link>
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
            drawer: true,
            items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard' },
            { title: 'Photos', icon: 'mdi-image' },
            { title: 'About', icon: 'mdi-help-box' },
            ],
            permanent: true,
            miniVariant: true,
            expandOnHover: true,
        }
    },
}
</script>