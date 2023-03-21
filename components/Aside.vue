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
                    caminho: '/conta',
                    texto: 'Conta',
                    icone: 'fa fa-user',
                    id: uuidv4(),
                    ativo: false
                },
                {
                    caminho: '/cargos',
                    texto: 'Cargos',
                    icone: 'fa fa-users',
                    id: 'a' + uuidv4().replace('-', ''),
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
                },
                {
                    caminho: '/disciplinas',
                    texto: 'Disciplinas',
                    icone: 'fa fa-book',
                    id: 'a' + uuidv4().replace('-', ''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/disciplinas',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/disciplinas',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                },
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
                    if (this.links[x].ativo) {
                        this.links[x].ativo = false;
                    } else {
                        this.links[x].ativo = true;
                    }
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
        classeFlexa: function (link) {
            if (link.ativo) {
                return 'fa fa-chevron-down';
            } else {
                return 'fa fa-chevron-right';
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
        },
        classeTemItem: function (link) {
            if (link.items) {
                return 'has-items';
            } else {
                return '';
            }
        }
    },
    mounted: function () {
        this.recuperarEstado();
        require('bootstrap');
    }
}
</script>

<template>
    <aside class="col p-0">
        <div class="list-group rounded-0">
            <div v-for="link in links" :key="link.id" :class="classeAtiva(link) + ' ' + classeTemItem(link)"
                class="principal list-group-item list-group-item-action btn rounded-0">
                <div class="link-header" data-bs-toggle="collapse" :data-bs-target="'#' + link.id"
                    @click="aoClicarPrincipal(link)">
                    <i class="link-icon" :class="link.icone + ' ' + corTexto(link)"></i>
                    <span :class="corTexto(link)" class="link-text">{{ link.texto }}</span>
                    <span v-if="link.items" class="link-arrow">
                        <i :class="classeFlexa(link)"></i>
                    </span>
                </div>
                <div :class="classeMostrar(link)" class="list-group collapse ms-2"
                    v-if="link.items && link.items.length > 0" :id="link.id">
                    <a :class="classeItemAtivo(item)" @click="aoClicarItem(item)" v-for="(item, index2) in link.items"
                        :key="index2" class="list-group-item list-group-item-action btn mb-2 rounded-4">
                        <i class="list-icon" :class="item.icone + ' ' + corItemTexto(item)"></i>
                        <span :class="corItemTexto(item)" class="list-text">{{ item.texto }}</span>
                    </a>
                </div>
            </div>
        </div>
        <footer class="aside-footer">
            <div class="card rounded-0">
                <div class="card-body py-2 bg-light">
                    <div class="container-fluid p-0">
                        <div class="row m-0">
                            <div class="col-8">
                                <a href="/conta" class="dropdown-header d-flex align-items-center" data-v-1a9bb128=""><img
                                        src="/_nuxt/static/user.png" class="dropdown-user-img avatar" data-v-1a9bb128="">
                                    <div class="dropdown-user-details" data-v-1a9bb128="">
                                        <div class="dropdown-user-details-name" data-v-1a9bb128="">Lucas Neitzke</div>
                                        <div class="dropdown-user-details-email small" data-v-1a9bb128="">admin@admin</div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-4 align-items-center d-flex">
                                <a href="/acesso" class="w-100 btn btn-sm btn-secondary rounded-5">Sair</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </aside>
</template>

<style scoped>
aside {
    position: relative;
    margin-top: 60px !important;
    border-right: 1px solid #cccccc;
    max-width: 320px !important;
    flex: 1 1 320px !important;
    height: calc(100vh - 60px) !important;
}

aside footer {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
}

footer .card {
    height: 60px;
    padding: 0 !important;
}

.link-header {
    position: relative;
    padding: 7.5px;
}

.link-arrow {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(0, -50%);
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

.principal.list-group-item:not(.active),
.principal.list-group-item:not(.has-items),
.principal.list-group-item.active:not(.has-items) {
    height: 60px !important;
}

.principal.list-group-item.active {
    height: auto !important;
}

.list-group.collapse {
    margin-top: 5px;
}

.list-group-item:active .link-header *,
.list-group-item:active .list-group-item:active * {
    color: #0d6efd !important;
    border-color:#0d6efd !important;
}
</style>