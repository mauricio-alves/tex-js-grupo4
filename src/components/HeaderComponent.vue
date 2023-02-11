<template>
  <UserPanel />

  <header id="topo" class="topo">
    <div class="topo__logo">
      <img src="../assets/images/beach-svgrepo-com.svg" />
    </div>
    <div class="topo__logo-name">
      <h1>Atlantic Hotel</h1>
    </div>
    <div class="topo__menu-hb">
      <img src="../assets/images/hamburger-menu-24.png" alt="menu hamburguer" />
    </div>
  </header>

  <nav class="nav_menu">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">O Hotel</router-link></li>
      <li><router-link to="/accommodations">Quartos</router-link></li>
      <li><router-link to="/reservations">Reservas</router-link></li>
      <li v-if="login.user && reservationsStorage"><router-link to="/my-reservations">Minhas Reservas</router-link></li>
      <li><router-link to="/contact">Contato</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<script>
import UserPanel from './UserPanel.vue';

export default {
  name: "HeaderComponent",

  components: {
    UserPanel
  },

  data() {
    return {
      reservationsStorage: localStorage.getItem('reservations')
    }
  },

  computed: {
    login() {
      return this.$store.state.login
    }
  },

  mounted() {
    // Toggle display menu hamburguer
    const hbMenu = document.querySelector(".topo__menu-hb");
    const navMenu = document.querySelector(".nav_menu");

    hbMenu.addEventListener("click", function () {
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
    });
  },
};
</script>
