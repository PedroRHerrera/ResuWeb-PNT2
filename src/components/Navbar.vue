<template>

  <section class="src-components-navbar">
    <nav :class= "{'navbar navbar-expand-lg bg-primary' : estado, 'navbar navbar-expand-lg bg-dark'  : !estado}"  data-bs-theme="dark">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Inicio</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/welcome">Welcome</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/conversor">Conversor</RouterLink>
            </li>
          </ul>
          <button class="btn btn-secondary my-2 my-sm-0" @click="estado=!estado">cambiar fondo navbar</button>
        </div>
      </div>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: "src-components-navbar",
  props: [],
  mounted() {},
  data() {
    return {
      estado: true,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">

</style>
