<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes'

export default {
  data() {
    return  {
      routes
    }
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
