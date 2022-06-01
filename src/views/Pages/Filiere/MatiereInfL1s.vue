<template>
    <div>
        <navbar></navbar>
        <matiereInfosL1></matiereInfosL1>
        <foot></foot>
    </div>
</template>

<script>
import MatiereInfL1 from "@/components/Filiere/MatiereInfL1.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
    name : 'Informatique',
    components:{
        'matiereInfosL1' : MatiereInfL1,
        'navbar' : Navbar,
        'foot' : Footer,
    }
}
</script>

<style scoped>

</style>