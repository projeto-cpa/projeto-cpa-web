<script>
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';
import Super from '../components/Super.vue';

import paginaCargos from '../components/views/paginaCargos.vue';

export default {
  name: 'IndexPage',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'paginaCargos': paginaCargos
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
      <paginaCargos></paginaCargos>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>