<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Gestión de la Carta
        <v-img src="../assets/plato2.png" height="50" contain></v-img> </h1>
        <p></p>
        <v-divider></v-divider>
        <v-row class="mt-12 ml-16">
            <v-col cols="6">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="400">
                        <v-img :aspect-ratio="16/9" src="../assets/carta_menu.png">
                            <v-expand-transition>
                                <div v-if="hover" 
                                class="d-flex transition-fast-in-fast-out secondary darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;">
                                    <small> Editar menú del día</small>
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <v-btn absolute color="secondary" class="white--text" fab large right top>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <h3 class="display-1 font-weight-light secondary--text mb-2">Menú del día</h3>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="6">
                <v-hover v-slot:default="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="400">
                        <v-img :aspect-ratio="16/9" src="../assets/carta_extra.jpg">
                            <v-expand-transition>
                                <div v-if="hover" 
                                class="d-flex transition-fast-in-fast-out secondary darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;">
                                    <small> Editar platos extra</small>
                                </div>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <v-btn absolute color="secondary" class="white--text" fab large right top>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <h3 class="display-1 font-weight-light secondary--text mb-2">Platos Extra</h3>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            
        </v-row>
        
        
    </v-container>
</template>

<script>
export default {
    name: 'ACarta',
    data(){
        return{
            
        }
    }
}
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
