<script>
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
        validaEmail() {
            var that = this;
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(this.email)) {
                that.mensagem = "E-mail incorreto";
                this.abrirToast()
            } else {
                that.escondeDiv = false;
                that.mostrando = true;
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
                    <div class="div-img-cpa col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                        <img class="img-cpa" loading="lazy" src="../../static/logoCpa.jpg">
                    </div>

                    <div class="alinha-form-senha div-recuperar-senha col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                        <div class="w-80">
                            <div class="col-12 text-email">
                                <h2 style="font-size: 25px;">Recuperação de senha</h2>
                            </div>

                            <div class="col-12">
                                <div v-if="mostrando" class="col-12" style="margin: 30px 0px 0px 0px;">
                                    <div class="alert alert-success d-flex align-items-center" role="alert">
                                        <i class="fa fa-check-circle" aria-hidden="true" style="margin: 0px 10px 0px 0px; color: #198754;"></i>
                                        <div style="color: #198754;">E-mail enviado com sucesso!</div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12" v-if="escondeDiv">
                                <div class="col-12 p-email">
                                    <p style="font-size: 18px;">Olá, digite seu email para recuperar sua senha.</p>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="col-12 mb-4 config-div-email" v-if="escondeDiv">
                                    <i class="fa fa-envelope icon-email" aria-hidden="true"></i>
                                    <input @blur="validaEmail" v-model="email" type="email"
                                        class="form-control" id="email"
                                        placeholder="E-mail:" required style="border-radius: 0px;">
                                </div>
                                <button class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 btn btn-primary" v-if="escondeDiv" @click.prevent="validaEmail">Enviar</button>
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
    padding: 0px 10px 0px 0px;
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
    width: 300px;
    padding: 10px 0px 0px 0px;
}

.div-recuperar-senha {
    height: 100%;
    background-color: #304358;
    display: flex;
    justify-content: center;
    align-items: center;
}

.w-80 {
    width: 80%;
}
</style>

