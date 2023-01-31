<template>
  <aside class="escolha">
        <div>
            <h3>Resumo da Reserva</h3>
        </div>
        <div class="escolha__resumo">
            <p class="resumo__quarto" id="span-quarto"><span>Quarto: </span> {{ reservation.accommodation }}</p>
            <p class="resumo__checkin" id="span-checkin"><span>Check in: </span> {{ reservation.checkin }}</p>
            <p class="resumo__checkout" id="span-checkout"><span>Check out: </span> {{ reservation.checkout }}</p>
            <p class="resumo__qtd" id="span-qtd"><span>Hóspedes: </span> {{ reservation.qty }}</p>
            <p class="resumo__diaria" id="span-diaria"><span>Diárias: </span> {{ reservation.rates }}</p>
            <p class="resumo__total" id="span-total"><span>Total: R$ </span> {{ reservation.total.toFixed(2) }}</p>
        </div>

        <div class="escolha__resumo" id="servicos">
          <p v-if="!reservation.services.length"><span>Nenhum Serviço Adicional</span></p>
          <p v-else><span>Serviços Adicionais:</span></p>

          <div v-for="item in reservation.services" :key="item.id">
            <p><span>{{ item.service }}: </span>R$ {{ item.price.toFixed(2) }}</p>
          </div>
        </div>

        <!-- <div class="link"><a href="#"><span>Adicionar mais serviços</span></a></div> -->

        <div class="escolha__btn">
          <button @click="showModal('showServices')" id="showServices">Adicionar mais serviços</button>
        </div>

        <div class="escolha__btn">
          <button @click="clearBook" id="cleanBook">Limpar Seleção</button>
        </div>

        <div class="escolha__btn">
          <button @click="showModal('showDetails')" id="bookDetails">Ver Detalhes</button>
        </div>

        <ModalServices />
        <ModalDetails />
    </aside>
</template>

<script>
  import ModalServices from './ModalServices.vue';
  import ModalDetails from './ModalDetails.vue';
  import { init } from '@/store/reservations';

  export default {
    name: 'Booking',

    components: {
      ModalServices,
      ModalDetails
    },

    data() {
      return {
        // booking: this.$store.getters.getStorage('login')
        // reservation: this.$store.state.reservation
      }
    },

    computed: {
      reservation() {
        return this.$store.state.reservation
      },

      modal() {
        return this.$store.state.modal
      }
    },

    methods: {
      showModal(modal) {
        this.modal[modal] = 'block'
      },

      clearBook() {
        localStorage.removeItem('booking');
        init();
        // this.reservation.id = 0;
        // this.reservation.accommodation = '';
        // this.reservation.checkin = '';
        // this.reservation.checkout = '';
        // this.reservation.qty = '';
        // this.reservation.rates = '';
        // this.reservation.services = [];
        // this.reservation.total = 0;


      }
    },

  };

</script>
