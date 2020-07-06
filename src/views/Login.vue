<template>
        <v-container fluid >
            <v-row style="height:90px;"></v-row>
            <v-img src="../assets/bg_login.jpg"  contain height="550" aspect-ratio="0.1" >
            <v-row class="bg" justify="center" style="height:550px;">
                <v-col xs="12" sm="4" md="4" lg="4">
                    <v-card class="mb-3 pa-3">
                        <v-form class="pa-6">
                            <h2 align="center" class="mb-8" style="font-family: 'Yantramanav', sans-serif; color: #720d2c"> Inicio de Sesión</h2>
                            <v-img src="../assets/users.png"  contain height="80" aspect-ratio="0.1" ></v-img>
                            <v-text-field label="Correo" v-model="titulo" color="pink" class="mt-6"> </v-text-field>
                            <v-text-field label="Contraseña" v-model="titulo" color="pink" type="password" class="mb-6" > </v-text-field>
                            <v-btn block color="#9D2C4E" dark class="mb-8">Iniciar</v-btn>
                            <v-btn block text color="black" class="mb-1" small>¿Olvidó su contraseña?</v-btn>
                            <v-btn block text href="/registro" color="black" small>¿Eres nuevo? Regístrate</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
            </v-img>
        </v-container>
</template>

<script>
export default {
    name: 'Login'
}
</script>