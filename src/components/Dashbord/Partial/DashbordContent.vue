<template>
<div>
    <main>
      <div class="cards">
        <div class="card-single">
          <div>
            <h1>54</h1>
            <span>Customers</span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>79</h1>
            <span>Notifications</span>
          </div>
        </div>
        <div class="card-single">
          <div>
            <h1>15</h1>
            <span>Enseignants</span>
          </div>
        </div>
      </div>
    </main>
    
    <div class="recent-grid">
      <div class="teachers"></div>
      <div class="card">
        <div class="card-header">
          <h3>Liste des enseignants</h3>
          <a href="/dashbord/listeEns">
            <button>Voir tout<img src="" alt="" /></button>
          </a>
        </div>
        <div class="card-body">
          <table width="100%">
            <thead>
              <tr>
                <td>Matricule</td>
                <td>Nom</td>
                <td>Prenom</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>02X1231</td>
                <td>Kimbi</td>
                <td>Xaviera</td>
              </tr>
              <tr>
                <td>02X1456</td>
                <td>Monthe</td>
                <td>Valery</td>
              </tr>
              <tr>
                <td>99T1431</td>
                <td>Tsopse</td>
                <td>Norbert</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="customers">
          <div class="card">
            <div class="card-header">
              <h3>Notifications</h3>
              <button>Voir tout<img src="" alt="" /></button>
            </div>
            <div class="card-body">
              <div class="customer">
                <img src="../assets/images/IMG_20210725_092834_093.jpg" width="40px" height="40px" alt="">
              </div>
              <div>
                <h4>Moumgne Alain</h4>
                <small>enseignant</small>
              </div>
            </div>
            <div>
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
            </div>
             <div class="card-header">
              <h3>Notifications</h3>
              <button>Voir tout<img src="" alt="" /></button>
            </div>
            <div class="card-body">
              <div class="customer">
                <img src="../assets/images/IMG_20210725_092834_093.jpg" width="40px" height="40px" alt="">
              </div>
              <div>
                <h4>Moumgne Alain</h4>
                <small>enseignant</small>
              </div>
            </div>
            <div>
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
            </div> <div class="card-header">
              <h3>Notifications</h3>
              <button>Voir tout<img src="" alt="" /></button>
            </div>
            <div class="card-body">
              <div class="customer">
                <img src="../assets/images/IMG_20210725_092834_093.jpg" width="40px" height="40px" alt="">
              </div>
              <div>
                <h4>Moumgne Alain</h4>
                <small>enseignant</small>
              </div>
            </div>
            <div>
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
            </div> <div class="card-header">
              <h3>Notifications</h3>
              <button>Voir tout<img src="" alt="" /></button>
            </div>
            <div class="card-body">
              <div class="customer">
                <img src="../assets/images/IMG_20210725_092834_093.jpg" width="40px" height="40px" alt="">
              </div>
              <div>
                <h4>Moumgne Alain</h4>
                <small>enseignant</small>
              </div>
            </div>
            <div>
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
              <img src="../assets/icons/user.svg" alt="" width="10px" height="10px">
            </div> 
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script> 
export default {
  name: " DashbordContent",
};
</script>
<style scoped src="../css/dashbordContent.css"></style>
