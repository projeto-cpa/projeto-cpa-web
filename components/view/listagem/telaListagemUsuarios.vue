<script>
import Filtro from '../../../components/utils/Filtro.vue';
import Paginacao from '../../../components/utils/Paginacao.vue'
import { Filtros, Requisicao } from '../../../api/listagem/usuarios.js';

export default {
    data: function(){
        return {
            Filtros: Filtros,
        };
    },
    components: {
        Filtro: Filtro
    }
};
</script>

<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <Filtro :filtros="Filtros"></Filtro>
                <Paginacao></Paginacao>
            </article>
        </section>
        <footer class="form-footer bg-white">
        </footer>
    </div>
</template>