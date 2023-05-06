<template>
    <div class="container-fluid conteudo-principal">
        <section>
            <article>
                <div class="row m-0">
                    <div class="card p-0 card-register">
                        <div class="card-body d-flex p-3">
                            <div class="col-12 col-lg-4 card me-3 mt-2">
                                <div class="div-melhor-turma">
                                    <h5 class="subtitulo-melhor-turma m-0 p-1">Melhor turma</h5>
                                    <div class="d-flex-wrap div-turma m-2">
                                        <p class="text-secondary mb-2" style="font-size: 20px;">Análise e Desenvolvimento de Sistemas</p>
                                        <div class="div-media-turma">
                                            <p class="text-secondary mb-2 me-2">Média:
                                            <p class="mb-2" style="font-size: 30px;">8,90</p>
                                            </p>
                                        </div>
                                        <div class="div-media-outras-turmas">
                                            <p class="text-secondary">Média de outras turmas</p>
                                            <div style="display: -webkit-inline-box;">
                                                <p class="text-secondary m-0 me-2">Farmácia:
                                                <p class="m-0"><strong>7,74</strong></p>
                                                </p>
                                            </div>
                                            <div style="display: -webkit-inline-box;">
                                                <p class="text-secondary m-0 me-2">Administração:
                                                <p class="m-0"><strong>7,50</strong></p>
                                                </p>
                                            </div>
                                            <div style="display: -webkit-inline-box;">
                                                <p class="text-secondary m-0 me-2">Ciência de dados:
                                                <p class="m-0"><strong>7,28</strong></p>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 card me-3 mt-2">
                                <div>
                                    <h5 class="text-secondary">Pior turma</h5>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 card mt-2">
                                <div>
                                    <h5 class="text-secondary">Principais feedbacks</h5>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-12 card">
                                <div>
                                    <h5 class="text-secondary">Métricas</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <footer class="form-footer bg-white">
        </footer>
    </div>
</template>

<style scoped>
.div-melhor-turma {
    background-color: aliceblue;
    border-radius: 5px;
}

.div-turma {
    justify-content: center;
    align-items: center;
    font-weight: 500;
}

.div-media-turma {
    display: inline-flex;
    align-items: center;
}

.div-media-outras-turmas {
    display: flex;
    flex-direction: column;
}

.text-secondary {
    --bs-text-opacity: 1;
}

.subtitulo-melhor-turma {
    background-color: #68d36b;
    text-align: center;
    color: #fff !important;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
</style>