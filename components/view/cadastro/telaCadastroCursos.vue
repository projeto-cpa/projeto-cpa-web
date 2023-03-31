<script>
import { v4 as uuidv4 } from 'uuid';
import apiCadastroCursos from '../../../api/cadastro/cursos.js'
import {Requisicao as Disciplinas} from '../../../api/listagem/disciplinas.js'
import Swal from 'sweetalert2';

export default {
    loading: {
        color: 'red',
        height: '10px',
        continuous: true
    },
    data: function () {
        return {
            enviando: false,
            formulario: [
                {
                    etiqueta: 'Nome do curso',
                    nome: 'nome_curso',
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
                        if (this.valor.length > 5) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },
                {
                    etiqueta: 'Disciplinas do curso',
                    nome: 'tipo_materia',
                    valor: '',
                    valido: null,
                    id: 'a' + uuidv4(),
                    tipo: 'multi-select',
                    valores: [],
                    ajuda: 'Selecione uma das opções',
                    classe: {
                        coluna: 'col-12 mb-4'
                    },
                    validacao: {
                        valido: 'Campo validado com sucesso',
                        invalido: 'Campo inválido, verifique novamente',
                    },
                    validar: function () {
                        if (this.valor.length > 1) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },

            ]
        };
    },
    methods: {
        buscarIndexPeloNome: function (nome) {
            var i = 0;
            // ele navega em cada objeto do array this.formulario pelo metodo forEach...-
            // no forEach traz o item e a posicao do item atual
            this.formulario.forEach(function (item, index) {
                //console.log(item)
                // a gente compara o nome dado com o nome que existe no formulario....
                if (item.nome === nome) {
                    i = index;
                }
            });
            // retorna a posicao encontrada
            return i;
        },
        buscarIndexPeloIDEmValores: function (valores, id) {
            var i = 0;
            valores.forEach(function (item, index) {
                //console.log(id)
                if (item.id === id) {
                    i = index;
                }
            });
            return i;
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

        mudarEstado($event, nome, id) {
            $event.preventDefault();
            var indexnone = this.buscarIndexPeloNome('tipo_materia');
            var objeto = this.formulario[indexnone];
            //console.log(objeto)
            var indexID = this.buscarIndexPeloIDEmValores(objeto.valores, id);
            var valor = objeto.valores[indexID];
            //console.log(valor);
            var selecionado = this.formulario[indexnone].valores[indexID].selecionado ? false : true;
            this.formulario[indexnone].valores[indexID].selecionado = selecionado;
        },
        enviarFormulario: async function () {
            var that = this;
            var data = new FormData(this.$refs.formularioCadastro);
            //console.log(data);
            var output = '';
            for (const [key, value] of data) {
                output += `${key}: ${value}\n`;
            }
            //console.log(output);
            this.enviando = true;
            this.$nuxt.$loading.start();
            var resposta = await apiCadastroCursos(data);
            setTimeout(function () {
                this.$nuxt.$loading.finish()
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
                        that.$router.push({ path: '/listagem/cargos' });
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
        },
        receberDados: async function () {
            var that = this;
            this.recebendo = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            });

            var resposta = await Disciplinas();
            this.formulario[this.buscarIndexPeloNome('tipo_materia')].valores = this.passarSelecionado(resposta);
            console.log(that.formulario[this.buscarIndexPeloNome('tipo_materia')].valores)
            console.log(resposta)

            setTimeout(function () {
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                });
            }, 750);

            console.log('hmmm', resposta)
            this.resultados = resposta;
        },
        passarSelecionado: function (dados){
            for (let index = 0; index < dados.length; index++) {
                dados[index].selecionado = false;
            }
            return dados;
        }
    },
    mounted: async function () {
        const bootstrap = require('bootstrap');
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });
        this.receberDados();
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
                                    <template
                                        v-if="campo.tipo !== 'textarea' && campo.tipo !== 'select' && campo.tipo !== 'multi-select'">
                                        <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            :type="campo.tipo" class="form-control" :id="campo.id" @keyup="campo.validar()"
                                            :class="inputClass(campo.valido)">
                                    </template>
                                    <template v-else-if="campo.tipo === 'multi-select'">
                                        <select :size="campo.valores.length" :placeholder="campo.etiqueta"
                                            :name="campo.nome" class="form-select" multiple
                                            :id="campo.id" @change="campo.validar()" :class="inputClass(campo.valido)">
                                            <option v-for="valor in campo.valores" :key="valor.id" :v-model="valor.valor" @mousedown.prevent="mudarEstado($event,campo.nome,valor.id)" :selected="valor.selecionado
                                            ">
                                                {{ valor.nome }}
                                            </option>
                                        </select>
                                    </template>
                                    <template v-else-if="campo.tipo === 'select'">
                                        <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                            class="form-select" :id="campo.id" @change="campo.validar()"
                                            :class="inputClass(campo.valido)">
                                            <option v-for="valor in campo.valores" :key="valor.id" :v-model="valor.valor">
                                                {{ valor.nome }}
                                            </option>
                                        </select>
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

.form-select {
    height: auto !important;
    overflow: hidden !important;
}
</style>