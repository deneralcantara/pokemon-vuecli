<template>
  <div>

    <div class="row">

      <div id="carouselPokemons" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div v-for="(card, index) in cards.data.data" :key="card.id" :class="['carousel-item', index == 0 ? 'active' : null]">
            <div class="card">
              <router-link class="link" :to="'/card/' + card.id">
                <div class="card-header">
                  <div class="row">
                    <div class="col-md-12">
                      ID: <b>{{card.id}}</b> - Name: <b>{{card.name}}</b>
                    </div>

                    <div class="col-md-12">
                      Types: <span v-for="type in card.types" :key="type">{{type}}</span>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <img class="img-fluid" :src="card.images.small" />
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselPokemons" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselPokemons" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPokemonsMobile',
  props: {
    cards: Object,
  },

  methods: {},

  mounted : function() {
    
  }
}
</script>

<style scoped>

</style>