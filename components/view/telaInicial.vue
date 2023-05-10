<template>
    <div class="container-fluid">
        <section>
            <article>
                <div class="row m-0">
                    <div class="card p-0 card-register">
                        <div class="card-body d-flex flex-wrap justify-content-between p-3">
                            <div class="col-12 col-lg-4 card me-3 mt-2">
                                <div class="div-melhor-turma">
                                    <h5 class="subtitulo-melhor-turma m-0 p-1">Melhor curso <i class="fa fa-graduation-cap"
                                            aria-hidden="true"></i></h5>
                                    <div class="div-turma m-3">
                                        <div>
                                            <p class="text-secondary mb-2" style="font-size: 20px;">Análise e
                                                Desenvolvimento de
                                                Sistemas</p>
                                        </div>
                                        <div class="div-media-turma">
                                            <p class="text-secondary mb-2 me-2">Média:
                                            <p class="mb-2" style="font-size: 30px;">8,90</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 card me-3 mt-2" style="height: max-content;">
                                <div class="div-pior-turma">
                                    <h5 class="subtitulo-pior-turma m-0 p-1">Pior curso <i class="fa fa-graduation-cap"
                                            aria-hidden="true"></i></h5>
                                    <div class="div-turma m-3">
                                        <p class="text-secondary mb-2" style="font-size: 20px;">Engenharia da computação</p>
                                        <div class="div-media-turma">
                                            <p class="text-secondary mb-2 me-2">Média:
                                            <p class="mb-2" style="font-size: 30px;">6,87</p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 card me-3 mt-2" style="height: max-content;">
                                <div class="div-principais-feedbacks">
                                    <h5 class="subtitulo-principais-feedbacks m-0 p-1">Principais feedbacks <i
                                            class="fa fa-comments" aria-hidden="true"></i></h5>
                                    <div class="div-feedbacks m-2">
                                        <div>
                                            <p class="text-secondary mb-2" style="font-size: 20px;"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body d-flex">
                            <div class="col-12 card">
                                <div style="border-radius: 5px;">
                                    <h5 class="subtitulo-metricas">Métricas</h5>
                                    <div>
                                        <img src="../../static/foto-métricas.png" style="width: -webkit-fill-available;">
                                    </div>
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
    height: 200px;
}

.div-pior-turma {
    height: 200px;
}

.div-principais-feedbacks {}

.div-turma {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 130px;
    font-weight: 500;
}

.div-feedbacks {
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

.subtitulo-pior-turma {
    background-color: #d46a5c;
    text-align: center;
    color: #fff !important;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.subtitulo-principais-feedbacks {
    background-color: #0d6efd;
    text-align: center;
    color: #fff !important;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.subtitulo-metricas {
    background-color: #c9d400;
    text-align: center;
    color: #fff !important;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
</style>