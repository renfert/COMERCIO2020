<template>
    <v-container>
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title align="center">¡Importante!</v-card-title>
                <v-img src="../assets/mascota.gif" height="170" contain></v-img>
                <h2 align="center" class="mt-16 mb-16 mr-12 ml-12">Recuerda que las elecciones son el 
                    próximo 11 de abril ¡Faltan tan solo {{rpta}} días!</h2>
                <v-divider></v-divider>
                <v-card-actions align="center" justify="center" class="ml-8 " >
                        <v-btn align="center" color="info" class="ml-16"  dark @click="dialog=!dialog">Ver calendario</v-btn>
                        <v-btn align="center" color="info" class="ml-10" outlined @click="dialog=!dialog">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    name:'Admin',
    data(){
        return{
            dialog: true,
            rpta: null
        }
    },
    methods:{
        dias(){
            let fecha1 = new Date('2021/04/11');
            let fecha2 = new Date()

            let resta = fecha1.getTime() - fecha2.getTime();
            this.rpta= Math.round(resta/ (1000*60*60*24));
            console.log(this.rpta)
            console.log("df")

        }
    },
    created(){
        this.dias()
    },
}
</script>

