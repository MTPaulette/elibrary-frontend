<template>
    <div>
        <navbar></navbar>
        <enseignants></enseignants>
        <foot></foot>
    </div>
</template>

<script>
import Enseignant from "@/components/Enseignants/Enseignant.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
import Footer from "@/components/Acceuil/Footer.vue";

export default {
    name : 'Enseignants',
    components:{
        'enseignants' : Enseignant,
        'navbar' : Navbar,
        'foot' : Footer
    }
}
</script>

<style scoped>

</style>