<script>
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';
import Super from '../components/Super.vue';

import paginaUsuarios from '../components/view/paginaUsuarios.vue';

export default {
  name: 'pageUsuarios',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'paginaUsuarios': paginaUsuarios
  },
  mounted: function () {
    const bootstrap = require('bootstrap');
  }
}
</script>

<template>
  <Super>
    <Header></Header>
    <Aside></Aside>
    <Main>
      <paginaUsuarios></paginaUsuarios>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>