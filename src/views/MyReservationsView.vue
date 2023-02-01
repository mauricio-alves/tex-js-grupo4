<template>
  <HeaderComponent />

  <h1>Minhas Reservas</h1>

  <!-- <div v-if="myReservations"> -->
  <div v-for="item in myReservations" :id="item.idReservation" class="my-reservations">
    <p>ID Reserva: {{ item.idReservation }}</p>
    <p>Quarto: {{ item.accommodation }}</p>
    <p>Check in: {{ item.checkin }}</p>
    <p>Check out: {{ item.checkout }}</p>
    <p>Serviços adicionais: {{ item.services }}</p>
    <p>Total: R$ {{ item.total.toFixed(2) }}</p>
  </div>
  <!-- </div> -->

  <FooterComponent />
</template>

<script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  
  export default {
    name: 'MyReservationsView',

    components: {
      HeaderComponent,
      FooterComponent
    },

    data() {
      return {

      }
    },

    computed: {
      myReservations() {
        const login = JSON.parse(localStorage.getItem('login'));
        const reservations = JSON.parse(localStorage.getItem('reservations'));

        if (reservations) {
          const myReservations = reservations.filter(item => item.email === login.email);
          return myReservations
        } else {
         return false
        }
      }
    },
  }
</script>

<style>
  .my-reservations {
    margin: 0 2rem 2rem;
  }
</style>
