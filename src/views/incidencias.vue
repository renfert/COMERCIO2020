<template>
    <v-container class="mt-10">
        <v-btn @click="ir" color="success" rounded>
            <v-icon class="mr-2"> mdi-plus </v-icon>
             Reportar nueva</v-btn>
    </v-container>
</template>

<script>
export default {
    name:'incidencias',
    methods:{
        ir(){
            this.$router.push('/nuevaInc')
        }
    }
}
</script>