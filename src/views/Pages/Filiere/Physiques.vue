<template>
    <div>
        <navbar></navbar>
        <physique></physique>
    </div>
</template>

<script>
import Physique from "@/components/Filiere/Physique.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";

export default {
    name : 'Physiques',
    components:{
        'physique' : Physique,
        'navbar' : Navbar,
    }
}
</script>

<style scoped>

</style>