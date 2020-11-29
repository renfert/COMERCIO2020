<template>
  <v-container fluid class="pa-0">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title align="center">¡Enhorabuena!</v-card-title>
                        <v-img src="../assets/estrella.png" height="150" contain></v-img>

        <h2 align="center" class="mt-16 mb-16 mr-12 ml-12">
          Gracias, tu reporte ha sido satisfactoriamente registrado.
        </h2>
        <v-divider></v-divider>
        <v-card-actions align="center" justify="center" class="ml-8">
          
          
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col cols="1" class="ml-6 mt-10">
        <v-btn color="secondary" fab class="ml-16" @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="10">
        <h1 class="secondary--text mt-8 " align="center">
          Registrar nueva incidencia
        </h1>
      </v-col>
    </v-row>
    <p></p>
    <v-divider></v-divider>
    <v-form class="pa-6">
      <v-row>
        <v-col cols="4" class="ml-16">
          <p>1. Seleccione la fecha en la que ocurrió el incidente:</p>
          <v-row justify="center">
            <v-date-picker
              v-model="picker"
              :max="maximo"
              :min="minimo"
              color="secondary"
            ></v-date-picker>
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
          <p>
            2. Proporcione y seleccione la ubicación donde ocurrió el incidente:
          </p>
          <v-text-field
            color="secondary"
            type="text"
            v-model="ubicacion"
            :rules="ubReglas"
            label="Dirección"
          ></v-text-field>

          <!-- MAPA -->
          <v-row>
            <v-col cols="12">
              <MyAwesomeMap></MyAwesomeMap>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="ml-16">
        <v-col cols="4">
          <p>3. Descripción del incidente:</p>
          <v-textarea
            color="secondary"
            v-model="descripcion"
            :rules="ubReglas"
            label="Descripción"
          ></v-textarea>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="4">
          <p>4. Evidencia(Foto en formato JPG o PNG):</p>
          <v-file-input
            label="File input"
            v-model="evidencia"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
        <img src="../assets/gps.png" height="200px" alt="" />
        <v-col cols="1"> </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn color="#9D2C4E" dark class="mb-8" @click="dialog = !dialog">Enviar</v-btn>
      </v-row>
    </v-form>
    <!--FORM--------------------->
    <v-row style="height: 100px"></v-row>
  </v-container>
</template>
<script>
import MyAwesomeMap from "@/components/MyAwesomeMap";

export default {
  name: "nuevaInc",
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      maximo: new Date().toISOString().substr(0, 10),
      minimo: "2019",
      ubicacion: "",
      descripcion: "",
      evidencia: "",
      dialog: false,
      msn: "",
      ubReglas: [
        (v) => !!v || "Este campo es requerido.",
        (v) => v.length >= 3 || "Por favor, introduzca bien la dirección.",
      ],
    };
  },
  methods: {
    back() {
      this.$router.push("/incidencias");
    },
    comprobar() {
      if (this.ubicacion.length < 3) {
        this.msn = "La ubicación es necesaria.";
      } else {
        this.msn = "";
      }
      return this.ubicacion.length < 3 ? false : true;
    },
  },
  components: {
    MyAwesomeMap,
  },
};
</script>