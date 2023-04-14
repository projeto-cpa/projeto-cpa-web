<script>
export default {
    data: function () {
        return {
            senha: '',
            confirmaSenha: '',
            toast: null,
            mensagem: ''
        }
    },
    methods: {
        validaSenha: function () {
            if (this.senha != this.confirmaSenha) {
                this.mensagem = 'As senhas devem ser iguais';
            } else if (this.senha.valueOf == "" || this.confirmaSenha.valueOf == "") {
                this.mensagem = 'A senha não pode ser nula';
            } else if (this.senha.length < 5 || this.confirmaSenha.length < 5) {
                this.mensagem = 'A senha não pode ser menor que 5 caracteres';
            } else {
                this.redirecionarParaHome();
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
    <section class="display-tela-recuperar">

        <div class="col-3 col-md-3 col-lg-3 back-color hvh-100"></div>

        <div class="col-6 col-md-6 col-lg-6 hvh-100"
            style="display: flex; justify-content: space-evenly; align-items: center; flex-wrap: wrap;">

            <div class="col-5 col-md-5 col-lg-5" style="display: flex; justify-content: center; align-items: center;">
                <img loading="lazy" src="../../static/imagemBIO-EDU (2).png" style="width: 30vh;">
            </div>

            <div class="alinha-form-senha">
                <div class="col-md-10" @submit.prevent="aoEnviarFormulario">
                    <div class="col-md-12 text-email">
                        <h2 style="font-size: 27px;">Alteração de senha</h2>
                    </div>

                    <div class="col-md-12 p-email">
                        <p style="font-size: 18px;">Olá, digite a nova senha que você irá usar.</p>
                    </div>

                    <div class="col-md-12 div-btn form-floating mb-3">
                        <input v-model="senha" type="text" class="form-control form-control-lg" id="senha"
                            placeholder="Senha" required>
                        <label for="senha" style="font-size: 18px;">Senha</label>
                    </div>

                    <div class="col-md-12 div-btn form-floating mb-3">
                        <input v-model="confirmaSenha" type="text" class="form-control form-control-lg" id="confirmaSenha"
                            placeholder="Confirme a senha" required>
                        <label for="confirmaSenha" style="font-size: large;">Confirmar senha</label>
                        <button @click="validaSenha" href="/" class="col-md-3 btn btn-primary btn-senha">Enviar</button>
                    </div>
                    <div style="display: flex;">
                        <div style="height: 10px; width: 50px; background-color: #000; border-radius: 5px;">
                        </div>
                        <div style="height: 10px; width: 50px; background-color: #000; border-radius: 5px;">
                        </div>
                        <div style="height: 10px; width: 50px; background-color: #000; border-radius: 5px;">
                        </div>
                    </div>
                </div>
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

        <div class="col-3 col-md-3 col-lg-3 back-color hvh-100"></div>

    </section>
</template>

<style>
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
    padding: 25px 0px 0px 0px;
}

.btn-senha {
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

