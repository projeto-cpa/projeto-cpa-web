<script>
import AppMain from '~/layouts/AppMain.vue';
import AppHeader from '~/layouts/AppHeader.vue';
import AppAside from '~/layouts/AppAside.vue';
import AppFooter from '~/layouts/AppFooter.vue';
import AppSuper from '~/layouts/AppSuper.vue';
import telaCadastroCargos from '../../views/cadastro/telaCadastroCargos/index.vue';

export default {
  name: 'cadastro-avaliacoes',
  components: {
    'AppAside': AppAside,
    'AppMain': AppMain,
    'AppFooter': AppFooter,
    'AppHeader': AppHeader,
    'AppSuper': AppSuper,
    'telaCadastroCargos': telaCadastroCargos
  }
}
</script>

<template>
  <AppSuper>
    <AppHeader></AppHeader>
    <AppAside></AppAside>
    <AppMain titulo="Tela de cadastro de cargos">  
      <telaCadastroCargos></telaCadastroCargos>
    </AppMain>
    <AppFooter></AppFooter>
  </AppSuper>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>