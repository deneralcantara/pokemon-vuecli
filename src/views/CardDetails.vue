<template>
  <div class="home">
      <div v-if="card.loading" class="row">
        <div class="col-md-12">
          <p>Carregando Pokemón</p>
        </div>
      </div>

      <div v-else>
        <CardDetailWeb class="d-md-block d-none" :card="card.data.data" />
        <CardDetailMobile class="d-block d-md-none" :card="card.data.data" />
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardDetailWeb from '../components/CardDetailWeb.vue';
import CardDetailMobile from '../components/CardDetailMobile.vue';

export default {
    name: 'CardDetailsPage',
    computed: { ...mapState(['card']) },
    components:{
      CardDetailWeb,
      CardDetailMobile,
    },
    props: {},
  
  data: function() {
    return {
    }
  },

  methods: {

      getCard: async function(id)
      {
          await this.$store.dispatch('getCard', id, this.card)
      },

  },

  mounted : function() {
    this.getCard(this.$route.params.id);
  }

}

</script>
