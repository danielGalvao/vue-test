<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in routes">
          <router-link :to="route.path">{{ route.titulo }}</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
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
</style>
