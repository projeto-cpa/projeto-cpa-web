<script>
import Swal from 'sweetalert2';
import Filtro from '../../utils/Filtro.vue';
import Paginacao from '../../utils/Paginacao.vue'
import { Filtros, Requisicao } from '../../../api/listagem/disciplinas.js';
import { RequisicaoDelete } from '../../../api/listagem/DeletarDisciplinas.js';
import { RequisicaoEdite } from '../../../api/listagem/EditarDisciplinas.js';
import { Alteracao } from '../../../api/listagem/disciplinaAtivaDesativa.js';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            Filtros: Filtros,
            recebendo: false,
            resultados: []
        };
    },
    components: {
        'Filtro': Filtro,
        'Paginacao': Paginacao
    },
    mounted: function () {
        this.receberDados()
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
        aoClicarEmAtivar: async function (id) {
            var item = this.resultados[this.buscarIndexPeloIDEmValores(this.resultados, id)];
            var ativo = item.ativo ? false : true;
            var resposta = await Alteracao();
            if (resposta.sucesso){
                this.resultados[this.buscarIndexPeloIDEmValores(this.resultados, id)] = ativo;
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao alterar',
                    text: 'Obteve erro ao alterar',
                    confirmButtonText: 'Entendido'
                }).then(function () {
                    that.$router.push({ path: '/listagem/disciplinas' });
                })
            }
            console.log('resposta',resposta)
            console.log('recuperado', item)
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
        receberDados: async function () {
            var that = this;
            this.recebendo = true;

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })

            var resposta = await Requisicao();
            console.log('olar', resposta);
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
                    that.$router.push({ path: '/listagem/disciplinas' });
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao deletar',
                    text: 'Obteve erro ao deletar',
                    confirmButtonText: 'Entendido'
                }).then(function () {
                    that.$router.push({ path: '/listagem/disciplinas' });
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
                    that.$router.push({ path: '/listagem/disciplinas' });
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao editar',
                    text: 'Obteve erro ao editar',
                    confirmButtonText: 'Entendido'
                }).then(function () {
                    that.$router.push({ path: '/listagem/disciplinas' });
                });
            }
        }
    }
};
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <Filtro :filtros="Filtros"></Filtro>
                <!-- Cabeçalho da listagem -->
                <div class="card bg-light">
                    <div class="card-body">
                        <div class="row m-0">
                            <div class="col id m-auto">
                                <div class="item header text-center"><b>Id.</b></div>
                            </div>
                            <div class="col activations m-auto">
                                <div class="item header text-center"><b>Ativar/Desativar</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Nome da disciplina</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Descrição da disciplina</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Criado em</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Alterado em</b></div>
                            </div>
                            <div class="col options m-auto text-center">
                                <div class="item header text-center"><b>Opções</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="recebendo">
                    <!-- Aqui fica a simulação do carregamento -->
                    <div v-for="index in 5" :key="index" class="card" aria-hidden="true">
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
                </template>
                <template v-else>
                    <!-- Aqui fica o resultado da requisição -->
                    <div v-for="(item, index) in resultados" :key="index" class="card" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0">
                                <div class="col id m-auto">
                                    <div class="item text-center">{{ item.id }}</div>
                                </div>
                                <div class="col activations m-auto">
                                    <div class="item text-center">
                                        <a @click="aoClicarEmAtivar(item.id)" :class="classeBotaoAtivar(item.ativo)"
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
                                    <div class="item text-center">{{ formatarData(item.criadoEm) }}</div>
                                </div>
                                <div class="col date m-auto">
                                    <div class="item text-center">{{ formatarData(item.atualizadoEm) }}</div>
                                </div>
                                <div class="col options m-auto">
                                    <div class="item text-center">
                                        <a href="#" class="btn d-block btn-sm btn-secondary mb-1"
                                            @click="EditarDados">Editar</a>
                                        <a href="#" class="btn d-block btn-sm btn-danger" @click="DeletarDados">Excluir</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <Paginacao></Paginacao>
            </article>
        </section>
        <footer class="form-footer bg-white">
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