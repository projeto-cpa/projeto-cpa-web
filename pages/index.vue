<script>
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';
import Super from '../components/Super.vue';

import paginaInicial from '../components/views/paginaInicial.vue';

export default {
  name: 'IndexPage',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'paginaInicial': paginaInicial
  },
  mounted: function () {
    const bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.js');
  }
}
</script>

<template>
  <Super>
    <Header></Header>
    <Aside paginaAtiva="/"></Aside>
    <Main>
      <paginaInicial></paginaInicial>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>