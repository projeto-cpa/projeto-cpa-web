import Swal from 'sweetalert2';
import unique from '~/helpers/unique';
// *API
import cadastroCargo from '../../../api/cadastro/cadastroCargo.js'
import listagemTurmas from '../../../api/listagem/listagemTurmas.js';
import listagemEixo from '../../../api/listagem/listagemEixo.js';
// *Styles da tela
import styleTela from '../../../views/cadastro/telaCadastroCargos/style.vue';

export default {
    loading: {
        continuous: true
    },
    components: {
        'styleTela': styleTela
    },
    data: function () {
        return {
            enviando: false,
            listaTurmas: [],
            formulario: [
                {
                    etiqueta: 'Nome da Avaliação',
                    nome: 'titulo',
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
                    etiqueta: '',
                    nome: 'listaTurmas',
                    valor: [],
                    valores: [],
                    valido: null,
                    id: unique.generate(),
                    tipo: 'list',
                    ajuda: 'Selecione as turmas que irão fazer esta avaliação',
                    classe: {
                        coluna: 'col-12 col-md-12 mb-4'
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
                    etiqueta: 'Selecione um eixo para a avaliação',
                    nome: 'eixo',
                    valor: [],
                    valores: [],
                    valido: null,
                    id: unique.generate(),
                    tipo: 'select',
                    ajuda: 'Selecione um eixo',
                    classe: {
                        coluna: 'col-12 col-md-12 mb-4'
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
                    tipo: 'selectPergunta',
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

            var resposta = await cadastroCargo(data);

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
                    title: 'Sucesso ao cadastrar',
                    text: 'O cadastro obteve sucesso',
                    confirmButtonText: 'Entendido'
                });

                if (modal) {
                    this.$router.push({ path: '/listagem/cargos' });
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocorreu uma falha',
                    text: 'O cadastro não obteve sucesso',
                    confirmButtonText: 'Entendido'
                });
            }
        },
        listarTurmas: async function () {
            var resposta = await listagemTurmas(0, 30);
            var valores = [];
            if (!resposta.empty && resposta.content && resposta.content.length > 0) {
                valores = resposta.content.map(function (item) {
                    item.valor = item.id;
                    return item;
                });
            } else {
                valores = [];
            }
            this.formulario[this.buscarIndexPeloNome('listaTurmas')].valores = valores;
        },
        listarEixos: async function () {
            var resposta = await listagemEixo(0, 30);
            var valores = [];
            if (!resposta.empty && resposta.content && resposta.content.length > 0) {
                valores = resposta.content.map(function (item) {
                    item.valor = item.id;
                    return item;
                });
            } else {
                valores = [];
            }
            this.formulario[this.buscarIndexPeloNome('eixo')].valores = valores;
        },
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
        adicionarItem: async function (index) {
            console.log(this.buscarIndexPeloNome('listaTurmas'));
            this.listaTurmas = this.formulario[this.buscarIndexPeloNome('listaTurmas').valores[index]];
        },
        removerItem: async function (index) {
            this.listaTurmas.splice(index, 0);
        },
        filtrar: async function (nome) {

        }
    },
    mounted: async function () {
        this.listarTurmas();
        this.listarEixos();
        const bootstrap = require('bootstrap');
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });
    }
}