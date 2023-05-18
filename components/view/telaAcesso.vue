<script>
import Swal from 'sweetalert2';
import sessions from '../../helpers/sessions.js';
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
                sessions.set('session_token', resposta.token);
                console.log('Cookies setted', sessions.get('session_token'));
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
            var check = true;
            var msg = "";
            if (this.dados.email.length < 5) {
                msg = "E-mail muito curto, verifique novamente"
                if (!this.validateEmail()) {
                    msg = "E-mail inválido, verifique novamente"
                }
                check = false;
            }
            if (this.dados.senha.length < 5) {
                msg = "Senha muito curta, verifique novamente"
                check = false;
            }
            if (!check) {
                Swal.fire({
                    icon: 'error',
                    title: 'Verifique os dados',
                    text: msg,
                    confirmButtonText: 'Entendido'
                });
            }
            return check;
        },
        redirecionarParaHome() {
            this.$router.push({ path: '/' })
        },
        mostraSenha() {
            this.liked = !this.liked
        },
        validateEmail: function () {
            var email = this.dados.email;
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        }
    },
    mounted: async function () {
        if (sessions.get('session_token')) {
            this.$router.push({ path: '/' });
            return;
        }
        this.recuperando = false;
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
                                    <input v-model="dados.email" class="form-control" name="email" id="email"
                                        placeholder="E-mail:" style="border-radius: 0px;">
                                    <label for="email">Insira o e-mail:</label>
                                </div>
                                <div class="config-input-login mb-2">
                                    <div class="mb-2 text-white">
                                        <i class="fa fa-lock icon-senha me-2" aria-hidden="true"></i>
                                        <h4 class="d-inline-block">Senha de acesso</h4>
                                    </div>
                                </div>
                                <div class="config-input-login form-floating mb-3 rounded-5 hidden-scroll">
                                    <input v-model="dados.senha" name="password" type="password"
                                        class="form-control form-floating input-password" id="password"
                                        :type="showPassword ? 'text' : 'password'" placeholder="Senha:"
                                        aria-describedby="addon-wrapping" style="border-radius: 0px;"
                                        @keypress.enter="aoEnviarFormulario">
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
                                    <button name="submit" id="submit" @click.prevent="aoEnviarFormulario"
                                        class="col-12 btn btn-lg btn-primary rounded-5">
                                        <span v-if="enviando"><span v-if="enviando"><i
                                                    class="fa fa-spinner fa-spin fa-fw"></i></span></span>
                                        <span>Entrar</span>
                                    </button>
                                    <p class="text-center w-100">
                                        <a class="esqueci-senha btn btn-link" href="/recuperar">Esqueceu a senha? Clique
                                            aqui para recuperar</a>
                                    </p>
                                </div>
                            </form>
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


.hidden-scroll {
    overflow: hidden;
}

.fix-middle {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

section {
    overflow: hidden;
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
</style>