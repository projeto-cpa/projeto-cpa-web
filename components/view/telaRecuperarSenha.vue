<script>
import recuperarLogin from '../../api/sessao/recuperarLogin'

export default {
    data: function () {
        return {
            mensagem: '',
            mostrando: false,
            escondeDiv: true,
            email: '',
            toast: null
        }
    },
    methods: {
        enviarFormulario: async function () {
            if (this.validaEmail()) {

                const resposta = await recuperarLogin({
                    email:this.email
                })

                console.log('resposta', resposta)
            }
        },
        validaEmail: function () {
            var that = this;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(this.email)) {
                that.mensagem = "E-mail incorreto";
                this.abrirToast()
                return false;
            } else {
                that.escondeDiv = false;
                that.mostrando = true;
                return true;
            }
        },
        abrirToast: function () {
            this.toast.show();
        },
    },
    mounted: function () {
        const bootstrap = require('bootstrap')
        this.toast = new bootstrap.Toast(this.$refs.toast);
    }
}
</script>

<template>
    <section class="section">
        <div class="row">
            <div class="conteudo-principal">
                <div class="col-12 conteudo-divs">
                    <div class="div-img-cpa col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img class="img-cpa" loading="lazy" src="../../static/logoCpa.jpg">
                    </div>
                    <div class="alinha-form-senha div-recuperar-senha col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div class="w-60">
                            <div class="col-12 text-email">
                                <h2 class="display-5">Recuperação de senha</h2>
                            </div>
                            <div class="col-12">
                                <div v-if="mostrando" class="col-12" style="margin: 30px 0px 0px 0px;">
                                    <div class="alert alert-success d-flex align-items-center" role="alert">
                                        <i class="fa fa-check-circle" aria-hidden="true"
                                            style="margin: 0px 10px 0px 0px; color: #198754;"></i>
                                        <div style="color: #198754;">E-mail enviado com sucesso!</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12" v-if="escondeDiv">
                                <div class="col-12 p-email">
                                    <p style="font-size: 18px;">Olá, digite seu email para recuperar sua senha.</p>
                                </div>
                            </div>
                            <div class="col-12" v-if="escondeDiv">
                                <div class="config-input-login mb-2">
                                    <i class="fa fa-envelope icon-email" aria-hidden="true"></i>
                                    <h4 class="d-inline-block">E-mail de acesso</h4>
                                </div>
                                <div class="config-div-email form-floating mb-3 rounded-3 hidden-scroll">
                                    <input v-model="email" type="email" class="form-control rounded-5" id="email"
                                        placeholder="E-mail:" required style="border-radius: 0px;">
                                    <label for="email" style="color: #000;">Insira o e-mail:</label>
                                </div>
                                <button class="col-12 btn btn-lg btn-primary rounded-5" @click="enviarFormulario">Enviar</button>
                            </div>
                            <div class="col-12 mt-2">
                                <a class="col-12 btn btn-lg btn-secondary rounded-5" href="/">Acessar conta</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="toast-container position-fixed top-0 end-0 p-3">
                <div class="toast align-items-center text-white bg-warning border-0" role="alert" aria-live="assertive"
                    aria-atomic="true" ref="toast">
                    <div class="d-flex">
                        <div id="mensagem" class="toast-body" style="display: -webkit-inline-box;">
                            <i style="margin: 0px 10px 0px 0px; font-size: x-large;" class="fa fa-exclamation-circle"
                                aria-hidden="true"></i>
                            <p style="font-size: 18px;" v-if="mensagem">{{ mensagem }}</p>
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                            aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.alinha-form-senha {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #dee2e6;
    text-align: left;
}

.text-email {
    border-bottom: 1px solid #fff;
    padding: 10px 0px 10px;
}

.p-email {
    padding: 15px 0px 0px 0px;
}

div,
p,
h2 {
    font-family: sans-serif;
    color: #fff;
}

.conteudo-principal {
    padding: 0 !important;
    overflow-y: auto !important;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.section {
    width: 100%;
    min-height: 100vh;
}

.icon-email {
    font-size: x-large;
    color: #fff;
    padding: 0px 6px 0px 0px;
}

.config-div-email {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

.conteudo-divs {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0px;
    height: 100vh;
}

.div-img-cpa {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-cpa {
    width: 100%;
    padding: 15%;
}

.div-recuperar-senha {
    height: 100%;
    background-color: #304358;
    display: flex;
    justify-content: center;
    align-items: center;
}

.w-60 {
    width: 60%;
}

.hidden-scroll {
    overflow: hidden;
}
</style>

