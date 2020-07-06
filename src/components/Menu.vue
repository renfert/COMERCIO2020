<template>
    
    <v-container>
        <v-app-bar app class="secondary" height="90" >
            <!--Logo-->

            <v-img src="../assets/logo_r.png"  contain height="85" aspect-ratio="0.1" ></v-img>
            
            <v-spacer></v-spacer>
            
            <!--Botones-->
            <v-btn text href="/" color="primary">
                <v-icon class="mr-2">mdi-home</v-icon>
                Inicio
            </v-btn>
            <v-btn text href="/carta" color="primary">
                <v-icon class="mr-2">mdi-silverware-fork-knife </v-icon>
                Carta
            </v-btn>
            <v-btn text href="/login" color="primary">
                <v-icon class="mr-2">mdi-account </v-icon>
                Iniciar Sesión
            </v-btn>
            <v-btn text href="/registro" color="primary">
                <v-icon class="mr-2">mdi-account-plus</v-icon>
                Registrarse
            </v-btn>
            
            <v-btn icon color="primary">
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="primary">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            
        </v-app-bar>
    </v-container>
</template>

<script>
export default {
    name: 'Menu',
    data (){
        return{
        }
    },
}
</script>