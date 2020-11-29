<template>
    <v-container fluid style="position: sticky; margin-top: -90px;">
        <v-footer dark padless class="flex pa-2 black--text" flat tile style="position: sticky" color="#dbdbd9" >
            
                   
                    <v-col cols="4">
                        <v-img src="../assets/logo_h.png" contain height="56" aspect-ratio="0.1" justify="center" ></v-img>

                        <small class="ml-14"></small>

                        
                    </v-col>
                    <v-col cols="4" align="center" justify="center" >
                        <h6 style="color:#282828" >Equipo:</h6>
                        <h5 style="color:#282828">Little Big Team</h5>
                        <p></p>
                        <strong class="subheading" style="color:#282828"> Hackathon UTP – El Comercio 2020</strong>
                        <p></p>
                    </v-col>
                    <v-col cols="4" align="right">
                        <v-btn icon color="#720d2c" class="mr-6">
                            <v-icon >mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn  icon color="#720d2c" class="mr-6">
                            <v-icon >mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn  icon color="#720d2c" class="mr-14">
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