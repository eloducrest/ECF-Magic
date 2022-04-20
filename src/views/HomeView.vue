<template>
  <div id="main-wrapper">
    <div class="wrapper style1">
      <div class="inner">

        <!-- Feature 1 -->
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <h2>Mes 3 Dernières Cartes</h2>
              </header>
            </div>
            <HomeCardComponent :cards="last3Card"></HomeCardComponent>
<!--            <div class="col-4 col-12-medium">
              <section>
                <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                <header class="second icon solid fa-dragon">
                  <h3>Titre de la carte</h3>
                  <p>And a subtitle</p>
                </header>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                <header class="second icon solid fa-dragon">
                  <h3>Titre de la carte</h3>
                  <p>And a subtitle</p>
                </header>
              </section>
            </div>
            <div class="col-4 col-12-medium">
              <section>
                <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                <header class="second icon solid fa-dragon">
                  <h3>Titre de la carte</h3>
                  <p>And a subtitle</p>
                </header>
              </section>
            </div>-->

          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HomeCardComponent from "@/components/HomeCardComponent";

export default {
  name: 'HomeView',
  components: {
    HomeCardComponent
  },
  data() {
    return {
      last3Card: [],
    }
  },

  methods: {
    getLast3Cards() {
      axios.get('https://api.magicthegathering.io/v1/cards')
          .then(({data}) => {
            console.log(data.cards)
            this.last3Card = data.cards.slice(0,3).map((item) => { return item; })
          })
    }
  },
  created() {
    this.getLast3Cards();
  }

}
</script>
