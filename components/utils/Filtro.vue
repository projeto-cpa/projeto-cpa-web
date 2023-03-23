<script>
export default {
    data: function () {
        return '';
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body card-filter">
            <div class="row m-0">
                <div class="col-5 mb-4">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="" placeholder="Termo de pesquisa">
                        <label for="">Termo de pesquisa</label>
                    </div>
                </div>
                <div class="col-5 mb-4">
                    <div class="form-floating">
                        <select class="form-control" placeholder="Pesquisar em">
                            <option disabled selected>Campo padrão</option>
                            <option>Campo</option>
                        </select>
                        <label for="">Pesquisar em</label>
                    </div>
                </div>
                <div class="col-2 d-flex mb-4">
                    <button class="btn btn-primary w-100">
                        <span>

                        </span>
                        <span>Pesquisar</span>
                    </button>
                </div>
                <div class="col-4">
                    <div class="form-floating">
                        <select class="form-control" placeholder="Usuário">
                            <option disabled selected>Todos</option>
                            <option>Lucas</option>
                            <option>Jorge</option>
                            <option>João</option>
                            <option>Juliano</option>
                            <option>Matheus</option>
                        </select>
                        <label for="">Usuário</label>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-floating">
                        <input type="date" class="form-control" id="" placeholder="Data inicial">
                        <label for="">Data inicial</label>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-floating">
                        <input type="date" class="form-control" id="" placeholder="Data final">
                        <label for="">Data final</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-filter{
    padding-left:4px;
    padding-right:4px;
}
</style>