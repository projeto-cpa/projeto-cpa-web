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
                that.mensagem = "Email incorreto";
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
    <section class="display-tela-recuperar">

        <div class="col-3 col-md-3 col-lg-3 back-color hvh-100"></div>

        <div class="col-6 col-md-6 col-lg-6 hvh-100"
            style="display: flex; justify-content: space-evenly; align-items: center; flex-wrap: wrap;">

            <div class="col-5 col-md-5 col-lg-5" style="display: flex; justify-content: center; align-items: center;">
                <img loading="lazy" src="../../static/imagemBIO-EDU (2).png" style="width: 30vh;">
            </div>

            <div class="alinha-form-senha">
                <div class="col-md-10 text-email">
                    <h2 style="font-size: 27px;">Recuperação de senha</h2>
                </div>

                <div class="col-md-10">
                    <div v-if="mostrando" class="col-md-12" style="margin: 30px 0px 0px 0px;">
                        <div class="alert alert-success d-flex align-items-center" role="alert">
                            <img src="../../static/icon-certo.png">
                            <div> E-mail enviado com sucesso!</div>
                        </div>
                    </div>
                </div>

                <div class="col-md-10" v-if="escondeDiv">
                    <div class="col-md-10 p-email">
                        <p style="font-size: 18px;">Olá, digite seu email para recuperar sua senha.</p>
                    </div>
                </div>

                <div class="col-md-10 div-btn form-floating mb-3" v-if="escondeDiv">
                    <input @blur="validaEmail" v-model="email" type="email" class="form-control form-control-lg" id="email" placeholder="E-mail"
                        required>
                    <label for="email" style="font-size: large;">E-mail</label>
                    <button class="col-md-3 btn btn-primary btn-email" @click.prevent="validaEmail">Enviar</button>
                </div>

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

        <div class="col-3 col-md-3 col-lg-3 back-color hvh-100"></div>

    </section>
</template>

<style>
.hidden {
    display: none;
}

.back-color {
    background-color: #304358;
}

.display-tela-recuperar {
    display: flex;
    flex-wrap: nowrap;
}

.hvh-100 {
    height: 100vh;
}

.alinha-form-senha {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 35%;
    background-color: #dee2e6;
    padding: 10px;
    margin: 20px 50px 50px 50px;
    flex: 1 1 100%;
    border-radius: 10px;
    text-align: left;
}

.text-email {
    border-bottom: 1px solid #304358;
    padding: 10px 0px 10px;
}

.p-email {
    padding: 15px 0px 0px 0px;
}

.btn-email {
    margin: 20px 0px 0px 0px;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 45px;
}

.div-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

div,
p,
h2 {
    font-family: sans-serif;
}
</style>

