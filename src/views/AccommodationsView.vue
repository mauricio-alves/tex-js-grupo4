<template>
  <HeaderComponent />

  <main>
    <section class="container">
      <article>
        <div>
          <h2 class="container__subtitle">Nossas Acomodações</h2>
          <span class="container__detalhe"></span>
        </div>
        <div class="container__text">
          <p>
            Nós do Atlantic Hotel oferecemos quartos confortáveis e elegantes
            que são perfeitos para qualquer tipo de viajante. Os nossos quartos
            estão equipados com todas as comodidades de que necessita para uma
            estadia relaxante e agradável, incluindo uma cama confortável,
            acesso Wi-Fi de alta velocidade, uma televisão com todos os canais,
            um mini-frigorífico e uma suíte privativa. A seguir apresentamos
            nosso catálogo de quartos, escolha o que mais te agrada e reserve
            já!
          </p>
        </div>
      </article>
      <article class="products-container">
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-1"></div>
          <h3>Quarto Casal</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-2"></div>
          <h3>Quarto Litoral</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-3"></div>
          <h3>Quarto Presidencial</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-4"></div>
          <h3>Quarto Weekend</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-5"></div>
          <h3>Quarto Atlantic</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-6"></div>
          <h3>Quarto Holiday</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-7"></div>
          <h3>Quarto Presidencial Luxo</h3>

          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-8"></div>
          <h3>Quarto Lua de Mel</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
        <div class="products-container__card">
          <div class="products-container__card__product-image" id="img-9"></div>
          <h3>Quarto Executivo</h3>
          <a href="#" class="products-container__card__btn">Reservar</a>
        </div>
      </article>
      <article>
        <div>
          <h2 class="container__subtitle">Queridinho dos hóspedes</h2>
          <span class="container__detalhe"></span>
        </div>
        <div class="container__content">
          <div class="container__content__text">
            <p>
              Nossa principal acomodação, o quarto Presidencial Luxo possui
              1.132 metros quadrados, design intimista com cores sóbrias e duas
              suítes com banheira de hidromassagem para a sua inteira
              disposição. Não deixe de conferir!
            </p>
          </div>
          <div class="container__content__image">
            <img
              src="@/assets/images/SuítePresidencial.jpg"
              alt="academia do hotel"
              title="Suíte Presidencial"
              width="600"
            />
          </div>
        </div>
      </article>
    </section>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "AccommodationsView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@import "@/assets/css/quartos.css";
</style>
