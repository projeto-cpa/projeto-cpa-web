<script>
import AppMain from '~/layouts/AppMain.vue';
import AppHeader from '~/layouts/AppHeader.vue';
import AppAside from '~/layouts/AppAside.vue';
import AppFooter from '~/layouts/AppFooter.vue';
import AppSuper from '~/layouts/AppSuper.vue';
import telaCadastroEixos from '../../components/view/cadastro/telaCadastroEixos.vue';

export default {
  name: 'cadastro-eixos',
  components: {
    'AppAside': AppAside,
    'AppMain': AppMain,
    'AppFooter': AppFooter,
    'AppHeader': AppHeader,
    'AppSuper': AppSuper,
    'telaCadastroEixos': telaCadastroEixos
  }
}
</script>

<template>
  <AppSuper>
    <AppHeader></AppHeader>
    <AppAside></AppAside>
    <AppMain titulo="Tela de cadastro de eixos">  
      <telaCadastroEixos></telaCadastroEixos>
    </AppMain>
    <AppFooter></AppFooter>
  </AppSuper>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>