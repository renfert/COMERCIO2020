<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in partidos" :key="i">
        <v-expansion-panel-header>
          <v-card max-width="750" class="mx-auto">
            <v-list three-line>
              <template>
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar>
                    <v-img :src="getImgUrl(item.avatar)"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-rating
                    size="20"
                    v-model="rating"
                    background-color="orange lighten-3"
                    color="orange"
                  ></v-rating>
                </v-list-item>
              </template>
            </v-list>
          </v-card>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-btn color="green" @click="trad=!trad">Traducir al Quechua</v-btn>
          <br>
          {{ cards[i].descripcion }}
          <p v-if="!trad"> 
            Eliminación parcial de la inmunidad parlamentaria.<br><strong> -Chaskiy suyu
            inmunidata paralamentariatak'a </strong><br> Si se destituye a un congresista, no
            entra el accesitario (pierde el congresista y la bancada). <br> <strong> -Riki
            qarqusun congresistaqunata, chinkanka accesitarioqa cheyqa
            bancadapas chinkanka. </strong> <br> Reestructuración en los salarios y otros
            beneficios, no solo en el Congreso sino en todas las esferas
            públicas. <br> <strong> -Uqmanta ruasun chasquiqunata, manalla congresopeka
            manacheyka llapanpaq </strong> <br>Estandarizar los procesos en las licitaciones
            públicas y ejecución de las obras. <br> <strong> -Pampachay paktaykunata huptasqa
            yallinakukunapi, akna minkaykunata </strong> <br> Financiamiento estatal a los
            candidatos más representativos de la política.<br> <strong> -Financiamientoquna
            tantari candidatuqunata astawan representativoconu politicamanta </strong> <br>
            Creación del ministerio del deporte. <br> <strong> -Ruasun pukllayta ministeriuta </strong>
            <br>Ley general de personas con discapacidad. <br> <strong> -Apup simin astawanqa mana
            allin runakunapak </strong> <br> Becas por impuestos: las empresas otorguen becas
            como reemplazo de impuestos a la SUNAT. <br> <strong> -Hawmay ama hina
            impuestoqunata </strong>
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row style="height: 100px"></v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "propuestas",
  computed: {
    ...mapState(["partidos"]),
  },
  data() {
    return {
      cards: [],
      divi: [],
      trad: true,
      items: [
        { header: "Partidos Políticos 2021" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic + ".png");
    },
    async obtenerLista() {
      try {
        //const candDB = await this.axios.get('v1/candidato?max=10&min=1')
        //const candDB = await this.axios.get('v1/candidato?max=10&min=1&nombre=Sara')

        const propDB = await this.axios.get("v1/propuesta");

        await propDB.data.forEach((element) => {
          let ite = {};
          ite.id = element.area.id;
          ite.name = element.area.name;
          ite.descripcion = element.descripcion;
          let caddiv = ite.descripcion.split(". ");
          this.cards.push(ite);
          this.divi.push(caddiv);
        });

        console.log(propDB);
        console.log(this.cards);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.obtenerLista();
  },
};
</script>