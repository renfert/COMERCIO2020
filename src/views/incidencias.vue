<template>
    <v-container>
        <v-btn @click="ir">Reportar nueva</v-btn>
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