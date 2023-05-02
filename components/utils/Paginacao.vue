<script>
import emmiter from '../../helpers/emmiter.js';

export default {
    props: ['estado', 'requisicao', 'retorno'],
    data: function () {
        return {

        };
    },
    computed: {
        quantidadeAtual: function () {
            var pagina = this.estado.pagina === 0 ? 1 : this.estado.pagina + 1;
            var total = pagina * this.estado.quantidade
            return total > this.estado.total ? this.estado.total : total;
        },
        quantidadeTotal: function () {
            return this.estado.total;
        },
        botaoAnteriorDesativado: function () {
            return this.estado.pagina === 0 ? true : false;
        },
        classeBotaoAnterior: function () {
            return this.botaoAnteriorDesativado ? 'disabled' : '';
        },
        botaoProximoDesativado: function () {
            return this.quantidadeAtual >= this.quantidadeTotal ? true : false;
        },
        classeBotaoProximo: function () {
            return this.botaoProximoDesativado ? 'disabled' : '';
        }
    },
    methods: {
        proximaPagina: async function () {
            this.estado.pagina++;

            emmiter.emit('aoIniciarCarregamento', true);

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            });

            var resposta = await this.requisicao(this.estado.pagina, this.estado.quantidade);

            this.retorno(resposta);

            await new Promise(function (solve) {
                setTimeout(function () {
                    solve();
                }, 750);
            });

            this.$nextTick(() => {
                this.$nuxt.$loading.finish()
            });

            emmiter.emit('aoFinalizarCarregamento', false);
        },
        paginaAnterior: async function () {
            this.estado.pagina--;

            emmiter.emit('aoIniciarCarregamento', true);

            this.$nextTick(() => {
                this.$nuxt.$loading.start()
            });

            var resposta = await this.requisicao(this.estado.pagina, this.estado.quantidade);

            this.retorno(resposta);

            await new Promise(function (solve) {
                setTimeout(function () {
                    solve();
                }, 750);
            });

            this.$nextTick(() => {
                this.$nuxt.$loading.finish()
            });

            emmiter.emit('aoFinalizarCarregamento', false);
        }
    },
    mounted: function () {

    }
};
</script>

<template>
    <div class="row justify-content-center">
        <div class="col m-auto d-flex justify-content-start">
<<<<<<< HEAD
            <a href="#" class="btn btn-outline-primary">
                <span><i class="fa fa-arrow-left"></i></span>
                <span>Anterior</span>
            </a>
        </div>
        <div class="col m-auto">
            <div class="text-center">
                <p class="m-0">Exibindo 0 de 0 resultados</p>
            </div>
        </div>
        <div class="col m-auto d-flex justify-content-end">
            <a href="#" class="btn btn-outline-primary">
                <span>Próximo</span>
=======
            <a href="#" :class="classeBotaoAnterior" class="btn btn-secondary rounded-5" @click="paginaAnterior"
                :disabled="botaoAnteriorDesativado">
                <span><i class="fa fa-arrow-left"></i></span>
                <span class="d-none d-md-inline-block">Anterior</span>
            </a>
        </div>
        <div class="col-auto m-auto">
            <div class="text-center">
                <p class="m-0">
                    <span class="d-none d-md-inline-block">Exibindo</span>
                    <span>{{ quantidadeAtual }} de {{ quantidadeTotal }} resultados</span>
                </p>
            </div>
        </div>
        <div class="col m-auto d-flex justify-content-end">
            <a href="#" :class="classeBotaoProximo" class="btn btn-secondary rounded-5" @click="proximaPagina"
                :disabled="botaoProximoDesativado">
                <span class="d-none d-md-inline-block">Próximo</span>
>>>>>>> feature/acesso
                <span><i class="fa fa-arrow-right"></i></span>
            </a>
        </div>
    </div>
</template>