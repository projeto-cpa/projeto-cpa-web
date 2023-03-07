<script>

import * as bootstrap from 'bootstrap';
import * as Popper from "@popperjs/core"

/**
 * Exemplo de subcomponente com dados, metodos e valores computados
 */
export default {
    data: function () {
        return {
            nome: "Lucas",
            sobrenome: "Oliveira",
            fazerAlgo: false
        };
    },
    methods: {
        aoClicarEmEsconderAlgo: function () {
            this.fazerAlgo = this.fazerAlgo ? false : true;
        },
        aoClicarEmExibir: function () {
            var toast = new bootstrap.Toast(this.$refs.toast);
            toast.show();
        }
    },
    computed: {
        nomeCompleto: function () {
            return this.nome + " " + this.sobrenome;
        }
    },
    mounted: function () {
    }
};
</script>

<template>
    <a href="#/about" class="btn btn-dark">About</a>
    <p>Nome: {{ nome }}</p>
    <p>Sobrenome: {{ sobrenome }}</p>
    <p>Nome completo: {{ nomeCompleto }}</p>
    <p v-if="fazerAlgo">Não clicou em esconder algo</p>
    <p v-else>Não clicou em mostrar algo</p>
    <button @click="aoClicarEmEsconderAlgo"
        class="btn btn-primary">{{ fazerAlgo ? 'Esconder algo' : 'Mostrar algo' }}</button>
    <hr>
    <button type="button" class="btn btn-primary" @click="aoClicarEmExibir">Exemplo toast</button>
    <hr>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
            <div class="toast-header">
                <img src="..." class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body"> Hello, world! This is a toast message. </div>
        </div>
    </div>
    <hr>
    <span class="d-inline-block popover-item" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus"
        data-bs-content="Disabled popover">
        <button class="btn btn-primary" type="button" disabled>Disabled button</button>
    </span>
    <hr>
    <a tabindex="0" class="btn btn-lg btn-danger popover-item" role="button" data-bs-toggle="popover"
        data-bs-trigger="focus" data-bs-title="Dismissible popover"
        data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible
        popover</a>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card" aria-hidden="true">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Launch demo modal
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body"> ... </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>