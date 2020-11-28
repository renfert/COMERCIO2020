<template>
    <v-container fluid style="position: sticky; margin-top: -90px;">
        <v-footer dark padless class="flex pa-2 black--text" flat tile style="position: sticky" color="white" >
            
                   
                    <v-col cols="4">
                        <h5 class="ml-14">UTP - Sede Arequipa</h5>
                        <small class="ml-14"></small>

                        
                    </v-col>
                    <v-col cols="4" align="center" justify="center">
                        <h6>Equipo:</h6>
                        <h5>Little Big Team</h5>
                        <p></p>
                        <strong class="subheading"> Hackathon UTP – El Comercio 2020</strong>
                        <v-img src="../assets/logo_h.jpg" contain height="56" aspect-ratio="0.1" justify="center" ></v-img>

                    </v-col>
                    <v-col cols="4" align="right">
                        <v-btn dark icon color="black" class="mr-6">
                            <v-icon >mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn dark icon color="black" class="mr-6">
                            <v-icon >mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn dark icon color="black" class="mr-14">
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