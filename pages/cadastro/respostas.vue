<script>
import AppMain from '~/layouts/AppMain.vue';
import AppHeader from '~/layouts/AppHeader.vue';
import AppAside from '~/layouts/AppAside.vue';
import AppFooter from '~/layouts/AppFooter.vue';
import AppSuper from '~/layouts/AppSuper.vue';
import telaCadastroRespostas from '../../components/view/cadastro/telaCadastroRespostas.vue';

export default {
  name: 'cadastro-respostas',
  components: {
    'AppAside': AppAside,
    'AppMain': AppMain,
    'AppFooter': AppFooter,
    'AppHeader': AppHeader,
    'AppSuper': AppSuper,
    'telaCadastroRespostas': telaCadastroRespostas
  }
}
</script>

<template>
  <AppSuper>
    <AppHeader></AppHeader>
    <AppAside></AppAside>
    <AppMain titulo="Tela de cadastro de respostas">
      <telaCadastroRespostas></telaCadastroRespostas>
    </AppMain>
    <AppFooter></AppFooter>
  </AppSuper>
</template>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../../node_modules/font-awesome/css/font-awesome.min.css';
</style>