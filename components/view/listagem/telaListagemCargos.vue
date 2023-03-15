<script>
import Filtro from '../../../components/utils/Filtro.vue';
import { Filtros, Requisicao } from '../../../api/listagem/cargos.js';

export default {
    loading: {
        continuous: true
    },
    data: function () {
        return {
            Filtros: Filtros,
            recebendo: false
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
            setTimeout(function () {
                that.recebendo = false;
                that.$nextTick(() => {
                    that.$nuxt.$loading.finish()
                })
            }, 10000);
        }
    },
    components: {
        Filtro: Filtro
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
                <template v-if="recebendo">
                    <div v-for="index in 10" :key="index" class="card" aria-hidden="true">
                        <div class="card-body">
                            <div class="row m-0">
                                <div class="col placeholder"></div>
                                <div class="col placeholder"></div>
                                <div class="col placeholder"></div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <p>aaa</p>
                </template>
            </article>
        </section>
        <footer class="form-footer bg-white">
        </footer>
    </div>
</template>