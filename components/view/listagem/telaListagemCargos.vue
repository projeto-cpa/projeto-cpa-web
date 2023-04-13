<script>
import Swal from 'sweetalert2';
import Filtro from '../../../components/utils/Filtro.vue';
import Paginacao from '../../../components/utils/Paginacao.vue'
import { RequisicaoDelete } from '../../../api/listagem/DeletarCargos.js';
import { Requisicao } from '../../../api/listagem/cargos.js';
import alterarCargo from '../alterar/alterarCargo.vue';
import emmiter from '../../../helpers/emmiter';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            recebendo: false,
            resultados: [],
            editar: false
        };
    },
    methods: {
        textoBotaoAtivar: function (ativo) {
            if (ativo) {
                return 'Desativar';
            } else {
                return 'Ativar';
            }
        },
        classeBotaoAtivar: function (ativo) {
            if (ativo) {
                return 'btn-secondary';
            } else {
                return 'btn-primary';
            }
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
        abrirEdicao: function () {
            emmiter.emit('abrirEdicaoCargo', {});
        },
        receberDados: async function () {
            var that = this;
            this.recebendo = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await Requisicao();
            this.resultados = resposta;

            setTimeout(function () {
                that.recebendo = false;
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                })
            }, 750);
        },
        DeletarDados: async function () {
            var that = this;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await RequisicaoDelete();

            if (resposta.sucesso) {
                Swal.fire({
                        icon: 'success',
                        title: 'Sucesso ao deletar',
                        text: 'Obteve sucesso ao deletar',
                        confirmButtonText: 'Entendido'
                    }).then(function () {
                        that.$router.push({ path: '/listagem/cargos' });
                    });
            } else {
                Swal.fire({
                        icon: 'error',
                        title: 'Erro ao deletar',
                        text: 'Obteve erro ao deletar',
                        confirmButtonText: 'Entendido'
                    }).then(function () {
                        that.$router.push({ path: '/listagem/cargos' });
                    });
            }

            setTimeout(function () {
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                })
            }, 750);
        },
        EditarDados: async function () {
            var that = this;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await RequisicaoEdite();

            if (resposta.sucesso) {
                Swal.fire({
                        icon: 'success',
                        title: 'Sucesso ao editar',
                        text: 'Obteve sucesso ao editar',
                        confirmButtonText: 'Entendido'
                    }).then(function () {
                        that.$router.push({ path: '/listagem/cargos' });
                    });
            } else {
                Swal.fire({
                        icon: 'error',
                        title: 'Erro ao editar',
                        text: 'Obteve erro ao editar',
                        confirmButtonText: 'Entendido'
                    }).then(function () {
                        that.$router.push({ path: '/listagem/cargos' });
                    });
            }

            setTimeout(function () {
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
                            <p class="card-text text-muted">Com problemas? tente remover os filtros ou recarregue a página.</p>
  
                        </div>
                    </div>
                </template>
                <template v-else>
                    <!-- Aqui fica o resultado da requisição -->
                    <div v-for="(item, index) in resultados" :key="index" class="card mb-1" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0">
                                <div class="col id m-auto">
                                    <div class="item text-center">{{ item.id }}</div>
                                </div>
                                <div class="col activations m-auto">
                                    <div class="item text-center">
                                        <a href="#" :class="classeBotaoAtivar(item.ativo)"
                                            class="btn d-block rounded-5 btn-sm">{{ textoBotaoAtivar(item.ativo) }}</a>
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
                                        <a href="#" class="btn d-block btn-sm btn-secondary mb-1"
                                            @click="abrirEdicao">Editar</a>
                                        <a href="#" class="btn d-block btn-sm btn-danger" @click="DeletarDados">Excluir</a>
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