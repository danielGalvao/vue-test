<template lang="html">
  <div class="painel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <slot class="painel-conteudo">
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
