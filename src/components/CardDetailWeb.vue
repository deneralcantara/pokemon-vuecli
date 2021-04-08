<template>
  <div class="containter-fluid">
    <div class="col-md-12 mb-4 mt-4">
      <h3>Pokémon Detail</h3>
    </div>
    
    <div class="row">
      <div class="col-md-6 mb-5">
        <img :src="card.images.large" class="img-detail-web d-md-block d-none ml-4">
        <img :src="card.images.large" class="img-detail-mobile d-md-none d-block">
      </div>

      <div class="col-md-6 text-left details">
        <p class="texts"><b>ID:</b> {{card.id}} </p>
        <p class="texts"><b>Name:</b> {{card.name}} </p>
        <p class="texts"><b>Types:</b> <span v-for="type in card.types" :key="type">{{type}}</span></p>
        <p class="texts"><b>Resistances:</b></p>
        <p class="ml-5 texts" v-for="resistance in card.resistances" :key="resistance">
            {{resistance.type}}: {{resistance.value}}
        </p>
        <p class="texts"><b>Weakness:</b></p>
        <p class="ml-5 texts" v-for="weakness in card.weaknesses" :key="weakness">
          {{weakness.type}}: {{weakness.value}}
        </p>
        <p class="texts"><b>Attacks:</b></p>
        <p class="ml-5 texts" v-for="attack in card.attacks" :key="attack">
          {{attack.name}} - <button data-toggle="modal" data-target="#modalDetailsWeb" @click="showAttackDetails(attack)" type="button" class="btn btn-primary">Details</button>
        </p>
      </div>
    </div>


    <div class="modal fade" id="modalDetailsWeb" tabindex="-1" role="dialog" aria-labelledby="modalDetailsLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Details of {{card.name}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
                <div class="col-md-12 text-left">
                  <p><b>Name:</b> {{attackDetails.name}}</p>
                  <p><b>Cost:</b> {{attackDetails.convertedEnergyCost}}</p>
                  <p><b>Damage:</b> {{attackDetails.damage}}</p>
                  <p><b>Description:</b> {{attackDetails.text}}</p>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListPokemonsMobile',
  props: {
    card: Object,
  },
  data: function() {
    return {
      attackDetails: {},
    }
  } ,

  methods: {

    showAttackDetails: function(attack)
    {
      this.attackDetails = attack;
    },

  },

  mounted : function() {
    
  }
}
</script>

<style scoped>

</style>