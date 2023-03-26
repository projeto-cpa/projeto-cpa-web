<script>
import Main from '../../components/Main.vue';
import Header from '../../components/Header.vue';
import Aside from '../../components/Aside.vue';
import Footer from '../../components/Footer.vue';
import Super from '../../components/Super.vue';

import telaCadastroTurmas from '../../components/view/cadastro/telaCadastroTurmas.vue';

export default {
  name: 'cadastro-turmas',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'telaCadastroTurmas': telaCadastroTurmas
  }
}
</script>

<template>
  <Super>
    <Header></Header>
    <Aside></Aside>
    <Main titulo="Tela de cadastro de turmas">  
      <telaCadastroTurmas></telaCadastroTurmas>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>