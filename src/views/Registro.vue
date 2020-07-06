<template>
    <v-container fluid>
         <v-row style="height:90px;"></v-row>
         <v-row justify="center" >
           <v-col  xs="12" sm="8" md="8" lg="8">
             <v-card class="pa-3">
               <v-form class="pa-6">
                 <v-row >
                   <v-col cols="12" >
                     <h2 align="center" class="mb-8" style="font-family: 'Yantramanav', sans-serif; color: #720d2c"> Registrar nueva cuenta</h2>
                    <v-img src="../assets/users.png"  contain height="80" aspect-ratio="0.1" ></v-img>
                   </v-col>
                 </v-row>
                 <v-row class="mt-6" >
                   <v-col  xs="12" md="4" >
                      <v-text-field label="Nombre" v-model="nombre" color="pink"   required outlined> </v-text-field>
                   </v-col>
                   <v-col  xs="12" md="4">
                     <v-text-field label="Apellido paterno" v-model="apem" color="pink"  required outlined> </v-text-field>
                   </v-col>
                   <v-col  xs="12" md="4">
                     <v-text-field label="Apellido materno" v-model="apep" color="pink"  required outlined> </v-text-field>
                   </v-col>
                 </v-row>
                  <v-row>
                    <v-col xs="12" md="5">
                      <v-text-field label="Celular" v-model="cel" color="pink" required outlined> </v-text-field>
                    </v-col>
                    <v-col xs="12" md="7"> 
                      <v-text-field label="Email" v-model="email" color="pink" required outlined> </v-text-field>
                    </v-col> 
                  </v-row>
                  <v-row>
                    <v-col xs="12" md="5">
                      <v-select :items="distritos" label="Distrito" color="pink" outlined></v-select>
                    </v-col>
                    <v-col xs="12" md="7">
                      <v-text-field label="Dirección" v-model="dir" color="pink"  required outlined> </v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col xs="12" md="6" :rules="msn">
                        <v-text-field label="Contraseña" v-model="pass" color="pink"  required  type="password" style="height: 50px" :state="comprobarContr"> </v-text-field>
                        <small :class="color">{{msn}}</small>
                    </v-col>
                    <v-col xs="12" md="6">
                      <v-text-field  label="Confirmar contraseña" v-model="pass2" color="pink"  required type="password" style="height: 50px" :state="comprobarIgualdad"> </v-text-field>
                      <small :class="color2">{{msn2}}</small>
                    </v-col>
                  </v-row>
                  
               </v-form>
             </v-card>
           </v-col>
         </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Registro',
    data () {
      return {
        distritos: ['Alto Selva Alegre', 'Cayma', 'Cerro Colorado', 'Hunter',
        'José Luis Bustamante y Rivero', 'Miraflores', 'Mariano Melgar',
        'Paucarpata', 'Socabaya', 'Vítor', 'Yanahuara'],
        pass:'',
        msn: ''
      }
    },
    computed: {
      comprobarContr(){
        if(this.pass.length>0 && this.pass.length<6){
          this.msn='Mínimo 6 carácteres'
        } else if(this.pass.length>=6){
          this.msn='Contraseña válida'
        }
      },
      comprobarIgualdad(){
        if(this.pass2 == this.pass){
          this.msn2='Contraseña válida'
        } else {
          this.msn2='Las contraseñas no coinciden'
        }
      },
      color(){
        return{
          'error--text' : this.pass.length<6,
          'success--text' : this.pass.length>=6
        }
      },
      color2(){
        return{
          'error--text' : this.pass2 != this.pass,
          'success--text' : this.pass2 == this.pass
        }
      },
    },
}
</script>