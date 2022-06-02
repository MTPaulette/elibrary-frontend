<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i class="bi bi-facebook"></i>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    let res = new Request("http://127.0.0.1:8000/api/laravel", {
      method: "get",
    });
    fetch(res).then((response) => {
      for (let donnee of response.headers.entries()) {
        console.log(donnee[0] + ":" + donnee[1]);
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
