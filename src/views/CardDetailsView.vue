<template>
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-8 col-12-medium">
              <div id="content">

                <!-- Content -->

                <article>
                  <header class="major">
                    <h2>{{ card.name }}</h2>
                    <p>{{ card.artist }}</p>
                  </header>

                  <span class="image featured">
                    <img :src="card.imageUrl" alt="" />
                  </span>

                  <p>{{ card.originalText }}</p>
                </article>

              </div>
            </div>
            <div class="col-4 col-12-medium">
              <div id="sidebar">

                <!-- Sidebar -->

                <section>
                  <header class="major">
                    <h2>Infos</h2>
                  </header>
                  <p>set name: <b>truc</b></p>
                  <p >rarity:  <b>{{ card.rarity }}</b></p>
                  <p >toughness:  <b>{{ card.toughness }}</b></p>

                  <span class="button alt icon " v-if="card.power > 0">
                      <i class="fas fa-fire" v-for="i in card.power" :key="i"></i>

                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardDetailsView",
  data() {
    return {
      card: [],
    }
  },
  methods: {
    getCard(cardId) {
      axios.get('https://api.magicthegathering.io/v1/cards/' + cardId)
          .then(({data}) => {
            this.card = data.card
          })
    }
  },
  created() {
    this.getCard(this.$router.currentRoute.params.cardId)
  }
}
</script>

<style scoped>

</style>