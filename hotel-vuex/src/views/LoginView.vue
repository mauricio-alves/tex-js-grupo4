<template>
  <HeaderComponent />

  <main>
    <div class="main">
      <h1>Login</h1>

      <article class="main__login">
        <form>
          <label for="email">Email:</label>
          <input
            type="text"
            placeholder="Digite seu email"
            id="email"
            name="email"
          />

          <label for="password">Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="password"
            name="password"
          />

          <a class="main__login__esqueceu-senha" href="#"
            >Esqueceu sua senha?</a
          >
          <button @click="confirm" type="button" id="login">Confirmar</button>
          <!-- <button @click.native="handleClick('#login', 'login'), event => event.preventDefault()" type="button" id="login">Confirmar</button> -->
        </form>
      </article>
    </div>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import login from "@/store/login";

export default {
  name: "LoginView",
  components: {
    HeaderComponent,
    FooterComponent,
  },

  // methods: {
  //   confirm(e) {
  //     e.preventDefault();
  //     handleClick('#login', 'login');
  //   }
  // },

  methods: {
    confirm() {
      login();
    },
  },

  // mounted() {
  //   login();
  // }
};
</script>

<style scoped>
@import "@/assets/css/login.css";
</style>
