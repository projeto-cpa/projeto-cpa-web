<script>
import unique from '../../../helpers/unique';
import emmiter from '../../../helpers/emmiter';
import Swal from 'sweetalert2';

// api 
import listagemEixos from '../../../api/listagem/listagemEixo.js'
import alteracaoPergunta from '../../../api/alteracao/alteracaoPergunta.js';

export default {
    data: function () {
        return {
            Offcanvas: null,
            identificacao: '',
            enviando: false,
            formulario: [
                {
                    etiqueta: 'Pergunta',
                    nome: 'texto',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
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
                        var self = this
                        console.log('soy gay', self)
                        this.valor = (this.valor) ? this.valor : '';

                        if (this.valor.length > 15) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },
                {
                    etiqueta: 'Tipo de Pergunta',
                    nome: 'tipo',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    valores: [
                        {
                            nome: 'Descritiva',
                            id: unique.generate(),
                            valor: 'DESCRITIVA'
                        },
                        {
                            nome: 'Avaliativa',
                            id: unique.generate(),
                            valor: 'AVALIATIVA'
                        },
                    ],
                    ajuda: 'Selecione uma das Opções.',
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
                {
                    etiqueta: 'Selecione o Eixo',
                    nome: 'eixoId',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    valores: [],
                    ajuda: 'Selecione uma das Opções.',
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
                    etiqueta: 'Estado de ativação',
                    nome: 'ativo',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    valores: [
                        {
                            nome: 'Ativado',
                            id: unique.generate(),
                            valor: "true"
                        },
                        {
                            nome: 'Desativado',
                            id: unique.generate(),
                            valor: "false"
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
                }
            ]
        };
    },
    methods: {
        listarEixos: async function () {
            var resposta = await listagemEixos(0, 10);
            console.log("resposta", resposta);

            var valores = [

            ];

            if (!resposta.empty && resposta.content && resposta.content.length > 0) {
                valores = resposta.content.map(function (item) {
                    item.valor = item.id;
                    return item;
                });
            } else {
                valores = [];
            }
            console.log("valores", valores);
            this.formulario[this.buscarIndexPeloNome('eixoId')].valores = valores;
            console.log(resposta, valores);
        },

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

        abrirCanvas: function (item) {
            console.log('item', item)
            this.recuperarEstado(item);
            this.Offcanvas.show();
        },

        fecharCanvas: function () {
            this.Offcanvas.hide();
        },
        recuperarEstado: function (item) {
            console.log('aqui odis', item)
            console.log('aaaaaaa', this.buscarIndexPeloNome('ativo'))
            console.log('teste texto', item.texto)
            this.formulario[this.buscarIndexPeloNome('texto')].valor = item.texto;
            this.formulario[this.buscarIndexPeloNome('tipo')].valor = item.tipo;
            this.formulario[this.buscarIndexPeloNome('eixoId')].valor = item.eixoId;
            this.formulario[this.buscarIndexPeloNome('ativo')].valor = item.ativo ? 'true' : 'false';
            this.identificacao = item.id;
            for (var x = 0; x < this.formulario.length; x++) {
                this.formulario[x].valido = null;
            }
            console.log('recuperando', item)
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

            var data = new FormData(this.$refs.formularioCadastro);
            this.enviando = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await alteracaoPergunta(data);

            await new Promise(function (solve) {
                setTimeout(function () {
                    solve();
                }, 750);
            });

            this.$nextTick(() => {
                this.$nuxt.$loading.finish()
            });

            this.enviando = false;
            if (resposta.sucesso) {

                var modal = await Swal.fire({
                    icon: 'success',
                    title: 'Sucesso ao alterar',
                    text: 'A alteração obteve sucesso',
                    confirmButtonText: 'Entendido'
                });

                var atualizado = resposta;
                delete atualizado.sucesso;

                this.fecharCanvas();
                emmiter.emit('aoAlterarPerguntas', atualizado);

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocorreu uma falha',
                    text: 'O cadastro não obteve sucesso',
                    confirmButtonText: 'Entendido'
                });
            }
        }
    },
    computed: {
        nomeCompleto: function () {
            return this.nome + ' ' + this.sobrenome;
        }
    },
    mounted: function () {
        emmiter.on('abrirEdicaoPerguntas', this.abrirCanvas)
        this.listarEixos();
        const bootstrap = require('bootstrap')
        this.Offcanvas = new bootstrap.Offcanvas(this.$refs.offcanvas2);
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });

    }
}
</script>

<template>
    <div class="offcanvas offcanvas-alterar offcanvas-end" ref="offcanvas2" data-bs-backdrop="false" data-bs-scroll="true">
        <div class="offcanvas-header bg-primary text-white">
            <h5 class="offcanvas-title">Alteração da Pergunta: #{{ identificacao }}</h5>
            <button type="button" class="btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa fa-close"></i>
            </button>
        </div>
        <div class="offcanvas-body">
            <!-- inicio conteudo do alterar -->
            <form class="row m-0" ref="formularioCadastro">
                <div class="card p-0 card-register">
                    <div class="card-body">
                        <div v-for="campo in formulario" :key="campo.id" :class="campo.classe.coluna">
                            <div class="form-floating">
                                <template v-if="campo.tipo !== 'textarea' && campo.tipo !== 'select'">
                                    <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                        :type="campo.tipo" class="form-control" :id="campo.id" @keypress="campo.validar()"
                                        :class="inputClass(campo.valido)">
                                </template>
                                <template v-else-if="campo.tipo === 'select'">
                                    <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                        class="form-control" :id="campo.id" @change="campo.validar()"
                                        :class="inputClass(campo.valido)">
                                        <option value="" disabled selected>Selecione uma opção</option>
                                        <option v-for="valor in campo.valores" :value="valor.valor" :key="valor.id">
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
                <input type="hidden" name="idPergunta" :value="identificacao">
            </form>
            <!-- fim conteudo do alterar -->
            <div class="row mx-0">
                <div class="card p-0">
                    <div class="card-body">
                        <div class="text-end d-flex">
                            <a class="btn btn-secondary me-3" data-bs-dismiss="offcanvas">Cancelar</a>
                            <button class="btn btn-primary flex-grow-1" @click="enviarFormulario" :disabled="enviando">
                                <span>Salvar</span>
                                <span v-if="enviando"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.offcanvas.offcanvas-alterar {
    top: 60px !important;
    z-index: 99;
    height: calc(100% - 120px) !important;
    box-shadow: -3px -3px 9px var(--bs-gray);
}

.offcanvas.offcanvas-alterar .offcanvas-header {
    height: 60px !important;
}

.label-icon {
    position: absolute;
    top: 20px;
    right: 20px;
}

@media (max-width: 767.98px) {
    .offcanvas.offcanvas-alterar {
        width: 100% !important;
    }
}
</style>