<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <foto :titulo="foto.titulo">
          <img class="responsive-image" :src="foto.url" :alt="foto.titulo">
        </foto>
      </li>
    </ul>
  </div>
</template>

<script>
const urlFotos = 'http://localhost:3000/v1/fotos'
import Foto from '../shared/foto/Foto.vue'
export default {

  components: {
    foto: Foto
  },
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
