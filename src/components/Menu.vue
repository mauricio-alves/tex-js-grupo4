<template>
  <nav class="nav_menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">O Hotel</router-link></li>
      <li><router-link to="/accommodations">Quartos</router-link></li>
      <li><router-link to="/reservations">Reservas</router-link></li>
      <li><router-link to="/contact">Contato</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <!-- <li><a href="/public">Home</a></li>
      <li><a href="/public/sobre.html">O hotel</a></li>
      <li><a href="/public/quartos.html">Quartos</a></li>
      <li><a href="/public/reservas.html">Reservas</a></li>
      <li><a href="/public/contato.html">Contato</a></li>
      <li><a href="/public/login.html">Login</a></li> -->
    </ul>
  </nav>
  <router-view />
</template>


<!-- <template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/sobremesas">Sobremesas</router-link> |
      <router-link to="/pratos-quentes">Pratos Quentes</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </template> -->

<script>
  export default {
    name: 'Menu',
    // components: {
    //   Menu
    // }

    methods: {
      navMenu() {
        this.$store.dispatch('navMenu')
      }
    },

    mounted() {
      this.navMenu()
    }
  }
</script>
