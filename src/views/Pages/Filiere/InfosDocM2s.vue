<template>
    <div>
        <navbar></navbar>
        <infosM2></infosM2>
        <foot></foot>
    </div>
</template>

<script>

import InfosDocM2 from "@/components/Filiere/InfosDocM2.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import Navbar from '../../../components/Acceuil/Navbar.vue';

export default {
    name: 'InfosDocM2s',
    components : {
        'infosM2' : InfosDocM2,
        'navbar' : Navbar,
        'foot' : Footer,
    }  
}
</script>

<style scoped>

</style>