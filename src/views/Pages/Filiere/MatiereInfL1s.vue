<template>
    <div>
        <navbar></navbar>
        <matiere-infos-l1></matiere-infos-l1>
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
        'matiere-infos-l1' : MatiereInfL1,
        'navbar' : Navbar,
        'foot' : Footer,
    }
}
</script>

<style scoped>

</style>