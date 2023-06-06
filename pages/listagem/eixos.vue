<script>
import AppMain from '~/layouts/AppMain.vue';
import AppHeader from '~/layouts/AppHeader.vue';
import AppAside from '~/layouts/AppAside.vue';
import AppFooter from '~/layouts/AppFooter.vue';
import AppSuper from '~/layouts/AppSuper.vue';
import telaListagemEixos from '../../components/view/listagem/telaListagemEixos.vue';

export default {
  name: 'listagem-eixos',
  components: {
    'AppAside': AppAside,
    'AppMain': AppMain,
    'AppFooter': AppFooter,
    'AppHeader': AppHeader,
    'AppSuper': AppSuper,
    'telaListagemEixos': telaListagemEixos
  }
}
</script>

<template>
  <AppSuper>
    <AppHeader></AppHeader>
    <AppAside></AppAside>
    <AppMain titulo="Tela de listagem de eixos">  
      <telaListagemEixos></telaListagemEixos>
    </AppMain>
    <AppFooter></AppFooter>
  </AppSuper>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>