<template>
    <div>
        <navbar></navbar>
        <infosL2></infosL2>
        <foot></foot>
    </div>
</template>

<script>

import InfosDocL2 from "@/components/Filiere/InfosDocL2.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import Navbar from '../../../components/Acceuil/Navbar.vue';

export default {
    name: 'InfosDocL2s',
    components : {
        'infosL2' : InfosDocL2,
        'navbar' : Navbar,
        'foot' : Footer,
    }  
}
</script>

<style scoped>

</style>