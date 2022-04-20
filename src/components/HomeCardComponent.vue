<template>
  <div class="row">
    <div class="col-4 col-12-medium" v-for="card in cards" :key="card.id">
      <section>
        <a class="image featured" @click="showCardDetails(card.id)">
          <img :src="card.imageUrl" :alt="card.text" />
        </a>
        <header class="second icon solid fa-dragon">
          <h3>{{ card.name}}</h3>
          <p>{{ card.originalType}}</p>
        </header>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCardComponent",
  props: ['cards'],
  data() {
    return {

    }
  },
  methods: {
    showCardDetails(cardId) {
      this.$router.push({ name: 'cardDetails', params: {cardId: cardId}})
    }
  },
  created() {

  }
}
</script>

<style scoped>

</style>