<template>
    <div>
        <navbar></navbar>
        <infosL1></infosL1>
        <foot></foot>
    </div>
</template>

<script>

import InfosDocL1 from "@/components/Filiere/InfosDocL1.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";
// import Navbar from '../../../components/Acceuil/Navbar.vue';

export default {
    name: 'InfosDocL1s',
    components : {
        'infosL1' : InfosDocL1,
        'navbar' : Navbar,
        'foot' : Footer,
    }  
}
</script>

<style scoped>

</style>