<template>
  <header id="topo" class="topo">
    <div class="topo__painel-usuario" id="painel">
      <div id="user">Usuário</div>
      <div id="email">Email</div>
      <div class="topo__painel-usuario__painel-sair">
        <button id="clearStorage">Sair</button>
      </div>
    </div>

    <div class="topo__background">
      <img id="imagem-fundo" class="imagem-header" src="" alt="imagem aleatória de capa" />
    </div>

    <div class="topo__slogan">
      <p id="texto"></p>
    </div>

    <div class="topo__title">
      <div class="topo__title__logo">
        <img src="@/assets/images/beach-svgrepo-com.svg" />
      </div>
      <div class="topo__title__logo-name">
        <h1>Atlantic Hotel</h1>
      </div>
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
    <section class="container">
      <article class="container__white-bg">
        <div>
          <h2 class="container__white-bg__subtitle">Atlantic Hotel - Uma Experiência Única</h2>
        </div>
        <div class="container__white-bg__about">
          <div>
            <p>Um dos mais tradicionais Hotéis do Rio de Janeiro, o Atlantic Hotel é uma ótima opção para hospedagem com
              diversão garantida para casais e toda família. Será uma experiência única!</p>
            <p>Nossos quartos são os de maior avaliação em todo o país. Temos uma estrutura completa de spa com
              massoterapeutas altamente especializados.</p>
            <p>Oferecemos em nosso restaurante uma tradicional e saborosa
              gastronomia em estilo comfort food para você
              relembrar os melhores momentos da vida. Aproveite ainda as diversas experiências de contato com a
              natureza!</p>
          </div>
          <div class="container__white-bg__about__recepcao">
            <img src="@/assets/images/recepcao_hotel.jpg" alt="recepção do hotel" />
          </div>
        </div>
      </article>
      <article class="container__section2">
        <div>
          <h2 class="container__section2__subtitle">Conheça mais sobre nossos serviços</h2>
        </div>
        <div class="container__section2__cards">
          <div class="container__section2__cards__card">
            <a href="#">
              <h3>Spa Wellness</h3>
              <img src="@/assets/images/SPA.jpg" alt="spa" />
            </a>
          </div>
          <div class="container__section2__cards__card">
            <a href="/public/quartos.html">
              <h3>Quartos</h3>
              <img src="@/assets/images/quarto.jpg" alt="quarto" />
            </a>
          </div>
          <div class="container__section2__cards__card">
            <a href="#">
              <h3>Gastronomia</h3>
              <img src="@/assets/images/gastronomia.jpg" alt="gastronomia" />
            </a>
          </div>
          <div class="container__section2__cards__card">
            <a href="#">
              <h3>Experiências</h3>
              <img src="@/assets/images/experiencias.jpg" alt="experiencia" />
            </a>
          </div>
        </div>
      </article>
      <article class="container__local">
        <h2 class="container__local__subtitle">Faça-nos uma visita!</h2>
        <p>Alameda Santos, 960
          Cerqueira César / São Paulo/SP – CEP: 01.418-002</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.5149392792719!2d-46.65210740406213!3d-23.56618503265032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c774633b79%3A0x37756ae8550c9ba5!2sAlameda%20Santos%2C%20960%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001418-100!5e1!3m2!1sen!2sbr!4v1674522070308!5m2!1sen!2sbr"
          style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="container__local__links">
          <ul>
            <li>
              <a href="#"><i class="fa fa-envelope fa-3x mx-1 text-white"></i> reservas@atlantichotel.com.br</a>
            </li>
            <li><a href="#"><i class="footer__socialMedia__icon fa fa-phone fa-3x mx-1 text-white"></i> +55 11
                998210023</a>
            </li>
            <li><a href="#"><i class="footer__socialMedia__icon fa fa-phone fa-3x mx-1 text-white"></i> +55 11
                998201293</a>
            </li>
          </ul>
        </div>
        <div class="container__local__button">
          <a href="/public/reservas.html"><button class="container__local__button__btn">Reserve agora
              mesmo!</button></a>
        </div>
      </article>
    </section>
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
// @ is an alias to /src
import Menu from '@/components/Menu.vue';
import { checkStorage, sorteio } from '@/store/home';

export default {
  name: 'HomeView',
  components: {
    Menu
  },

  mounted() {
    checkStorage();
    sorteio();
  }
}
</script>

<!-- <style lang="scss">
  @import '../assets/scss/home.scss';

</style> -->

<style>
  @import '@/assets/css/home.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css';
</style>
