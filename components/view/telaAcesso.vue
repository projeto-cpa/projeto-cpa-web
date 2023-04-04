<script>
export default {
    data: function () {
        return {
            false: false,
            toast: null,
            logado: false,
            mensagem: '',
            validaSenha: '',
            dados: {
                senha: '',
                email: ''
            },
            login: {
                meuEmail: 'admim',
                minhaSenha: 'admim'
            },
        }
    },
    methods: {
        abrirToast: function () {
            if (this.dados.meuEmail == '' || this.login.minhaSenha == '') {
                this.mensagem = 'Os campos de senha e e-mail não pode ser vazios';
            } else {
                this.logado = true;
                this.redirecionarParaHome()
            }
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
                <form class="config-form form col-12 col-md-12 col-lg-12">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="config-label-login form-label">Email:</label>
                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="config-label-login form-label">Senha:</label>
                        <input type="password" v-model="senha" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="div-esqueci-senha">
                        <button type="submit" href="" class="btn btn-primary" @click="abrirToast">Entrar</button>
                        <a class="esqueci-senha" href="/recuperar"> Esqueceu a senha ?</a>
                    </div>
                </form>
            </div>
        </div>

        <div class="toast-container position-fixed top-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
                <div class="toast-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <strong class="me-auto"> Atenção!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div id="mensagem" class="toast-body">
                    <p v-if="mensagem">{{ mensagem }}</p>
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