<script>
import cookies from '../helpers/cookies.js';

export default {
    name: 'sair',
    mounted() {
        cookies.remove('session_token');
        this.$router.push({ path: '/acesso' });
    }
}
</script>

<template>
    
</template>