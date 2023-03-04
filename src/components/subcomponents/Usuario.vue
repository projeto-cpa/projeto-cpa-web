<script>
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
        aoClicarEmFazerAlgo: function () {
            this.fazerAlgo = true;
        }
    },
    computed: {
        nomeCompleto: function () {
            return this.nome + " " + this.sobrenome;
        }
    }
};
</script>

<template>
    <p>Nome: {{ nome }}</p>
    <p>Sobrenome: {{ sobrenome }}</p>
    <p>Nome completo: {{ nomeCompleto }}</p>
    <p v-if="fazerAlgo">Você clicou em fazer algo</p>
    <p v-else>Não clicou em fazer algo</p>
    <button @click="aoClicarEmFazerAlgo" class="btn btn-primary">Fazer algo</button>
</template>