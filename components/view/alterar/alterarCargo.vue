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
    <div class="offcanvas offcanvas-end" ref="offcanvas">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">Sou uma barra lateral</div>
    </div>
</template>

<style>
.offcanvas {
    top: 60px !important;
}
</style>