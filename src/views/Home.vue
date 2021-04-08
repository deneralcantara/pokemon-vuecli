<template>
  <div class="home">
  
      <div class="row mt-3 mb-3">
        <div class="col-md-12">
          <h1>Lista de Pokemóns</h1>
        </div>
      </div>

      <div class="row justify-content-center mb-3">
        <div class="col-md-4">
          <input @input="searchPokemonFunction" type="text" class="form-control" placeholder="Pesquisar por nome...">
        </div>
      </div>

      <div v-if="cards.loading">
        Carregando Pokemons...
      </div>

      <div v-else>
        <!-- PAGINA PARA VISUALIZACAO WEB -->
        <div class="d-none d-md-block container-fluid">
          <ListPokemonsWeb :cards="cards" />
        </div>

        <div class="d-md-none d-block container-fluid">
          <ListPokemonsMobile :cards="cards" />
        </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListPokemonsWeb from '../components/ListPokemonsWeb.vue';
import ListPokemonsMobile from '../components/ListPokemonsMobile.vue';
import { debounce } from "debounce";

export default {
    name: 'CardsPage',
    computed: { ...mapState(['cards']) },
    components:{
      ListPokemonsWeb,
      ListPokemonsMobile
    },
    props: {},
  
  data: function() {
    return {
    
    }
  },

  methods: {

      getCards: function()
      {
          this.$store.dispatch('getCards', this.cards)
      },

      searchPokemonFunction: debounce(function (e) {
        if(e.target.value == null || e.target.value == "")
        {
          this.$store.dispatch('getCards', this.cards)
          return;
        }
        
        this.$store.dispatch('getCardsFilter', e.target.value ,this.cards)
        
      }, 500)

  },

  mounted : function() { 
    this.getCards();
  }

}

</script>
