<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="save()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" @input="foto.titulo = $event.target.value" :value="foto.titulo">
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" @input="foto.url = $event.target.value" :value="foto.url">
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea id="descricao" autocomplete="off" @input="foto.descricao = $event.target.value" :value="foto.descricao"></textarea>
      </div>

      <div class="centralizado">
        <my-btn label="GRAVAR" type="submit" styleBtn="default"/>
        <router-link to="/">
          <my-btn label="VOLTAR" type="button"/>
        </router-link>
      </div>

    </form>
  </div>
</template>

<script>

import Button from '../shared/button/Button.vue';

export default {

  components: {

    'my-btn': Button
  },
  data() {
    return {
      foto: {
        titulo: '',
        url: '',
        descricao: ''
      }
    }
  },
  methods: {
    save() {
      console.log(this.foto)
      this.foto = {
        titulo: '',
        url: '',
        descricao: ''
      }
    }
  }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>
