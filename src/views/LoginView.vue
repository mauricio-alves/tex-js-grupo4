<template>
  <header id="topo" class="topo">
    <div class="topo__logo">
      <img src="@/assets/images/beach-svgrepo-com.svg" />
    </div>
    <div class="topo__logo-name">
      <h1>Atlantic Hotel</h1>
    </div>
    <div class="topo__menu-hb">
      <img src="@/assets/images/hamburger-menu-24.png" alt="menu hamburguer" />
    </div>
  </header>

  <!-- <nav class="nav_menu">
    <ul>
      <li><a href="/public">Home</a></li>
      <li><a href="/public/sobre.html">O hotel</a></li>
      <li><a href="/public/quartos.html">Quartos</a></li>
      <li><a href="/public/reservas.html">Reservas</a></li>
      <li><a href="/public/contato.html">Contato</a></li>
      <li><a href="/public/login.html">Login</a></li>
    </ul>
  </nav> -->

  <Menu />

  <main>
    <div class="main">
      <h1>Login</h1>

      <article class="main__login">
        <form>
          <label for="email">Email:</label>
          <input type="text" placeholder="Digite seu email" id="email" name="email">

          <label for="password">Senha:</label>
          <input type="password" placeholder="Digite sua senha" id="password" name="password">

          <a class="main__login__esqueceu-senha" href="#">Esqueceu sua senha?</a>
          <!-- <button @click.prevent="handleClick('#login', 'login')" type="button" id="login">Confirmar</button> -->
          <button @click.prevent="confirm($event)" type="button" id="login">Confirmar</button>
        </form>
      </article>
    </div>
  </main>

  <footer>
    <div>
      <div class="rodape">
        <div class="rodape__links">
          <div class="rodape__links__navegacao">
            <h3>Navegação</h3>
            <ul>
              <li><a href="/public/index.html">Home</a></li>
              <li><a href="/public/sobre.html">O hotel</a></li>
              <li><a href="/public/quartos.html">Quartos</a></li>
              <li><a href="/public/reservas.html">Reservas</a></li>
              <li><a href="/public/contato.html">Contato</a></li>
              <li><a href="/public/login.html">Login</a></li>
            </ul>
          </div>
          <div class="rodape__links__sobre-nos">
            <h3>Sobre nós</h3>
            <!-- <ul> -->
              <li><a href="#">Fale com a gente</a></li>
              <li><a href="#">Onde estamos</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li>
                <p>Siga-nos:</p>
              </li>
              <li id="redes-sociais">
                <a href="#"><img src="@/assets/images/facebook.png" alt="facebook logo" /></a>
                <a href="#"> <img src="@/assets/images/instagram.png" alt="instagram logo" /></a>
                <a href="#"> <img src="@/assets/images/whatsapp.png" alt="whatsapp logo" /></a>
              </li>
          </div>
          <div class="rodape__links__termos">
            <h3>Termos e Condições</h3>
            <ul>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Política de privacidade</a></li>
            </ul>
          </div>
        </div>
        <div class="rodape__seta">
          <div class="rodape__seta__top-btn">
            <a href="#topo">
              <img src="@/assets/images/up-arrow-png-27160.png" alt="seta pra cima">
            </a>
          </div>
          <div class="rodape__seta__idioma">
            <label for="idioma">Idioma:</label>
            <select name="idioma" id="idioma">
              <option value="portugues">Português</option>
              <option value="ingles">Inglês</option>
              <option value="espanhol">Espanhol</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import Menu from '@/components/Menu.vue';
  import login from '@/store/login';
  import handleClick from '@/store/functions/handleClick';

  export default {
    name: 'LoginView',
    components: {
      Menu
  },

  methods: {
    confirm(e) {
      e.preventDefault();
      handleClick('#login', 'login');
    }
  },

  mounted() {
    login();
  }
}
</script>

<style>
  @import '@/assets/css/login.css';
</style>
