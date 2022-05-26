<template>
    <div>
        <navbar></navbar>
        <maths></maths>
    </div>
</template>

<script>
import Mathematique from "@/components/Filiere/Mathematique.vue";
import Navbar from "@/components/Acceuil/Navbar.vue";

export default {
    name : 'Mathematiques',
    components:{
        'maths' : Mathematique,
        'navbar' : Navbar,
    }
}
</script>

<style scoped>

</style>