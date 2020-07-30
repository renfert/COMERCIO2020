<template>
    <v-container fluid class="pa-0">
        <h1  class=" secondary--text mt-8 ml-8" align="center" >Repartidores
        <v-img src="../assets/entrega.png" height="50" contain></v-img> </h1>
        <p></p>
        <v-divider></v-divider>

        <!--List -->
        <v-row class="ml-8" justify="center">
        <v-col cols="9" sm="12" md="12">
        <v-data-table :headers="headers" :items="repartidores" sort-by="estado" class="elevation-1 ml-10">
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>Personal: Repartidores</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="green"  dark class="mb-2" v-bind="attrs" v-on="on">Agregar</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                            <v-container >
                                <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.name" label="Nombres" color="secondary" ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.lastname" label="Apellidos" color="secondary"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.telefono" label="Teléfono" color="secondary"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6">
                                    <v-text-field v-model="editedItem.email" label="Email" color="secondary"></v-text-field>
                                    <small class="error--text" v-if="correo_error">El correo ya existe.</small>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field v-model="editedItem.licencia" label="Licencia" color="secondary"></v-text-field>
                                </v-col>
                                </v-row>
                            </v-container>
                            </v-card-text>

                            <v-card-actions>

                            
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:item.puntuacion="{ item }">
             <v-rating v-model="item.puntuacion" color="yellow darken-3" background-color="grey darken-1"
                empty-icon="$ratingFull" small ></v-rating>
            </template>

            <template v-slot:item.photo="{ item }">
              <v-img :src="item.photo" @click="editItem(item)"></v-img>
            </template>


            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
                </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        </v-col>
        </v-row>

        <!--SNACKBAR-->
         <v-snackbar
            v-model="snackbar"
        >
            {{ mensaje}}

            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false" >
                Cerrar
                </v-btn>
            </template>
        </v-snackbar>

    </v-container>
</template>

<script>
import axios from "axios";
  export default {
      name: 'ARepartidores',
    data: () => ({
      dialog: false,
      headers: [
        
        {
          text: 'Nombres',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Apellido',
          align: 'start',
          sortable: false,
          value: 'lastname',
        },
        { text: 'Licencia', value: 'licencia' },
        { text: 'Estado', value: 'estado' },
        { text: 'Teléfono', value: 'telefono' },
        { text: 'Email', value: 'email' },
        { text: 'Puntuación', value: 'puntuacion' },
        { text: 'Foto', value: 'photo' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      repartidores: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        lastname: '',
        telefono: '',
        email: '',
        licencia:'',
        estado: ''
      },
      defaultItem: {
        name: '',
        lastname: '',
        telefono: '',
        email: '',
        licencia:'',
        estado: ''
      },
      snackbar: false,
      mensaje:'',
      correo_error: false
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo' : 'Editar'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        try{
          const repartidoresDB = await this.axios.get('v1/user');
          await repartidoresDB.data.forEach(element => {
          
            let item= {}
            let fotoRandom= Math.floor(Math.random() * 90) + 1;
            let star= Math.floor(Math.random() * 5) + 1;
            if(element.workStation=="repartidor"){
              item.id = element.id;
              item.name = element.name;
              item.lastname = element.lasname;
              item.licencia = element.licence;
              if(element.active=true){
                item.estado="Disponible"
              } else{item.estado="No disponible"}
              item.telefono = element.phone;
              item.email = element.email;
              item.puntuacion = star;
              if(element.id>=100){
                item.photo = "https://randomuser.me/api/portraits/men/"+(fotoRandom)+".jpg"
              } else{
                item.photo = "https://randomuser.me/api/portraits/men/"+(element.id+11)+".jpg"
              }
              
              this.repartidores.push(item)
            }
            
          });
        }catch(error){
          console.log(error)
        }
      },

      editItem (item) {
        this.editedIndex = this.repartidores.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      async deleteItem (item) {
        console.log(item.id)
        const index = this.repartidores.indexOf(item)
        const rpta = confirm('¿Seguro que desea eliminarlo?') && this.repartidores.splice(index, 1)
        if(rpta){
          console.log(item.id)
          await this.axios.delete(`v1/user/${item.id}`)
          this.snackbar= true
          this.mensaje='Usuario eliminado con éxito.'
        }
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

     async save () {
       this.correo_error=false
        if (this.editedIndex > -1) {
          let post= {
                email: this.editedItem.email,
                lasname: this.editedItem.lastname,
                licence: this.editedItem.licencia,
                name: this.editedItem.name,
                password: "123456",
                phone: this.editedItem.telefono,
                //\"description\": \"string\", \"id\": 0, \"name\": \"string\"
                rol: [{description:"Repartidor", id:4, name:"DELIV"}],
                workStation: "repartidor",
          };
          console.log(post)
          console.log(this.editedItem.id)
          try{
            
            const repEdit = await this.axios.patch(`v1/user/${this.editedItem.id}`,post)
            Object.assign(this.repartidores[this.editedIndex], this.editedItem)
            this.snackbar= true
            this.mensaje='Usuario modificado con éxito.'
          }catch(error){
            console.log(error)
          }
          
        } else {

          try{
            const rep={
                active: true,
                email: this.editedItem.email,
                lasname: this.editedItem.lastname,
                licence: this.editedItem.licencia,
                name: this.editedItem.name,
                password: "123456",
                phone: this.editedItem.telefono,
                workStation: "repartidor",

              }
              

                const repDB = await this.axios.post('v1/user', rep)
                console.log("ARRREH")
                console.log(repDB.config.data)
                this.editedItem.email=rep.email;
                this.editedItem.lastname=rep.lasname;
                this.editedItem.licencia=rep.licence;
                this.editedItem.name=rep.name;
                this.editedItem.telefono=rep.phone;
                this.editedItem.estado="Disponible"
                console.log(this.editedItem)
                this.repartidores.push(this.editedItem)
                this.snackbar= true
                this.mensaje='Usuario agregado con éxito.'
                this.close()
                
              } catch(error){
                this.correo_error=true
              }
        }
        
      },
    },
  }
</script>