<script>
import telaRecuperarSenha from '../components/view/telaRecuperarSenha.vue';

export default {
    name: 'recuperar',
    head: {
      title: 'CPA - Recuperar acesso',
    },
    components: {
        telaRecuperarSenha: telaRecuperarSenha
    }
}
</script>

<template>
    <telaRecuperarSenha></telaRecuperarSenha>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>