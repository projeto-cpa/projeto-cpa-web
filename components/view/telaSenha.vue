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
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]){16,}$/;
            if (this.password.length > 0) {

                if (!passwordRegex.test(this.password)) {

                    this.showStrength = true;
                    this.calculateStrength();

                    if (this.passwordStrength == "Fraca") {
                        this.messagePassword = "Inclua uma letra maiuscula, um número, um caractere especial e no minimo 8 letras."
                        this.mensagemSenha = "fraca"
                        this.corFraca = true;
                    }
                    else if (this.passwordStrength == "Media") {
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
            let score = 0;;
            if (this.password.length > 15) {
                score++;
            }
            if (this.password.length > 0) {
                score++;
            }
            if (/[A-Z]/.test(this.password) && this.password.length > 3) {
                score++;
            }
            if (/\d/.test(this.password) && this.password.length > 7) {
                score++;
            }
            if (/[\W_]/.test(this.password) && this.password.length > 7) {
                score++;
            }
            if (this.password.length < 1) {
                score = 0;
                this.passwordStrength = "";
            }
            switch (score) {
                case 1:
                    this.passwordStrength = "Fraca";
                    break;
                case 2:
                    this.passwordStrength = "Media";
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
                    break;
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
    <section class="section">
        <div class="row">
            <div class="conteudo-principal">
                <div class="col-12 conteudo-divs">
                    <div class="div-img-cpa col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img class="img-cpa" loading="lazy" src="../../static/logoCpa.jpg">
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 div-senhas">
                        <div class="w-60" @submit.prevent="aoEnviarFormulario">
                            <div class="col-md-12 text-email">
                                <h2 class="display-5">Alteração de senha</h2>
                            </div>

                            <div class="col-md-12 p-email">
                                <p style="font-size: 18px;">Olá, digite a nova senha que você irá usar.</p>
                            </div>

                            <div class="config-input-login text-white mb-2">
                                <i class="fa fa-lock icon-senha" aria-hidden="true"></i>
                                <h4 class="d-inline-block">Senha de acesso</h4>
                            </div>
                            <div class="config-input-login form-floating mb-3 rounded-5 hidden-scroll">
                                <input v-model="password" type="password" class="form-control input-password" id="password"
                                    :type="showPassword ? 'text' : 'password'" @input="checkPassword"
                                    placeholder="Digite a senha:" aria-describedby="mostra-senha"
                                    style="border-radius: 0px; color: #000;">
                                <label for="password">Digite a senha:</label>
                                <span class="input-group-text" id="mostra-senha" style="padding: 0px; border-radius: 0px;">
                                    <a class="icone-olho" v-on:click="mostraSenha" @click="showPassword = !showPassword">{{
                                        showPassword ?
                                        '' : '' }}
                                        <span v-if="!liked">
                                            <i class="fa fa-eye" style="height: 56px; padding: 15px;"></i>
                                        </span>
                                        <span v-else>
                                            <i class="fa fa-eye-slash" style="height: 56px; padding: 15px;"></i>
                                        </span>
                                    </a>
                                </span>
                            </div>

                            <div class="config-input-login mb-2 text-white">
                                <i class="fa fa-lock icon-senha" aria-hidden="true"></i>
                                <h4 class="d-inline-block">Confirme a senha</h4>
                            </div>
                            <div class="config-input-login form-floating mb-3 rounded-5 hidden-scroll">
                                <input v-model="confirmaPassword" type="password" class="form-control input-password"
                                    id="confirmaPassword" aria-describedby="mostra-senha" placeholder="Confirmar senha:"
                                    :type="showConfirmPassword ? 'text' : 'password'" style="border-radius: 0px;">
                                <label for="confirmaPassword">Confirme a senha:</label>
                                <span class="input-group-text" id="mostra-senha"
                                    style="padding: 0px; border-radius: 0px; color: #000;">
                                    <a class="icone-olho" v-on:click="mostraConfirmaSenha"
                                        @click="showConfirmPassword = !showConfirmPassword">{{ showConfirmPassword ?
                                            '' : '' }}
                                        <span v-if="!likedConfirm">
                                            <i class="fa fa-eye" style="height: 56px; padding: 15px;"></i>
                                        </span>
                                        <span v-else>
                                            <i class="fa fa-eye-slash" style="height: 56px; padding: 15px;"></i>
                                        </span>
                                    </a>
                                </span>
                            </div>

                            <div class="col-12">
                                <div class="col-12 config-cor-senha" v-if="this.password.length < 1">
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                </div>
                                <div class="col-12 config-cor-senha" v-else-if="passwordStrength == 'Fraca'">
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corFraca ? 'red' : 'white' }">
                                    </div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corFraca ? 'white' : 'white' }"></div>
                                </div>
                                <div class="col-12 config-cor-senha" v-else-if="passwordStrength == 'Media'">
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMedia ? 'orange' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMedia ? 'orange' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMedia ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMedia ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMedia ? 'white' : 'white' }"></div>
                                </div>
                                <div class="col-12 config-cor-senha" v-else-if="passwordStrength == 'Forte'">
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corForte ? 'yellow' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corForte ? 'yellow' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corForte ? 'yellow' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corForte ? 'white' : 'white' }"></div>
                                </div>
                                <div class="col-12 config-cor-senha" v-else-if="passwordStrength == 'Muito forte'">
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMuitoForte ? 'lightgreen' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corMuitoForte ? 'white' : 'white' }">
                                    </div>
                                </div>
                                <div class="col-12 config-cor-senha" v-else-if="passwordStrength == 'Extremamente forte'">
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'green' : 'white' }"></div>
                                </div>
                                <div class="col-12 config-cor-senha" v-else>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                    <div class="col-2 cor-senha"
                                        v-bind:style="{ backgroundColor: corExtremamenteForte ? 'white' : 'white' }"></div>
                                </div>
                            </div>

                            <div class="heigth-15"></div>

                            <div class="col-md-12 alert alert-primary" role="alert">
                                <p class="cor-azul" v-if="showRequirements">Status da senha: {{ passwordStrength }} </p>
                                <p class="cor-azul mb-0" v-else><b>Status da senha: Vazia</b></p>
                                <ul class="config-ul cor-azul">
                                    <li>Inclua uma letra maiuscula</li>
                                    <li>Inclua um número</li>
                                    <li>Inclua um caractere especial</li>
                                    <li>Inclua no minimo 8 caracteres</li>
                                </ul>
                            </div>

                            <button @click="validaSenha" href="/" class="col-12 btn btn-lg rounded-5 btn-primary btn-senha">Enviar</button>

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
.text-email {
    border-bottom: 1px solid #fff;
    padding: 30px 0px 10px;
}

.p-email {
    padding: 25px 0px 0px 0px;
}

.btn-senha {
    justify-content: center;
    display: flex;
    align-items: center;
    margin: 10px 0px 20px 0px;
}

p,
h2 {
    font-family: sans-serif;
    color: #fff;
}

input {
    color: #000;
}

.cor-senha {
    border-radius: 10px;
    height: 10px;
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

.div-img-cpa {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img-cpa {
    width: 100%;
    padding:15%;
}

.icone-olho {
    color: #304358;
    font-size: x-large;
}

.icone-olho:hover {
    cursor: pointer;
}

.conteudo-divs {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border-radius: 0px;
    height: 100vh;
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

.div-senhas {
    background-color: #304358;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: -webkit-fill-available;
}

.w-60 {
    width: 60%;
}

.cor-azul {
    color: #304358;
}

.icon-senha {
    padding: 0px 10px 0px 0px;
    color: #fff;
    font-size: xx-large !important;
}

.config-input-login {
    display: flex;
    align-items: center;
}

.input-password {
    display: -webkit-box;
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
</style>