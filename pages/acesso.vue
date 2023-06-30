<script>
import telaAcesso from '../components/view/telaAcesso.vue';

export default {
    name: 'acesso',
    head: {
      title: 'CPA - Acessar conta',
    },
    components: {
        telaAcesso: telaAcesso
    }
}
</script>

<template>
    <telaAcesso></telaAcesso>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';

</style>