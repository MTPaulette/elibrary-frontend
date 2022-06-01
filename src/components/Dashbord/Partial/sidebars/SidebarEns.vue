<template>
  <div class="sidebar">
    <h1>
      <img
        class="image"
        src="../../assets/images/photo_2022-05-30_23-59-51.jpg"
        width="40px"
        height="38px"
        alt=""
      />
      Admin
    </h1>
    <div class="sidebar-menu">
      <ul>
        <li>
          <a href="/dashbord"
            ><img
              class="icon"
              src="../../assets/icons/house-solid.svg"
              alt=""
            />
            <span>Dashbord</span></a
          >
        </li>
        <li>
          <a href="/dashbord/notification"
            ><img
              class="icon"
              src="../../assets/icons/notifications.svg"
              alt=""
            />
            <span>Notifications</span></a
          >
        </li>
        <li>
          <a class="active" href="/dashbord/nouveauEns"
            ><img
              class="icon"
              src="../../assets/icons/rectangle-ad-solid.svg"
              alt=""
            />
            <span>new enseignant</span></a
          >
        </li>
        <li>
          <a href="/dashbord/nouveauDoc"
            ><img class="icon" src="../../assets/icons/file-solid.svg" alt="" />
            <span>nouveau document</span></a
          >
        </li>
        <li>
          <a href="/dashbord/listeEns"
            ><img class="icon" src="../../assets/icons/users.svg" alt="" />
            <span>Liste des enseignants</span></a
          >
        </li>
        <li>
          <a href="/dashbord/locked"
            ><img class="icon" src="../../assets/icons/lock-solid.svg" alt="" />
            <span>Comptes bloqués</span></a
          >
        </li>
        <li>
          <a href="/dashbord/corbeille"
            ><img class="icon" src="../../assets/icons/delete.svg" alt="" />
            <span>Corbeille</span></a
          >
        </li>
        <li>
          <a href="/dashbord/profil"
            ><img class="icon" src="../../assets/icons/user.svg" alt="" />
            <span>Profil</span></a
          >
        </li>
        <li>
          <a href="https://github.com/MTPaulette/elibrary-frontend.git"
            ><img
              class="icon"
              src="../../assets/icons/circle-question-solid.svg"
              alt=""
            />
            <span>Aide</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarEns",
};
</script>
<style scoped src="../../css/sidebar.css"></style>
