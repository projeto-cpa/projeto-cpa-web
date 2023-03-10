<script>
import Main from '../../components/Main.vue';
import Header from '../../components/Header.vue';
import Aside from '../../components/Aside.vue';
import Footer from '../../components/Footer.vue';
import Super from '../../components/Super.vue';

import telaListagemCargos from '../../components/view/listagem/telaListagemCargos.vue';

export default {
  name: 'listagem-cargos',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'telaListagemCargos': telaListagemCargos
  }
}
</script>

<template>
  <Super>
    <Header></Header>
    <Aside></Aside>
    <Main titulo="Tela de listagem de cargos">  
      <telaListagemCargos></telaListagemCargos>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>