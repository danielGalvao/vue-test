<template lang="html">
  <button :class="styleButton" @click="disparaAcao()" :type="tipo">{{ label }}</button>
</template>

<script>
export default {
  props: ['type', 'label', 'confirmation', 'styleBtn'],
  methods: {
    disparaAcao(){
      if(this.confirmation) {
        if(confirm("Deseja realmente remover a imagem?")){
          this.$emit('botaoAtivado')
        }
        return;
      }
      this.$emit('botaoAtivado')
    }
  },
  computed: {
    styleButton() {
      return this.styleBtn == 'default' ? 'btn btn-default' : 'btn btn-danger'
    }
  }
}
</script>

<style lang="css">

  .btn {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .btn-danger {
    background: firebrick;
    color: white;
  }

  .btn-default {
    background: darkcyan;
    color: white;
  }

</style>
