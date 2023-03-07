<script>
import * as bootstrap from 'bootstrap';
import * as Popper from "@popperjs/core"
import Home from './views/Home.vue'
import Usuarios from './views/Usuarios.vue'

const routes = {
  '/': Home,
  '/usuarios/': Usuarios,
}

export default {
  data:function() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <component :is="currentView" />
</template>