<template>
  <form action="index.html" method="post">
    <h1>Créer un compte enseignant</h1>

    <fieldset>
      <label for="name">Nom :</label>
      <input type="text" id="name" name="user_name" />
      <label for="name">Matricule:</label>
      <input type="text" id="name" name="user_name" />

      <label for="mail">Email:</label>
      <input type="email" id="mail" name="user_email" />

      <label for="password">Password:</label>
      <input type="password" id="password" name="user_password" />
    <label for="password">Confirm password:</label>
      <input type="password" id="password" name="user_password" />
    </fieldset>

        <button type="submit">Enregistrer</button>
  </form>
</template>
<script>
export default {
  name: "FormEns",
};
</script>
<style scoped src="../css/formEns.css"></style>
