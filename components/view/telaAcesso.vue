<script>
import Swal from 'sweetalert2';
import cookies from '../../helpers/cookies.js';
import apiLoginUsuario from '../../api/sessao/loginUsuario.js';;
;
export default {
    data: function () {
        return {
            enviando: false,
            recuperando: true,
            dados: {
                email: '',
                senha: '',
            },
            login: {
                meuEmail: 'admin',
                minhaSenha: 'admin'
            },
            toast: null,
            mensagem: '',
            showPassword: false,
            liked: false
        }
    },
    methods: {
        acessar: async function () {
            this.enviando = true;
            var resposta = await apiLoginUsuario(this.dados);

            await new Promise(function (solve) {
                setTimeout(function () {
                    solve();
                }, 750);
            })

            this.enviando = false;
            
            console.log('resposta', resposta);
            if (resposta.sucesso) {
                cookies.set('session_token', resposta.token);
                console.log('Cookies setted', cookies.get('session_token'));
                this.$router.push({ path: '/' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Credenciais incorretas',
                    text: 'E-mail e(ou) estão senhas incorretos',
                    confirmButtonText: 'Entendido'
                });
            }

        },
        aoEnviarFormulario: function () {
            console.log('clik')
            if (this.validarFormulario()) {
                this.acessar();
            }
        },
        validarFormulario: function () {
            return true;
        },
        abrirToast: function () {
            this.toast.show();
        },
        redirecionarParaHome() {
            this.$router.push({ path: '/' })
        },
        mostraSenha() {
            this.liked = !this.liked
        }
    },
    mounted: async function () {
        if (cookies.get('session_token')) {
            this.$router.push({ path: '/' });
        }
        this.recuperando = false;
        const bootstrap = require('bootstrap')
        this.toast = new bootstrap.Toast(this.$refs.toast);
    }
}
</script>

<template>
    <div>
        <section v-if="recuperando">
            <div class="fix-middle">
                <i class="fa fa-spinner fa-spin fa-fw fa-5x"></i>
            </div>
        </section>
        <section v-else class="section">
            <div class="row">
                <div class="conteudo-principal">
                    <div class="div-img-cpa col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img class="img-cpa" loading="lazy" src="../../static/logo.png">
                    </div>
                    <div class="div-form-login col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="w-60">
                            <form class="config-form form col-12 col-md-12 col-lg-12">
                                <div class="config-input-login mb-2">
                                    <div class="mb-2 text-white">
                                        <i class="fa fa-envelope icon-email me-2" aria-hidden="true"></i>
                                        <h4 class="d-inline-block">E-mail de acesso</h4>
                                    </div>
                                </div>
                                <div class="config-input-login form-floating mb-3 rounded-5 hidden-scroll">
                                    <input v-model="dados.email" class="form-control" id="email" placeholder="E-mail:"
                                        style="border-radius: 0px;">
                                    <label for="email">Insira o e-mail:</label>
                                </div>
                                <div class="config-input-login mb-2">
                                    <div class="mb-2 text-white">
                                        <i class="fa fa-lock icon-senha me-2" aria-hidden="true"></i>
                                        <h4 class="d-inline-block">Senha de acesso</h4>
                                    </div>
                                </div>
                                <div class="config-input-login form-floating mb-3 rounded-5 hidden-scroll">
                                    <input v-model="dados.senha" type="password"
                                        class="form-control form-floating input-password" id="password"
                                        :type="showPassword ? 'text' : 'password'" placeholder="Senha:"
                                        aria-describedby="addon-wrapping" style="border-radius: 0px;" @keypress.enter="aoEnviarFormulario">
                                    <label for="password">Insira a senha:</label>
                                    <span class="input-group-text" id="addon-wrapping"
                                        style="padding: 0px; border-radius: 0px;">
                                        <a class="icone-olho" v-on:click="mostraSenha"
                                            @click="showPassword = !showPassword">{{ showPassword ?
                                                '' : '' }}
                                            <span v-if="!liked">
                                                <i class="fa fa-eye" aria-hidden="true"
                                                    style="height: 56px; padding: 15px;"></i>
                                            </span>
                                            <span v-else>
                                                <i class="fa fa-eye-slash" aria-hidden="true"
                                                    style="height: 56px; padding: 15px;"></i>
                                            </span>
                                        </a>
                                    </span>
                                </div>
                                <div class="div-esqueci-senha">
                                    <a @click="aoEnviarFormulario" class="col-12 btn btn-lg btn-primary rounded-5">
                                        <span v-if="enviando"><span v-if="enviando"><i
                                                    class="fa fa-spinner fa-spin fa-fw"></i></span></span>
                                        <span>Entrar</span>
                                    </a>
                                    <p class="text-center w-100">
                                        <a class="esqueci-senha btn btn-link" href="/recuperar">Esqueceu a senha? Clique
                                            aqui para recuperar</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-6 toast-container position-fixed top-0 end-0 p-3">
                        <div class="toast align-items-center text-white bg-warning border-0" role="alert"
                            aria-live="assertive" aria-atomic="true" ref="toast">
                            <div class="d-flex">
                                <div id="mensagem" class="toast-body" style="display: -webkit-inline-box;">
                                    <i style="margin: 0px 10px 0px 0px; font-size: x-large;"
                                        class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                    <p style="font-size: 18px;" v-if="mensagem">{{ mensagem }}</p>
                                </div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                    aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.section {
    width: 100%;
    min-height: 100vh;
}

.config-form {
    background-color: #304358;
}

.div-img-cpa {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-form-login {
    height: 100%;
    background-color: #304358;
    display: flex;
    justify-content: center;
    align-items: center;
}

.w-60 {
    width: 60%;
}

.img-cpa {
    width: 100%;
    padding: 15%;
}

.esqueci-senha {
    text-decoration: none;
    color: #fff;
    margin: 20px 0px 0px 0px;
}

.esqueci-senha:hover {
    color: #0d6efd;
}

.div-esqueci-senha {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

div,
a {
    font-family: sans-serif;
}

.icone-olho {
    color: #304358;
    font-size: x-large;
}

.icone-olho:hover {
    cursor: pointer;
}

.input-password {
    display: -webkit-box;
}

.conteudo-principal {
    padding: 0 !important;
    overflow-y: auto !important;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.config-input-login {
    display: flex;
    align-items: center;
}

.icon-email {
    font-size: x-large !important;
    color: #fff;
    padding: 0px 6px 0px 0px;
}

.icon-senha {
    padding: 0px 10px 0px 0px;
    color: #fff;
    font-size: xx-large !important;
}
</style>

<style>
.input-password {
    appearance: none !important;
    -ms-appearance: none !important;
    -moz-appearance: none !important;
    -o-appearance: none !important;
    -webkit-appearance: none !important;
}

.input-password::-ms-reveal,
.input-password::-ms-clear {
    display: none !important;
}

.hidden-scroll {
    overflow: hidden;
}

.fix-middle {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

section{
    overflow: hidden;
}
</style>