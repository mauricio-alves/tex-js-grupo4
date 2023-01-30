<template>
  <HeaderComponent />

  <main>
    <section class="container">
      <article>
        <h2>Minha Reserva</h2>
        <p>Forneça a data de entrada, saída e quantidade de pessoas:</p>
        <form class="container__form">
          <div>
            <label for="checkin">Check-in:</label>
            <input v-model="reservation.checkin" id="checkin" type="date" />
          </div>
          <div>
            <label for="checkout">Check-out:</label>
            <input
              v-model="reservation.checkout"
              @change="checkDate"
              id="checkout"
              type="date"
            />
          </div>
          <div>
            <label for="qtd_adultos">Número de hóspedes:</label>
            <input
              v-model="reservation.qty"
              id="qtd_adultos"
              type="number"
              min="1"
              max="4"
              placeholder="limite de 4 pessoas"
            />
          </div>
        </form>
      </article>

      <!-- <article class="cards">
                <div>
                    <h3>Escolha o quarto:</h3>
                    <span class="cards__detalhe"></span>
                </div>
                <div class="cards__images" id="cards"></div>
            </article> -->

      <CreateAccommodations />

      <Booking />
    </section>
  </main>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import CreateAccommodations from "@/components/CreateAccommodations.vue";
import Booking from "@/components/Booking.vue";
import { init, overview } from "@/store/reservations";
import { watchEffect } from "vue";
import store from "@/store";

watchEffect(() => {
  console.log(store.state.reservation);
}, [store.state.reservation]);

export default {
  name: "ReservationsView",
  components: {
    HeaderComponent,
    FooterComponent,
    CreateAccommodations,
    Booking,
  },

  computed: {
    reservation() {
      return this.$store.state.reservation;
    },
  },

  watchEffect: {
    reservation() {
      console.log("reservation");
    },
  },

  //   methods: {
  //     loadReservations() {
  //     this.$store.dispatch('loadReservations')
  //     }
  //   },

  methods: {
    checkDate() {
      alert("checar data");
    },
  },

  mounted() {
    init();
    overview();
    // this.reservation.qty = 2;
  },
};
</script>

<style scoped>
@import "@/assets/css/reservas.css";
</style>
