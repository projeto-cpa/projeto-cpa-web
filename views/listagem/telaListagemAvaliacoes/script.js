// *Helpers
import emmiter from '../../../helpers/emmiter';
import paginations from '../../../helpers/paginations.js';
// *Componentes
import Filtro from '../../../components/utils/Filtro.vue';
import Paginacao from '../../../components/utils/Paginacao.vue'
import alteracaoEixo from '~/components/offcanvas/alteracao/alteracaoEixo';

// *APIS
import listagemAvaliacao from '../../../api/listagem/listagemAvaliacao';
import ativacaoEixo from '../../../api/ativacao/ativacaoEixo.js';
import exclusaoEixo from '../../../api/exclusao/exclusaoEixo.js'

import Swal from 'sweetalert2';

import styleTelaAvaliacoes from '../../../views/listagem/telaListagemAvaliacoes/style.vue';

export default {
    loading: {
        continuous: true
    },
    components: {
        'Filtro': Filtro,
        'Paginacao': Paginacao,
        'styleTelaAvaliacoes': styleTelaAvaliacoes
    },
    data: function () {
        return {
            recebendo: false,
            resultados: [],
            requisicao: listagemAvaliacao,
            retorno: function (resposta) {
                emmiter.emit('aoListarEixos', resposta);
            },
            selecaoTodos: false,
            paginacao: {
                pagina: 0,
                quantidade: 5,
                paginas: 0,
                total: 0
            }
        };
    },
    methods: {
        buscarIndexPeloId: function (id) {
            var i = 0;

            this.resultados.forEach(function (item, index) {
                console.log(item)
                if (item.id === id) {
                    i = index;
                }
            });

            return i;
        },
        selecionarTodos: function () {
            this.selecaoTodos = !this.selecaoTodos;

            this.resultados.forEach((item) => {
                item.selecionado = this.selecaoTodos;
            });
        },
        excluirItem: async function (item) {

            var modal = await Swal.fire({
                icon: 'error',
                title: 'Confirmar exclusão',
                html: `Deseja excluir o item <b>Id.${item.id}</b>, ${item.nome}?`,
                confirmButtonText: 'Confirmar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            });

            if (modal.isConfirmed) {
                this.resultados[this.buscarIndexPeloId(item.id)].excluindo = true;

                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                });

                var resposta = await exclusaoEixo(item.id);

                await new Promise(function (solve) {
                    setTimeout(function () {
                        solve();
                    }, 750);
                });

                this.resultados[this.buscarIndexPeloId(item.id)].excluindo = false;

                this.$nextTick(() => {
                    this.$nuxt.$loading.finish()
                });

                if (resposta.sucesso) {
                    this.resultados.splice(this.buscarIndexPeloId(item.id), 1);
                    var that = this;
                    console.log(that.resultados)
                    if (this.resultados.length === 0) {
                        paginations.set('0')
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ocorreu uma falha',
                        text: 'Não foi possível excluir o item',
                        confirmButtonText: 'Entendido'
                    });
                }
            }
        },
        ativarItem: async function (item) {

            var text = item.ativo ? 'desativar' : 'ativar';
            var icon = item.ativo ? 'warning' : 'info';
            var buttonText = text.charAt(0).toUpperCase() + text.slice(1);
            var term = item.ativo ? 'desativação' : 'ativação';

            var modal = await Swal.fire({
                icon: icon,
                title: `Confirmar ${term}`,
                html: `Deseja ${text} o item <b>Id.${item.id}</b>, ${item.nome}?`,
                confirmButtonText: buttonText,
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            });

            if (modal.isConfirmed) {
                this.resultados[this.buscarIndexPeloId(item.id)].ativando = true;

                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                });

                var resposta = await ativacaoEixo(item.id);

                await new Promise(function (solve) {
                    setTimeout(function () {
                        solve();
                    }, 750);
                });

                this.resultados[this.buscarIndexPeloId(item.id)].ativo = resposta.ativo;
                this.resultados[this.buscarIndexPeloId(item.id)].ativando = false;

                this.$nextTick(() => {
                    this.$nuxt.$loading.finish()
                });
            }

        },
        textoBotaoAtivar: function (item) {
            if (item.ativo) {
                return 'Desativar';
            } else {
                return 'Ativar';
            }
        },
        classeBotaoAtivar: function (item) {
            var cls = "";
            if (item.ativo) {
                cls += 'btn-secondary';
            } else {
                cls += 'btn-primary';
            }

            if (item.ativando) {
                cls += ' disabled';
            }

            return cls;
        },
        classeBotaoExcluir: function (item) {
            var cls = 'btn-danger';

            if (item.excluindo) {
                cls += ' disabled';
            }

            return cls;
        },
        classeItem: function (item, index) {
            var cls = '';

            if (item.selecionado) {
                cls += ' text-secondary'
            } else {
                cls += ' text-muted';
            }

            if (item.selecionado) {
                cls += ' active'
            }

            if (index % 2) {
                cls += ' card-alt';
            }

            return cls;
        },
        formatarData: function (data) {
            var data = new Date(data);
            var dia = data.getDate();
            var mes = data.getMonth() + 1;
            var ano = data.getFullYear();
            var hora = data.getHours();
            var minuto = data.getMinutes();
            var segundo = data.getSeconds();

            if (dia.toString().length == 1) {
                dia = '0' + dia;
            }
            if (mes.toString().length == 1) {
                mes = '0' + mes;
            }
            if (hora.toString().length == 1) {
                hora = '0' + hora;
            }
            if (minuto.toString().length == 1) {
                minuto = '0' + minuto;
            }
            if (segundo.toString().length == 1) {
                segundo = '0' + segundo;
            }

            var _data = dia + '/' + mes + '/' + ano;
            var _hora = hora + ':' + minuto;

            return {
                data: _data,
                hora: _hora
            };
        },
        receberDados: async function () {
            var that = this;
            this.recebendo = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await listagemAvaliacao();
            this.resultados = resposta;

            setTimeout(function () {
                that.recebendo = false;
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                })
            }, 750);
        },
        abrirEdicao: function (item) {
            console.log('item', item)
            emmiter.emit('abrirEdicaoEixos', item);
        },
        selecaoItem: function (item) {
            var selecionado = this.resultados[this.buscarIndexPeloId(item.id)].selecionado;
            this.resultados[this.buscarIndexPeloId(item.id)].selecionado = selecionado ? false : true;
        },
        aoAlterarEixos: function (item) {
            // this.editar = false;
            this.resultados[this.buscarIndexPeloId(item.id)].ativo = item.ativo;
            this.resultados[this.buscarIndexPeloId(item.id)].nome = item.nome;
            this.resultados[this.buscarIndexPeloId(item.id)].descricao = item.descricao;
            this.resultados[this.buscarIndexPeloId(item.id)].dataAtualizacao = item.dataAtualizacao;
        },
        aoListarEixos: function (resposta) {
            console.log('resposta', resposta);

            this.selecaoTodos = false;
            this.paginacao.paginas = resposta.totalPages;
            this.paginacao.total = resposta.totalElements;

            if (!resposta.empty && resposta.content && resposta.content.length > 0) {
                this.resultados = resposta.content.map(function (item) {
                    item.selecionado = false;
                    item.ativando = false;
                    item.excluindo = false;
                    return item;
                });
            } else {
                this.resultados = [];
            }

        },
        aoAlterarCarregamento: function (estado) {
            this.recebendo = estado;
        }
    },
    components: {
        'Filtro': Filtro,
        'Paginacao': Paginacao,
        'alteracaoEixo': alteracaoEixo
    },
    mounted: function () {
        this.recebendo = true;
        emmiter.on('aoListarEixos', this.aoListarEixos);
        emmiter.on('aoAlterarEixos', this.aoAlterarEixos);
        emmiter.on('aoIniciarCarregamento', this.aoAlterarCarregamento);
        emmiter.on('aoFinalizarCarregamento', this.aoAlterarCarregamento);
    }
};