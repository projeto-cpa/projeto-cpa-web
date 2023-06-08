<script>
import emmiter from '../../../helpers/emmiter';
import paginations from '../../../helpers/paginations.js';
import Swal from 'sweetalert2';
import Filtro from '../../../components/utils/Filtro.vue';
import Paginacao from '../../../components/utils/Paginacao.vue'
/** API */
import listagemCurso from '../../../api/listagem/listagemCurso.js';
import ativacaoCurso from '../../../api/ativacao/ativacaoCurso.js';
import exclusaoCurso from '../../../api/exclusao/exclusaoCurso.js';
/** ALTERACAO */
import alteracaoCurso from '../../offcanvas/alteracao/alteracaoCurso.vue';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            recebendo: false,
            resultados: [],
            requisicao: listagemCurso,
            retorno: function (resposta) {
                emmiter.emit('aoListarCurso', resposta);
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
                html: `Deseja excluir o item <b>Id.${item.id}</b>, ${item.curso}?`,
                confirmButtonText: 'Confirmar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            });

            if (modal.isConfirmed) {
                this.resultados[this.buscarIndexPeloId(item.id)].excluindo = true;

                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                });

                var resposta = await exclusaoCurso(item.id);

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

                var resposta = await ativacaoCurso(item.id);

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
        textoBotaoAtivar: function (ativo) {
            if (ativo) {
                return 'Desativar';
            } else {
                return 'Ativar';
            }
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
        abrirEdicao: function (item) {
            emmiter.emit('abrirEdicaoCurso', item);
        },
        selecaoItem: function (item) {
            var selecionado = this.resultados[this.buscarIndexPeloId(item.id)].selecionado;
            this.resultados[this.buscarIndexPeloId(item.id)].selecionado = selecionado ? false : true;
        },
        aoAlterarCurso: function (item) {
            this.editar = false;
            this.resultados[this.buscarIndexPeloId(item.id)].ativo = item.ativo;
            this.resultados[this.buscarIndexPeloId(item.id)].nome = item.nome;
            this.resultados[this.buscarIndexPeloId(item.id)].descricao = item.descricao;
            this.resultados[this.buscarIndexPeloId(item.id)].dataAtualizacao = item.dataAtualizacao;
        },
        aoListarCurso: function (resposta) {
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
        },
    },
    components: {
        'Filtro': Filtro,
        'Paginacao': Paginacao,
        'alteracaoCurso': alteracaoCurso
    },
    mounted: function () {
        this.recebendo = true;
        emmiter.on('aoListarCurso', this.aoListarCurso);
        emmiter.on('aoAlterarCurso', this.aoAlterarCurso);
        emmiter.on('aoIniciarCarregamento', this.aoAlterarCarregamento);
        emmiter.on('aoFinalizarCarregamento', this.aoAlterarCarregamento);
    }
};
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <Filtro></Filtro>
                <!-- Cabeçalho da listagem -->
                <div class="card bg-light">
                    <div class="card-body">
                        <div class="row m-0">
                            <div class="col id m-auto">
                                <div class="item header text-center"><b>Id.</b></div>
                                <input class="form-check-input" type="checkbox" value="" :checked="selecaoTodos"
                                    @click="selecionarTodos" />
                            </div>
                            <div class="col activations m-auto">
                                <div class="item header text-center"><b>Ativar/Desativar</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Nome do curso</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Descrição do curso</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Data de criação</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Data de alteração</b></div>
                            </div>
                            <div class="col options m-auto text-center">
                                <div class="item header text-center"><b>Opções</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="recebendo">
                    <!-- Aqui fica a simulação do carregamento -->
                    <div v-for="index in paginacao.quantidade" :key="index" class="card mb-4 mb-lg-2 card-item"
                        aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0 placeholder-glow">
                                <div class="col id m-auto">
                                    <div class="item placeholder">Id</div>
                                </div>
                                <div class="col activations m-auto">
                                    <div class="item">
                                        <a href="#" class="btn btn-sm btn-secondary placeholder disabled"></a>
                                    </div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item placeholder">Nome</div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item placeholder">Descrição</div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item placeholder"><b>Criado em</b></div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item placeholder"><b>Alterado em</b></div>
                                </div>
                                <div class="col options m-auto">
                                    <div class="item placeholder"><b>Opções</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- fim simulação do carregamento -->
                </template>
                <template v-else-if="!recebendo && resultados.length <= 0">
                    <div class="card card-none">
                        <div class="card-body">
                            <h5 class="card-title">Nenhum resultado encontrado</h5>
                            <p class="card-text text-muted">Com problemas? tente remover os filtros ou recarregue a página.
                            </p>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <!-- Aqui fica o resultado da requisição -->
                    <div class="card-list">
                        <div v-for="(item, index) in resultados" :key="index" :class="classeItem(item, index)"
                            class="card card-item mb-4 mb-lg-2" aria-hidden="true">
                            <div class="card-body">
                                <div class="row m-0">
                                    <div
                                        class="col-xl-auto col-12 mb-xl-auto col-md-6 id my-xl-auto mb-2 mb-xl-0 mt-0 mt-xl-auto">
                                        <div class="col-box">
                                            <div class="item text-center item-id">
                                                <div>
                                                    <span class="d-inline d-xl-none"><b>Id.</b></span>
                                                    <span><b>{{ item.id }}</b></span>
                                                </div>
                                                <div>
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        @click="selecaoItem(item)" :checked="item.selecionado" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-xl col-12 col-md-6 activations my-xl-auto mx-xl-3 mx-xl-auto mb-2 mb-xl-auto mt-0 mt-xl-auto">
                                        <div class="col-box">
                                            <div class="item text-center">
                                                <template v-if="item.ativo">
                                                    <a
                                                        class="btn rounded-5 d-block mb-1 btn-sm btn-outline-primary disabled">Ativado</a>
                                                </template>
                                                <template v-else>
                                                    <a
                                                        class="btn rounded-5 d-block mb-1 btn-sm btn-outline-secondary disabled">Desativado</a>
                                                </template>
                                                <a :class="classeBotaoAtivar(item)" class="btn d-block rounded-5 btn-sm"
                                                    :disabled="item.ativando" @click="ativarItem(item)">
                                                    <span>{{ textoBotaoAtivar(item) }}</span>
                                                    <span v-if="item.ativando"><i
                                                            class="fa fa-spinner fa-spin fa-fw"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl col-12 col-md-6 m-xl-auto mb-2 mb-xl-auto">
                                        <div class="col-box">
                                            <div class="d-block d-xl-none">
                                                <div class="title text-center"><b>Nome do curso</b></div>
                                            </div>
                                            <div class="item text-center">{{ item.nome }}</div>
                                        </div>
                                    </div>
                                    <div class="col-xl col-12 col-md-6 m-xl-auto mb-2 mb-xl-auto">
                                        <div class="col-box">
                                            <div class="d-block d-xl-none">
                                                <div class="title text-center"><b>Descrição do curso</b></div>
                                            </div>
                                            <div class="item text-center">{{ item.descricao }}</div>
                                        </div>
                                    </div>
                                    <div class="col-xl col-12 col-md-6 date m-xl-auto mb-2 mb-xl-auto">
                                        <div class="col-box">
                                            <div class="d-block d-xl-none">
                                                <div class="title text-center"><b>Data da criação</b></div>
                                            </div>
                                            <div class="item text-center">
                                                <div>{{ formatarData(item.dataCriacao).data }}</div>
                                                <div>{{ formatarData(item.dataCriacao).hora }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl col-12 col-md-6 date m-xl-auto mb-2 mb-xl-auto">
                                        <div class="col-box">
                                            <div class="d-block d-xl-none">
                                                <div class="title text-center"><b>Data da alteração</b></div>
                                            </div>
                                            <div class="item text-center">
                                                <div>{{ formatarData(item.dataAtualizacao).data }}</div>
                                                <div>{{ formatarData(item.dataAtualizacao).hora }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl col-12 options m-xl-auto mb-2 mb-xl-auto">
                                        <div class="col-box">
                                            <div class="item text-center">
                                                <div class="row m-0">
                                                    <div class="col-12 col-md-6 col-xl-12">
                                                        <a class="btn w-100 rounded-5 btn-sm btn-outline-secondary mb-1"
                                                            @click="abrirEdicao(item)">
                                                            <span><i class="fa fa-pencil"></i></span>
                                                            <span>Alterar</span>
                                                        </a>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-xl-12">
                                                        <a :class="classeBotaoExcluir(item)"
                                                            class="btn w-100 rounded-5 btn-sm btn-danger"
                                                            @click="excluirItem(item)" :disabled="item.excluindo">
                                                            <span v-if="item.excluindo"><i
                                                                    class="fa fa-spinner fa-spin fa-fw"></i></span>
                                                            <span v-else><i class="fa fa-trash"></i></span>
                                                            <span>Excluir</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <alteracaoCurso></alteracaoCurso>
            </article>
        </section>
        <footer class="form-footer bg-white">
            <Paginacao :estado="paginacao" :requisicao="requisicao" :retorno="retorno"></Paginacao>
        </footer>
    </div>
</template>

<style scoped>
.placeholder {
    min-width: 100%;
    height: 100%;
    border-radius: 25px !important;
}

@media (max-width: 1199.98px) {

    .card-list .card-item .card-body {
        padding-left: 4px;
        padding-right: 4px;
    }

    .col-box {
        border: 1px solid var(--bs-gray-400);
        padding: 10px;
        border-radius: 12px;
        background-color: #ffffff;
    }

    .id .col-box,
    .activations .col-box {
        height: 90px;
    }
}

@media (min-width: 1200px) {
    .row .options {
        width: 200px;
        max-width: 200px;
    }

    .row .id {
        width: 50px;
        max-width: 50px;
    }

    .row .activations {
        width: 150px;
        max-width: 150px;
        margin-left: 25px !important;
        margin-right: 25px !important;
    }

    .row .date {
        width: 200px;
        max-width: 200px;
    }
}

.item-id {
    font-weight: bold;
}

.form-check-input {
    width: 28px;
    height: 28px;
    background-size: 75%;
    border-radius: 50% !important;
}

.card.card-alt {
    background-color: var(--bs-light-bg-subtle);
}

.card-item:hover,
.card-item:focus,
.card-item:active {
    background-color: #f5f9ff !important;
}

.card-item.active,
.card-item.active:hover,
.card-item.active:active,
.card-item.active:focus {
    border-color: #9ec5ff !important;
    background-color: #e5f0ff !important;
}

.card-list .card-item,
.card-none {
    box-shadow: 0px 0px 9px var(--bs-gray-400);
}

@media (min-width: 768px) and (max-width: 1199.98px) {

    .card-item .row .col-xl:nth-of-type(1),
    .card-item .row .col-xl-auto:nth-of-type(1),
    .card-item .row .col-xl:nth-of-type(3),
    .card-item .row .col-xl-auto:nth-of-type(3),
    .card-item .row .col-xl:nth-of-type(5),
    .card-item .row .col-xl-auto:nth-of-type(5) {
        padding-right: 0;
    }
}
</style>