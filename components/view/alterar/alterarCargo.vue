<script>
import emmiter from '../../../helpers/emmiter';

export default {
    data: function () {
        return {
            Offcanvas: null
        };
    },
    methods: {
        abrirCanvas: function () {
            this.Offcanvas.show();
        }
    },
    computed: {
        nomeCompleto: function () {
            return this.nome + ' ' + this.sobrenome;
        }
    },
    mounted: function () {
        emmiter.on('abrirEdicaoCargo', this.abrirCanvas)
        const bootstrap = require('bootstrap')
        this.Offcanvas = new bootstrap.Offcanvas(this.$refs.offcanvas);
    }
}
</script>

<template>
    <div class="offcanvas offcanvas-end" ref="offcanvas" data-bs-backdrop="false" data-bs-scroll="true">
        <div class="offcanvas-header bg-light text-dark">
            <h5 class="offcanvas-title">Alteração de cargo</h5>
            <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa fa-close"></i>
            </button>
        </div>
        <div class="offcanvas-body">Insira aqui seu conteúdo</div>
    </div>
</template>

<style>
.offcanvas {
    top: 60px !important;
    z-index: 99;
    height: calc(100% - 120px) !important;
}

.offcanvas-header{
    height: 60px !important;
}
</style>