<script>
import emitter from '../helpers/emmiter.js';
import locals from '../helpers/locals.js';
import listagemUsuario from '~/api/listagem/listagemUsuario';
import sessions from '~/helpers/sessions';

export default {
    data: function () {
        return {
            dados: {
                email: null,
                nome: null,
                sobrenome: null
            },
            show: false,
            menu: null,
        };

    },
    computed: {
        idUsuario: function () {
            return sessions.get("session_id");
        },
    },
    methods: {
        pegarDados: async function () {
            var dados = await listagemUsuario(this.idUsuario);
            console.log('dados', dados)
            this.dados = dados;
        },
        toggleMinBar: function () {
            this.show = !this.show;
            var value = this.show ? 'true' : 'false';
            locals.set('toggleMinBar', value);
            emitter.emit('toggleMinBar', this.show)
        },
        aoAbrirMenu: function (value) {
            console.log('abri', value)
            this.menu = value;
        },
        toggleSideBar() {
            var that = this;
            console.log(that.menu)
            var menu = this.menu = this.menu === null || this.menu === false ? true : false;;
            console.log('emit', menu);
            emitter.emit('toggleSideBar', menu);
            emitter.emit('bodyScroll', !menu);
        },
        recuperarEstadoMinimizado() {
            if (locals.get('toggleMinBar') === 'true') {
                this.minimizado = true;
            }
        }
    },
    mounted: function () {
        const bootstrap = require('bootstrap');
        emitter.on('toggleSideBar', this.aoAbrirMenu);
        if (locals.get('toggleMinBar') === 'true') {
            this.show = true;
        }
        this.pegarDados();
    }
};
</script>

<template>
                                <header class="col-12 p-0">
                                    <nav class="navbar navbar-expand-lg bg-white py-0" data-bs-theme="light">
                                        <div class="container-fluid">
                                            <div :class="show ? 'minimized' : ''" class="navbar-brand">
                                                <a href="/" class="btn btn-link p-0">
                                                    <template v-if="!show">
                                                        <img src="../static/logo.png" alt="Logo" height="40"
                                                            class="d-inline-block align-text-top" />
                                                    </template>
                                                    <template v-else>
                                                        <img src="../static/logo.png" alt="Logo" height="40"
                                                            class="d-inline-block align-text-top d-inline-block d-lg-none" />
                                                        <img src="../static/logo-symbol.png" alt="Logo" height="40"
                                                        class="d-inline-block align-text-top d-none d-lg-inline-block" />
                                                    </template>
                                                    <!-- <span><b>CPA</b></span> -->
                                                </a>
                                                <button :class="show ? 'minimized' : ''" @click="toggleMinBar"
                                                    class="btn btn-primary btn-toggle rounded-5 btn-aside d-none d-lg-block">
                                                    <i v-if="show" class="fa fa-chevron-right"></i>
                                                    <i v-else class="fa fa-chevron-left"></i>
                                                </button>
                                            </div>
                                            <div>
                                                <button class="navbar-toggler rounded-5 border-secondary btn" @click="toggleSideBar">
                                                    <template v-if="!menu || menu === null">
                                                        <i class="fa fa-bars"></i>
                                                    </template>
                                                    <template v-else-if="menu">
                                                        <i class="fa fa-times"></i>
                                                    </template>
                                                </button>
                                                <button type="button"
                                                    class="btn btn-primary btn-notification position-relative rounded-5  d-inline-block d-lg-none">
                                                    <span><i class="fa fa-bell-o"></i></span>
                                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                        99+</span>
                                                </button>
                                                <a class="btn text-secondary border-secondary rounded-5 btn-icon btn-outline-light dropdown-toggle d-inline-block d-lg-none"
                                                    id="navbarDropdownUserImageMobile" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false"><img class="img-fluid avatar" src="../static/user.png"></a>
                                                <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up user-dropdown"
                                                    aria-labelledby="navbarDropdownUserImageMobile">
                                                    <h6 class="dropdown-header d-flex align-items-center">
                                                        <img class="dropdown-user-img avatar" src="../static/user.png">
                                                        <div class="dropdown-user-details">
                                                            <div class="dropdown-user-details-name">{{ dados.nome }}</div>
                                                            <div class="dropdown-user-details-email small">{{ dados.email }}</div>
                                                </div>
                                            </h6>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="/conta">
                                                <i class="fa fa-user"></i> Minha conta </a>
                                            <a class="dropdown-item" href="/sair">
                                                <i class="fa fa-sign-out"></i> Sair </a>
                                        </div>
                                    </div>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Informativos</a>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">Links úteis</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item">Portal do aluno</a></li>
                                                    <li><a class="dropdown-item">Portal do professor</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <form class="d-flex me-2" role="search">
                                            <input class="form-control me-2 rounded-5" type="search" placeholder="Pesquisar..."
                                                aria-label="Search" />
                                            <button class="btn btn-secondary position-relative rounded-5" type="submit">
                                                <span><i class="fa fa-search"></i></span>
                                            </button>
                                        </form>
                                        <div class="d-flex">
                                            <button type="button" class="btn btn-primary position-relative rounded-5 d-none d-lg-block">
                                                <span class="d-xl-inline d-md-none d-inline">Notificações</span>
                                                <span><i class="fa fa-bell-o"></i></span>
                                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                    99+</span>
                                            </button>
                                        </div>
                                        <ul class="navbar-nav ms-2 d-none d-lg-flex">
                                            <li class="nav-item dropdown no-caret dropdown-user">
                                                <a class="btn text-secondary border-secondary rounded-5 btn-icon btn-outline-light dropdown-toggle"
                                                    id="navbarDropdownUserImage" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false"><img class="img-fluid avatar" src="../static/user.png"></a>
                                                <div class="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up user-dropdown"
                                                    aria-labelledby="navbarDropdownUserImage">
                                                    <h6 class="dropdown-header d-flex align-items-center">
                                                        <img class="dropdown-user-img avatar" src="../static/user.png">
                                                        <div class="dropdown-user-details">
                                                            <div class="dropdown-user-details-name">{{ dados.nome }}</div>
                                                            <div class="dropdown-user-details-email small">{{ dados.email }}</div>
                                        </div>
                                    </h6>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/conta">
                                        <i class="fa fa-user"></i> Minha conta </a>
                                    <a class="dropdown-item" href="/sair">
                                    <i class="fa fa-sign-out"></i> Sair </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
header {
    position: fixed !important;
    height: 60px !important;
    border-bottom: 1px solid #cccccc !important;
    z-index: 10;
}

header nav {
    position: absolute !important;
    top: 50% !important;
    left: 0px !important;
    transform: translate(0, -50%) !important;
    width: 100% !important;
    height: 100% !important;
}

.navbar-brand {
    position: relative;
    margin: 0px;
    width: 320px;
    height: 59px;
    text-align: center;
    margin-right: 20px;
    background-color: #fff !important;
    border-right: 1px solid #ccc;
}

.navbar-brand * {
    text-decoration: none;
}

.navbar .container-fluid {
    padding-right: 20px;
    padding-left: 0px;
}

.navbar-toggler,
.btn-notification {
    width: 46px;
    height: 46px;
    text-align: center;
}

.avatar {
    width: 32px !important;
    height: 32px !important;
    margin-right: 5px;
}

.dropdown-menu.dropdown-menu-end {
    min-width: 200px !important;
}

@media (max-width: 991.98px) {
    .navbar-brand {
        background-color: #fff !important;
        border: none !important;
        text-align: left !important;
        padding-left: 20px !important;
        width: auto !important;
        margin-right: 0px !important;
        ;
    }

    .navbar-collapse {
        z-index: 99;
        width: 100%;
        margin-right: -20px;
        padding: 10px 20px;
        background-color: #ffffff;
        box-shadow: 0px 3px 9px var(--bs-gray-400);
    }
}

@media (max-width: 991.98px) {
    .navbar-collapse {
        border-top: 1px solid #ccc;
        margin-top: -1px;
    }
}

.btn-aside {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0%, -50%);
}

.navbar-brand.minimized {
    max-width: 95px;
    width: 95px;
}

.btn-aside.minimized {
    right: -18px;
}
</style>