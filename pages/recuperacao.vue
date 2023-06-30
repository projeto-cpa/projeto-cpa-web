<script>
import telaSenha from '../components/view/telaSenha.vue';

export default {
    name: 'senha',
    head: {
      title: 'CPA - Recuperação de acesso',
    },
    components: {
        telaSenha: telaSenha
    }
}
</script>

<template>
    <telaSenha></telaSenha>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>