<template>
<div id="modalDetails" class="escolha__modal">
    <!-- Modal content -->
    <div class="escolha__modal__modal-content">
        <span @click="closeModal" id="closeModalDetails" class="escolha__modal__modal-content__close">&times;</span>
        <p><b>Detalhes da Reserva</b></p>

        <br>

        <img :src="dbAccommodations[reservation.id].image" id="detailsImage" />
        <h2 id="detailsAccommodation">{{ reservation.accommodation }}</h2>
        <p id="detailsDescription">{{ dbAccommodations[reservation.id].description }}</p>

        <br>

        <p id="detailsCheckin">Check in: {{ reservation.checkin }}</p>
        <p id="detailsCheckout">Check out: {{ reservation.checkout }}</p>
        <p id="detailsQty">Hóspedes: {{ reservation.qty }}</p>

        <br>

        <p><b>Serviços Adicionais</b></p>
        <div v-for="item in reservation.services" :key="item.id" id="detailsServices">
            <p>{{ item.service }}</p>
        </div>

        <br>

        <div id="detailsSummary">
            <h2>Resumo</h2>
            <p>{{ reservation.accommodation }} -> R$ {{ reservation.total.toFixed(2) }}</p>
            <p>Hóspedes -> {{ reservation.qty }}</p>
            <p>Diárias -> {{ reservation.rates }}</p>

            <div v-for="item in reservation.services" :key="item.id">
            <p>{{ item.service }} -> R$ {{ item.price.toFixed(2) }}</p>
            </div>

            <br>

            <p>TOTAL: R$ {{ reservation.total.toFixed(2) }}</p>
        </div>

        <button @click="confirmBook" id="confirmBook">Confirmar Reserva</button>
    </div>
  </div>
</template>
  
<script>
import { getFromDate } from '@/store/getDate';

export default {
  name: 'ModalDetails',

  computed: {
    modal() {
      return this.$store.state.modal
    },

    reservation() {
      return this.$store.state.reservation
    },

    dbServices() {
      return this.$store.getters.dbServices
    },

    dbAccommodations() {
      return this.$store.getters.dbAccommodations
    }
  },

  mounted() {
    document.addEventListener('click', this.onClick)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.onClick)
  },

  methods: {
    closeModal() {
      this.modal.showDetails = 'none'
    },

    onClick(e) {
      const modal = document.getElementById('modalDetails');

      if (e.target === modal)
        this.closeModal();
    },

    init() {
      this.$store.commit('initReservation')
    },

    confirmBook() {
      alert('Reserva efetuada com sucesso!');
      this.init();
      this.closeModal();
    }
  }
}
</script>
  
<style scoped>
  .escolha__modal {
    display: v-bind('modal.showDetails');
  }

  img {
    width: 80%;
  }
</style>
