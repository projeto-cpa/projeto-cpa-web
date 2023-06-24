<script>
// *Script da tela
import scriptTela from '../../../views/listagem/telaListagemAvaliacoes/script';

export default scriptTela;
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article class="listing-page">
                <Filtro></Filtro>
                <!-- Cabeçalho da listagem -->
                <div class="card bg-light mb-4 mb-lg-2 d-none d-xl-block">
                    <div class="card-body">
                        <div class="row m-0">
                            <div class="col id m-auto">
                                <div class="item header text-center"><b>Id.</b></div>
                                <input class="form-check-input" type="checkbox" value="" :checked="selecaoTodos"
                                    @click="selecionarTodos" />
                            </div>
                            <div class="col activations my-auto">
                                <div class="item header text-center"><b>Ativação</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header text-center"><b>Nome da Avaliação</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Data da criação</b></div>
                            </div>
                            <div class="col date m-auto">
                                <div class="item header text-center"><b>Data da alteração</b></div>
                            </div>
                            <div class="col options m-auto text-center">
                                <div class="item header text-center"><b>Opções</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="recebendo">
                    <!-- inicio simulação do carregamento -->
                    <div v-for="index in paginacao.quantidade" :key="index" class="card mb-4 mb-lg-2 card-item"
                        aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0 placeholder-glow">
                                <div
                                    class="col-xl-auto col-12 mb-xl-auto col-md-6 id my-xl-auto mb-2 mb-xl-0 mt-0 mt-xl-auto">
                                    <div class="placeholder"></div>
                                </div>
                                <div
                                    class="col-xl col-12 col-md-6 activations my-xl-auto mx-xl-3 mx-xl-auto mb-2 mb-xl-auto mt-0 mt-xl-auto">
                                    <div class="placeholder"></div>
                                </div>
                                <div class="col-xl col-12 col-md-6 m-xl-auto mb-2 mb-xl-auto">
                                    <div class="placeholder"></div>
                                </div>
                                <div class="col-xl col-12 col-md-6 m-xl-auto mb-2 mb-xl-auto">
                                    <div class="placeholder"></div>
                                </div>
                                <div class="col-xl col-12 col-md-6 date m-xl-auto mb-2 mb-xl-auto">
                                    <div class="placeholder"></div>
                                </div>
                                <div class="col-xl col-12 col-md-6 date m-xl-auto mb-2 mb-xl-auto">
                                    <div class="placeholder"></div>
                                </div>
                                <div class="col-xl col-12 options m-xl-auto mb-2 mb-xl-auto">
                                    <div class="placeholder"></div>
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
                            class="card card-item mb-4 mb-lg-2" aria-hidden="true" data-item="cargo">
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
                                            <div class="item text-center" data-campo="ativo">
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
                                                <div class="title text-center"><b>Nome do cargo</b></div>
                                            </div>
                                            <div class="item text-center" data-campo="nome">{{ item.titulo }}</div>
                                        </div>
                                    </div>
                                    <div class="col-xl col-12 col-md-6 date m-xl-auto mb-2 mb-xl-auto">
                                        <div class="col-box">
                                            <div class="d-block d-xl-none">
                                                <div class="title text-center"><b>Data da criação</b></div>
                                            </div>
                                            <div class="item text-center" data-campo="data-criacao">
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
                                            <div class="item text-center" data-campo="data-alteracao">
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
                <!-- <alteracaoCargo></alteracaoCargo> -->
            </article>
        </section>
        <footer class="form-footer bg-white">
            <Paginacao :estado="paginacao" :requisicao="requisicao" :retorno="retorno"></Paginacao>
        </footer>
        <styleTelaAvaliacoes></styleTelaAvaliacoes>
    </div>
</template>