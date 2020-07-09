<template>
    <v-container fluid class="pa-0">
        <v-parallax height="340" src="../assets/portada.jpg"></v-parallax>
        <Mision class="ml-2"></Mision>
    </v-container>
</template>

<script>
import Mision from '../components/Mision';
export default {
    name: 'ABienvenida',
    components:{
        Mision
    },
}
</script>