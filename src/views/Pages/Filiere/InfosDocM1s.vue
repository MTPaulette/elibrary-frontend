<template>
    <div>
        <navbar></navbar>
        <infosM1></infosM1>
        <foot></foot>
    </div>
</template>

<script>

import InfosDocM1 from "@/components/Filiere/InfosDocM1.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import Navbar from '../../../components/Acceuil/Navbar.vue';

export default {
    name: 'InfosDocM1s',
    components : {
        'infosM1' : InfosDocM1,
        'navbar' : Navbar,
        'foot' : Footer,
    }  
}
</script>

<style scoped>

</style>