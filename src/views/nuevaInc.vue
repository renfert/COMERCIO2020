<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="1" class="ml-6 mt-10">
        <v-btn color="secondary" fab class="ml-16" @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="10">
        <h1 class="secondary--text mt-8 ml-8" align="center">
          Registrar nueva incidencia
        </h1>
      </v-col>
    </v-row>
    <p></p>
    <v-divider></v-divider>

    <!-- MAPA -->
    <v-row>
      <v-col cols="10">
        <MyAwesomeMap></MyAwesomeMap>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MyAwesomeMap from '@/components/MyAwesomeMap';

export default {
  name: "nuevaInc",
  methods: {
    back() {
      this.$router.push("/incidencias");
    },
  },
  components:{
      MyAwesomeMap,
    },
};
</script>