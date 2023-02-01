<template>
  <article class="cards">
    <div>
      <h3>Escolha o quarto:</h3>
      <span class="cards__detalhe"></span>
    </div>

    <div
      v-for="item in dbAccommodations"
      :key="item.id"
      class="cards__images"
      id="cards"
    >
      <div v-if="item.id < 3" class="cards__images__card">
        <img
          src=""
          :id="`image${item.id + 1}`"
          :alt="item.accommodation"
          :title="item.accommodation"
        />
        <div class="cards__images__card__info">
          <h3>{{ item.accommodation }}</h3>
          <p>{{ item.description }}</p>
          <p>R$ {{ item.price.toFixed(2) }}</p>
          <div>
            <input
              v-model="reservation.id"
              :id="item.idLabel"
              type="radio"
              name="quarto"
              :value="item.id"
            />
            <label :for="item.idLabel"
              >Selecionar {{ item.accommodation }}</label
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import dbAccommodations from "@/store/db/dbAccommodations";

export default {
  name: "CreateAccommodations",
  data() {
    return {
      dbAccommodations,
    };
  },

  computed: {
    reservation() {
      return this.$store.state.reservation;
    },
  },
};
</script>
