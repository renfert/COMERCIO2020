<template>
    <v-container fluid>
    <v-row class="pa-5 ml-5 mr-5" justify="center" align="center">
      <v-col  sm="12" xs="12" md="6" align="center" >
        <v-img src="../assets/bien.png" align="center" contain height="510" aspect-ratio="0.1"></v-img>

      </v-col>
      <v-col  sm="12" xs="12" md="6" align="center" >
        <p class="font-italic">
         Infórmate, participa y ayúdanos con tus reportes en estas Elecciones 
Generales del Perú 2021. En esta plataforma encontrarás información
sobre los candidatos participantes en las elecciones, también podrás realizar tus consultas,
reportar incidencias y apoyar a tus propuestas favoritas. De esta manera podremos llegar a realizar
un voto verdaderamente informado y consciente. 
        </p>
        <v-btn align="center" color="#E04955" dark href='/candidatos'>Comenzar</v-btn>
      </v-col>
       
    
    </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'Mision'
}
</script>