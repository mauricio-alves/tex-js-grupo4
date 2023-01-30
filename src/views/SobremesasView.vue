<template>
  <ItemProduto :tipo="categoria" />
</template>

<script>
  import ItemProduto from '@/components/ItemProduto.vue';

  export default {
    data() {
      return { categoria: 'sobremesas' }
    },

    name: 'SobremesasView',
    components: { ItemProduto },
  };
</script>