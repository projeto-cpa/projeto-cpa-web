<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data: function () {
        return {
            links: [
                {
                    url: '/',
                    texto: 'Página inícial',
                    icone: 'fa fa-home',
                    id: uuidv4(),
                    active: false
                },
                {
                    url: '/usuarios/',
                    texto: 'Usuários',
                    icone: 'fa fa-user',
                    id: uuidv4(),
                    active: false,
                    items: [
                        {
                            url: '/usuarios/cadastro/',
                            texto: 'Cadastrar',
                        },
                        {
                            url: '/usuarios/listagem/',
                            texto: 'Listagem',
                        }
                    ]
                },
                {
                    url: '/cargos/',
                    texto: 'Cargos',
                    icone: 'fa fa-users',
                    id: uuidv4(),
                    active: false,
                    items: [
                        {
                            url: '/cargos/cadastro/',
                            texto: 'Cadastrar',
                        },
                        {
                            url: '/cargos/listagem/',
                            texto: 'Listagem',
                        }
                    ]
                }
            ],
            rotaVirtual: this.$nuxt.$route.path
        };
    },
    methods: {
        aoClicarPrincipal: function (link) {
            if (link.url.indexOf('#') === -1 && link.items === undefined) {
                //console.log(link.url)
                //console.log('aqui',link.url.indexOf('#'))
                window.location.href = link.url;
            }
            for (var x = 0; x < this.links.length; x++) {
                if (this.links[x].id === link.id) {
                    this.links[x].active = true;
                } else {
                    this.links[x].active = false;
                }
            }
        },
        aoClicarItem:function (item) {
            window.location.href = item.url;
        },
        classeAtiva: function (link) {
            if (link.url === this.rotaVirtual || link.active) {
                return 'active';
            }
        },
        classeMostrar: function (link) {
            if (link.url === this.rotaVirtual || link.active) {
                return 'show';
            }
        },
        linkPrincipal: function (link) {
            if (link.url === this.rotaVirtual || link.active) {
                return '#a' + link.id;
            } else {
                return link.url;
            }
        }
    }
}
</script>

<template>
    <aside class="col p-0">
        <div class="list-group rounded-0">
            <a v-for="(link, index) in links" :key="index" :href="linkPrincipal(link)" @click="aoClicarPrincipal(link)"
                :class="classeAtiva(link)" class="list-group-item list-group-item-action" data-bs-toggle="collapse">
                <div class="link-header">
                    <i class="link-icon" :class="link.icone"></i>
                    <span class="link-text">{{ link.texto }}</span>
                </div>
                <div :class="classeMostrar(link)" class="list-group collapse" v-if="link.items && link.items.length > 0"
                    :id="'a' + link.id">
                    <a @click="aoClicarItem(item)" v-for="(item, index2) in link.items" :key="index2"
                        class="list-group-item list-group-item-action">{{ item.texto }}</a>
                </div>
            </a>
        </div>
    </aside>
</template>

<style scoped>
aside {
    padding-top: 60px !important;
    border: 1px solid #cccccc;
    max-width: 320px !important;
    flex: 1 1 320px !important;
    height: 100vh !important;
}

.link-header {
    padding: 10px;
}
</style>