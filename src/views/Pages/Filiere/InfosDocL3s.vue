<template>
    <div>
        <navbar></navbar>
        <infosL3></infosL3>
        <foot></foot>
    </div>
</template>

<script>

import InfosDocL3 from "@/components/Filiere/InfosDocL3.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import Navbar from '../../../components/Acceuil/Navbar.vue';

export default {
    name: 'InfosDocL3s',
    components : {
        'infosL3' : InfosDocL3,
        'navbar' : Navbar,
        'foot' : Footer,
    }  
}
</script>

<style scoped>

</style>