<script>
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Aside from '../components/Aside.vue';
import Footer from '../components/Footer.vue';
import Super from '../components/Super.vue';
import sessions from '../helpers/sessions';
import telaInicial from '../components/view/telaInicial.vue';

export default {
  name: 'index',
  components: {
    'Aside': Aside,
    'Main': Main,
    'Footer': Footer,
    'Header': Header,
    'Super': Super,
    'telaInicial': telaInicial
  },
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    usuarioLogado: function () {
      if (!sessions.get('session_token')) {
        this.$router.push({ path: '/sair' });
        return;
      }
      this.show = true;
    }
  },
  mounted: function () {
    this.usuarioLogado();
  }
}
</script>

<template>
  <Super v-if="show">
    <Header></Header>
    <Aside></Aside>
    <Main titulo="Tela inícial">
      <telaInicial></telaInicial>
    </Main>
    <Footer></Footer>
  </Super>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>