<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <foto :titulo="foto.titulo">
          <img class="responsive-image" v-my-transform.animate="45" :src="foto.url" :alt="foto.titulo">
          <btn
            type="Button"
            label="Remover"
            @botaoAtivado="remove(foto)"
            :confirmation="false"
            styleBtn="default"
          ></btn>
        </foto>
      </li>
    </ul>
  </div>
</template>

<script>
const urlFotos = 'http://localhost:3000/v1/fotos'
import Foto from '../shared/foto/Foto.vue'
import Btn from '../shared/button/Button.vue'
import transform from '../../directives/Transform'
export default {

  components: {
    foto: Foto,
    btn: Btn
  },
  directives: {
    'my-transform': transform
  },
  methods: {
    remove(foto){
      alert(foto.titulo)
    }
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
