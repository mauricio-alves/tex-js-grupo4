<template>
  <aside class="escolha">
        <div>
            <h3>Resumo da Reserva</h3>
        </div>
        <div class="escolha__resumo">
            id quarto: {{ reservation.id }}
            <p class="resumo__quarto" id="span-quarto"><span>Quarto: </span> {{ reservation.accommodation }}</p>
            <p class="resumo__checkin" id="span-checkin"><span>Check in: </span> {{ reservation.checkin }}</p>
            <p class="resumo__checkout" id="span-checkout"><span>Check out: </span> {{ reservation.checkout }}</p>
            <p class="resumo__qtd" id="span-qtd"><span>Hóspedes: </span> {{ reservation.qty }}</p>
            <p class="resumo__diaria" id="span-diaria"><span>Diárias: </span> {{ reservation.rates }}</p>
            <p class="resumo__total" id="span-total"><span>Total: R$ </span> {{ reservation.total.toFixed(2) }}</p>
        </div>

        <div class="escolha__resumo" id="servicos"></div>

        <!-- <div class="link"><a href="#"><span>Adicionar mais serviços</span></a></div> -->

        <div class="escolha__btn"><button id="showServices">Adicionar mais serviços</button></div>

       <!-- modais aqui -->

        <div class="escolha__btn"><button id="cleanBook">Limpar Seleção</button></div>

        <div class="escolha__btn"><button id="bookDetails">Ver Detalhes</button></div>
    </aside>
</template>

<script>
  export default {
    name: 'Booking',

    data() {
      return {
        // booking: this.$store.getters.getStorage('login')
        // reservation: this.$store.state.reservation
      }
    },

    computed: {
      reservation() {
        return this.$store.state.reservation;
      }
    },

    // methods: {
    //   reservationUpdate() {
    //     this.$store.dispatch('reservationUpdate')
    //   }
    // },

    // computed: {
    //   booking() {
    //     return this.$store.getters.loginStorage;
    //   }
    // }
  };

</script>
