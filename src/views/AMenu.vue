<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col cols="1" class="ml-6 mt-10">
                <v-btn color="secondary" fab class="ml-16" @click="back"> 
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="10">
                <h1  class=" secondary--text mt-8 ml-8" align="center" >Carta: Menú del Día
                <v-img src="../assets/cocinero.png" height="50" contain></v-img> </h1>
            </v-col>
        </v-row> 
        <p></p>
        <v-divider></v-divider>
    </v-container>
</template>

<script>
export default {
    name: 'AMenu',
    methods:{
        back(){
            this.$router.push('/acarta')
        }
    }
}
</script>