<template>
  <div>
    <v-menu :routes="routes"/>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes'
import Menu from './components/shared/menu/Menu.vue'

export default {
  data() {
    return  {
      routes
    }
  },
  components: {
    'v-menu': Menu
  }
}
</script>

<style>

.pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
.pagina-enter, .pagina-leave-active {
  opacity: 0
}

</style>
