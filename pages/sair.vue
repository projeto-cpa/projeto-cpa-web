<script>
import cookies from '../helpers/cookies.js';

export default {
    name: 'sair',
    methods: {
        sairSessao: function () {
            if (cookies.get('session_token') !== false) {
                cookies.remove('session_token');
            }
            this.$router.push({ path: '/acesso' });
        }
    },
    mounted() {
        this.sairSessao();
    }
}
</script>

<template>
    
</template>