<script>
import Filtro from '../../../components/utils/Filtro.vue';

export default {
    data: function () {
        return {

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
                <Filtro></Filtro>
            </article>
        </section>
        <footer class="form-footer bg-white">
        </footer>
    </div>
</template>