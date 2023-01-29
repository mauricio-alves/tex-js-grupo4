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
        <section class="container">
            <article>
                <h2>Minha Reserva</h2>
                <p>Forneça a data de entrada, saída e quantidade de pessoas:</p>
                <form class="container__form">
                    <div>
                        <label for="checkin">Check-in:</label>
                        <input id="checkin" type="date" />
                    </div>
                    <div>
                        <label for="checkout">Check-out:</label>
                        <input id="checkout" type="date" />
                    </div>
                    <div>
                        <label for="qtd_adultos">Número de hóspedes:</label>
                        <input id="qtd_adultos" type="number" min="1" max="4" placeholder="limite de 4 pessoas" />
                    </div>
                </form>
            </article>
            <article class="cards">
                <div>
                    <h3>Escolha o quarto:</h3>
                    <span class="cards__detalhe"></span>
                </div>
                <div class="cards__images" id="cards"></div>
            </article>
            <aside class="escolha">
                <div>
                    <h3>Resumo da Reserva</h3>
                </div>
                <div class="escolha__resumo">
                    <p class="resumo__quarto" id="span-quarto"></p>
                    <p class="resumo__checkin" id="span-checkin"></p>
                    <p class="resumo__checkout" id="span-checkout"></p>
                    <p class="resumo__qtd" id="span-qtd"></p>
                    <p class="resumo__diaria" id="span-diaria"></p>
                    <p class="resumo__total" id="span-total"></p>
                </div>

                <div class="escolha__resumo" id="servicos"></div>

                <!-- <div class="link"><a href="#"><span>Adicionar mais serviços</span></a></div> -->

                <div class="escolha__btn"><button id="showServices">Adicionar mais serviços</button></div>

                <div id="modalServices" class="escolha__modal">
                    <!-- Modal content -->
                    <div class="escolha__modal__modal-content">
                        <span id="closeModalServices" class="escolha__modal__modal-content__close">&times;</span>
                        <p>Serviços Adicionais</p>

                        <div id="services-content"></div>

                        <button id="clearServices">Limpar Seleção</button><button
                            id="confirmServices">Confirmar</button>
                    </div>
                </div>

                <div id="modalDetails" class="escolha__modal">
                    <!-- Modal content -->
                    <div class="escolha__modal__modal-content">
                        <span id="closeModalDetails" class="escolha__modal__modal-content__close">&times;</span>
                        <p><b>Detalhes da Reserva</b></p>

                        <br>

                        <img id="detailsImage" />
                        <h2 id="detailsAccommodation"></h2>
                        <p id="detailsDescription"></p>

                        <br>

                        <p id="detailsCheckin"></p>
                        <p id="detailsCheckout"></p>
                        <p id="detailsQty"></p>

                        <br>

                        <p><b>Serviços Adicionais</b></p>
                        <div id="detailsServices"></div>

                        <br>

                        <div id="detailsSummary"></div>

                        <button id="confirmBook">Confirmar Reserva</button>
                    </div>
                </div>

                <div class="escolha__btn"><button id="cleanBook">Limpar Seleção</button></div>

                <div class="escolha__btn"><button id="bookDetails">Ver Detalhes</button></div>
            </aside>
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
  import Menu from '@/components/Menu.vue';

  export default {
    name: 'ReservationsView',
    components: {
      Menu
  },
}
</script>

<style>
  @import '@/assets/css/reservas.css';
</style>
