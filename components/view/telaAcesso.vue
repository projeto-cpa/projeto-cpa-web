<script>
export default {
    data: function () {
        return {
            mensagem: '',
            email: 'admim',
            senha: 'admim',
            meuEmail: '',
            minhaSenha: ''
        }
    },
    methods: {
        salvaLogin: function () {
            if (this.meuEmail != this.email || this.minhaSenha != this.senha) {
                this.mensagem = "Seu login está incorreto.";
                console.log("Rodou");
                this.refs.toast.show();
            } else {
                this.chamaToast();
            }
        },
        chamaToast: function () {
            this.refs.toast.show();
            this.$router.push({ path: '/' });
        }
    },
    mounted: function () {
        const toast = require('bootstrap');
        toast.forEach(function (item) {
            new bootstrap.Toast(item);
        });
    }
}
</script >

<template>
    <section class="page-login">

        <div class="div-img-biopark col-5 col-md-5 col-lg-5">
            <img class="img-biopark" loading="lazy" src="../../static/img-biopark.svg">
        </div>

        <div class="div-form-login col-7 col-md-7 col-lg-7">
            <div class="wdt-50">
                <form class="config-form form col-12 col-md-12 col-lg-12">
                    <div class="mb-3">
                        <label for="meuEmail" class="config-label-login form-label">Email:</label>
                        <input id="meuEmail" type="email" class="form-control" aria-describedby="emailHelp" v-model="meuEmail">
                    </div>
                    <div class="mb-3">
                        <label for="minhaSenha" class="config-label-login form-label">Senha:</label>
                        <input id="minhaSenha" type="password" class="form-control" v-model="minhaSenha">
                    </div>
                    <div class="div-esqueci-senha">
                        <a href="" class="btn btn-primary" @click="salvaLogin">Entrar</a>
                        <a href="/recuperar" class="esqueci-senha"> Esqueceu a senha ?</a>
                    </div>
                </form>
            </div>
        </div>

        <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11" ref="toast">
            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">Atenção!</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    <p v-if="mensagem">
                        {{ mensagem }}
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
</script>

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