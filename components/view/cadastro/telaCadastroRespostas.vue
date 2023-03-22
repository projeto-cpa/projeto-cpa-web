<script>
import { v4 as uuidv4 } from 'uuid';
import { Requisicao, Perguntas } from '../../../api/cadastro/perguntas.js'
import Swal from 'sweetalert2';


export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            enviando: false,
            formulario: [

                {
                    etiqueta: 'Perguntas',
                    nome: 'id_pergunta',
                    valor: '',
                    valido: null,
                    id: 'a' + uuidv4(),
                    tipo: 'select',
                    valores: [
                        {
                            nome: this.resposta,
                            id: 'a' + uuidv4(),
                            valor: "true"
                        },
                    ],
                    ajuda: 'Selecione uma das opções',

                    classe: {
                        coluna: 'col-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor !== '') {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },
                {
                    etiqueta: 'Resposta',
                    nome: 'resposta',
                    valor: '',
                    valido: null,
                    id: 'a' + uuidv4(),
                    tipo: 'text',
                    ajuda: 'Até 150 caracteres',
                    classe: {
                        coluna: 'col-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor.length > 15) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                }
            ]
        };
    },
    methods: {

        //e aqui esta fazendo o que?
        buscarIndexPeloNome: function (nome) {
            var i = 0;
            // ele navega em cada objeto do array this.formulario pelo metodo forEach...-
            // no forEach traz o item e a posicao do item atual
            this.formulario.forEach(function (item, index) {
                console.log(item)
                // a gente compara o nome dado com o nome que existe no formulario....
                if (item.nome === nome) {
                    i = index;
                }
            });
            // retorna a posicao encontrada
            return i;
        },
        receberDados: async function () {
            var that = this;
            this.recebendo = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            });

            var resposta = await Perguntas();
            this.formulario[this.buscarIndexPeloNome('perguntas')].valores = resposta;

            setTimeout(function () {
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                });
            }, 750);

            console.log('hmmm', resposta)
            this.resultados = resposta;
        },
        inputClass: function (valido) {
            if (valido === true) {
                return 'is-valid';
            } else if (valido === null) {
                return '';
            } else {
                return 'is-invalid';
            }
        },
        validarFormulario: function () {
            var valido = true;
            this.formulario.forEach(function (campo) {
                campo.validar();
                if (campo.valido === false) {
                    valido = false;
                }
            });
            return valido;
        },
        enviarFormulario: async function () {
            if (!this.validarFormulario()) {
                return;
            }
            var that = this;

            var data = new FormData(this.$refs.formularioCadastro);
            that.enviando = true;

            that.$nextTick(() => {
                that.$nuxt.$loading.start()
            })

            var resposta = await Requisicao(data);

            setTimeout(function () {
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                });
            }, 750);

            setTimeout(function () {
                that.enviando = false;
                if (resposta.sucesso) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso ao cadastrar',
                        text: 'O cadastro obteve sucesso',
                        confirmButtonText: 'Entendido'
                    }).then(function () {
                        that.$router.push({ path: '/resposta' });
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ocorreu uma falha',
                        text: 'O cadastro não obteve sucesso',
                        confirmButtonText: 'Entendido'
                    });
                }
            }, 1000);
        }
    },
    mounted: async function () {
        this.receberDados();
        const bootstrap = require('bootstrap');
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });
    }
};
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <form class="row m-0" ref="formularioCadastro">
                    <div class="card p-0">
                        <div class="card-body">
                            <div v-for="campo in formulario" :key="campo.id" :class="campo.classe.coluna">
                                <div class="form-floating">
                                    <template v-if="campo.tipo !== 'select' && campo.tipo !== 'select'">
                                        <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            :type="campo.tipo" class="form-control" :id="campo.id"
                                            @keypress="campo.validar()" :class="inputClass(campo.valido)">
                                    </template>
                                    <template v-else-if="campo.tipo === 'select'">
                                        <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-control" :id="campo.id" @change="campo.validar()"
                                            :class="inputClass(campo.valido)">
                                            <option value="" disabled selected>Selecione uma Pergunta</option>
                                                                <option v-for="valor in campo.valores" :v-model="valor.id" :value="valor.id" :key="valor.id">
                                                {{ valor.nome }}
                                            </option>
                                        </select>
                                    </template>
                                    <template v-else>
                                        <textarea :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-control" :id="campo.id" @keypress="campo.validar()"
                                            :class="inputClass(campo.valido)"></textarea>
                                    </template>
                                    <label :for="campo.id" class="form-label w-100">{{ campo.etiqueta }}</label>
                                    <span class="label-icon float-end" data-bs-toggle="tooltip" :data-bs-title="campo.ajuda"
                                        data-bs-placement="bottom" data-bs-delay="250"><i class="fa fa-question-circle"
                                            aria-hidden="true"></i></span>
                                    <div class="valid-feedback">{{ campo.validacao.valido }}</div>
                                    <div class="invalid-feedback">{{ campo.validacao.invalido }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </article>
        </section>
        <footer class="form-footer bg-white text-end">
            <button class="btn btn-primary rounded-5" @click="enviarFormulario" :disabled="enviando">
                <span>Cadastrar</span>
                <span v-if="enviando"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
            </button>
        </footer>
    </div>
</template>

<style scoped>
.label-icon {
    position: absolute;
    top: 20px;
    right: 20px;
}

textarea {
    max-height: 400px !important;
    min-height: 58px !important
}

textarea,
input {
    background-position: calc(100% - 40px) 20px !important;
}
</style>