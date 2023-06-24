<script>
import { v4 as uuidv4 } from 'uuid';
import emmiter from '../../../helpers/emmiter';
import unique from '~/helpers/unique';
import alteracaoUsuario from '../../../api/alteracao/alteracaoUsuario.js';
import listagemUsuario from '../../../api/listagem/listagemUsuario.js';
import Swal from 'sweetalert2';

export default {
    data: function () {
        return {
            Offcanvas: null,
            identificacao: '',
            enviando: false,
            formulario: [
                {
                    etiqueta: 'Nome do usuário',
                    nome: 'nome',
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
                        if (this.valor.length > 5) {
                            this.valido = true;
                        } else {
                            this.valido = false;
                        }
                    }
                },
                {
                    etiqueta: 'Senha do usuário',
                    nome: 'senha',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'password',
                    ajuda: 'Maior que 5 caracteres',
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
                    etiqueta: 'Cargo do usuário',
                    nome: 'idCargo',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
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
                {
                    etiqueta: 'Email do usuário',
                    nome: 'email',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'email',
                    ajuda: 'Deve ser email valido',
                    classe: {
                        coluna: 'col-12 '
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
                }
            ]
        };
    },
    methods: {
        buscarIndexPeloNome: function (nome) {
            var i = 0;
            this.formulario.forEach(function (item, index) {
                console.log(item)
                if (item.nome === nome) {
                    i = index;
                }
            });
            return i;
        },
        abrirCanvas: function (item) {
            this.recuperarEstado(item);
            this.Offcanvas.show();
        },
        fecharCanvas: function () {
            this.Offcanvas.hide();
        },
        recuperarEstado: function (item) {
            this.formulario[this.buscarIndexPeloNome('email')].valor = item.email;
            this.formulario[this.buscarIndexPeloNome('nome')].valor = item.nome;
            this.formulario[this.buscarIndexPeloNome('ativo')].valor = item.ativo;
            this.formulario[this.buscarIndexPeloNome('idCargo')].valor = item.id;
            this.formulario[this.buscarIndexPeloNome('senha')].valor = item.senha;
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

            var resposta = await alteracaoUsuario(data);

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
                emmiter.emit('aoAlterarUsuario', atualizado);

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocorreu uma falha',
                    text: 'O cadastro não obteve sucesso',
                    confirmButtonText: 'Entendido'
                });
            }
        },
        listarUsuarios: async function () {
            var resposta = await listagemUsuario(0, 5);
            var valores = [];
            if (!resposta.empty && resposta.content && resposta.content.length > 0) {
                valores = resposta.content.map(function (item) {
                    item.valor = item.id;
                    return item;
                });
            } else {
                valores = [];
            }
            this.formulario[this.buscarIndexPeloNome('idUsuario')].valores = valores;
            console.log("RESPOSTAAAAAAAAAAAA BBBBBBBBBBBB: ", resposta, valores);
        },
    },
    computed: {
        nomeCompleto: function () {
            return this.nome + ' ' + this.sobrenome;
        }
    },
    mounted: async function () {
        await this.listarUsuarios();
        emmiter.on('abrirEdicaoUsuario', this.abrirCanvas)
        const bootstrap = require('bootstrap')
        this.Offcanvas = new bootstrap.Offcanvas(this.$refs.offcanvas);
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });
    }
}
</script>

<template>
    <div class="offcanvas offcanvas-alterar offcanvas-end" ref="offcanvas" data-bs-backdrop="false" data-bs-scroll="true">
        <div class="offcanvas-header bg-primary text-white">
            <h5 class="offcanvas-title">Alteração do usuário: #{{ identificacao }}</h5>
            <button type="button" class="btn btn-light" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa fa-close"></i>
            </button>
        </div>
        <div class="offcanvas-body">
            <!-- inicio conteudo do alterar -->
            <form class="row m-0" ref="formularioCadastro">
                <div class="card p-0">
                    <div class="card-body">
                        <div v-for="campo in formulario" :key="campo.id" :class="campo.classe.coluna">
                            <div class="form-floating">
                                <template v-if="campo.tipo !== 'textarea' && campo.tipo !== 'select'">
                                    <input :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                        :type="campo.tipo" class="form-control" :id="campo.id" @keyup="campo.validar()"
                                        :class="inputClass(campo.valido)">
                                </template>
                                <template v-else-if="campo.tipo === 'select'">
                                    <select :placeholder="campo.etiqueta" :name="campo.nome" v-model="campo.valor"
                                        class="form-control" :id="campo.id" @change="campo.validar()"
                                        :class="inputClass(campo.valido)">
                                        <option v-for="valor in campo.valores" :key="valor.id" :v-model="valor.valor">
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
                <input type="hidden" name="idUsuario" v-model="identificacao" class="d-none"/>
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