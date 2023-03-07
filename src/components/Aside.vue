<script>
export default {
    data: function () {
        return {
            links: [
                {
                    url: '#/',
                    texto: 'Home'
                },
                {
                    url: '#/usuarios/',
                    texto: 'Usuarios'
                }
            ]
        };
    },
    props: ['paginaAtiva'],
    methods: {
        classeAtiva: function (item) {
            var that = this;
            console.log(item.url, that.paginaAtiva)
            if (this.paginaAtiva === item.url) {
                return 'active'
            }
        }
    },
    mounted: function () {
    }
};
</script>

<template>
    <aside>
        <ul class="nav nav-pills nav-fill">
            <li v-for="(item, index) in links" :key="index">
                <a :class="classeAtiva(item)" class="nav-link" :href="item.url">{{ item.texto }}</a>
            </li>
            <!-- <li class="nav-item">
                        <a :class="classeAtiva" class="nav-link" href="#/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a :class="classeAtiva" class="nav-link active" href="#/usuarios/">Usuários</a>
                    </li> -->
        </ul>
    </aside>
</template>

<style>
aside {
    width: 320px;
    border: 1px solid #ccc
}
</style>