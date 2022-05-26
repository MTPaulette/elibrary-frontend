<template>
    <div>
        <navbar></navbar>
        <informatique></informatique>
        <foot></foot>
    </div>
</template>

<script>
import Informatique from "@/components/Filiere/Informatique.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
    name : 'Informatique',
    components:{
        'informatique' : Informatique,
        'navbar' : Navbar,
        'foot' : Footer,
    }
}
</script>

<style scoped>

</style>