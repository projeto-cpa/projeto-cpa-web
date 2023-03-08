<script>
import Main from '../../components/Main.vue';
import Header from '../../components/Header.vue';
import Aside from '../../components/Aside.vue';
import Footer from '../../components/Footer.vue';
import Super from '../../components/Super.vue';

import cadastroUsuarios from '../../components/view/cadastro/cadastroUsuarios.vue';

export default {
  name: 'cadastro-usuarios',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'cadastroUsuarios': cadastroUsuarios
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
    <Main titulo="Página de cadastro de usuários">
      <cadastroUsuarios></cadastroUsuarios>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>