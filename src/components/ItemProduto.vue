<template>
    <div>
        <h3>Saboreie nossas delicias!</h3>
        <span>Estamos abertos 24 horas</span>
        <div>
            <div v-for="item in loja" :key="item">
                {{ item.nome }} -> R$ {{ item.preco }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      tipo: String
    },

    data() {
      return {
        // tipo: 'sobremesas'
      }
    },

    computed: {
      produtos() {
        return this.$store.state.produtos
      },

      loja() {
        return this.$store.getters.loja(this.tipo);
      }
    },

    methods: {
      aplicaDesconto() {
        this.$store.dispatch('aplicaDesconto', this.tipo)
      }
    },

    mounted() {
      this.aplicaDesconto()
    }
  };
</script>
