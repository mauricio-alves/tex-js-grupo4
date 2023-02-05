<template>
  <!-- <label for="coupon">validar cupom</label> -->
  <input v-model="coupon" type="text" placeholder="insira seu cupom">
  <button @click="checkCoupon">validar</button>
  <button v-if="coupon" @click="cancel">cancelar</button>
  <p>{{ message }}</p>
</template>

<script>
  export default {
    name: 'Coupon',

    data() {
      return {
        coupon: '',
        message: ''
      }
    },

    computed: {
      couponStorage() {
        return JSON.parse(localStorage.getItem('coupon'))
      },

      reservation() {
        return this.$store.state.reservation
      }
    },

    methods: {
      checkCoupon() {
        if (!this.couponStorage) {
          return this.message = 'insira um cupom válido';
        }

        if (this.coupon !== this.couponStorage.coupon.toUpperCase())
          return this.message = 'cupom inválido';

        if (!this.reservation.discount) {
          this.message = 'cupom aplicado';
          this.reservation.discount = this.reservation.total * 0.1;
        } else {
          this.message = 'desconto já aplicado';
        };
      },

      cancel() {
        this.coupon = '';
        this.reservation.discount = 0;
      }
    }
  }
</script>
