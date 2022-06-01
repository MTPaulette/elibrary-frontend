<template>
    <header>
      <h1>
        <img class="icon" src="../assets/icons/bars-solid.svg" alt="" />
        Dashbord
      </h1>
      <div class="search-wrapper">
        <form action="">
          <button class="btn" type="submit">
            <img class="icon" src="../assets/icons/search.svg" alt="" />
          </button>
          <input type="search" placeholder="chercher ici" />
        </form>
      </div>
      <div class="user-wrapper">
        <img
          src="../assets/images/IMG_20210725_092834_093.jpg"
          width="40px"
          height="40px"
          alt=""
        />
        <div>
          <h4>Cyrille</h4>
          <small>Super admin</small>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped src="../css/header.css"></style>
