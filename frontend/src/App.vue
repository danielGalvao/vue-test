<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
const urlFotos = 'http://localhost:3000/v1/fotos'
export default {

  data(){
    return {
      titulo: 'Vue test',
      fotos: []
    }
  },
  created(){
    this.$http.get(urlFotos)
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err))
  }
}

</script>

<style>
</style>
