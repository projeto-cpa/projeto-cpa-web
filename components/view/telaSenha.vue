<script>
export default {
    data: function () {
        return {
            password: '',
            confirmaPassword: '',
            toast: null,
            mensagem: '',
            showPassword: false,
            showConfirmPassword: false,
            liked: false,
            likedConfirm: false,
            showRequirements: false,
            showStrength: false,
            passwordStrength: '',
            messagePassword: '',
            mensagemSenha: '',
            corFraca: false,
            corMedia: false,
            corForte: false,
            corMuitoForte: false,
            corExtremamenteForte: false,
        }
    },
    methods: {
        validaSenha: function () {
            if (this.password != this.confirmaPassword) {
                this.mensagem = 'As senhas devem ser iguais';
            } else if (this.password.valueOf == "" || this.confirmaPassword.valueOf == "") {
                this.mensagem = 'A senha não pode ser nula';
            } else if (this.password.length < 8 || this.confirmaPassword.length < 8) {
                this.mensagem = 'A senha não pode ter menos que 8 caracteres';
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
        },
        mostraSenha() {
            this.liked = !this.liked
        },
        mostraConfirmaSenha() {
            this.likedConfirm = !this.likedConfirm
        },
        checkPassword() {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){8,}$/;
            if (this.password.length > 0) {

                if (!passwordRegex.test(this.password)) {

                    this.showStrength = true;
                    this.calculateStrength();

                    if (this.passwordStrength == "Fraca") {
                        this.messagePassword = "Inclua uma letra maiuscula, um número, um caractere especial e no minimo 8 letras."
                        this.mensagemSenha = "fraca"
                        this.corFraca = true;
                    }
                    else if (this.passwordStrength == "Média") {
                        this.messagePassword = "Inclua um número, um caractere especial e no minimo 8 letras.";
                        this.mensagemSenha = "media"
                        this.corMedia = true;
                    }
                    else if (this.passwordStrength == "Forte") {
                        this.messagePassword = "Inclua um caractere especial e no minimo 8 letras.";
                        this.mensagemSenha = "forte"
                        this.corForte = true;
                    }
                    else if (this.passwordStrength == "Muito forte") {
                        this.messagePassword = "Inclua no minimo 8 letras.";
                        this.mensagemSenha = "muito forte"
                        this.corMuitoForte = true;
                    }
                    else if (this.passwordStrength == "Extremamente forte") {
                        this.messagePassword = "Senha forte validada.";
                        this.mensagemSenha = "extremamente forte"
                        this.corExtremamenteForte = true;
                    }

                    this.showRequirements = true;
                }
                else {
                    this.showRequirements = false;
                    this.showStrength = true;
                    this.calculateStrength();
                }
            } else {
                this.showRequirements = false;
                this.showStrength = false;
            }
        },
        calculateStrength() {
            let score = 0;
            if (this.password.length > 7) {
                score++;
            }
            if (/[a-z]/.test(this.password)) {
                score++;
            }
            if (/[A-Z]/.test(this.password)) {
                score++;
            }
            if (/\d/.test(this.password)) {
                score++;
            }
            if (/[@$!%*?&]/.test(this.password)) {
                score++;
            }
            switch (score) {
                case 1:
                    this.passwordStrength = "Fraca";
                    break;
                case 2:
                    this.passwordStrength = "Média";
                    break;
                case 3:
                    this.passwordStrength = "Forte";
                    break;
                case 4:
                    this.passwordStrength = "Muito forte";
                    break;
                case 5:
                    this.passwordStrength = "Extremamente forte";
                    break;

                default:
            }
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

                    <div class="mb-3">
                        <div class="input-password">
                            <input v-model="password" type="password" class="form-control input-password" id="password"
                                placeholder="Senha" :type="showPassword ? 'text' : 'password'" @input="checkPassword">
                            <a class="icone-olho" v-on:click="mostraSenha" @click="showPassword = !showPassword">{{
                                showPassword ?
                                '' : '' }}
                                <span v-if="!liked">
                                    <i class="fa fa-eye"></i>
                                </span>
                                <span v-else>
                                    <i class="fa fa-eye-slash"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="input-password">
                            <input v-model="confirmaPassword" type="password" class="form-control input-password"
                                id="confirmaPassword" placeholder="Confirmar senha"
                                :type="showConfirmPassword ? 'text' : 'password'">
                            <a class="icone-olho" v-on:click="mostraConfirmaSenha"
                                @click="showConfirmPassword = !showConfirmPassword">{{ showConfirmPassword ?
                                    '' : '' }}
                                <span v-if="!likedConfirm">
                                    <i class="fa fa-eye"></i>
                                </span>
                                <span v-else>
                                    <i class="fa fa-eye-slash"></i>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <div class="col-md-12 config-cor-senha"
                            v-if="passwordStrength == 'Fraca' && this.password.length > 0">
                            <div class="col-md-2 cor-senha" v-bind:style="{ backgroundColor: corFraca ? 'red' : 'white' }">
                            </div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                        </div>
                        <div class="col-md-12 config-cor-senha" v-else-if="passwordStrength == 'Média'">
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMedia ? 'orange' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMedia ? 'orange' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMedia ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMedia ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMedia ? 'white' : 'white' }"></div>
                        </div>
                        <div class="col-md-12 config-cor-senha" v-else-if="passwordStrength == 'Forte'">
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corForte ? 'yellow' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corForte ? 'yellow' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corForte ? 'yellow' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corForte ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corForte ? 'white' : 'white' }"></div>
                        </div>
                        <div class="col-md-12 config-cor-senha" v-else-if="passwordStrength == 'Muito forte'">
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corMuitoForte ? 'white' : 'white' }">
                            </div>
                        </div>
                        <div class="col-md-12 config-cor-senha" v-else-if="passwordStrength == 'Extremamente forte'">
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                        </div>
                        <div class="col-md-12 config-cor-senha" v-else>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                            <div class="col-md-2 cor-senha"
                                v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                        </div>
                    </div>

                    <div class="heigth-15"></div>
                    <div class="col-md-12 alert alert-primary" role="alert">
                        <p v-if="showRequirements">Status da senha: {{ passwordStrength }} </p>
                        <ul class="config-ul">
                            <li>Inclua uma letra maiuscula</li>
                            <li>Inclua um número</li>
                            <li>Inclua um caractere especial</li>
                            <li>Inclua no minimo 8 letras</li>
                        </ul>
                    </div>
                    <!--
                        <br>
                            <span v-if="showRequirements && this.password.length > 0">{{ messagePassword }}</span>
                            <span v-if="messagePassword && this.password.length > 0">Força da senha: {{ passwordStrength
                            }}</span>
                            -->

                    <div class="col-md-12 div-btn form-floating mb-3">
                        <button @click="validaSenha" href="/" class="col-md-3 btn btn-primary btn-senha">Enviar</button>
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

.cor-senha {
    border-radius: 10px;
    height: 15px;
}

.config-cor-senha {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.heigth-15 {
    height: 15px;
}

.config-ul {
    margin-bottom: 0rem;
}
</style>

