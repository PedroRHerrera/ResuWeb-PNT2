<template>
 <Navbar />
 <div class="container mt-3">
    <div class="jumbotron">
      <br>
      <RouterView />
     
      <!-- <router-view></router-view> -->
      <!-- <router-view /> -->
      

      <!-- <Binding />
      <Estructura />
      <Atributos />
      <Contadores />
      <Formulario /> -->

    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
