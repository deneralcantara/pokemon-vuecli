<template>
  <div>
    <div class="row">
      <div v-for="card in cards.data.data" :key="card.id" class="col-md-3 mb-5">
        <div class="card">
          <div class="card-header">
            <router-link class="link" :to="'/card/' + card.id">
              <div class="row">
                <div class="col-md-12">
                  ID: <b>{{card.id}}</b> - Name: <b>{{card.name}}</b>
                </div>

                <div class="col-md-12">
                  Type(s): <span class="mr-3" v-for="type in card.types" :key="type">{{type}}</span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="card-body">
            <router-link class="link" :to="'/card/' + card.id">
              <img class="img-fluid" :src="card.images.small" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ListPokemonsWeb',
  props: {
    cards: Object,
  },

  data: function(){
    return {
      
    }
  },

  methods: {
    
  },

  mounted : function() {
    
  }
}
</script>