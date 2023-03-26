<script>
import Main from '../../components/Main.vue';
import Header from '../../components/Header.vue';
import Aside from '../../components/Aside.vue';
import Footer from '../../components/Footer.vue';
import Super from '../../components/Super.vue';

import telaCadastroEixos from '../../components/view/cadastro/telaCadastroEixos.vue';

export default {
  name: 'cadastro-eixos',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'telaCadastroEixos': telaCadastroEixos
  }
}
</script>

<template>
  <Super>
    <Header></Header>
    <Aside></Aside>
    <Main titulo="Tela de cadastro de cargos">  
      <telaCadastroEixos></telaCadastroEixos>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>