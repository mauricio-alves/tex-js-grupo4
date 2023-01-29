<template>
  <ItemProduto :tipo="categoria" />
</template>

<script>
  import ItemProduto from '@/components/ItemProduto.vue';

  export default {
    data() {
      return { categoria: 'pratosQuentes' }
    },

    name: 'PratosQuentesView',
    components: { ItemProduto },
  };
</script>