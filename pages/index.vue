<script>
import AppMain from '~/layouts/AppMain.vue';
import AppHeader from '~/layouts/AppHeader.vue';
import AppAside from '~/layouts/AppAside.vue';
import AppFooter from '~/layouts/AppFooter.vue';
import AppSuper from '~/layouts/AppSuper.vue';
import sessions from '../helpers/sessions';
import telaInicial from '../components/view/telaInicial.vue';

export default {
  name: 'index',
  components: {
    'AppAside': AppAside,
    'AppMain': AppMain,
    'AppFooter': AppFooter,
    'AppHeader': AppHeader,
    'AppSuper': AppSuper,
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
  <AppSuper v-if="show">
    <AppHeader></AppHeader>
    <AppAside></AppAside>
    <AppMain titulo="Tela inícial" :expand="true">
      <telaInicial></telaInicial>
    </AppMain>
    <AppFooter></AppFooter>
  </AppSuper>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>