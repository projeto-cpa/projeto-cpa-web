<script>
import { v4 as uuidv4 } from 'uuid';
import emitter from '../helpers/emmiter';

export default {
    data: function () {
        return {
            aside: false,
            minimizado: false,
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
                    icone: 'fa fa-user-circle',
                    id: uuidv4(),
                    ativo: false
                },
                {
                    caminho: '/cargos',
                    texto: 'Cargos',
                    icone: 'fa fa-id-card',
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
                {
                    caminho: '/turmas',
                    texto: 'Turmas',
                    icone: 'fa fa-users',
                    id: 'a' + uuidv4().replace('-', ''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/turmas',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/turmas',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                },
                {
                    caminho: '/cursos',
                    texto: 'Cursos',
                    icone: 'fa fa-graduation-cap',
                    id: 'a' + uuidv4().replace('-', ''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/cursos',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/cursos',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                },
                {
                    caminho: '/perguntas',
                    texto: 'Perguntas',
                    icone: 'fa fa-commenting',
                    id: 'a' + uuidv4().replace('-', ''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/perguntas',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/perguntas',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                },
                {
                    caminho: '/respostas',
                    texto: 'Respostas',
                    icone: 'fa fa-comments',
                    id: 'a' + uuidv4().replace('-', ''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/respostas',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/respostas',
                            texto: 'Listagem',
                            icone: 'fa fa-list',
                        }
                    ]
                },
                {
                    caminho: '/usuarios',
                    texto: 'Usuários',
                    icone: 'fa fa-bars',
                    id: 'a' + uuidv4().replace('-', ''),
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
                    caminho: '/eixos',
                    texto: 'Eixos',
                    icone: 'fa fa-bars',
                    id: 'a' + uuidv4().replace('-', ''),
                    ativo: false,
                    items: [
                        {
                            caminho: '/cadastro/eixos',
                            texto: 'Cadastrar',
                            icone: 'fa fa-plus',
                        },
                        {
                            caminho: '/listagem/eixos',
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
            //console.log(link);
            if (link.ativo) {
                return 'active bg-light border-light';
            } else {
                return ''
            }
        },
        classeMostrar: function (link) {
            if (link.ativo) {
                return 'show';
            }
        },
        classeItemAtivo: function (item) {
            if (this.$nuxt.$route.path === item.caminho) {
                return 'active bg-primary';
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
                return 'text-primary';
            } else {
                return 'text-secondary'
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
            //console.log(link);
            if (link.items) {
                return 'has-items';
            } else {
                return '';
            }
        },
        aoAbrirSideBar: function (state) {
            console.log('aqui', state)
            this.aside = state;
        },
        aoMinimizar: function (state) {
            console.log('min')
            this.minimizado = state;
        },
    },
    computed: {
        classeAside: function () {
            var cls = '';

            if (this.aside) {
                console.log('1')
                cls += 'aside-opened';
            } else {
                console.log('2')
                cls += 'aside-closed';
            }

            if (this.minimizado) {
                cls += ' aside-min';
            } else {
                cls += ' aside-max'
            }

            return cls;

        }
    },
    mounted: function () {
        emitter.on('toggleSideBar', this.aoAbrirSideBar);
        emitter.on('toggleMinBar', this.aoMinimizar);
        this.recuperarEstado();
        require('bootstrap');
    }
}
</script>

<template>
    <aside class="col p-0 d-none d-lg-block" :class="classeAside">
        <div class="main list-group rounded-0 ">
            <div v-for="link in links" :key="link.id" :class="classeAtiva(link) + ' ' + classeTemItem(link)"
                class="principal list-group-item list-group-item-action btn rounded-0"
                @click.stop.prevent="aoClicarPrincipal(link)">
                <div class="link-header" data-bs-toggle="collapse" :data-bs-target="'#' + link.id">
                    <i class="link-icon" :class="link.icone + ' ' + corTexto(link)"></i>
                    <span :class="corTexto(link)" class="link-text"><b>{{ link.texto }}</b></span>
                    <span v-if="link.items" :class="corTexto(link)" class="link-arrow">
                        <i :class="classeFlexa(link)" class="icon-arrow"></i>
                    </span>
                </div>
                <div :class="classeMostrar(link)" class="list-group collapse ms-2"
                    v-if="link.items && link.items.length > 0" :id="link.id">
                    <a :class="classeItemAtivo(item)" @click.prevent="aoClicarItem(item)"
                        v-for="(item, index2) in link.items" :key="index2"
                        class="list-group-item list-group-item-action btn mb-2 rounded-4">
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
                                <a href="/conta" class="dropdown-header btn btn-link d-flex align-items-center">
                                    <img src="/_nuxt/static/user.png" class="dropdown-user-img avatar me-2">
                                    <div class="dropdown-user-details text-start">
                                        <div class="dropdown-user-details-name">
                                            <b>Administrador</b>
                                        </div>
                                        <div class="dropdown-user-details-email small">
                                            <span>admin@admin</span>
                                        </div>
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

aside .main.list-group {
    height: calc(100% - 60px);
    overflow-y: auto;
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

.list-group-item:active {
    border: 1px solid #ccc !important;
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
    box-shadow: inset 0px 3px 3px var(--bs-gray-400);
}

.list-group.collapse {
    margin-top: 5px;
}

.list-group-item:active .link-header *,
.list-group-item:active .list-group-item:active * {
    color: #0d6efd !important;
    border-color: #0d6efd !important;
}

.avatar {
    width: 32px;
    height: 32px;
    object-fit: contain;
}

@media (max-width: 991.98px) {
    .aside-opened {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        flex: 1 1 100% !important;
    }
}

@media (min-width: 992px){
    aside.aside-min {
    width: auto !important;
    max-width: 95px !important;
}

aside.aside-min .link-text, aside.aside-min .list-text, aside.aside-min .icon-arrow {
    display: none;
}

aside.aside-min .link-header{
    text-align:center;
}
}
</style>