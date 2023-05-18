<script>
import sessions from '../helpers/sessions.js';

export default {
    name: 'sair',
    mounted() {
        sessions.remove('session_token');
        this.$router.push({ path: '/acesso' });
    }
}
</script>

<template>
    
</template>