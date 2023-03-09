<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data: function () {
        return {
            links: [
                {
                    caminho: '/',
                    texto: 'Página inícial',
                    icone: 'fa fa-home',
                    id: uuidv4(),
                    ativo: false
                },
                {
                    caminho: '/usuarios',
                    texto: 'Usuários',
                    icone: 'fa fa-user',
                    id: 'a' + uuidv4().replace('-',''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/usuarios',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/usuarios',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                },
                {
                    caminho: '/cargos',
                    texto: 'Cargos',
                    icone: 'fa fa-users',
                    id: 'a' + uuidv4().replace('-',''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/cargos',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/cargos',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        aoClicarPrincipal: function (link) {
            console.log('clicou')
            if (!link.items) {
                this.$router.push({ path: link.caminho });
            }
            for (var x = 0; x < this.links.length; x++) {
                if (this.links[x].id === link.id) {
                    this.links[x].ativo = true;
                } else {
                    this.links[x].ativo = false;
                }
            }
        },
        aoClicarItem: function (item) {
            this.$router.push({ path: item.caminho });
        },
        classeAtiva: function (link) {
            if (link.ativo) {
                return 'active';
            }
        },
        classeMostrar: function (link) {
            if (link.ativo) {
                return 'show';
            }
        },
        classeItemAtivo: function (item) {
            if (this.$nuxt.$route.path === item.caminho) {
                return 'active';
            } else {
                return '';
            }

        },
        recuperarEstado: function () {
            var caminho = this.$nuxt.$route.path;
            var link;
            for (var x = 0; x < this.links.length; x++) {
                link = this.links[x];
                if (caminho.indexOf(link.caminho) > 0 || caminho === link.caminho) {
                    this.links[x].ativo = true;
                } else {
                    this.links[x].ativo = false;
                }
            }
        },
        corTexto: function (link) {
            if (link.ativo) {
                return 'text-white';
            } else {
                return 'text-dark'
            }
        },
        corItemTexto: function (item) {
            if (this.$nuxt.$route.path === item.caminho) {
                return 'text-white';
            } else {
                return 'text-dark'
            }
        }
    },
    mounted: function () {
        require('bootstrap');
        this.recuperarEstado();
    }
}
</script>

<template>
    <aside class="col p-0">
        <div class="list-group rounded-0">
            <div v-for="link in links" :key="link.id" @click="aoClicarPrincipal(link)" :class="classeAtiva(link)"
                class="principal list-group-item list-group-item-action btn rounded-0" data-bs-toggle="collapse"
                :data-bs-target="'#' + link.id">
                <div class="link-header">
                    <i class="link-icon" :class="link.icone + ' ' + corTexto(link)"></i>
                    <span :class="corTexto(link)" class="link-text">{{ link.texto }}</span>
                </div>
                <div :class="classeMostrar(link)" class="list-group collapse ms-2" v-if="link.items && link.items.length > 0"
                    :id="link.id">
                    <a :class="classeItemAtivo(item)" @click="aoClicarItem(item)" v-for="(item, index2) in link.items"
                        :key="index2" class="list-group-item list-group-item-action btn mb-2 rounded-4">
                        <i class="list-icon" :class="item.icone + ' ' + corItemTexto(item)"></i>
                        <span :class="corItemTexto(item)" class="list-text">{{ item.texto }}</span>
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
aside {
    padding-top: 60px !important;
    border-right: 1px solid #cccccc;
    max-width: 320px !important;
    flex: 1 1 320px !important;
    height: 100vh !important;
}

.link-header {
    padding: 7.5px;
}

.list-group-item.active {
    /*background-color: #273c4f !important;*/
    /*border-color: #273c4f !important;*/
}

.list-group-item .list-group-item {
    padding-top: 10px;
    padding-bottom: 10px;
}

.list-group-item .list-group-item.active {
    border: 1px solid currentColor !important;
}

.principal.list-group-item {
    height: 60px;
}

.principal.list-group-item.active {
    height: auto;
}

.list-group.collapse{
    margin-top:5px;
}
</style>