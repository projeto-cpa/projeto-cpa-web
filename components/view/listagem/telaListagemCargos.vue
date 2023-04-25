<script>
import emmiter from '../../../helpers/emmiter';
import Swal from 'sweetalert2';
import Filtro from '../../../components/utils/Filtro.vue';
import alterarCargo from '../alterar/alterarCargo.vue';
import Paginacao from '../../../components/utils/Paginacao.vue'
/** API */
import listagemCargo from '../../../api/listagem/listagemCargo.js';
import ativacaoCargo from '../../../api/ativacao/ativacaoCargo.js';
import exclusaoCargo from '../../../api/exclusao/exclusaoCargo.js';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            recebendo: false,
            resultados: [],
            editar: false,
        };
    },
    methods: {
        excluirItem: async function (item) {

            var modal = await Swal.fire({
                icon: 'error',
                title: 'Confirmar ação',
                text: 'Deseja excluir o item?',
                confirmButtonText: 'Confirmar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            });

            if (modal.isConfirmed) {
                this.resultados[this.buscarIndexPeloId(item.id)].excluindo = true;

                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                });

                var resposta = await exclusaoCargo(item.id);

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

            var modal = await Swal.fire({
                icon: 'info',
                title: 'Confirmar ação',
                text: `Deseja ${text} o item?`,
                confirmButtonText: 'Confirmar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            });

            if (modal.isConfirmed) {
                this.resultados[this.buscarIndexPeloId(item.id)].ativando = true;

                this.$nextTick(() => {
                    this.$nuxt.$loading.start()
                });

                var resposta = await ativacaoCargo(item.id);

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
        classeBotaoExcluir: function (item) {
            var cls = "btn-danger";

            if (item.excluindo) {
                cls += ' disabled';
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

            var dataFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minuto + ':' + segundo;
            return dataFormatada;
        },
        buscarIndexPeloId: function (id) {
            var i = 0;
            // ele navega em cada objeto do array this.formulario pelo metodo forEach...-
            // no forEach traz o item e a posicao do item atual
            this.resultados.forEach(function (item, index) {
                console.log(item)
                // a gente compara o nome dado com o nome que existe no formulario....
                if (item.id === id) {
                    i = index;
                }
            });
            // retorna a posicao encontrada
            return i;
        },
        abrirEdicao: function (item) {
            emmiter.emit('abrirEdicaoCargo', item);
        },
        receberDados: async function () {
            var that = this;
            this.recebendo = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await listagemCargo();

            if (!resposta.empty && resposta.content && resposta.content.length > 0) {
                this.resultados = resposta.content.map(function (item) {
                    item.ativando = false;
                    item.excluindo = false;
                    return item;
                });
            }

            setTimeout(function () {
                that.recebendo = false;
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                })
            }, 750);
        }
    },
    components: {
        'Filtro': Filtro,
        'Paginacao': Paginacao,
        'alterarCargo': alterarCargo
    },
    mounted: function () {
        this.receberDados()
    }
};
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <Filtro></Filtro>
                <!-- Cabeçalho da listagem -->
                <div class="card bg-light mb-2">
                    <div class="card-body">
                        <div class="row m-0">
                            <div class="col id m-auto">
                                <div class="item header text-center"><b>Id.</b></div>
                            </div>
                            <div class="col activations m-auto">
                                <div class="item header text-center"><b>Ativar/Desativar</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Nome do cargo</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Descrição do cargo</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Data criação</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Data alteração</b></div>
                            </div>
                            <div class="col options m-auto text-center">
                                <div class="item header text-center"><b>Opções</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="recebendo">
                    <!-- Aqui fica a simulação do carregamento -->
                    <div v-for="index in 1" :key="index" class="card" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0 placeholder-glow">
                                <div class="col id m-auto">
                                    <div class="item placeholder">Id</div>
                                </div>
                                <div class="col activations m-auto">
                                    <div class="item">
                                        <a class="btn btn-sm btn-secondary placeholder disabled"></a>
                                    </div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item placeholder">Nome</div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item placeholder">Descrição</div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item placeholder"><b>Data criação</b></div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item placeholder"><b>Data alteração</b></div>
                                </div>
                                <div class="col options m-auto">
                                    <div class="item placeholder"><b>Opções</b></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else-if="!recebendo && resultados.length <= 0">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Nenhum resultado encontrado</h5>
                            <p class="card-text text-muted">Com problemas? tente remover os filtros ou recarregue a página.
                            </p>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <!-- Aqui fica o resultado da requisição -->
                    <div v-for="(item, index) in resultados" :key="index" class="card mb-1" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0">
                                <div class="col id m-auto">
                                    <div class="item text-center item-id">{{ item.id }}</div>
                                </div>
                                <div class="col activations m-auto">
                                    <div class="item text-center">
                                        <a :class="classeBotaoAtivar(item)" class="btn d-block rounded-5 btn-sm"
                                            :disabled="item.ativando" @click="ativarItem(item)">
                                            <span>{{ textoBotaoAtivar(item) }}</span>
                                            <span v-if="item.ativando"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item text-center">{{ item.nome }}</div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item text-center">{{ item.descricao }}</div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item text-center">{{ formatarData(item.dataCriacao) }}</div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item text-center">{{ formatarData(item.dataAtualizacao) }}</div>
                                </div>
                                <div class="col options m-auto">
                                    <div class="item text-center">
                                        <a class="btn d-block rounded-5 btn-sm btn-dark mb-1"
                                            @click="abrirEdicao(item)">
                                            <span><i class="fa fa-pencil"></i></span>
                                            <span>Alterar</span>
                                        </a>
                                        <a :class="classeBotaoExcluir(item)"
                                            class="btn d-block rounded-5 btn-sm btn-danger" @click="excluirItem(item)"
                                            :disabled="item.excluindo">
                                            <span v-if="item.excluindo"><i class="fa fa-spinner fa-spin fa-fw"></i></span>
                                            <span v-else><i class="fa fa-trash"></i></span>
                                            <span>Excluir</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <alterarCargo :aberto="editar"></alterarCargo>
            </article>
        </section>
        <footer class="form-footer bg-white">
            <Paginacao></Paginacao>
        </footer>
    </div>
</template>

<style scoped>
.placeholder {
    min-width: 100%;
    height: 100%;
    border-radius: 25px !important;
}

.col.options {
    max-width: 200px;
}

.col.id {
    max-width: 50px;
}

.col.activations {
    max-width: 150px;
}

.col.date {
    max-width: 200px;
}
</style>