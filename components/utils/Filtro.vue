<script>
export default {
    props:['filtros'],
    data: function () {
        return {

        };
    },
    mounted: function () {

    }
};
</script>

<template>
    <div class="card mb-4 mb-lg-2 card-filter">
        <div class="card-body">
            <div class="row m-0">
                <div class="col-12 col-lg-8 mb-2 mb-lg-0">
                    <div class="form-floating">
                        <input type="text" class="form-control disabled" id="" placeholder="Termo de pesquisa" disabled>
                        <label for="">Termo de pesquisa</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-floating">
                        <select class="form-control disabled" placeholder="Pesquisar em" disabled>
                            <option disabled selected>Campo padrão</option>
                        </select>
                        <label for="">Pesquisar em</label>
                    </div>
                </div>
                <div class="col-auto m-auto">
                    <button class="btn btn-lg btn-primary w-100 disabled" disabled>
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card-filter{
    box-shadow: 0px 0px 9px var(--bs-gray-400);
}

.card-filter .card-body{
    padding-left:4px;
    padding-right:4px;
}
</style>