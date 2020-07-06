<template>
    <v-container fluid>
        <v-footer dark padless class="primary flex pa-2 secondary--text" flat tile >
            
                   
                    <v-col cols="4">
                        
                        
                        <h5 class="ml-6">Elaborado por:</h5>
                        <small class="ml-6">Catherine Salguero Casani</small> <br/>
                        <small class="ml-6">Rafael Enrique Livise Larico </small> <br/>
                        <small class="ml-6">Guido German Huanca Carbajal</small>
                        
                    </v-col>
                    <v-col cols="4" align="center" >
                        <h6>Docente del área:</h6>
                        <h5>Ing. Aníbal Sardón Paniagua</h5>
                        <p></p>
                        <strong class="subheading">Universidad Tecnológica del Perú UTP</strong>
                    </v-col>
                    <v-col cols="4" align="right">
                        <v-btn dark icon color="secondary" class="mr-6">
                            <v-icon >mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn dark icon color="secondary" class="mr-6">
                            <v-icon >mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn dark icon color="secondary" class="mr-6">
                            <v-icon >mdi-youtube</v-icon>
                        </v-btn>
                    </v-col>
                    
                
        </v-footer>
    </v-container>
</template>

<script>
export default {
    name: 'Footer'
}
</script>