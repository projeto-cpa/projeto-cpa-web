<script>
export default {
    data: function () {
        return {
            links: [
                {
                    url: '/',
                    texto: 'Página inícial'
                },
                {
                    url: '/usuarios/',
                    texto: 'Usuários'
                },
                {
                    url: '/cargos/',
                    texto: 'Cargos'
                }
            ]
        }; 
    },
    methods: {
        classeAtiva: function (link) {
            var rotaAtual = this.$nuxt.$route.path;
            if (link.url === rotaAtual) {
                return 'active';
            }
        }
    }
}
</script>

<template> 
    <aside class="col">
        <ul class="nav flex-column nav-pills py-2">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
                <a class="nav-link" :class="classeAtiva(link)" :href="link.url">{{ link.texto }}</a>
            </li>
        </ul>
    </aside>
</template>

<style>
aside {
    border:1px solid #cccccc;
    max-width: 320px !important;
    flex: 1 1 320px !important;
    height: 100vh;
}
</style>