<template>
    <v-container fluid class="pa-0">
        <v-row >
      <v-img src="../assets/7849.jpg" height="500" width="1300" aspect-ratio="0.1">
      
      <v-col xs="12" sm="12" md="12" lg="12" justify="center" class="mt-16" align="center">
        
        <p class="mt-12"> . </p>
          
          <h1 style="font-family: 'Raleway', sans-serif; text-transform: uppercase; font-size: 48px; color: #fff; font-weight: 800">
            Tradición y orgullo <br>arequipeño</h1>
          
           <v-spacer></v-spacer>
          <v-btn class="mt-16 ml-6 white--text" color="white" outlined @click="back">Ver Carta</v-btn>
          <v-btn class="mt-16 ml-6 " color="secondary" dark href="/login">¡Pedir Ahora!</v-btn>
        
      </v-col>
      </v-img>
    </v-row>

    <v-row>
      <v-col cols="6" align="center" >

        <v-img src="https://radiustheme.com/demo/html/redchili/redchili/img/chef/1.png" width="360"></v-img>
      </v-col>
      <v-col cols="4">
        <v-banner single-line>
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px;" class="mt-12">Nuestra historia</h2>
        <p></p>
        <h3 style="font-family: 'Charm', cursive;" class="secondary--text"> Brindando el mejor servicio desde 2015 </h3>
        </v-banner>
        <p></p>
        <p class="font-italic">
          El Restaurante UTP abre sus puertas de la mano del Sr. Patricio Álvarez Noguera desde el 15 de agosto del 2015. 
          Desde entonces, se brinda un ambiente acogedor con una exquisita variedad de platos típicos arequipeños.
          Reconocida por su calidad y servicio de primera, este restaurante ha dabido ganarse un sitial en la Gastronomía Peruana.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="6"  class="pa-0">
        <v-img src="https://radiustheme.com/demo/html/redchili/redchili/img/client/left-back.jpg" ></v-img>
      </v-col>
      <v-col cols="6" class="secondary">
        <v-banner single-line>
          <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px; color: #fff;" class="mt-12 ml-6">Nuestros clientes</h2>
          <p></p>
          <h3 style="font-family: 'Charm', cursive;" class="ml-6 mt-4 primary--text">Algunas opiniones</h3>
        <p></p>
        </v-banner>
        <p></p>
        <v-row>
          <v-col cols="3">
            <v-img src="https://radiustheme.com/demo/html/redchili/redchili/img/client/1.png" width="100" class="mt-6 ml-6"></v-img>
          </v-col>
          <v-col cols="8" class="mt-6">
            <h3 class="primary--text" style="font-family: 'Oswald', sans-serif;">Anaís Zúñiga</h3>
            <v-rating v-model="r1" background-color="orange lighten-3" color="orange" small></v-rating>
            <p class="white--text" style="font-size: 14px;">
              "Me dejaron sin palabras. El mejor lugar para compartir con la familia y amigos.
              Realmente fascinante".
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <v-img src="https://radiustheme.com/demo/html/redchili/redchili/img/client/2.png" width="100" class="mt-2 ml-6"></v-img>
          </v-col>
          <v-col cols="8" class="mt-6">
            <h3 class="primary--text" style="font-family: 'Oswald', sans-serif;">Víctor Corrales</h3>
            <v-rating v-model="r2" background-color="orange lighten-3" color="orange" small></v-rating>
            <p class="white--text" style="font-size: 14px;">
              "Excelente servicio, la comida es deliciosa y la atención recibida fue espectacular".
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="pa-5 ml-5 mr-5">
      <v-col cols=12 align="center">
        <h2 style="font-family: 'Oswald', sans-serif; font-size: 36px;" class="mt-12">Cultura organizacional</h2>
        <p></p>
      </v-col>
        

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
export default {
    name: 'Inicio',
    data() {
      return {
        r1: 5,
        r2:4.5
      }
    },
    methods: {
      back(){
            this.$router.push('/ccarta')
        },
    },
    components:{
    }
}
</script>