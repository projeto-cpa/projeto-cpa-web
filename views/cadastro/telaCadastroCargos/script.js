import Swal from 'sweetalert2';
import unique from '~/helpers/unique';
// *API
import cadastroCargo from '../../../api/cadastro/cadastroCargo.js'
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
            formulario: [
                {
                    etiqueta: 'Nome do cargo',
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
                    etiqueta: 'Descrição do cargo',
                    nome: 'descricao',
                    valor: '',
                    valido: null,
                    id: unique.generate(),
                    tipo: 'textarea',
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
        }
    },
    mounted: async function () {
        const bootstrap = require('bootstrap');
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        tooltips.forEach(function (item) {
            new bootstrap.Tooltip(item);
        });
    }
}