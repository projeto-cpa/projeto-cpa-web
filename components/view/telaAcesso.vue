<script>
export default {
    data: function () {
        return {
            dados: {
                email: '',
                senha: '',
            },
            login: {
                meuEmail: 'admin',
                minhaSenha: 'admin'
            },
            toast: null,
            mensagem: ''
        }
    },
    methods: {
        aoEnviarFormulario: function () {
            if (this.validarFormulario()) {
                this.abrirToast()
            }
        },
        validarFormulario: function () {
            if (this.dados.email != this.login.meuEmail || this.dados.senha != this.login.minhaSenha) {
                this.mensagem = 'Os campos de senha e e-mail estão incorretos';
            } else {
                this.redirecionarParaHome()
            }
            this.abrirToast()
        },
        abrirToast: function () {
            this.toast.show();
        },
        redirecionarParaHome() {
            this.$router.push({ path: '/' })
        }
    },
    mounted: function () {
        const bootstrap = require('bootstrap')
        this.toast = new bootstrap.Toast(this.$refs.toast);
    }
}
</script>

<template>
    <section class="page-login">

        <div class="div-img-biopark col-5 col-md-5 col-lg-5">
            <img class="img-biopark" loading="lazy" src="../../static/img-biopark.svg">
        </div>

        <div class="div-form-login col-7 col-md-7 col-lg-7">
            <div class="wdt-50">
                <form class="config-form form col-12 col-md-12 col-lg-12" @submit.prevent="aoEnviarFormulario">
                    <div class="mb-3">
                        <label for="email" class="config-label-login form-label">Email:</label>
                        <input v-model="dados.email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="senha" class="config-label-login form-label">Senha:</label>
                        <input v-model="dados.senha" class="form-control" id="senha">
                    </div>
                    <div class="div-esqueci-senha">
                        <button class="btn btn-primary" @click="validarFormulario">Entrar</button>
                        <a class="esqueci-senha" href="/recuperar"> Esqueceu a senha ?</a>
                    </div>
                </form>
            </div>
        </div>

        <div class="toast-container position-fixed top-0 end-0 p-3">
            <div class="toast align-items-center text-white bg-warning border-0" role="alert" aria-live="assertive"
                aria-atomic="true" ref="toast">
                <div class="d-flex">
                    <div id="mensagem" class="toast-body">
                        <p style="font-size: 18px;" v-if="mensagem">{{ mensagem }}</p>
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                        aria-label="Close"></button>
                </div>
            </div>
        </div>

    </section>
</template>

<style>
.page-login {
    display: flex;
    flex-direction: row;
}

.config-form {
    background-color: #304358;
}

.div-img-biopark {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.div-form-login {
    height: 100vh;
    background-color: #304358;
    display: flex;
    justify-content: center;
    align-items: center;
}

.config-label-login {
    color: #fff;
}

.wdt-50 {
    width: 60%;
}

.img-biopark {
    width: 300px;
    height: 120px;
}

.esqueci-senha {
    text-decoration: none;
    color: #fff;
}

.esqueci-senha:hover {
    color: #0d6efd;
}

.div-esqueci-senha {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

div,
a {
    font-family: sans-serif;
}
</style>