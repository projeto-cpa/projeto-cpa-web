<script>
import Filtro from '../../../components/utils/Filtro.vue';
import Paginacao from '../../../components/utils/Paginacao.vue'
import { Filtros, Requisicao } from '../../../api/listagem/cargos.js';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            Filtros: Filtros,
            recebendo: false,
            resultados:[]
        };
    },
    methods: {
        receberDados: async function () {
            var that = this;
            this.recebendo = true;
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            })
            var resposta = await Requisicao();
            this.resultados = resposta.resultados;
            console.log(resposta);
            setTimeout(function () {
                that.recebendo = false;
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                })
            }, 1500);
        }
    },
    components: {
        'Filtro': Filtro,
        'Paginacao': Paginacao
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
                <Filtro :filtros="Filtros"></Filtro>
                <div class="card bg-light">
                    <div class="card-body">
                        <div class="row m-0">
                            <div class="col m-auto" style="max-width: 100px;">
                                <div class="item header text-center"><b>Id.</b></div>
                            </div>
                            <div class="col-3 m-auto">
                                <div class="item header text-center"><b>Ativar/Desativar</b></div>
                            </div>
                            <div class="col-3 m-auto">
                                <div class="item header"><b>Nome do cargo</b></div>
                            </div>
                            <div class="col m-auto">
                                <div class="item header"><b>Descrição do cargo</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <template v-if="recebendo">
                    <div v-for="index in 10" :key="index" class="card" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0 placeholder-glow">
                                <div class="col m-auto" style="max-width: 100px;">
                                    <div class="item placeholder text-center">Id</div>
                                </div>
                                <div class="col-3 m-auto">
                                    <div class="item">
                                        <a href="#" class="btn btn-sm btn-secondary placeholder disabled"></a>
                                    </div>
                                </div>
                                <div class="col-3 m-auto">
                                    <div class="item placeholder">Nome</div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item placeholder">Desc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div v-for="(dado, index) in resultados" :key="index" class="card" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0">
                                <div class="col m-auto" style="max-width: 100px;">
                                    <div class="item text-center">{{ dado.id }}</div>
                                </div>
                                <div class="col-3 m-auto">
                                    <div class="item">
                                        <a href="#" class="btn btn-sm btn-secondary d-block">Ativar</a>
                                    </div>
                                </div>
                                <div class="col-3 m-auto">
                                    <div class="item">{{ dado.nome }}</div>
                                </div>
                                <div class="col m-auto">
                                    <div class="item">{{ dado.descricao }}</div>
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

.btn{
    border-radius: 25px !important;
}
</style>