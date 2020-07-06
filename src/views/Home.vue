<template>
  <v-container fluid>
    
    <v-row >
      <v-img src="../assets/7848.jpg"  height="400" width="1300" aspect-ratio="0.1">
      
      <v-col xs="12" sm="12" md="4" lg="4" justify="center" class="mt-16 ml-16">
        
        <v-img src="../assets/slogan2.png" class="mt-10 ml-8" contain >
          <p class="mt-16 "> </p>
           <v-spacer></v-spacer>
          <v-btn class="mt-16 ml-10 secondary--text" color="#8c2041" style="" outlined href="/carta">Ver Carta</v-btn>
          <v-btn class="mt-16 ml-6 " color="#8c2041" dark href="/login">¡Pedir Ahora!</v-btn>
        </v-img>
      </v-col>
      </v-img>
    </v-row>

    <v-row class="pa-5 ml-5 mr-5">
      <v-col  sm="12" xs="12" md="4" align="center" >
        <v-banner single-line>
          
          <h1 style="font-family: 'Charm', cursive;" class="secondary--text"> Misión </h1>
          <p></p>
        </v-banner>
        <p></p>
        <p class="font-italic">
          Alcanzar el primer lugar en el mercado, como el mejor lugar para degustar 
          comida con sazón peruana, con un excelente servicio y calidad,
          y nuestros productos para lograr la consolidación en la preferencia de nuestros clientes.
        </p>
      </v-col>
      <v-col sm="12" xs="12" md="7" class="ml-16" align="center">
        
          <p> </p>
          <p> </p>
        
        <v-row>
            <v-col  xs="12" md="6" >
              <v-img src="../assets/i1.png" width="350" contain></v-img>
            </v-col>
            <v-col  xs="12" md="6">
              <v-img src="../assets/i2.png" width="350" contain></v-img>
            </v-col>
            
          </v-row>
      </v-col>
    </v-row>

    <v-row class="pa-5 ml-5 mr-5">
      <v-col  sm="12" xs="12" md="4" align="center" >
        <v-banner single-line>
          <h1 style="font-family: 'Charm', cursive;" class="secondary--text"> Visión </h1>
          <p></p>
        </v-banner>
        <p></p>
        <p class="font-italic">
          Posicionarnos en el mercado regional, estableciendo una cadena exitosa, 
          con un alto reconocimiento  por  el  sabor  y  calidad  de  nuestros  productos 
           y  nuestra  cultura  de servicio.
          
        </p>
      </v-col>
       <v-col sm="12" xs="12" md="7" class="ml-16" align="center">
        
          <v-row>
            <v-col  xs="12" md="6" >
              <v-img src="../assets/i3.png" width="350" contain></v-img>
            </v-col>
            <v-col  xs="12" md="6">
              <v-img src="../assets/i4.png" width="350" contain></v-img>
            </v-col>
            
          </v-row>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    ///HelloWorld
  }
}
</script>
