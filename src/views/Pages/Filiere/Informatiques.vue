<template>
    <div>
        <navbar></navbar>
        <informatique></informatique>
    </div>
</template>

<script>
import Informatique from "@/components/Filiere/Informatique.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";
//import Navbar from '../../../components/Acceuil/Navbar.vue';
export default {
    name : 'Informatique',
    components:{
        'informatique' : Informatique,
        'navbar' : Navbar,
    }
}
</script>

<style scoped>

</style>