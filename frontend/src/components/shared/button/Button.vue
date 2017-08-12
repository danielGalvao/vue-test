<template lang="html">
  <button class="btn btn-danger" @click="disparaAcao()" :type="tipo">{{ label }}</button>
</template>

<script>
export default {
  props: ['type', 'label'],
  methods: {
    disparaAcao(){
      this.$emit('botaoAtivado')
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
